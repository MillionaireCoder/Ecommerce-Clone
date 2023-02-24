import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
  <>
    <Meta title="Reset Password"></Meta>
      <BreadCrumb title="Reset Password" />
      <div className="Forget-password-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div class="row d-flex align-items-center justify-content-center">
          <div className=" card rounded-5 col-12 col-sm-6 col-md-4 mx-auto  p-4 mx-5">
              <h4 className='mb-3 mt-2 text-center'>Reset Password</h4>
              <form action="" className="d-flex flex-column justify-content-around gap-15 mb-2">
               
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control bg-light border-0 text-dark"
                  placeholder="New Password"
                  aria-label="Name"
                  id="New_password"
                ></input>
                  <label for="ew_password">New Password</label>
                </div>

                <div className="form-floating">
                <input
                  type="password"
                  className="form-control bg-light border-0 text-dark"
                  placeholder="Confirm Password"
                  aria-label="Name"
                  id="Confirm_password"
                ></input>
                  <label for="ew_password">Confirm Password</label>
                </div>
              </form>
             
              <div className=' d-flex justify-content-center gap-30 mt-4'>
            
              <Link to="" className="button" type='submit'>
             OK
            </Link>
          

            
              </div>
             


          </div>
          </div>
        </div>
      </div>
  </>
  )
}
