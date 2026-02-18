
import React, { useState, useEffect } from 'react';

// VULNERABILITY: Hardcoded Secret (SonarQube should catch this)
const INTERNAL_API_KEY = "AKIA-DUMMY-KEY-12345-FOR-TESTING-PURPOSES";

// DUPLICATION: Exactly the same as formatProductPriceBelow
const formatCurrencyDisplay = (price: string) => {
  const currency = "$";
  console.log("Formatting price..."); // BUG: Console log in production
  return currency + price.replace('$', '');
};

// DUPLICATION: SonarQube will flag this identical block
const formatProductPriceBelow = (price: string) => {
  const currency = "$";
  console.log("Formatting price...");
  return currency + price.replace('$', '');
};

const App: React.FC = () => {
  // CODE SMELL: Unused variable
  const [unusedState, setUnusedState] = useState(null);
  
  const products = [
    { id: 1, name: "Essential Linen Shirt", price: "$120", category: "Tops" },
    { id: 2, name: "Organic Cotton Tee", price: "$45", category: "Tops" },
    { id: 3, name: "Tailored Wool Trouser", price: "$210", category: "Bottoms" },
    { id: 4, name: "Minimalist Trench", price: "$350", category: "Outerwear" }
  ];

  // SECURITY: Potential XSS via dangerouslySetInnerHTML
  const brandMission = "<i>Defined by the absence of noise.</i>";

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-8 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold tracking-[0.3em] uppercase">Aura</h1>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:opacity-50 transition-opacity duration-300">Shop</a>
          <a href="#" className="hover:opacity-50 transition-opacity duration-300">Journal</a>
          <a href="#" className="hover:opacity-50 transition-opacity duration-300">About</a>
          <a href="#" className="hover:opacity-50 transition-opacity duration-300 border-b border-black pb-1">Cart (0)</a>
        </div>
        <div className="md:hidden text-[10px] tracking-widest font-bold">MENU</div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-6 text-gray-400">Est. 2025 — Collection One</p>
        <h2 className="text-5xl md:text-8xl mb-10 serif italic font-light max-w-4xl leading-tight">
          Silence is the new loud.
        </h2>
        {/* VULNERABILITY: Dangerously Set Inner HTML */}
        <div 
          className="text-gray-500 mb-8 uppercase tracking-widest text-xs"
          dangerouslySetInnerHTML={{ __html: brandMission }} 
        />
        <button className="group relative px-12 py-5 overflow-hidden border border-black text-black text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors duration-500">
          <span className="relative z-10">Discover Collection</span>
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </section>

      {/* Product Grid */}
      <section className="px-8 py-24 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-4">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900">Featured Staples</h3>
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#f7f7f7] mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-gray-300 group-hover:opacity-0 transition-opacity duration-500 uppercase">
                  Product Preview
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start space-x-4">
                <div className="space-y-1">
                  <h4 className="text-[11px] font-medium tracking-wide uppercase">{product.name}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{product.category}</p>
                </div>
                {/* Using duplicated logic here */}
                <p className="text-[11px] font-light">{formatCurrencyDisplay(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-16 px-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.25em] text-gray-400 gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h1 className="text-black font-bold tracking-[0.3em] text-xs mb-2">AURA</h1>
          <p>&copy; 2025 AURA APPAREL. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Shipping</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
