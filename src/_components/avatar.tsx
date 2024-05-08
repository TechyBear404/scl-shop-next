import Image from "next/image";
import type { DefaultSession } from "next-auth";
import { FaUser } from "react-icons/fa";

export default function Avatar({ session }: { session: DefaultSession }) {
  return (
    <figure className="h-9 w-9 overflow-hidden rounded-full border-2 border-white">
      {session ? (
        <Image
          src={session.user!.image!}
          alt={session.user!.name!}
          title={session.user!.name!}
          width={50}
          height={50}
        />
      ) : (
        <span className="">
          <FaUser title="avatar" className="h-full w-full" />
        </span>
      )}
    </figure>
  );
}
