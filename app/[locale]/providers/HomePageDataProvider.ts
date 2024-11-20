import { createContext } from "react";
import { Database } from "../lib/dataTypes ";


type homePageDataContextType = {
    homePageData: Database["public"]["Functions"]["get_home_page_data"]["Returns"];
}

export const HomePageDataContext = createContext<homePageDataContextType | null>(null);