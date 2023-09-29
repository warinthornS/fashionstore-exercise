import Summary from "@/components/cart-summary/Summary";
import { Cart } from "@/models/cart";
import { CouponResult } from "@/models/coupon";
import Head from "next/head";
import { useState } from "react";

const CartSummary = () => {
  const cartSummary: Cart = {
    id: "",
    lineItems: [],
    numberOfItems: 0,
    subtotal: 0,
    discountAmount: 0,
    total: 0,
    discountName: null,
    discountDescription: null,
  };
  const isError = false;
  const isLoading = false;
  const [couponResult, setCouponResult] = useState<CouponResult | null>(null);

  const onApplyCoupon = (couponCode: string) => {};
  return (
    <>
      <Head>
        <title>Dress Shop | Cart Summary</title>
      </Head>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <h1 className="font-bold text-2xl md:ml-4 mb-4">Cart Summary</h1>
          {isError ? (
            <div className="flex items-center justify-center h-32">
              Could not load content, please try again
            </div>
          ) : null}

          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              Loading...
            </div>
          ) : null}
          {cartSummary && (
            <Summary
              cartSummary={cartSummary}
              onApplyCoupon={onApplyCoupon}
              couponResult={couponResult}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CartSummary;
