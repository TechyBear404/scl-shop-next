"use server";
import { db } from "~/server/db";
import { messages } from "~/server/db/schema/messages";
import { newMessageSchema } from "~/utils/validations";

// export type NewMessageType = typeof messages.$inferInsert;
export const createMessage = async (formData: unknown) => {
  const validatedData = newMessageSchema.safeParse(formData);
  if (!validatedData.success) {
    throw new Error("Validation Error");
  }
  try {
    const response = await db
      .insert(messages)
      .values(validatedData.data)
      .returning();

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
