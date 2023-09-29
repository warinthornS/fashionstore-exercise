export type Cart = {
  id: string;
  lineItems: CartItem[];
  numberOfItems: number;
  subtotal: number;
  discountAmount: number;
  total: number;
  discountName: string | null;
  discountDescription: string | null;
};

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
};
