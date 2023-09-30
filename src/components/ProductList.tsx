import { Product } from "@/models/product";

type ProductListProps = {
  items: Product[];
  removeFn: (name: string) => void;
};

const ProductList = ({ items, removeFn }: ProductListProps) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item.name}>
          {item.name}{" "}
          <button
            onClick={() => {
              removeFn(item.name);
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
