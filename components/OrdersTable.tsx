import React from "react";
import LastOrdersTableRow from "./LastOrdersTableRow";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

interface Orders {
  id: string;
  location: string;
  director: string;
  image: HTMLElement;
  progress: number;
  deadline: Date;
  visited: number;
  status: string;
}

const OrdersTable = ({ stores }: any) => {
  const data = stores.map((item: Orders) => (
    <LastOrdersTableRow key={item.id} item={item} />
  ));

  return (
    <table className="w-full">
      <tbody className="w-full p-5">
        <tr className="w-full flex justify-between">
          <td className="categoryTable rounded-tl-2xl">
            location
          </td>
          <td className="categoryTable">director</td>
          <td className="categoryTable">progress</td>
          <td className="categoryTable">deadline</td>
          <td className="categoryTable">visited</td>
          <td className="categoryTable rounded-tr-2xl"><div className="w-[100px] flex justify-center">status</div></td>
        </tr>
        {data}
      </tbody>
    </table>
  );
};

export default OrdersTable;
