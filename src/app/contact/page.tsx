export default function Contact() {
  return (
    <main id="contactPage" className="mx-auto mt-14 min-h-screen max-w-3xl ">
      <form
        action=""
        className="mt-10 flex flex-col gap-6 rounded-md bg-white p-6"
      >
        <h1 className="text-3xl">Nous Contacter...</h1>
        <p>
          Afin de pouvoir vous offrir une meilleur qualité de service, vous avez
          la possibilité de communiquer avec notre equipe de clandestins 24/7{" "}
        </p>
        <div className="flex gap-6">
          <div className="grow">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Votre Prénom"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="grow">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Votre Nom"
              className="w-full rounded-md border border-gray-300 p-2"
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
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Votre Message"
            className="w-full rounded-md border border-gray-300 p-2"
          ></textarea>
        </div>
      </form>
    </main>
  );
}
