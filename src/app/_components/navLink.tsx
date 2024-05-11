"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
  link,
}: {
  link: { href: string; name: string };
}) {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  return (
    <Link
      href={link.href}
      className={`${isActive(link.href) ? "scale-105 font-extrabold " : ""} transition duration-200 ease-in-out hover:-translate-y-1`}
    >
      {link.name}
    </Link>
  );
}
