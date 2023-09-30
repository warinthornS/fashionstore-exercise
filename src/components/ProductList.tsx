import Image from "next/image";

// 💡 a product contains {name: string, imageUrl: string, price: number}
export interface Product {
  name: string,
  imageUrl: string,
  price: number,
}

type CardDetail = {
  item: Product
}

const Card = (detail: CardDetail) => {
  return (
    <div
        className="group relative"
        data-testid="product-item"
        role="listitem"
      >
        <div className="pw-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <Image
            data-testid="product-item--image"
            src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448429/item/goods_66_448429.jpg?width=300"
            width={300}
            height={300}
            alt="Loose Cropped Jeans (Damaged)"
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span data-testid="product-item--name" aria-hidden="true">
                {detail.item.name}
              </span>
            </h3>
          </div>
          <p
            data-testid="product-item--price"
            className="text-sm font-medium text-gray-900"
          >
            $ {detail.item.price}
          </p>
        </div>
        <div className="flex space-x-2 justify-center mt-2">
          <button
            data-testid="product-item--add-to-cart"
            className="add-to-cart-button px-6 py-1 transition ease-in duration-200 w-full rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
  )
}

type detail = {
  list: Product[]
}

const ProductList = (detail: detail) => {
  
  return (
    <div
      v-else-if="productList.result.value"
      className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
       {detail.list.map((l) => (
          <Card key={l.name} item={l}/>
      ))}
    </div>
  );
};

export default ProductList;
