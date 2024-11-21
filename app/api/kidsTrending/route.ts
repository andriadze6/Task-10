import { NextResponse } from "next/server";
import { supabase } from "../../[locale]/lib/supabaseClient";
import { Product } from "@/app/types";

export async function GET() {
  try {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("gender", "neutral");

    const fetchedProducts: Product[] = data as Product[];

    return NextResponse.json(fetchedProducts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
