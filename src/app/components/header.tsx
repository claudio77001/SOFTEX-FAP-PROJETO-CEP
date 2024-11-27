"use client";
import { useSession } from "@/contexts/session-context";
import Link from "next/link";

export function Header() {
  const { session } = useSession();

  return (
    <header className=" border-black py-5 flex flex-col gap-2">
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/">Página Home</Link>
          </li>
          <li>
            <Link href="/register">Página Register</Link>
          </li>
          <li>
            <Link href="/sign-in">Página SignIn</Link>
          </li>
        </ul>
      </nav>
      <span>{session?.name}</span>

      <div className="bg-red-400 md:hidden">Menu</div>
    </header>
  );
}
