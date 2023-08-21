export async function fetchAuthor({ authorId }) {
  const res = await fetch(`https://dummyjson.com/users/${authorId}`);

  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  const data = await res.json();

  // Log the data to see its structure
  // console.log(data);

  return data;
}
