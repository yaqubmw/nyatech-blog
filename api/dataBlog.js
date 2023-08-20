export async function fetchBlogPosts() {
  const res = await fetch("https://dummyapi.online/api/blogposts");
  return res.json();
}
