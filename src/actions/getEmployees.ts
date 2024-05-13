import { db } from "~/server/db";

export const getEmployees = async () => {
  try {
    const response = await db.query.employees.findMany({
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
