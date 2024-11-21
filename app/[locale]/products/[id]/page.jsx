import { supabase } from "../../lib/supabaseClient";
import ProductPage from "./productpage";

async function getData(id) {
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

export default async function page({ params }) {
  const { id } = params;

  const [product] = await getData(id);

  return <ProductPage product={product} />;
}
