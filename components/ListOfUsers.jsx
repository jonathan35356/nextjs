import React from "react";
import Link from "next/link";
import User from "./User";

export const metadata = {
  title: "Users - Lists",
};

export default async function ListOfUsers() {
  const users = await getPosts();

  return (
    <>
      <article>
        {users?.slice(0, 5).map((user) => (
          <User user={user} />
        ))}
      </article>
    </>
  );
}

export async function getPosts() {
  const respuesta = await fetch("https://reqres.in/api/users", {
    cache: "no-store",
  });
  const data = await respuesta.json();
  return data.data;
}
