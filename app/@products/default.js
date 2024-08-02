import React from "react";
import Link from "next/link";

export default async function page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="grid  md:grid-cols-1 flex-1 shadow-xl shadow-black lg:grid-cols-2 gap-5 p-5 max-sm:flex-none scroll-smooth overflow-y-auto">
      {products.map((p) => (
        <div className="border p-5 shadow-xl  " key={p.id}>
          <img className="w-full" src={p.image} />
          <Link href={`/${p.id}`}>
            <h2 className="text-xl  font-bold underline hover:text-blue-500 duration-300 mt-5 cursor-pointer">
              {p.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
