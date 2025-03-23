"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const blogs = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    desc: `This is a short description of blog post ${i + 1}. Learn more about this topic and explore new insights.`,
    img: `/blog${(i % 3) + 1}.jpg`,
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">My Blog</h1>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white p-10 text-center">
        <h2 className="text-3xl font-bold">Welcome to Our Blog</h2>
        <p className="mt-2">Stay updated with the latest trends and insights.</p>
      </header>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {/* Blog Posts */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {blogs.map((blog) => (
              <motion.div key={blog.id} className="bg-white p-4 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
                <h4 className="text-lg font-bold mt-2">{blog.title}</h4>
                <p className="text-gray-600">{blog.desc}</p>
                <Link href={`/blog/${blog.id}`} className="text-blue-600 mt-2 block">Read More</Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Categories</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-blue-600 cursor-pointer hover:underline">Technology</li>
            <li className="text-blue-600 cursor-pointer hover:underline">Health</li>
            <li className="text-blue-600 cursor-pointer hover:underline">Lifestyle</li>
            <li className="text-blue-600 cursor-pointer hover:underline">Education</li>
            <li className="text-blue-600 cursor-pointer hover:underline">Business</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">Recent Posts</h3>
          <ul className="mt-2 space-y-2">
            {blogs.slice(0, 5).map((blog) => (
              <li key={blog.id} className="text-blue-600 cursor-pointer hover:underline">{blog.title}</li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Additional Content */}
      <section className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-semibold text-gray-800">More Articles</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {blogs.map((blog) => (
            <motion.div key={blog.id} className="bg-white p-4 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
              <h4 className="text-lg font-bold mt-2">{blog.title}</h4>
              <p className="text-gray-600">{blog.desc}</p>
              <Link href={`/blog/${blog.id}`} className="text-blue-600 mt-2 block">Read More</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
