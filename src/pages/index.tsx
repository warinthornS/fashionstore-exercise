import ProductList from "@/components/ProductList";

export default function Home() {
  const products = [
    {
      id: "91479834-ac10-42c4-87c0-4584f9083851",
      name: "Loose Cropped Jeans (Damaged)",
      price: 42.57,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448429/item/goods_66_448429.jpg?width=300",
    },
    {
      id: "91479834-ac10-42c4-87c0-4584f9083857",
      name: "Smart Skort Solid",
      price: 140.37,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455844/item/goods_09_455844.jpg?width=300",
    },
  ];
  const onAddProduct = (productId: string) => {
    console.log(`add product:${productId} to the cart.`);
  };
  return <ProductList items={products} onAddProduct={onAddProduct} />;
}
