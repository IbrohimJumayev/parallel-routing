"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default async function page({ params }) {

  const { id } = params;
    const router = useRouter();

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="flex-1 shadow-xl shadow-black p-5 overflow-y-auto ">
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-500 text-white font-bold mb-5"
      >
        back
      </button>
      <img className="w-96" src={product.image} />
      <p className="font-bold text-2xl ">{product.title}</p>
      <p className="font-light">{product.description}</p>
      <strong className="text-3xl font-bold">${product.price}</strong>
    </div>
  );
}
