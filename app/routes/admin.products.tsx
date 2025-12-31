
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { listProducts } from "~/features/products/data/products.repo.server";

export async function loader() {
  return json(await listProducts());
}

export default function Products() {
  const { rows } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {rows.map(p => (
          <li key={p.id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}
