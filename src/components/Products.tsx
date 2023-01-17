import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = !details ? "bg-blue-600" : "bg-red-600";
  const btnClasses = ["py-2 px-4 border  text-cyan-50", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.image} className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}$</span>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails(!details)}
      >
        {!details ? "Show details" : "Hide details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p className="font-bold">
            Rate: <span className=" text-cyan-700">{product.rating.rate}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
