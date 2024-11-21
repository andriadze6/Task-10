"use client";

import React, { useEffect, useState } from "react";

import NewHeader from "../components/Header/NewHeader";
import { Product } from "@/app/types";
import Image from "next/image";
import { PassThrough } from "stream";
import KidsTrendingItem from "../components/KigsTrendingItem/KidsTrendingItem";

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
