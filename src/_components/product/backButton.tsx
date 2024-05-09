"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <button
      className="flex items-center gap-2 text-rose-900/70 transition duration-200 ease-in-out hover:-translate-x-1 hover:text-rose-900/100"
      onClick={handleBackClick}
    >
      <FaArrowLeft />
      <div>Revenir en arriere</div>
    </button>
  );
}
