export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice?: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  isHot?: boolean;
  isSoldOut?: boolean;
  description?: string;
  badge?: {
    text: string;
    class: string;
  };
}
