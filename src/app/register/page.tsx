"use client";
import { useSession } from "@/contexts/session-context";
import { useEffect } from "react";

export default function Register() {
  const { session, setSession } = useSession();

  function handleSignIn() {
    setSession({
      name: "Claudio",
      role: "ADMIN",
    });
  }

  
  return (

    
    <div>
      <h1>Página Register {session?.name}</h1>
      <button className="border border-red-700 p-4" onClick={handleSignIn}>
        Registrar
      </button>
    </div>


  
  );
}
