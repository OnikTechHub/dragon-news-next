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
        All Caterogy
        <ul className="flex flex-col gap-3 mt-6">
          {categories.news_category.map((category) => {
            return (
              <li
                key={category.category_id}
                className="bg-slate-100 p-2 rounsed-md font-bold text-center text-md"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        All News
      </div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        Social icon
      </div>
    </div>
  );
}
