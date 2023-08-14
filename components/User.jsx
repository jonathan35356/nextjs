import Image from "next/image";

export default function User({ user }) {
  const { id, email, avatar, first_name, last_name } = user;
  return (
    <li key={user.id}>
      <div>
        <h5>{id}</h5>
        <p>{email}</p>
        <p>{first_name}</p>
        <p>{last_name}</p>
      </div>
      <img src={avatar} alt={email} />
    </li>
  );
}
