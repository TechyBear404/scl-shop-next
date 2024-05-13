"use server";
import { db } from "~/server/db";
import { messages } from "~/server/db/schema/messages";

export type NewMessageType = typeof messages.$inferInsert;
export const createMessage = async (formData: FormData) => {
  const newMessage: NewMessageType = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  try {
    const response = await db.insert(messages).values(newMessage).returning();

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
