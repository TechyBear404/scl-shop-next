import { TextArea } from "./textArea";
import ProductUpdateForm from "./productUpdateForm";

export default function ProductUpdate() {
  // const updateProduct = async (formData: FormData) => {
  //   "use server";
  //   console.log(formData);
  // };
  return (
    <div className="mt-16 border border-rose-800">
      <h2 className="bg-rose-950 p-2 text-2xl font-bold text-rose-50">
        Mise à jour du produits
      </h2>
      <ProductUpdateForm />
    </div>
  );
}
