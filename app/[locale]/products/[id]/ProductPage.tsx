"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "../../../types";

export default function ProductPage({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto  px-4 py-8 bg-white dark:bg-gray-700">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white">
        {product.title}
      </h1>
      <p className="mb-6 text-gray-900 dark:text-white">
        {product.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative  border rounded-lg  w-96">
            <Image
              src={product.img[selectedColor][selectedImage]}
              alt={`${product.title} image`}
              objectFit="cover"
              width={500}
              height={500}
            />
          </div>
          <div className="flex mt-4 space-x-2  overflow-hidden">
            {product.img[selectedColor].map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`h-16 w-16 border rounded ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={64}
                  height={64}
                  className="object-cover rounded "
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Details
          </h2>
          <p className="text-lg mb-2 text-black dark:text-white">
            Category: {product.category}
          </p>

          <p className="text-lg  mb-2 text-black dark:text-white">
            Price: <span className="font-bold">${product.price}</span>{" "}
            <span className="line-through  text-black dark:text-white">
              ${product.price}
            </span>
          </p>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2 text-black dark:text-white">
              Color: {selectedColor}
            </h4>
            <div className="flex space-x-2">
              {product.color.map((colorOption, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(colorOption)}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === colorOption
                      ? "ring-2 ring-blue-500"
                      : "ring-1 ring-gray-300"
                  }`}
                  style={{ backgroundColor: colorOption }}
                ></button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">
              Sizes
            </h3>
            <div className="flex space-x-2 text-black dark:text-white">
              {product.size[selectedColor].map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border rounded text-sm"
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
