// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const PostDetail = lazy(() => import('./pages/PostDetail'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}
