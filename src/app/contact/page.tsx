"use client";
import { useRef, useState } from "react";
import InputForm from "~/app/_components/inputForm";
import WaitingButton from "~/app/admin/_components/waitingButton";
import { createMessage } from "~/actions/createMessage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { type ZodFormattedError, z } from "zod";
import { type MessagesType } from "~/types/types";

type NewMessageSchemaType = z.infer<typeof NewMessageSchema>;

const NewMessageSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(50, { message: "Maximum 50 charactéres" }),
  last_name: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(50, { message: "Maximum 50 charactéres" }),
  email: z.string().email({ message: "Email invalide" }),
  subject: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(50, { message: "Maximum 50 charactéres" }),
  message: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(500, { message: "Maximum 500 charactéres" }),
});

const initFormData: MessagesType = {
  first_name: "",
  last_name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [data, setData] = useState<NewMessageSchemaType>();
  const [errors, setErrors] =
    useState<ZodFormattedError<NewMessageSchemaType>>();
  const ref = useRef<HTMLFormElement>(null);

  const handlecreateMessage = async (formData: FormData) => {
    const newMessage = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const result = NewMessageSchema.safeParse(newMessage);

    if (!result.success) {
      const newErrors = result.error.format();
      setErrors(newErrors);
    } else {
      try {
        await createMessage(formData);
        toast.success("Le message a été envoyé avec succès");
        setErrors(undefined);
        setData({ ...formData, ...initFormData });
      } catch (error) {
        toast.error("Erreur lors de l'envoi du message");
      }
    }
  };

  return (
    <main id="contactPage" className="mx-auto mt-14 min-h-screen max-w-3xl ">
      <form
        ref={ref}
        action={handlecreateMessage}
        className="mt-10 flex flex-col gap-6 rounded-md bg-white p-6"
      >
        <h1 className="text-3xl">Nous Contacter...</h1>
        <p>
          Afin de pouvoir vous offrir une meilleur qualité de service, vous avez
          la possibilité de communiquer avec notre equipe de clandestins 24/7{" "}
        </p>
        <div className="flex gap-6">
          <div className="grow">
            <InputForm
              data={{
                display: "Prénom",
                idName: "first_name",
                type: "text",
                value: data?.first_name,
              }}
              error={errors?.first_name?._errors}
            />
          </div>
          <div className="grow">
            <InputForm
              data={{
                display: "Nom",
                idName: "last_name",
                type: "text",
                value: data?.last_name,
              }}
              error={errors?.last_name?._errors}
            />
          </div>
        </div>
        <div>
          <InputForm
            data={{
              display: "Email",
              idName: "email",
              type: "email",
              value: data?.email,
            }}
            error={errors?.email?._errors}
          />
        </div>
        <div>
          <InputForm
            data={{
              display: "Sujet",
              idName: "subject",
              type: "text",
              value: data?.subject,
            }}
            error={errors?.subject?._errors}
          />
        </div>
        <div>
          <InputForm
            data={{
              display: "Message",
              idName: "message",
              type: "textarea",
              value: data?.message,
            }}
            error={errors?.message?._errors}
          />
        </div>
        <div>
          <WaitingButton okText="Envoyer" waitingText="En cours..." />
        </div>
      </form>
    </main>
  );
}
