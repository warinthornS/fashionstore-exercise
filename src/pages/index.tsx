import ProductList from "@/components/product/ProductList";
import { useCart } from "@/contexts/cart";
import { Product } from "@/models/product";
import { addProductToCart } from "@/services/cart";
import { getProducts } from "@/services/product";
import { cartId } from "@/tools/config";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useCart();
  const onAddProduct = async (productId: string) => {
    cart.addNumberOfItems(1);
    await addProductToCart({ cartId: cartId, productId: productId });
    console.log(`add product:${productId} to the cart.`);
  };

  useEffect(() => {
    let isStale = false;
    setIsLoading(true);
    getProducts().then((productsResult) => {
      if (!isStale) {
        setIsLoading(false);
        setProducts(productsResult);
      }
    });
    return () => {
      isStale = true;
    };
  }, []);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <ProductList items={products} onAddProduct={onAddProduct} />
      )}
    </>
  );
}
