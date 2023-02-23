import React from "react";


const OrdersTable = ({stores}:any) => {

    console.log(stores)

  return (
    <table className="w-full">
      <tbody className="w-full">
        <tr className="w-full flex justify-between">
            <td>coś</td>
            <td>coś</td>
            <td>coś</td>
            <td>coś</td>
            <td>coś</td>
            <td>coś</td>
            <td className="bg-red-500">coś</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrdersTable;
