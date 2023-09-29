export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: Category;
};

export enum Category {
  MEN,
  WOMEN,
}
