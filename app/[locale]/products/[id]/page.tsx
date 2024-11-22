import { supabase } from "../../lib/supabaseClient";
import ProductPage from "./ProductPage";
import { Product } from "../../../types";
import NewHeader from "../../components/Header/NewHeader";

async function getData(id: string) {
  try {
    let { data, error } = await supabase.rpc("getproductbyid", {
      input_id: id,
    });

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [product]: Product[] = await getData(id);

  return (
    <>
      <NewHeader />
      <ProductPage product={product} />
    </>
  );
}
