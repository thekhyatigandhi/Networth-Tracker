import React from "react";
import incImg from "./income.png";
import expImg from "./expense.png";
import remImg from "./remove.png";

function TransactionTable(props) {
  const remove = (index) => {
    props.remove(index);
  };

  // Check if props.data exists and is an array before using it
  const reversedData = props.data ? [...props.data].reverse() : [];

  return (
    <div style={{ overflow: "auto", height: "250px" }}>
      <table className="table table-hover text-center">
        <thead className="table-dark sticky-top">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Type</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.length > 0 &&
            reversedData.map((i) => (
              <tr key={i.id}>
                <th scope="row">
                  {i.type === "Income" ? (
                    <img src={incImg} alt="Income" />
                  ) : (
                    <img src={expImg} alt="Expense" />
                  )}
                </th>
                <td>{i.cat}</td>
                <td>{i.date}</td>
                <td>{i.amount}</td>
                <td>
                  <img
                    src={remImg}
                    onClick={() => remove(i.id)}
                    style={{ cursor: "pointer" }}
                    alt="Remove"
                  />
                </td>
              </tr>
            ))}
          {!props.data ||
            (props.data.length === 0 && (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
