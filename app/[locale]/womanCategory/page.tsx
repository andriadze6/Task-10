import { supabase } from "../lib/supabaseClient";
import "./index.css";
import Header from "../components/Header/NewHeader";
import Image from "next/image";
import "../assets/css/NewHomePage.css";
import { Product } from "@/app/types";
import { Link } from "@/i18n/routing";

async function getProducts(): Promise<Product[]> {
  const {
    data: products,
    error,
  }: { data: Product[] | null; error: Error | null } = await supabase
    .from("products")
    .select("*")
    .eq("gender", "woman");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return products || [];
}

export default async function WomanCategory(): Promise<JSX.Element> {
  const products: Product[] = await getProducts();

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <div>
                {item?.img &&
                  Object.entries(item.img).map(([_, imgArray], index) => {
                    if (index === 0 && Array.isArray(imgArray)) {
                      return (
                        <div key={`image-group-${item.id}-${index}`}>
                          <Link href={`/products/${item.id}`}>
                            <Image
                              key={`image-1-${item.id}-${index}`}
                              className="T-Img"
                              alt=""
                              height={500}
                              width={500}
                              src={imgArray[0]}
                            />
                          </Link>
                          <Image
                            key={`image-2-${item.id}-${index}`}
                            style={{ display: "none" }}
                            alt=""
                            height={500}
                            width={500}
                            src={imgArray[2]}
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
              <div className="product-info">
                <h2>{item.title}</h2>
                <p className="product-description">{item.description}</p>
                <p className="product-price">${item.price}</p>
              </div>
              <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// <img
//                 src={item.img[0]}
//                 alt={item.title}
//                 className="product-image"
//               />
