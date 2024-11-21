import { Product } from "@/app/types";
import Image from "next/image";
import { useState } from "react";

interface KidsTrendingItemProps {
  product: Product;
}
export default function KidsTrendingItem({ product }: KidsTrendingItemProps) {
  const [chosenColor, setChosenColor] = useState<string>(() => {
    const passedItem = product;

    const img = product.img;
    const colors = Object.keys(img);
    return colors[0];
  });

  const [chosenPhoto, setChosenPhoto] = useState<number>(0);
  const passedItem = product;
  const stock = product.stock;
  const img = product.img;
  const availableSizes = Object.keys(stock[chosenColor]);
  const colors = Object.keys(img);
  const colorsObj: { [key: string]: string } = {
    bear: "green",
    santa: "red",
    "new year": "blue",
    green: "green",
    navy: "blue",
    white: "white",
    gray: "gray",
    aqua: "aqua",
    hannukah: "yellow",
    "red buffalo": "red",
    orange: "orange",
    plaid: "black",
    camo: "green",
    blue: "blue",
    black: "black",
  };

  return (
    <div
      // key={passedItem.id}
      className="w-auto h-lvh bg-white m-10 flex flex-row"
    >
      <div className="flex flex-col gap-1">
        {/* <div key={chosenColor}>
          {img[chosenColor].map((item, key) => {
            return (
              <Image
                onMouseEnter={() => setChosenPhoto(key)}
                className="border border-black m-5 hover:scale-150"
                key={key}
                src={item}
                width={50}
                height={50}
                alt="item"
              />
            );
          })}
        </div> */}
      </div>
      <div className="w-150 h-150 border border-gray bg-gray-50 rounded-2xl flex flex-col items-center justify-center mt-5 ">
        <Image
          className="rounded-2xl h-150 w-150 object-contain p-5"
          src={img[chosenColor][chosenPhoto]}
          alt={img[chosenColor][chosenPhoto]}
          width={350}
          height={350}
        />
      </div>
      <div className="flex-col flex justify-start gap-10 text-black w-150">
        <h1 className="text-2xl font-bold underline m-5">{passedItem.title}</h1>
        <p className="m-5">{passedItem.description}</p>
        <div className="flex flex-row m-5">
          Tags:
          {passedItem.tags.map((item) => {
            return (
              <div className="border border-gray" key={item}>
                #{item}
              </div>
            );
          })}
        </div>

        <div className="flex flex-row gap-2 m-5">
          {colors.map((color) => {
            const colored = color;
            let current = colorsObj[colored];
            return (
              <div
                onClick={() => {
                  setChosenColor(color);
                }}
                key={color}
                className={`border border-black w-5 h-5 cursor-pointer hover:scale-105`}
                style={{
                  backgroundColor: current,
                }}
              ></div>
            );
          })}
        </div>
        <div className="flex  items-center m-5">
          Available Sizes:
          {availableSizes.map((item) => {
            return (
              <div className="flex flex-row m-2" key={item}>
                {item}:{stock[chosenColor][item]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
