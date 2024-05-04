import CreateProductForm from "./createProductForm";

export default function CreateProduct() {
  return (
    <div className="mt-16 rounded-md border border-rose-800">
      <h2 className="bg-rose-950 p-2 text-2xl font-bold text-rose-50">
        Nouveau produit
      </h2>
      <CreateProductForm />
    </div>
  );
}
