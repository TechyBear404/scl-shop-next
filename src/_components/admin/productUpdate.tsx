export default function ProductUpdate() {
  return (
    <div className="col-span-2 m-auto mt-16 border border-rose-800">
      <h2 className="bg-rose-950 p-2 text-2xl font-bold text-rose-50">
        Update
      </h2>
      <form className="flex flex-col p-2">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-rose-800"
        />
        <label htmlFor="catchPhrase">Phrase d&apos;accroche</label>
        <input
          type="text"
          id="catchPhrase"
          name="catchPhrase"
          className="border border-rose-800"
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          name="desc"
          className="border border-rose-800"
        />
        <label htmlFor="tips">Conseils</label>
        <input
          type="text"
          id="tips"
          name="tips"
          className="border border-rose-800"
        />
        <label htmlFor="imgUrl">Image</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          className="border border-rose-800"
        />
        <button
          type="submit"
          className="mt-10 transform border border-green-800 bg-green-800 text-green-50 transition duration-500 ease-in-out hover:scale-105 hover:bg-green-500 hover:duration-200"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
