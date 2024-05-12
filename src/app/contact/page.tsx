"use client";
import { useRef, useState } from "react";
import InputForm from "~/app/_components/inputForm";
import WaitingButton from "~/app/admin/_components/waitingButton";
import { type NewMessageType, createMessage } from "~/server/db/requests";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const blankMessage: NewMessageType = {
  first_name: "",
  last_name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [message, setMessage] = useState<NewMessageType>(blankMessage);
  const ref = useRef<HTMLFormElement>(null);

  const handlecreateMessage = async (formData: FormData) => {
    try {
      await createMessage(formData);
      toast.success("Le message a été envoyé avec succès");
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message");
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
                value: message.first_name,
              }}
            />
          </div>
          <div className="grow">
            <InputForm
              data={{
                display: "Nom",
                idName: "last_name",
                type: "text",
                value: message.last_name,
              }}
            />
          </div>
        </div>
        <div>
          <InputForm
            data={{
              display: "Email",
              idName: "email",
              type: "email",
              value: message.email,
            }}
          />
        </div>
        <div>
          <InputForm
            data={{
              display: "Sujet",
              idName: "subject",
              type: "text",
              value: message.subject,
            }}
          />
        </div>
        <div>
          <InputForm
            data={{
              display: "Message",
              idName: "message",
              type: "textarea",
              value: message.message,
            }}
          />
        </div>
        <div>
          <WaitingButton okText="Envoyer" waitingText="En cours..." />
        </div>
      </form>
    </main>
  );
}
