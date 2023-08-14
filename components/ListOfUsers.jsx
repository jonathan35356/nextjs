import React from "react";
import Link from "next/link";
import User from "./User";

export const metadata = {
  title: "Users - Lists",
};

export default async function ListOfUsers() {
  const users = await getPosts();

  return (
    <article>
      <h1>Index page</h1>
      <ul className="list-group">
        {users?.map((user) => (
          <User user={user} />
        ))}
      </ul>
    </article>
  );
}

export async function getPosts() {
  const respuesta = await fetch("https://reqres.in/api/users", {
    cache: "no-store",
  });
  const data = await respuesta.json();
  return data.data;
}
