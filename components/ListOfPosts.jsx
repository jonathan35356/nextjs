import React from "react";
import LikeButton from "../app/posts/LikeButton";

export default async function ListOfPosts({ posts }) {
  console.log(posts);

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h2 style={{ color: "#09f" }}>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton key={post.id} />
        </article>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await respuesta.json();
  return {
    props: {
      posts,
    },
  };
}
