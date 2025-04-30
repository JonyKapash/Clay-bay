export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  artistId: string;
  artistName: string;
  createdAt: Date;
  dimensions?: {
    height: number;
    width: number;
    depth: number;
    unit: "cm" | "in";
  };
  weight?: {
    value: number;
    unit: "g" | "kg" | "oz" | "lb";
  };
  material?: string[];
  technique?: string[];
  inStock: boolean;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
}
