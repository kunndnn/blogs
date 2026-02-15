import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import { FaCode, FaServer, FaDocker, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const featuredPosts = posts.slice(0, 3);

  const topics = [
    { title: "Frontend", icon: <FaCode />, color: "bg-blue-500", desc: "React, Design, Performance" },
    { title: "Backend", icon: <FaServer />, color: "bg-purple-500", desc: "Node.js, Laravel, Python, APIs, MongoDB, MySQL, Security" },
    { title: "DevOps", icon: <FaDocker />, color: "bg-cyan-500", desc: "Docker, Nginx, CI/CD" },
  ];

  return (
    <div className="bg-background-base">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 space-y-24">

        {/* Featured Posts Section */}
        <section>
          <div className="flex items-end justify-between mb-10 px-2 md:px-0">
            <div>
              <h2 className="text-[10px] md:text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-2">Editor's Choice</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-text-main">Featured Posts</h3>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
              View All Posts <FaArrowRight />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Core Topics Section */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-16 px-4">
            <h2 className="text-[10px] md:text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">Knowledge Pillars</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">Master the Stack</h3>
            <p className="text-text-muted text-base md:text-lg font-medium">
              We focus on the tools that build the modern web. From clean UI to scalable deployments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/30 shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${topic.color} text-white flex items-center justify-center text-xl md:text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-text-main mb-3">{topic.title}</h4>
                <p className="text-sm md:text-base text-text-muted font-medium mb-6">{topic.desc}</p>
                <div className="w-10 h-1 bg-brand-primary/10 group-hover:w-full transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* About & Community Section Overlay */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-8 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border border-white/5"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <FaCode size={200} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-text-main mb-8 leading-tight">
              A space for <span className="text-brand-primary">Developers</span> to grow, learn, and share.
            </h2>
            <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed mb-10">
              This blog is more than just code. It's about the mindset of building, the challenges of scaling, and the joy of creating something new every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="block text-2xl font-bold text-brand-primary">10+</span>
                <span className="text-sm font-semibold text-text-muted uppercase tracking-tighter">Guides</span>
              </div>
              <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="block text-2xl font-bold text-brand-secondary">5k+</span>
                <span className="text-sm font-semibold text-text-muted uppercase tracking-tighter">Readers</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
