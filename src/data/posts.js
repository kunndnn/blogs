import ReactGithub from "../pages/blogs/ReactGithub";
import gitThumb from "../assets/images/blogs/githubReact/thumbnail.png";
import nodeThumb from "../assets/images/blogs/nodejs/thumbnail.png";

import NodeProject from "../pages/blogs/NodeProject";

export const posts = [
  {
    id: "host-react-app-with-github",
    title: "Host react web app with github",
    date: "2025-09-03",
    image: gitThumb,
    component: ReactGithub,
  },
  {
    id: "node-js-project-structure",
    title: "Node.js project structure",
    date: "2025-09-22",
    image: nodeThumb,
    component: NodeProject,
  },
];
