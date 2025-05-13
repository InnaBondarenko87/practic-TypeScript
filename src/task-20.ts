interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

import axios from "axios";

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const getPosts = async () => {
  const posts = await fetchPosts();
  posts.forEach((post) => {
    console.log(`Post ID: ${post.id}, Title: ${post.title}`);
  });
};

getPosts();
