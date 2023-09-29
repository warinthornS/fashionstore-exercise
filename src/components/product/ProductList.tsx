import { Product } from "@/models/product";
import ProductItem from "./ProductItem";

type ProductListProps = {
  items: Product[];
  onAddProduct(_: string): void;
};

// 💡 a product contains {name: string, imageUrl: string, price: number}
const ProductList = ({ items, onAddProduct }: ProductListProps) => {
  return (
    <div
      v-else-if="productList.result.value"
      className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      {items.map((item) => (
        <ProductItem key={item.id} data={item} onAddProduct={onAddProduct} />
      ))}
    </div>
  );
};

export default ProductList;
