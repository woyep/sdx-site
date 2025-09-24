"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const active = path === href;
  return (
    <Link
      href={href}
      className={[
        "px-2 py-1 rounded-md transition",
        active ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700 hover:text-black hover:bg-gray-50",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}