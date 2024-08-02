import Link from "next/link";

export default async function page() {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();

  return (
    <div className="flex-1 shadow-xl shadow-black  p-5 max-w-full overflow-y-auto max-sm:flex-none scroll-smooth">
      <div className="flex flex-wrap justify-between scroll-auto">
        {users.map((u) => (
          <li
            className="list-none text-center text-2xl font-bold underline cursor-pointer  flex-col mt-5 hover:text-blue-500 duration-300 capitalize"
            key={u.id}
          >
            <img className="w-64" src="/user.png" />
            <Link href={`/${u.id}`}>
              <p>{u.name.firstname}</p>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
