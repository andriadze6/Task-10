import { supabase } from "../lib/supabaseClient";
import NewCard from '../components/NewCard';
import NewHeader from '../components/Header/NewHeader';
import Image from "next/image";
async function GetManCategory() {
    try {
        let { data: products, error } = await supabase
            .from('products')
            .select("*")
            // Filters
            .eq('gender', 'man')

        return products
    } catch (err) {
        console.error('Unexpected error:', err);
        return null;
    }
}
export default async function ManCategoryPage() {
    let manProduct = await GetManCategory();
    debugger
    return (
            <>
                <NewHeader></NewHeader>
                {
                    <div  className="TSlider-Wrapper">
                        <div className="TSlider-Container">
                        {manProduct && manProduct.map((item) => {
                            return (
                            <div key={`product-${item.product_ID}`} className="Item">
                                <div style={{ position: "relative" }}>
                                {item?.img &&
                                    Object.entries(item.img).map(([_, imgArray], index) => {
                                    if (index === 0 && Array.isArray(imgArray)) {
                                        return (
                                        <div
                                            key={`image-group-${item.product_ID}-${index}`}>
                                            <Image
                                                key={`image-1-${item.product_ID}-${index}`}
                                                className="T-Img"
                                                alt=""
                                                height={500}
                                                width={500}
                                                src={imgArray[0]}
                                                />
                                            <Image
                                            key={`image-2-${item.product_ID}-${index}`}
                                            className="T-Img2"
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
                            </div>
                            );
                        })}
                        </div>
                    </div>
                }
                <div>ManCategoryPage</div>
            </>
    )
}