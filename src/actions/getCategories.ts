"use server";
import { db } from "~/server/db";

export const getCategories = async () => {
  try {
    const response = await db.query.categories.findMany({
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
