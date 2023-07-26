import React, { useEffect, useState } from "react";
import "./index.css";

const Table = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    //   const fetchData = () => {
    //     fetch("https://dummyjson.com/products/1")
    //       .then((res) => res.json())
    //       .then((json) => {
    //         console.log(json);
    //         setData(json);
    //       });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item,index) => (
              <tr key={index}>
                <td >{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;

