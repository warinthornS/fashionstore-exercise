import { Cart } from "@/models/cart";
import { api } from "@/tools/api";

export type AddProductToCartRequest = {
  cartId: string;
  productId: string;
};

export type AddProductToCartResponse = {
  cartId: string;
  numberOfItems: number;
};

export const addProductToCart = (
  request: AddProductToCartRequest
): Promise<AddProductToCartResponse> => {
  return api.post("/cart/add", request).then((resp) => resp.data);
};

export type GetCartSummaryParams = {
  cartId: string;
};

export const getCartSummary = (
  request: GetCartSummaryParams
): Promise<Cart> => {
  return api
    .get<Cart>("/cart/summary", {
      params: {
        cartId: request.cartId,
      },
    })
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });
};

export type ApplyCouponRequest = {
  cartId: string;
  coupon: string;
};

export type ApplyCouponResponse = {
  success: boolean;
  description: string;
};

export type ApplyCouponInvalidResponse = {
  code: string;
  message: string;
};

export const applyCoupon = (
  request: ApplyCouponRequest
): Promise<ApplyCouponResponse> => {
  return api
    .post("/cart/applyCoupon", request)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });
};
