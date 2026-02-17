import React from 'react';

const App: React.FC = () => {
  const products = [
    { id: 1, name: "Essential Linen Shirt", price: "$120", category: "Tops" },
    { id: 2, name: "Organic Cotton Tee", price: "$45", category: "Tops" },
    { id: 3, name: "Tailored Wool Trouser", price: "$210", category: "Bottoms" },
    { id: 4, name: "Minimalist Trench", price: "$350", category: "Outerwear" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold tracking-widest uppercase">Aura</h1>
        <div className="space-x-8 text-sm uppercase tracking-wider font-medium">
          <a href="#" className="hover:text-gray-500 transition">Shop</a>
          <a href="#" className="hover:text-gray-500 transition">Journal</a>
          <a href="#" className="hover:text-gray-500 transition">About</a>
          <a href="#" className="hover:text-gray-500 transition underline underline-offset-4">Cart (0)</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <p className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-400">Summer 2025</p>
        <h2 className="text-6xl md:text-8xl mb-8 serif italic">Silence is the new loud.</h2>
        <button className="px-10 py-4 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition">
          Discover Collection
        </button>
      </section>

      {/* Product Grid */}
      <section className="px-8 py-20 max-w-7xl mx-auto w-full">
        <h3 className="text-sm uppercase tracking-widest mb-12 font-medium text-gray-400">Featured Staples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-50 mb-4 overflow-hidden flex items-center justify-center text-gray-300 text-xs">
                {/* Simulated Image Placeholder */}
                <div className="group-hover:scale-105 transition-transform duration-700">
                  IMAGE_{product.id}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium">{product.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">{product.category}</p>
                </div>
                <p className="text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
        <p>&copy; 2025 AURA APPAREL. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition">Instagram</a>
          <a href="#" className="hover:text-black transition">Privacy</a>
          <a href="#" className="hover:text-black transition">Shipping</a>
        </div>
      </footer>
    </div>
  );
};

export default App;