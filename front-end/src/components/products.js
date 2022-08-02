import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { business_products, deleteProduct } from "../Store/Slices/productSlice";


const Products =()=>{
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(business_products(id))
  }, [dispatch])

  const products = useSelector(state=>state.product.products)
  console.log(products);


  const allProducts = products.map(product =>{
    return(
      <tr>
          <th className="p-3 text-center align-middle">{product.id}</th>
          <td className="p-3 text-center ">
            <img src={'http://127.0.0.1:8000/product_image/'+product.product_image} width="100px" height="100px" />
          </td>
          <td className="p-3 text-center align-middle">{product.product_name}</td>
          <td className="p-3 text-center align-middle">
          <NavLink className="m-3 " onClick={()=>dispatch(deleteProduct(product.id))} to=""><i className="fa-solid fa-trash-can" style={{fontSize: "20px" ,color:"red"}}></i></NavLink>
          </td>
      </tr>
    )
  })
  
    return(
        <>

<table className="table m-4 mb-5">
    
<thead>
    <tr>
      <th className="p-3 text-center">#</th>
      <th className="p-3 text-center">Image</th>
      <th className="p-3 text-center">Product</th>
      <th className="p-3 text-center">Action</th>
    </tr>
</thead>
  <tbody>
        {allProducts}

  </tbody>
</table>
        </>
    )
}

export default Products;