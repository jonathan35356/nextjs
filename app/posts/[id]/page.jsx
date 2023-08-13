export default function Post({ params }) {
  const { id } = params;
  return (
    <main>
      <h1>Posts individuales {id}</h1>
    </main>
  );
}
