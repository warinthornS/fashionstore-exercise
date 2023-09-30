import ProductList from "@/components/ProductList";
import {Product} from  "@/components/ProductList";

export default function Home() {
  const p1 : Product = {
    name: "11111",
    imageUrl: "",
    price: 1112
  }
  const p2: Product  = {
    name: "22222",
    imageUrl: "",
    price: 22233
  }

  const pl = [p1, p2]

  return <ProductList  list={pl}/>;
}
