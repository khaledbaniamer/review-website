import { NavLink } from "react-router-dom";


const Products =()=>{
    return(
        <>
<NavLink to="" className="main_btn m-4">Add</NavLink>
<table className="table m-4 mb-5">
    
<thead>
    <tr>
      <th className="p-3 text-center">Image</th>
      <th className="p-3 text-center">Product</th>
      <th className="p-3 text-center">Rate</th>
      <th className="p-3 text-center">Action</th>
    </tr>
</thead>
  <tbody>
    <tr>
      <th className="p-3 text-center">1</th>
      <td className="p-3 text-center">Mark</td>
      <td className="p-3 text-center">Otto</td>
      <td className="p-3 text-center">
      <NavLink className="m-3" to=""><i className="fa-solid fa-trash-can" style={{fontSize: "20px" ,color:"red"}}></i></NavLink>
      </td>
    </tr>
    <tr>
      <th className="p-3 text-center">1</th>
      <td className="p-3 text-center">Mark</td>
      <td className="p-3 text-center">Otto</td>
      <td className="p-3 text-center">
      <NavLink className="m-3" to=""><i className="fa-solid fa-trash-can" style={{fontSize: "20px" ,color:"red"}}></i></NavLink>
      </td>
    </tr>
    <tr>
      <th className="p-3 text-center">1</th>
      <td className="p-3 text-center">Mark</td>
      <td className="p-3 text-center">Otto</td>
      <td className="p-3 text-center">
      <NavLink className="m-3" to=""><i className="fa-solid fa-trash-can" style={{fontSize: "20px" ,color:"red"}}></i></NavLink>
      </td>
    </tr>

  </tbody>
</table>
        </>
    )
}

export default Products;