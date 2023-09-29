import { Product } from "@/models/product";

type ProductListProps = {
  items: Product[];
  onRemoveProduct(_: string): void;
};

const ProductList = ({ items, onRemoveProduct }: ProductListProps) => {
  return (
    <ol className="list-decimal list-inside">
      {items.map((item) => (
        <li key={item.name}>
          {item.name}{" "}
          <button
            onClick={() => {
              onRemoveProduct(item.name);
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ProductList;
