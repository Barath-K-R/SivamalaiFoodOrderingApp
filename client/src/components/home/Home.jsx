import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import Pagination from "../Pagination/Pagination";
import FoodCard from "../FoodCard/FoodCard";
import { BsSearch } from "react-icons/bs";

import "./Home.css";
const Home = () => {
  const [foods, setfoods] = useState([]);
  const [displayFoods, setDisplayFoods] = useState(foods)
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate=useNavigate()
  useEffect(() => {
    const getallproducts=async()=>{
      const list=await axios.get("http://localhost:5000/api/product")
      setfoods(list.data)
      setDisplayFoods(list.data)
    }
    // const authUser=JSON.parse(sessionStorage.getItem('authuser'))
    // if(authUser.admin==="true")
    // setIsAdmin(true)
    getallproducts()
      
  }, [])
  
  const handleChange = (e) => {
   
    setDisplayFoods(() => {
      return foods.filter((food) => {
        if (food.name.toLowerCase().includes(e.target.value.toLowerCase())) return food;
      });
    });
  };
  return (
    <div className="home-container">
      <div className="searchBar-container">
        <div className="searchbarinput-container">
          <BsSearch />
          <input type="text" className="search-food" onChange={handleChange} />
        </div>

        {isAdmin && <button onClick={()=>{navigate('/addproducts')}}>Add Product</button>}
        
      </div>
      <h1>Today's Items</h1>
      <div className="foodList-container">
        {displayFoods.map((food) => {
          return <FoodCard key={food._id} food={food} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
