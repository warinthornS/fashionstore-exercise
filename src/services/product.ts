import { Product } from "@/models/product";
import { api } from "@/tools/api";

type GetProductResponse = {
  data: Product[];
};

export const getProducts = async (): Promise<Product[]> => {
  const { data: responseBody } = await api.get<GetProductResponse>(
    "/products"
  );
  return responseBody.data;
};
