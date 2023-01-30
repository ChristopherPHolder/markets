export interface ListingPreview {
  id: number;
  url: string;
  thumbnailUrl: string;
  type: 'watercraft' | string;
  category?: 'Lancha' | string;
  title?: string;
  condition?: string;
  price: string;
  year?: number;
  description?: string;
}

export interface HighlightListingsPreviews {
  watercrafts: ListingPreview[];
  products: ListingPreview[];
  services: ListingPreview[];
}

export interface ListingDetails extends ListingPreview {
  brand: string;
  model: string;
  state: string;
  feet: string;
  horsePower: string;
  numberOfMotors: number;
  motorBrand: string;
  sellersName: string;
  sellersPhone: string;
  sellersEmail: string;
}
