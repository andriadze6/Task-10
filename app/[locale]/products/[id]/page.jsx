import { supabase } from "../../lib/supabaseClient";

async function getData(id) {
  try {
    let { data, error } = await supabase.rpc("getproductbyid", {
      input_id: id,
    });

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }
    console.log(data);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const { id } = params;

  const [product] = await getData(id);
  console.log(product);

  return (
    <div>
      <h1>{product?.id}</h1>
      <h1>{product?.title}</h1>
      <h1>{product?.description}</h1>

      <h2>blaaa</h2>
    </div>
  );
}
