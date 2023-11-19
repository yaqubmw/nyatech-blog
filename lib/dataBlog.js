export async function fetchBlogPosts() {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  const data = await res.json();

  // Log the data to see its structure
  // console.log(data);

  return data;
}

export async function fetchBlogPostsHero() {
  const res = await fetch("https://dummyjson.com/posts?limit=6");

  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  const data = await res.json();

  // Log the data to see its structure
  // console.log(data);

  return data;
}