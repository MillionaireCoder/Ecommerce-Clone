import React,{useState} from "react";
import ReactStars from  "react-rating-stars-component";
import { Link, Navigate , useNavigate } from "react-router-dom";
import { BsHeart , BsHeartFill} from "react-icons/bs";
import { useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";

import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import CompareProduct from "../pages/CompareProduct";












export default function ProductCard(props) {
  const { grid } = props;
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const state = { grid: grid };
  const handleClick = () => {
    setIsLiked(!isLiked);
  
  };
  const{ brand,category,color,description,images,price,quantity,ratings,slug,sold,tags,title,totalrating,}=grid
  // console.log(grid)
// const{title,slug,price,description,quantity,color,images,totalrating,rating}=grid
  let location = useLocation();
  const [mySet1, setMySet1] = useState(new Set());

  const handleAddToSet = (grid) => {
    setMySet1(new Set([...mySet1, grid]));
  };


  

  return (
    <>
      <div
        className={` ${
          location.pathname === "/product"
            ? `gr-${grid}  product-card `
            : "col-md-3 col-sm-6 product-card "
        } `}
      >
   
        <div className="card  position-relative card-style" style={{ width: "100%" }}>
        <div className="row d-flex">

        <div className="col-4 col-sm-12 ">
        <button className="border-0 bg-transparent" onClick={() => {
            handleClick();
            const cart=[];
            // cart.push(grid)
            // axios.post(`http://localhost:5000/api/user/wishlist`,cart,config)
            navigate("/app/wishlist", { state: state });
}}

        >
      {isLiked ? (
        <BsHeartFill className="heart-icon position-absolute  " style={{color:"red"}}  />
      ) : (
        <BsHeart className="heart-icon position-absolute" />
      )}
    </button>
    <Link to="/app/products"state={grid}>  <img
            src={images[0].url}
            className="card-img-top img-fluid product-image"
            alt="product "
          /> </Link>
        </div>
        
        <div className="col-8 col-sm-12 ">
        <div className="card-body px-4 ">
            <h6>{brand}</h6>
            <h5 className="card-title">
             {title}
            </h5>

            <ReactStars
              count={5}
              size={30}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">₹{price}</p>
          </div>
        </div>
           
        </div>
          
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
            <button className="border-0 bg-transparent" onClick={() => handleAddToSet(grid)}>
        <img src={prodcompare} alt="addcart" />
        {false ? <CompareProduct mySet={mySet1} /> : ""}
      </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
