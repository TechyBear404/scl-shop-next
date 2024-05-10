"use client";
import { useRef, useState } from "react";
import WaitingButton from "~/_components/admin/waitingButton";
import { type NewMessageType, createMessage } from "~/server/db/requests";

export default function Contact() {
  const [message, setMessage] = useState<NewMessageType>({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const ref = useRef<HTMLFormElement>(null);

  // const handleSubmitClient = async (formData: FormData) => {
  //   const response = await createMessage(formData);

  //   if (response!.status === "success") {
  //     console.log(response);
  //     // success
  //     ref.current!.reset();
  //   } else {
  //     // fail
  //   }
  // };

  return (
    <main id="contactPage" className="mx-auto mt-14 min-h-screen max-w-3xl ">
      <form
        ref={ref}
        action={async (formData: FormData) => {
          const response = await createMessage(formData);

          if (response!.status === "success") {
            console.log(response);
            // success
            ref.current!.reset();
          } else {
            // fail
          }
        }}
        className="mt-10 flex flex-col gap-6 rounded-md bg-white p-6"
      >
        <h1 className="text-3xl">Nous Contacter...</h1>
        <p>
          Afin de pouvoir vous offrir une meilleur qualité de service, vous avez
          la possibilité de communiquer avec notre equipe de clandestins 24/7{" "}
        </p>
        <div className="flex gap-6">
          <div className="grow">
            <label htmlFor="first_name">Prénom</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Votre Prénom"
              className="w-full rounded-md border border-gray-300 p-2"
              value={message?.first_name}
              onChange={(e) => {
                setMessage({ ...message, first_name: e.target.value });
              }}
            />
          </div>
          <div className="grow">
            <label htmlFor="last_name">Nom</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Votre Nom"
              className="w-full rounded-md border border-gray-300 p-2"
              value={message?.last_name}
              onChange={(e) => {
                setMessage({ ...message, last_name: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre Email"
            className="w-full rounded-md border border-gray-300 p-2"
            value={message?.email}
            onChange={(e) => {
              setMessage({ ...message, email: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Sujet de votre message"
            className="w-full rounded-md border border-gray-300 p-2"
            value={message?.subject}
            onChange={(e) => {
              setMessage({ ...message, subject: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Votre Message"
            className="w-full rounded-md border border-gray-300 p-2"
            value={message?.message}
            onChange={(e) => {
              setMessage({ ...message, message: e.target.value });
            }}
          ></textarea>
        </div>
        <div>
          <WaitingButton okText="Envoyer" waitingText="En cours..." />
        </div>
      </form>
    </main>
  );
}
