import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import CompareProductCard from '../components/CompareProductCard';
import Meta from "../components/Meta";

export default function CompareProduct(props) {
  console.log(props.mySet);
  return (
    <>
        <Meta title="Compare Products"></Meta>
        <BreadCrumb title="Compare Products" />
        <div className="compare-product-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                 <CompareProductCard/>
                 <CompareProductCard/>
                 
                </div>
            </div>
        </div>
    </>
  )
}
