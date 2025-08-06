export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItemType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface CategoryType {
  id: string;
  name: string;
}
