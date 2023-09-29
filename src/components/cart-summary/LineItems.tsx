import { CartItem } from "@/models/product";
import { decimalFormat } from "@/tools/decimalFormat";

type LineItemsProps = {
  items: CartItem[];
};

const LineItems = ({ items }: LineItemsProps) => {
  return (
    <table className="w-full text-sm lg:text-base" cellSpacing="0">
      <thead>
        <tr className="h-12">
          <th className="text-left md:pl-4">Items</th>
          <th className="lg:text-right text-left pl-5 lg:pl-0">
            <span className="lg:hidden" title="Quantity">
              Qtd
            </span>
            <span className="hidden lg:inline">Quantity</span>
          </th>
          <th className="hidden text-right md:table-cell">Unit price</th>
          <th className="text-right">Total price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((lineItem) => (
          <LineItem item={lineItem} key={lineItem.id} />
        ))}
      </tbody>
    </table>
  );
};

type LineItemProps = {
  item: CartItem;
};

const LineItem = ({ item }: LineItemProps) => {
  return (
    <tr data-testid="cart-summary-item">
      <td>
        <a href="#">
          <p data-testid="cart-summary-item--name" className="mb-2 md:ml-4">
            {item.name}
          </p>
        </a>
      </td>
      <td className="justify-center md:justify-end md:flex">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <span
              data-testid="cart-summary-item--quantity"
              className="w-full justify-center items-center inline-flex font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            >
              {item.quantity}
            </span>
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span
          data-testid="cart-summary-item--unit-price"
          className="text-sm lg:text-base font-medium"
        >
          ${decimalFormat(item.unitPrice)}
        </span>
      </td>
      <td className="text-right">
        <span
          data-testid="cart-summary-item--total-price"
          className="text-sm lg:text-base font-medium"
        >
          ${decimalFormat(item.quantity * item.unitPrice)}
        </span>
      </td>
    </tr>
  );
};

export default LineItems;
