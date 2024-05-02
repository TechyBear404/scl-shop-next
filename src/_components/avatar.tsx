import Image from "next/image";
import type { DefaultSession } from "next-auth";
import { FaUser } from "react-icons/fa";

export default function Avatar({ session }: { session: DefaultSession }) {
  return (
    <figure className="overflow-hidden rounded-full border-2 border-white">
      {session ? (
        <Image
          src={session.user!.image!}
          alt={session.user!.name!}
          title={session.user!.name!}
          width={32}
          height={32}
        />
      ) : (
        <span className="">
          <FaUser title="avatar" className="h-[40px] w-[40px]" />
        </span>
      )}
    </figure>
  );
}
