import React from "react";
import LikeButton from "../app/posts/LikeButton";

export default async function ListOfPosts() {
  const posts = await getPosts();

  return (
    <>
      {posts?.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h2 style={{ color: "#09f" }}>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton key={post.id} />
        </article>
      ))}
    </>
  );
}

export async function getPosts() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await respuesta.json();
  return posts;
}
