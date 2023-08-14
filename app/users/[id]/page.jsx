import React from "react";

export async function getUserById(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await response.json();
  return user.data;
}

export default async function UserDetails({ params }) {
  const user = await getUserById(params.id);
  const { id, email, first_name, last_name, avatar } = user;
  return (
    <li
      key={user.id}
      className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
    >
      <div>
        <h5>{id}</h5>
        <p>{email}</p>
        <p>{first_name}</p>
        <p>{last_name}</p>
      </div>
      <img src={avatar} alt={email} style={{ borderRadius: "50%" }} />
    </li>
  );

  return <div>UserDetails{JSON.stringify(user)}</div>;
}
