import { useFormStatus } from "react-dom";

export default function WaitingButton({
  okText,
  waitingText,
}: {
  okText: string;
  waitingText: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="mt-8 rounded bg-rose-800 px-4 py-2 font-bold text-white"
    >
      {pending ? waitingText : okText}
    </button>
  );
}
