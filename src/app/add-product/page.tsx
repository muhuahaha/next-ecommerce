import { Button } from "@/components/ui/button";
import React from "react";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  // throw Error("Bazinga");
  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center bg-lime-400 p-10 text-center sm:mt-40">
      <h1 className="mb-3 text-lg font-bold ">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </MaxWidthWrapper>
  );
}
