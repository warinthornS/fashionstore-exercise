import { Cart } from "@/models/cart";
import CouponForm from "./CouponForm";
import LineItems from "./LineItems";
import { decimalFormat } from "@/tools/decimalFormat";
import { CouponResult } from "@/models/coupon";

type SummaryProps = {
  cartSummary: Cart;
  onApplyCoupon(_: string): void;
  couponResult: CouponResult | null;
};

const Summary = ({
  cartSummary,
  onApplyCoupon,
  couponResult,
}: SummaryProps) => {
  return (
    <div className="flex-1">
      <LineItems items={cartSummary.lineItems} />
      <hr className="pb-6 mt-6" />
      <div className="border-b pb-4">
        <div className="flex justify-between" data-testid="price-summary">
          <div className="lg:px-2 lg:py-2 md:ml-2 text-center text-gray-800">
            Subtotal
          </div>
          <div
            className="lg:py-2 text-center text-gray-900"
            data-testid="subtotal"
          >
            ${decimalFormat(cartSummary.subtotal)}
          </div>
        </div>
        <div className="flex justify-between" data-testid="price-summary">
          <div
            className="lg:px-2 lg:py-2 md:ml-2 text-center text-gray-800"
            data-testid="discount-name"
          >
            Discount: {cartSummary.discountName}
          </div>
          <div
            className="lg:py-2 text-center text-gray-900"
            data-testid="discount-amount"
          >
            -${decimalFormat(cartSummary.discountAmount)}
          </div>
        </div>
        <div className="flex justify-between" data-testid="price-summary">
          <div className="lg:px-2 lg:py-2 md:ml-2 text-center font-bold text-gray-800">
            Total
          </div>
          <div
            className="lg:py-2 text-center font-bold text-gray-900"
            data-testid="total"
          >
            ${decimalFormat(cartSummary.total)}
          </div>
        </div>
      </div>
      <CouponForm couponResult={couponResult} onApplyCoupon={onApplyCoupon} />
    </div>
  );
};

export default Summary;
