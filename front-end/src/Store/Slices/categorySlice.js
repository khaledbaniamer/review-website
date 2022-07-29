import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

const getCategory = createAsyncThunk(
    'category/getCategory',
    async ()=>{
        const api = await fetch('http://127.0.0.1:8000/api/category');
        const response = await api.json();

        return response;
    }
)

export const addCategory = createAsyncThunk(
    'item/addItem',
    async (item , thunkAPI)=>{
 
        const response = await axios.post('http://127.0.0.1:8000/api/addcategory',item);
        
        if(response.status ==200){
            Swal.fire({
                title: "Category",
                text: "Has been Added Successfully",
                type: "success"
            });
        }
        return response.data;
    }
);

export const updateCategory = createAsyncThunk(
    'item/updateItem',
    async (args)=>{
       
        const id = args.id;
        const response =await fetch(`http://127.0.0.1:8000/api/updatecategory/${id}`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({category_name:args.category_name , category_image:args.category_image}),
        })
        
        if(response.ok){
            Swal.fire({
                title: "Category",
                text: "Has been updated Successfully",
                type: "success"
            });
        }
        const res = response.json();
        return res;
    }
);

export const deleteCategory = createAsyncThunk(
    'item/deleteItem',
    async (id)=>{
        
        const response =await fetch(`http://127.0.0.1:8000/api/deletecategory/${id}`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            
        })
        if(response.ok){
            Swal.fire({
                title: "Category",
                text: "Has been deleted Successfully",
                type: "success"
            });
        }
        const res = response.json();
        return res;
        
    }
)



const categorySlice = createSlice({
    name:'category',
    initialState:{categories:[]},
    extraReducers:{
        //get all Category
        [getCategory.fulfilled]:(state , action)=>{
            state.categories = action.payload;
            state.status = true
        },
        [getCategory.pending]:(state , action)=>{
            state.status = false
        },
        [getCategory.rejected]:(state , action)=>{
            state.status = null
        },

        //add new Category 
        [addCategory.fulfilled]:(state , action)=>{
            state.status = 'success send data';
            state.items.push(action.payload);
            

        },
        [addCategory.pending]:(state  )=>{
            state.status = 'pending send data';
            
        },
        [addCategory.rejected]:(state )=>{
            state.status = 'rejected send data';
        },


        //update category in api
        [updateCategory.fulfilled]:(state , action)=>{
            state.status = 'success update data';
            const {id} = action.payload;
            const item = state.items.find((item)=>item.id == id);
            item.name = action.payload.name;
            item.description = action.payload.description;
            item.image = action.payload.image;
            
        },
        [updateCategory.pending]:(state  )=>{
            state.status = 'pending update data';
            
        },
        [updateCategory.rejected]:(state )=>{
            state.status = 'rejected update data';
        },


        //delete category in api
        [deleteCategory.fulfilled]:(state , action)=>{
            state.status = 'success delete data';
            const {id} = action.payload;
             state.items = state.items.filter((item)=>item.id != id);
            
        },
        [deleteCategory.pending]:(state  )=>{
            state.status = 'pending delete data';
            
        },
        [deleteCategory.rejected]:(state )=>{
            state.status = 'rejected delete data';
        },

    }

});

export default categorySlice.reducer;