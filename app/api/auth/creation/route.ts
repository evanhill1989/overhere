import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserByKindeId } from "@/db/queries/select";
import { createUser } from "@/db/queries/insert";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { InsertPost, InsertUser, postsTable, usersTable } from "@/db/schema";

export async function GET(request: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user, "kindeuser object n creation route");
  const dbUser = await getUserByKindeId(user.id);

  if (user && !dbUser) {
    await createUser({
      kinde_id: user.id,
      name: user.given_name,
      email: user.email,
    });
  }

  return NextResponse.redirect(new URL("/", request.url));
}
