import React, { useState } from "react";

const Share = () => {


    
        const blogs = [
            {
              id: 1,
              title: "Mastering React in 2025",
              desc:
                `Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps. Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps. 
                Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.
                Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.
                Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.`,
              image:
                "https://sp.yimg.com/ib/th?id=OIP.zMCl4rV-Kc9-EFRD-0RiRgHaEM&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
            },
            {
              id: 2,
              title: "Design with Tailwind CSS",
              desc:
                "Unlock the power of utility-first design. Learn how to rapidly prototype, build responsive UIs, and design consistently across your app.",
              image:
                "https://sp.yimg.com/ib/th?id=OIP.J6cEtW1jTUu2YF7o21McTwHaE7&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
            },
            {
              id: 3,
              title: "Full-Stack Magic with Next.js",
              desc:
                "Get hands-on with building full-stack apps using API routes, server-side rendering, and seamless routing in Next.js.",
              image:
                "https://sp.yimg.com/ib/th?id=OIP.KRM4Ftw-Qew4fYcxA7C7OgHaE7&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
            },
            {
              id: 4,
              title: "JavaScript Essentials for 2025",
              desc:
                "Modern JS concepts you can't ignore in 2025 — ESNext features, async mastery, and how to write clean, scalable code.",
              image:
                "https://sp.yimg.com/ib/th?id=OIP.jnYiZ9QrTl1iupAtXE3DXQHaE7&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
            },
            {
              id: 5,
              title: "UI/UX Tips for Developers",
              desc:
                "Improve the user experience of your applications with simple and effective design principles tailored for developers.",
              image:
                "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
            },
            {
              id: 6,
              title: "AI + Frontend: The Future",
              desc:
                "Discover how artificial intelligence is revolutionizing frontend workflows with smart components, recommendations, and tools.",
              image:
                "https://tse1.mm.bing.net/th?id=OIP.-0zA7v2Gc7SEqSpiyM5ZmwHaDK&pid=Api&P=0&h=180",
            },
            {
                     id: 1,
                     title: "Mastering React in 2025",
                     desc:
                       "Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.",
                     image:
                     "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
                  },
                   {
                     id: 2,
                     title: "Design with Tailwind CSS",
                     desc:
                       "Unlock the power of utility-first design. Learn how to rapidly prototype, build responsive UIs, and design consistently across your app.",
                     image:
                       "https://tse4.mm.bing.net/th?id=OIP.MNndCdi_PnXQdTCOoMLM9QHaD4&pid=Api&P=0&h=180",
                   },
                  {
                     id: 3,
                    title: "Full-Stack Magic with Next.js",
                    desc:
                       "Get hands-on with building full-stack apps using API routes, server-side rendering, and seamless routing in Next.js.",
                    image:
                      "https://up.yimg.com/ib/th?id=OIP.W8HqDQV05Ila8bJ0TWWrzgHaE2&pid=Api&rs=1&c=1&qlt=95&w=183&h=120",
                  },
                  {
                    id: 4,
                    title: "JavaScript Essentials for 2025",
                    desc:
                      "Modern JS concepts you can't ignore in 2025 — ESNext features, async mastery, and how to write clean, scalable code.",
                    image:
                       "https://sp.yimg.com/ib/th?id=OIP.OiplnTFAoOIABMEW3ylKuwHaEK&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
                  },
                  {
                    id: 5,
                    title: "UI/UX Tips for Developers",
                    desc:
                      "Improve the user experience of your applications with simple and effective design principles tailored for developers.",
                    image:
                      "https://tse1.mm.bing.net/th?id=OIP.Ssrb2xTy0S1lI6KWj21glwHaE7&pid=Api&P=0&h=180",
                  },
                  {
                    id: 6,
                    title: "AI + Frontend: The Future",
                    desc:
                      "Discover how artificial intelligence is revolutionizing frontend workflows with smart components, recommendations, and tools.",
                    image:
                      "https://tse1.mm.bing.net/th?id=OIP.-0zA7v2Gc7SEqSpiyM5ZmwHaDK&pid=Api&P=0&h=180",
                  },
                  {
                    id: 1,
                    title: "Mastering React in 2025",
                    desc:
                      "Explore the future of frontend development with cutting-edge React features, performance optimization, and best practices for scalable apps.",
                    image:
                      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
                  },
                  {
                    id: 2,
                    title: "Design with Tailwind CSS",
                    desc:
                      "Unlock the power of utility-first design. Learn how to rapidly prototype, build responsive UIs, and design consistently across your app.",
                    image:
                      "https://tse4.mm.bing.net/th?id=OIP.MNndCdi_PnXQdTCOoMLM9QHaD4&pid=Api&P=0&h=180",
                  },
                  {
                    id: 3,
                    title: "Full-Stack Magic with Next.js",
                    desc:
                      "Get hands-on with building full-stack apps using API routes, server-side rendering, and seamless routing in Next.js.",
                    image:
                      "https://up.yimg.com/ib/th?id=OIP.W8HqDQV05Ila8bJ0TWWrzgHaE2&pid=Api&rs=1&c=1&qlt=95&w=183&h=120",
                  },
                  {
                    id: 4,
                    title: "JavaScript Essentials for 2025",
                    desc:
                      "Modern JS concepts you can't ignore in 2025 — ESNext features, async mastery, and how to write clean, scalable code.",
                    image:
                      "https://sp.yimg.com/ib/th?id=OIP.OiplnTFAoOIABMEW3ylKuwHaEK&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
                  },
                  {
                    id: 5,
                    title: "UI/UX Tips for Developers",
                    desc:
                      "Improve the user experience of your applications with simple and effective design principles tailored for developers.",
                    image:
                      "https://tse1.mm.bing.net/th?id=OIP.Ssrb2xTy0S1lI6KWj21glwHaE7&pid=Api&P=0&h=180",
                  },
                  {
                    id: 6,
                    title: "AI + Frontend: The Future",
                    desc:
                      "Discover how artificial intelligence is revolutionizing frontend workflows with smart components, recommendations, and tools.",
                    image:
                      "https://tse1.mm.bing.net/th?id=OIP.-0zA7v2Gc7SEqSpiyM5ZmwHaDK&pid=Api&P=0&h=180",
                  },
          ];
        
          const [activeId, setActiveId] = useState(null);
          const [copied, setCopied] = useState(false);
          const [descText, setDescText] = useState("");
        
          const activeBlog = blogs.find((blog) => blog.id === activeId);
        
          const handleCopy = () => {
            if (!activeBlog) return;
            const textToCopy = `${activeBlog.title}\n\n${descText}`;
            navigator.clipboard.writeText(textToCopy).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            });
          };
        
          const handleOpenBlog = (id) => {
            const blog = blogs.find((b) => b.id === id);
            if (blog) {
              setActiveId(id);
              setDescText(blog.desc);
            }
          };
        

    return (
        <div>
             <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6 relative">
      <h1 className="text-4xl font-bold text-center mb-10">🚀 Blog Highlights</h1>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${
          activeId ? "blur-sm" : ""
        }`}
      >
        {blogs.map(({ id, title, desc, image }) => (
          <div
            key={id}
            onClick={() => handleOpenBlog(id)}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-[1.03]"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {activeBlog && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={() => setActiveId(null)}
          />
          <div className="fixed top-1/2 left-1/2 z-50 w-[90%] md:w-[700px] max-w-full h-[90%] bg-white rounded-2xl shadow-2xl transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img
              src={activeBlog.image}
              alt={activeBlog.title}
              className="w-full h-2/4 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-2/4 relative">
              <div className="overflow-y-auto max-h-48 pr-2 scroll-smooth">
                <h2 className="text-2xl font-bold mb-2">{activeBlog.title}</h2>
                <textarea
                  value={descText}
                  onChange={(e) => setDescText(e.target.value)}
                  className="w-full p-3 border rounded-lg resize-none text-gray-800 text-sm h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={handleCopy}
                  className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  📋 Copy
                </button>
                {copied && (
                  <span className="text-green-600 text-sm">Copied!</span>
                )}
                <button
                  onClick={() => setActiveId(null)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
        </div>
    );
}

export default Share;
