import ReactGithub from "../pages/blogs/ReactGithub";
import gitThumb from "../assets/images/blogs/githubReact/thumbnail.png";

import NodeProject from "../pages/blogs/NodeProject";
import nodeThumb from "../assets/images/blogs/nodejs/thumbnail.png";

import Docker from "../pages/blogs/Docker";
import dockerhumb from "../assets/images/blogs/docker/thumbnail.png";

import Deployment from "../pages/blogs/Deployment";

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
  {
    id: "docker-basics",
    title: "Basics of docker",
    date: "2025-09-29",
    image: dockerhumb,
    component: Docker,
  },
  // {
  //   id: "deployment",
  //   title: "Project deployment",
  //   date: "2025-11-20",
  //   image: dockerhumb,
  //   component: Deployment,
  // },
];
