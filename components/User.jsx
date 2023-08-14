import Image from "next/image";

export default function User({ user }) {
  const { id, email, avatar, first_name, last_name } = user;
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
}
