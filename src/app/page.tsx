"use client";
import { useState } from "react";
import { CategoryPills } from "@/components/Category/CategoryPills";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { categories } from "../data/home";
import { VideoGridItem } from "@/components/Video/VideoGridItem";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          <div className="grid gap-4 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1">
            <VideoGridItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
