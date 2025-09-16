// import { useParams } from "react-router-dom";
// import { posts } from "../data/posts";
// import Code from '../components/Code'
// export default function PostDetail() {
//   const { id } = useParams();
//   const post = posts.find((p) => p.id === id);

//   if (!post) return <h2 className="p-6">Post not found!</h2>;

//   return (
//     <article className="prose dark:prose-invert lg:prose-xl mx-auto p-6">
//       <h1>{post.title}</h1>
//       <p className="text-gray-500">{post.date}</p>
//       <p>{post.content}</p>
//       <Code
//         parts={[
//           { type: "text", text: "git clone https://github.com/" },
//           { type: "placeholder", text: "your-username" },
//           { type: "text", text: "/" },
//           { type: "placeholder", text: "your-repo" },
//           { type: "text", text: ".git" },
//         ]}
//       />

//     </article>
//   );
// }
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h2 className="p-6">Post not found!</h2>;

  const BlogComponent = post.component; // get the component

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <BlogComponent /> {/* render the actual blog component */}
    </div>
  );
}
