import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, "categories");

  return (
    <div className="w-11/12 mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="font-bold text-lg col-span-3">
        <LeftSidebar categories={categories} activeId={"null"}></LeftSidebar>
      </div>
      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        Dragon News Home
      </div>
      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
