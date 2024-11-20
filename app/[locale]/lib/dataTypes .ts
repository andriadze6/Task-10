export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      kidsTrending: {
        Row: {
          id: number
          product_ID: number
        }
        Insert: {
          id?: number
          product_ID: number
        }
        Update: {
          id?: number
          product_ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "kids_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      manTrendingProducts: {
        Row: {
          ID: number
          product_ID: number | null
        }
        Insert: {
          ID?: number
          product_ID?: number | null
        }
        Update: {
          ID?: number
          product_ID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ManTrendingProducts_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      newArrival: {
        Row: {
          id: number
          product_ID: number
        }
        Insert: {
          id?: number
          product_ID: number
        }
        Update: {
          id?: number
          product_ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "NewArrival_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          color: string[]
          description: string
          discountPercentage: number | null
          gender: string
          id: number
          img: Json
          minimumOrderQuantity: number
          price: number
          priceDiscoun: number | null
          rating: number | null
          size: Json | null
          sku: string | null
          stock: Json
          tags: string[]
          title: string
        }
        Insert: {
          category?: string
          color: string[]
          description?: string
          discountPercentage?: number | null
          gender: string
          id?: number
          img: Json
          minimumOrderQuantity: number
          price: number
          priceDiscoun?: number | null
          rating?: number | null
          size?: Json | null
          sku?: string | null
          stock: Json
          tags: string[]
          title?: string
        }
        Update: {
          category?: string
          color?: string[]
          description?: string
          discountPercentage?: number | null
          gender?: string
          id?: number
          img?: Json
          minimumOrderQuantity?: number
          price?: number
          priceDiscoun?: number | null
          rating?: number | null
          size?: Json | null
          sku?: string | null
          stock?: Json
          tags?: string[]
          title?: string
        }
        Relationships: []
      }
      womanTrendingProducts: {
        Row: {
          id: number
          product_ID: number
        }
        Insert: {
          id?: number
          product_ID: number
        }
        Update: {
          id?: number
          product_ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "WomanTrendingProducts_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      kid_tranding_product_view: {
        Row: {
          product_ID: number | null
        }
        Relationships: [
          {
            foreignKeyName: "kids_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      man_tranding_product_view: {
        Row: {
          img: Json | null
          product_ID: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ManTrendingProducts_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      newarrival_product_view: {
        Row: {
          color: string[] | null
          discountPercentage: number | null
          img: Json | null
          price: number | null
          product_ID: number | null
          title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "NewArrival_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      woman_tranding_product_view: {
        Row: {
          product_ID: number | null
        }
        Relationships: [
          {
            foreignKeyName: "WomanTrendingProducts_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_home_page_data: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      getproductbyid: {
        Args: {
          id: number
        }
        Returns: {
          category: string
          color: string[]
          description: string
          discountPercentage: number | null
          gender: string
          id: number
          img: Json
          minimumOrderQuantity: number
          price: number
          priceDiscoun: number | null
          rating: number | null
          size: Json | null
          sku: string | null
          stock: Json
          tags: string[]
          title: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
