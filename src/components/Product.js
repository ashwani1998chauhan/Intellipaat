import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
const Product=()=>
{
    return(
    <div style={{textAlign:'center',padding:'2%'}}>
        <label>Search</label><br/>
        <input type="text"/><br/>
        <button onClick>Search</button><br/>
        <div style={{display:"flex", justifyContent:'center', margin:'2%'}}>
        <table border={1} id="Product-Grid">
            <tr className="tablerow">
            <th >ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manufactured Date</th>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>
            <tr className="tablerow">
                <td>1</td>
                <td>Phone</td>
                <td>700</td>
                <td>10.10.23</td>
            </tr>

        </table>
        </div>

    </div>);
}
export default Product;