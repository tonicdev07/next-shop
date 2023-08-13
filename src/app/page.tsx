import Product from "../components/product";
import { ProductType } from "../interfaces";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products?limit=19").then((res) =>
    res.json()
  );
  const products: ProductType[] = await res;

  return (
    <div className=" mx-auto min-h-screen max-w-5xl px-3 md:px-2 ">
      <div>
        <h1 className=" text-4xl text-center py-10">Tonic Dev Shop Feeds</h1>
        <div className="grid text-center gap-0 md:gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((p) => (
            <Product product={p} key={p.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
