import { randomInt } from "crypto";
import Image from "next/image";
import { getEmployees } from "~/server/db/requests";

const getAge = (birthDate: Date) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};
export default async function Team() {
  const employees = await getEmployees();

  if (employees?.status === "success") {
    return (
      <div className="  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-100 via-rose-300 to-rose-100">
        <section className="max-w-4/5 m-auto flex h-screen items-center justify-center ">
          <main className="flex h-3/5 gap-1 ">
            {employees?.data.map((employee) => (
              <div
                key={employee.id}
                className={`group relative flex w-20 grow transform flex-col gap-1 rounded-md shadow-md transition-all duration-500 ease-in-out odd:translate-y-8 even:-translate-y-8 hover:z-20 hover:w-96 hover:translate-y-0 hover:scale-105 hover:shadow-lg`}
              >
                <Image
                  src={employee.imgUrl}
                  alt=""
                  width={500}
                  height={500}
                  className="absolute left-0 top-0 h-full w-full object-cover  transition-all duration-500 ease-in-out group-hover:opacity-100 "
                />
                <div className="flex flex-grow transform flex-col overflow-hidden bg-black/70 p-6 text-rose-50 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                  <p className="grow"></p>
                  <p className="grow font-merienda text-xl">
                    &ldquo;{employee.description}&rdquo;
                  </p>
                  <p className="text-3xl">{employee.first_name}</p>
                  <p>{getAge(employee.birth_date)} ans</p>
                  <p className="text-xs font-semibold uppercase">
                    {employee.job}
                  </p>
                </div>
              </div>
            ))}
          </main>
        </section>
      </div>
    );
  }
}
