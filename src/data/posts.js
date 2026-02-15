import ReactGithub from "../pages/blogs/ReactGithub";
import gitThumb from "../assets/images/blogs/githubReact/thumbnail.png";

import NodeProject from "../pages/blogs/NodeProject";
import nodeThumb from "../assets/images/blogs/nodejs/thumbnail.png";

import Docker from "../pages/blogs/Docker";
import dockerhub from "../assets/images/blogs/docker/thumbnail.png";

import Deployment from "../pages/blogs/Deployment";
import deploy from '../assets/images/blogs/deploy/thumbnail.png';

export const posts = [
  {
    id: "deployment",
    title: "Project deployment",
    date: "2026-02-15",
    image: deploy,
    component: Deployment,
  },
  {
    id: "docker-basics",
    title: "Basics of docker",
    date: "2025-09-29",
    image: dockerhub,
    component: Docker,
  },
  {
    id: "node-js-project-structure",
    title: "Node.js project structure",
    date: "2025-09-22",
    image: nodeThumb,
    component: NodeProject,
  },
  {
    id: "host-react-app-with-github",
    title: "Host react web app with github",
    date: "2025-09-03",
    image: gitThumb,
    component: ReactGithub,
  },
];
