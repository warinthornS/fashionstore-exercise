import ProductList from "@/components/ProductList";

export default function Home() {
  const productName = "";
  const products = ["Loose Cropped Jeans (Damaged)"];

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1 className="text-2xl font-bold">Add a new product</h1>
        <div>
          <label htmlFor="product-name">Product name:</label>
          <input className="bg-slate-200" id="product-name" />
          <p data-testid="result">{productName}</p>
        </div>
      </form>
      <hr />
      <ProductList items={products} />
    </>
  );
}
