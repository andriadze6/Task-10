"use client";

import React, { useEffect, useState } from "react";

import NewHeader from "../components/Header/NewHeader";
import { Product } from "@/app/types";
import Image from "next/image";

export default function KidsTrendingPage() {
  const [kidsTrendingList, setKidsTrendingList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchdKidsList = fetch("/api/kidsTrending")
      .then((res) => res.json())
      .then((data) => setKidsTrendingList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="w-full ">
      <NewHeader></NewHeader>
      {kidsTrendingList.map((item) => {
        return (
          <KidsTrendingItem key={item.title} product={item}></KidsTrendingItem>
        );
      })}
    </main>
  );
}
interface KidsTrendingItemProps {
  product: Product;
}
function KidsTrendingItem({ product }: KidsTrendingItemProps) {
  const [chosenColor, setChosenColor] = useState<string>(() => {
    const pasedItem = product;

    const img = product.img;
    const colors = Object.keys(img);
    return colors[0];
  });

  const [chosenPhoto, setChosenPhoto] = useState<number>(0);
  const pasedItem = product;

  const img = product.img;
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
      key={pasedItem.id}
      className="w-auto h-lvh bg-white m-10 flex flex-row"
    >
      <div className="flex flex-col gap-1">
        <div key={chosenColor}>
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
        </div>
      </div>
      <div className="w-150 h-150 border border-gray bg-gray-50 rounded-2xl flex flex-col items-center justify-center mt-5 ">
        <img
          className="rounded-2xl h-150 w-150 object-contain p-5"
          src={img[chosenColor][chosenPhoto]}
          alt={img[chosenColor][chosenPhoto]}
        />
      </div>
      <div className="flex-col flex justify-start gap-10 text-black">
        <h1 className="text-2xl font-bold underline m-5">{pasedItem.title}</h1>
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
      </div>
    </div>
  );
}
