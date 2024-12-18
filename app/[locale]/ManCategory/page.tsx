import { supabase } from "../lib/supabaseClient";
import NewCard from "../components/NewCard";
import NewHeader from "../components/Header/NewHeader";
import Image from "next/image";
import "../assets/css/NewHomePage.css";
import { Link } from "@/i18n/routing";

async function GetManCategory() {
  try {
    let { data: products, error } = await supabase
      .from("products")
      .select("*")
      // Filters
      .eq("gender", "man");

    return products;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}
export default async function ManCategoryPage() {
  let manProduct = await GetManCategory();
  return (
    <>
      <NewHeader></NewHeader>
      {
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {manProduct &&
            manProduct.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="Item">
                    <div
                      key={`product-${item.product_ID}`}
                      style={{ position: "relative" }}
                      className="cardImgDiv"
                    >
                      <div>
                        {item?.img &&
                          Object.entries(item.img).map(
                            ([_, imgArray], index) => {
                              if (index === 0 && Array.isArray(imgArray)) {
                                return (
                                  <div
                                    key={`image-group-${item.product_ID}-${index}`}
                                  >
                                    <Image
                                      key={`image-1-${item.product_ID}-${index}`}
                                      className="T-Img"
                                      alt=""
                                      height={500}
                                      width={500}
                                      src={imgArray[0]}
                                      priority
                                    />
                                    <Link href={`/products/${item.id}`}>
                                      <Image
                                        key={`image-2-${item.product_ID}-${index}`}
                                        className="T-Img2"
                                        alt=""
                                        height={500}
                                        width={500}
                                        src={imgArray[2]}
                                        priority
                                      />
                                    </Link>
                                  </div>
                                );
                              }
                              return null;
                            }
                          )}
                      </div>
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
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h3>{item.title}</h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <span>{item.price}</span>
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
            })}
        </div>
      }
      <div>ManCategoryPage</div>
    </>
  );
}
