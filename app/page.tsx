import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <LoginLink>login</LoginLink>
      <LogoutLink>logout</LogoutLink>
    </div>
  );
}
