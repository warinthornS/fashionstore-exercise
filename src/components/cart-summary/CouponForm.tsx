import React from "react";
import { CouponResult } from "@/models/coupon";
import { useState } from "react";

type CouponFormProps = {
  onApplyCoupon(_: string): void;
  couponResult: CouponResult | null;
};

const CouponForm = ({ onApplyCoupon, couponResult }: CouponFormProps) => {
  const [couponCode, setCouponCode] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApplyCoupon(couponCode);
  };
  return (
    <div className="my-4 mt-6 -mx-2">
      <div className="lg:px-2 lg:flex items-center">
        <div className="px-2 lg:w-1/2 mb-2">
          <h1 className="md:ml-2 font-bold uppercase">Coupon Code</h1>
        </div>
        <div className="p-2 lg:w-1/2">
          <div className="">
            <form onSubmit={onSubmit}>
              <div className="flex items-center w-full h-12 pl-3 bg-gray-100 border rounded-full">
                <input
                  type="coupon"
                  name="code"
                  id="coupon"
                  placeholder="Apply coupon"
                  className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                  data-testid="coupon-code"
                  value={couponCode}
                  onChange={(event) => {
                    setCouponCode(event.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="text-sm flex items-center px-4 h-full text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                  data-testid="apply-coupon-button"
                >
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="gift"
                    className="w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                    />
                  </svg>
                  <span className="font-medium">Apply</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {couponResult && (
        <div
          className={`p-4 mt-1 rounded-md md:mx-4 border-dashed border-2 border-gray-500 pl-6 ${
            couponResult.valid ? "bg-cyan-50" : "bg-red-50"
          }`}
          v-if="coupon.description"
          data-testid="coupon-detail"
        >
          <p>Description</p>
          <p data-testid="coupon-description">{couponResult.description}</p>
        </div>
      )}
    </div>
  );
};

export default CouponForm;
