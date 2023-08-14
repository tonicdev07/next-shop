"use client";

import { useCountContext } from "@/context/context";
import CustomImage from "@/components/image";
import { ProductType } from "@/interfaces";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
interface CountContextType {
  setCount: (newCount: ProductType[]) => void;
}
const ProductDetailedPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const { setCount } = useCountContext() as CountContextType;

  const [isOpen, setIsOpen] = useState(true);

  const { id } = useParams();
  const router = useRouter();

  const handleClick = () => {
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];

    const isExistProduct = products.find((c) => c.id === product?.id);

    if (isExistProduct) {
      const updatedData = products.map((c) => {
        if (c.id === product?.id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        }

        return c;
      });

      localStorage.setItem("carts", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
    toast("Product added to your bag!!");
    setCount(JSON.parse(localStorage.getItem("carts") as string) || []);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      setProduct(product);
      setLoading(false);
    }

    getData();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className={"mx-auto max-w-2xl rounded bg-white p-3 md:p-10"}>
            {loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
            ) : (
              <div className="flex gap-x-8 h-96">
                {product?.image && (
                  <div className="relative w-72 h-full hidden  md:inline">
                    <CustomImage product={product} fill />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className=" relative">
                    <div
                      aria-hidden="true"
                      onClick={() => {
                        setIsOpen(false);
                        router.back();
                      }}
                      className=" absolute cursor-pointer hover:bg-white  right-[-20px] bottom-1 bg-slate-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{product?.title}</h4>
                    <p className="font-medium text-sm">${product?.price}</p>

                    <div className="flex items-center text-sm my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {Array.from(
                            {
                              length: Math.floor(product.rating.rate),
                            },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )}
                          {Array.from(
                            {
                              length: 5 - Math.floor(product.rating.rate),
                            },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )}
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                        See all {product?.rating.count} reviews
                      </p>
                    </div>
                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>
                  {product?.image && (
                  <div className="relative w-15 h-full   md:hidden">
                    <CustomImage product={product} fill />
                  </div>
                )}
                  <div className="md:space-y-3 text-sm">
                    <button
                      onClick={handleClick}
                      className="md:button rounded-md my-1   w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"
                    >
                      Add to bag
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="md:button  border rounded-md  w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
                    >
                      View full details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetailedPage;
