"use server";
import { db } from "~/server/db";
export const getMessages = async () => {
  try {
    const response = await db.query.messages.findMany({
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
