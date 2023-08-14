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
    <div className="row">
      <div className="col-md-6 offset-md-3 ">
        <div className="card">
          <div className="card-header text-center">
            {" "}
            <img src={avatar} alt={email} />
          </div>
          <div className="card-body text-center">
            <h3>
              {id} {first_name} {last_name}
            </h3>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>UserDetails{JSON.stringify(user)}</div>;
}
