import React, { Fragment } from "react";
import Header from "./header";





const Profile = ()=>{
    return(
        <Fragment>
           
  <div id="main-wrapper">

    <div className="page-wrapper">
    <Header/>
      
      <div className="container-fluid">
      
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor">Profile</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </div>
         
        </div>
      
        <div className="row">
          {/* Column */}
          <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
              <div className="card-body">
                <center className="m-t-30">
                  {" "}
                  <img
                    src="assets/images/users/5.jpg"
                    className="img-circle"
                    width={150}
                  />
                  <h4 className="card-title m-t-10">Hanna Gover</h4>
                  <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                  <div className="row text-center justify-content-md-center">
                    <div className="col-4">
                      <a href="javascript:void(0)" className="link">
                        <i className="icon-people" />{" "}
                        <font className="font-medium">254</font>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0)" className="link">
                        <i className="icon-picture" />{" "}
                        <font className="font-medium">54</font>
                      </a>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
          {/* Column */}
          {/* Column */}
          <div className="col-lg-8 col-xlg-9 col-md-7">
            <div className="card">
              {/* Tab panes */}
              <div className="card-body">
                <form className="form-horizontal form-material">
                  <div className="form-group">
                    <label className="col-md-12">Full Name</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Johnathan Doe"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="example-email" className="col-md-12">
                      Email
                    </label>
                    <div className="col-md-12">
                      <input
                        type="email"
                        placeholder="johnathan@admin.com"
                        className="form-control form-control-line"
                        name="example-email"
                        id="example-email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">Password</label>
                    <div className="col-md-12">
                      <input
                        type="password"
                        defaultValue="password"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">Phone No</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="123 456 7890"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">Message</label>
                    <div className="col-md-12">
                      <textarea
                        rows={5}
                        className="form-control form-control-line"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Select Country</label>
                    <div className="col-sm-12">
                      <select className="form-control form-control-line">
                        <option>London</option>
                        <option>India</option>
                        <option>Usa</option>
                        <option>Canada</option>
                        <option>Thailand</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Column */}
        </div>
       
      </div>
 
    
    </div>
   
  </div>
 


        </Fragment>

    )
}
export default Profile;