"use client";
import React, { useEffect, useState } from "react";

import NewHeader from "../components/Header/NewHeader";

export default function KidsTrendingPage() {
  const [kidsTrendingList, setKidsTrendingList] = useState();

  useEffect(() => {
    const fetchdKidsList = fetch("/api/kidsTrending")
      .then((res) => res.json())
      .then((data) => setKidsTrendingList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <NewHeader></NewHeader>
      {/* {kidsTrendingList.map((item)=>{

      })} */}
    </div>
  );
}
