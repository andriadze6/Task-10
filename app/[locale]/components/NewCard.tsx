"use client";
import Image from "next/image";
import "../assets/css/NewHomePage.css";
import { Product } from "@/app/types";
import { Link } from "@/i18n/routing";

export default function Card({ product }: { product: Product }) {
  const selectedColor = product.color[0];
  const images = product.img[selectedColor];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="cardImgDiv" style={{ position: "relative" }}>
        <Link href={`/products/${product.id}`}>
          <Image
            className="S-Img"
            alt={product.title}
            height={500}
            width={500}
            src={images[1]}
          />
        </Link>
        <div className="popUpContent">
          <button className="cardButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button className="cardButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>{product.title}</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <span>{product.price}</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              color: "#c1121f",
            }}
          >
            {/* <span className="strike-center">$<span>350</span></span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
