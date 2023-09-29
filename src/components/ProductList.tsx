type ProductListProps = {
  items: string[];
};

const ProductList = ({ items }: ProductListProps) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((productName) => (
        <li key={productName}>{productName}</li>
      ))}
    </ul>
  );
};

export default ProductList;
