import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Blog() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Latest Posts
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
