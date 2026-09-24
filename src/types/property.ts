export type RegionId = 'mooca' | 'tatuape' | 'vila-ema';

export interface PointOfInterest {
  category: 'Mobilidade' | 'Gastronomia' | 'Lazer & Verde' | 'Educação & Saúde' | 'Compras';
  name: string;
  distance: string;
}

export interface Typology {
  title: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  features: string[];
}

export interface Development {
  id: RegionId;
  regionName: string;
  campaignLabel: string;
  projectName: string;
  tagline: string;
  formUrl: string;
  priceFrom: string;
  installmentFrom: string;
  status: string;
  deliveryDate: string;
  address: string;
  shortDesc: string;
  fullLocationDesc: string;
  lifestyleHighlights: string[];
  pointsOfInterest: PointOfInterest[];
  typologies: Typology[];
  amenities: string[];
  heroImage: string;
  accentBadge: string;
}
