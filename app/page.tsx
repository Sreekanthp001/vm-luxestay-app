"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Users, Search, Heart, Menu, ArrowRight } from 'lucide-react';

export default function LuxeStay() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Villas', 'Penthouses', 'Private Islands', 'Chateaus'];

  const stays = [
    {
      id: 1,
      title: "Azure Horizon Villa",
      location: "Maldives",
      price: "$1,200",
      rating: "4.98",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Golden Desert Oasis",
      location: "Dubai, UAE",
      price: "$2,850",
      rating: "5.0",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "The Glass Penthouse",
      location: "Manhattan, NY",
      price: "$3,400",
      rating: "4.95",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Header & Navigation */}
      <nav className="p-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-serif font-bold tracking-widest uppercase text-[#1a1a1a]">LuxeStay</h1>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500">
          <a href="#" className="text-black">Experience</a>
          <a href="#">Properties</a>
          <a href="#">Concierge</a>
        </div>
        <Menu className="md:hidden" size={24} />
        <button className="hidden md:block px-6 py-2 border border-black text-[10px] uppercase font-bold hover:bg-black hover:text-white transition-all">
          Book a Consultation
        </button>
      </nav>

      {/* 2. Refined Premier Search Bar (Floating Pill Design) */}
<section className="px-6 md:px-12 -mt-8 relative z-20 max-w-5xl mx-auto">
  <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-2 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center">
    
    {/* Destination Section */}
    <div className="flex-[1.5] flex items-center gap-4 px-8 py-3 group cursor-pointer hover:bg-zinc-50/50 rounded-full transition-all">
      <div className="p-2.5 bg-[#c5a059]/10 rounded-full text-[#c5a059]">
        <MapPin size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-black tracking-widest text-[#c5a059]">Location</span>
        <input 
          type="text" 
          placeholder="Where are you going?" 
          className="text-sm font-semibold bg-transparent border-none outline-none placeholder:text-zinc-400 w-full" 
        />
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block h-10 w-px bg-zinc-200/60" />

    {/* Check-In Section */}
    <div className="hidden md:flex flex-1 items-center gap-4 px-8 py-3 group cursor-pointer hover:bg-zinc-50/50 rounded-full transition-all">
      <div className="p-2.5 bg-zinc-100 rounded-full text-zinc-500 group-hover:bg-[#c5a059]/10 group-hover:text-[#c5a059] transition-all">
        <Calendar size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400 group-hover:text-[#c5a059] transition-all">Dates</span>
        <span className="text-sm font-semibold text-zinc-800">Add Schedule</span>
      </div>
    </div>

    {/* Search Button */}
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="ml-2 h-14 w-14 md:w-auto md:px-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center gap-3 shadow-xl hover:shadow-[#c5a059]/20 transition-all overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <Search size={20} className="relative z-10" />
      <span className="hidden md:block text-[11px] uppercase font-black tracking-widest relative z-10">Find Stay</span>
    </motion.button>
    
  </div>
</section>

      {/* 3. Categories (Mobile Scrollable) */}
      <div className="px-6 md:px-12 flex gap-8 overflow-x-auto no-scrollbar py-4 border-b border-zinc-100 scroll-smooth">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap text-[10px] uppercase font-bold tracking-widest pb-2 transition-all ${selectedCategory === cat ? 'border-b-2 border-[#c5a059] text-black' : 'text-zinc-400'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 4. Property Grid */}
      <section className="p-6 md:p-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stays.map((stay) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={stay.id} 
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-4">
              <img src={stay.img} alt={stay.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <button className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
                <Heart size={20} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-lg font-bold">{stay.title}</h3>
                <p className="text-sm text-zinc-500">{stay.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-[#c5a059] text-[#c5a059]" />
                <span className="text-sm font-bold">{stay.rating}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center border-t border-zinc-100 pt-4">
              <p className="text-lg font-bold">{stay.price} <span className="text-sm font-normal text-zinc-400">/ night</span></p>
              <ArrowRight size={20} className="text-zinc-300 group-hover:text-black transition-all" />
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}