export default function Home() {

  return (
    <div className="p-6">
      {/* Hero section */}
      <h1 className="text-3xl font-bold">Welcome to My Blogs site</h1>
      <p className="mt-2 text-gray-700">
        A place where I share my thoughts and knowledge with you.
      </p>

      {/* About section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold">About This Blog</h2>
        <p className="mt-2 text-gray-600">
          I write about web development, programming, and new technologies.
          Whether you're just starting out or an experienced dev, you'll find
          tips, tutorials, and deep dives here.
        </p>
      </section>
    </div>
  );
}
