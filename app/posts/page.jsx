import ListOfUsers from "@/components/ListOfUsers";

export const metadata = {
  title: "List of users",
};

export default async function PostsPage() {
  return (
    <section>
      <ListOfUsers />
    </section>
  );
}
