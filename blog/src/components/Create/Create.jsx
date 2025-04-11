


import React, { useState } from 'react';

const Create = () => {


    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: '', content: '', imageUrl: '' });
    const [editingId, setEditingId] = useState(null);
    const [editContent, setEditContent] = useState({ title: '', content: '', imageUrl: '' });
  
    // CREATE
    const handleCreate = () => {
      if (!newBlog.title || !newBlog.content) return;
      const blog = {
        id: Date.now(),
        title: newBlog.title,
        content: newBlog.content,
        imageUrl: newBlog.imageUrl,
      };
      setBlogs([blog, ...blogs]); // Show newest first
      setNewBlog({ title: '', content: '', imageUrl: '' });
    };
  
    // DELETE
    const handleDelete = (id) => {
      const updated = blogs.filter((blog) => blog.id !== id);
      setBlogs(updated);
    };
  
    // UPDATE
    const handleUpdate = (id) => {
      const updatedBlogs = blogs.map((blog) =>
        blog.id === id ? { ...blog, ...editContent } : blog
      );
      setBlogs(updatedBlogs);
      setEditingId(null);
      setEditContent({ title: '', content: '', imageUrl: '' });
    };

    return (
        <div>
  <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Create New Blog</h2>
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Title"
        value={newBlog.title}
        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        value={newBlog.content}
        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Image URL"
        value={newBlog.imageUrl}
        onChange={(e) => setNewBlog({ ...newBlog, imageUrl: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
        Create
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">All Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 -* rounded shadow-md bg-white">
            {editingId === blog.id ? (
              <>
                <input
                  className="border p-2 w-full mb-2"
                  type="text"
                  value={editContent.title}
                  onChange={(e) => setEditContent({ ...editContent, title: e.target.value })}
                />
                <textarea
                  className="border p-2 w-full mb-2"
                  value={editContent.content}
                  onChange={(e) => setEditContent({ ...editContent, content: e.target.value })}
                />
                <input
                  className="border p-2 w-full mb-2"
                  type="text"
                  placeholder="Image URL"
                  value={editContent.imageUrl}
                  onChange={(e) => setEditContent({ ...editContent, imageUrl: e.target.value })}
                />
                <button
                  className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                  onClick={() => handleUpdate(blog.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-1 rounded"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt="Blog"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                )}
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p>{blog.content}</p>
                <div className="mt-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => {
                      setEditingId(blog.id);
                      setEditContent({
                        title: blog.title,
                        content: blog.content,
                        imageUrl: blog.imageUrl || '',
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    );
}

export default Create;


