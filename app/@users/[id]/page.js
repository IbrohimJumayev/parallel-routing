

import Link from "next/link";
import React from "react";


export default async function page({ params }) {

  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/users/${id}`);
  const user = await response.json();
  return (
    <div className="flex-1 shadow-xl shadow-black p-5 font-bold capitalize overflow-y-auto">
      <Link href='/'>
      <button
     
     className="px-4 py-2 bg-blue-500 text-white font-bold mb-5"
     >
        back
      </button>
        </Link>
      <p className=" text-3xl">{user.name.firstname}</p>
      <strong className="text-2xl font-bold mt-10">Email: {user.email}</strong>
      <img className="mt-10 pl-20" src="/user.png" />
    </div>
  );
}
