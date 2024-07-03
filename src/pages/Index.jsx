import React from "react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-green-100">
        <img src="/placeholder.svg?w-full&h-[400px]" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <h1 className="text-5xl font-bold mt-8">Welcome to Tree World</h1>
        <p className="text-xl mt-4">Discover the beauty and importance of trees</p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-4xl font-bold">About Trees</h2>
        <p className="text-lg mt-4">
          Trees are vital to our ecosystem. They provide oxygen, improve air quality, conserve water, preserve soil, and support wildlife. Trees also offer social, communal, and economic benefits.
        </p>
      </section>

      {/* Types of Trees Section */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-center">Types of Trees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <img src="/placeholder.svg?w-full&h-[200px]" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h3 className="text-2xl font-bold mt-4">Oak</h3>
            <p className="mt-2">Oaks are strong, long-lived trees that are known for their hard wood and beautiful leaves.</p>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg?w-full&h-[200px]" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h3 className="text-2xl font-bold mt-4">Pine</h3>
            <p className="mt-2">Pines are evergreen trees that are known for their needle-like leaves and cones.</p>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg?w-full&h-[200px]" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h3 className="text-2xl font-bold mt-4">Maple</h3>
            <p className="mt-2">Maples are known for their beautiful fall foliage and are a popular choice for landscaping.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea id="message" className="w-full mt-2 p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-800 text-white">
        <p>&copy; 2023 Tree World. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;