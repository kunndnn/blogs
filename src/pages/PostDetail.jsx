import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h2 className="p-6">Post not found!</h2>;

  const BlogComponent = post.component; // get the component
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <BlogComponent /> {/* render the actual blog component */}
      </div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50 cursor-pointer"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
