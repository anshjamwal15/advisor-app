import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/admin/products");
}

export default function IndexRoute() {
  return null;
}
