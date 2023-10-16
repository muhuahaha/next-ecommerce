import logo from "@/assets/logo.png";
import { getCart } from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="mb-4 mt-4">
      <div className="bg-stripes-blue flex gap-4 rounded-lg font-mono text-sm font-bold leading-6 text-white">
        <div className="flex flex-1 items-center justify-center rounded-lg bg-blue-300 p-4 dark:bg-blue-800 dark:text-blue-500">
          01
        </div>
        <div className="flex w-16  flex-1 shrink-0 items-center justify-center rounded-lg bg-blue-500 p-4 shadow-lg sm:w-64">
          <form action={searchProducts}>
            <div className="l">
              <input name="searchQuery" placeholder="Search" className="" />
            </div>
          </form>
        </div>
        <div className="hidden items-center justify-center rounded-lg bg-blue-300 p-4 dark:bg-blue-800 dark:text-blue-500 sm:flex">
          <ShoppingCartButton cart={cart} />
        </div>
      </div>
    </div>
  );
}

// <div className="flex w-full flex-row bg-lime-300">
// <div className="w-full bg-red-300">
//   <div className="">
//     <Link href="/" className="">
//       <Image src={logo} height={40} width={40} alt="Flowmazon logo" />
//       Flowmazon
//     </Link>
//   </div>
//   <div className="flex w-full flex-row">
//     <form action={searchProducts}>
//       <div className="l">
//         <input name="searchQuery" placeholder="Search" className="" />
//       </div>
//     </form>
//     <ShoppingCartButton cart={cart} />
//   </div>
// </div>
// </div>
