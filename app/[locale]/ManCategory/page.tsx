import { supabase } from "../lib/supabaseClient";
import NewCard from '../components/NewCard';
import NewHeader from '../components/Header/NewHeader';
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
                   manProduct && manProduct.map((product) => (
                        <NewCard key={product.id} product={product}></NewCard>
                    ))
                }
                <div>ManCategoryPage</div>
            </>
    )
}