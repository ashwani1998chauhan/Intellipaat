// Product.js

import React from "react";
import "./Product.css"; // Import the CSS file
import { useTheme } from "../ThemeContext";

const Product = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`product-container ${darkMode ? "dark-mode" : ""}`}>
      <label className="SearchBar">Search</label><br />
      <input classname="SearchInput" type="text" /><br />
      <button className="SearchButton" onClick={() => {}}>Search</button><br />
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Manufactured Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Phone</td>
              <td>700</td>
              <td>10.10.23</td>
            </tr>''
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
