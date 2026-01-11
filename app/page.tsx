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

      {/* 2. Premier Search Bar (Floating) */}
      <section className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
        <div className="bg-white border border-zinc-100 p-2 rounded-full shadow-2xl flex flex-wrap md:flex-nowrap items-center gap-4">
          <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-zinc-100">
            <MapPin size={18} className="text-[#c5a059]" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold text-zinc-400">Destination</span>
              <input type="text" placeholder="Where to go?" className="text-sm font-medium outline-none" />
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center gap-3 px-6 py-2 border-r border-zinc-100">
            <Calendar size={18} className="text-[#c5a059]" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold text-zinc-400">Check-In</span>
              <span className="text-sm font-medium">Add dates</span>
            </div>
          </div>
          <button className="w-12 h-12 md:w-auto md:px-8 bg-black text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#c5a059] transition-colors">
            <Search size={18} />
            <span className="hidden md:block text-[11px] uppercase font-bold">Search</span>
          </button>
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