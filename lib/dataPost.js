export async function fetchPost({ postId }) {
  const res = await fetch(`https://dummyjson.com/posts/${postId}`);

  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  const data = await res.json();

  // Log the data to see its structure
  // console.log(data);

  return data;
}
