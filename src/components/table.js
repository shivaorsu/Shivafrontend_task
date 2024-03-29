import React, { Fragment } from "react";
import Header from "./header";




const Table = () => {
    return (
        <Fragment>
            <div id="main-wrapper">
               
                <div className="page-wrapper">
                <Header />
  
    <div className="container-fluid">
    
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h3 className="text-themecolor">Table Basic</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="breadcrumb-item active">Table Basic</li>
          </ol>
        </div>
       
      </div>
    
      <div className="row">
        {/* column */}
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Table</h4>
              <h6 className="card-subtitle">
                Add class <code>.table</code>
              </h6>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Deshmukh</td>
                      <td>Prohaska</td>
                      <td>@Genelia</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Deshmukh</td>
                      <td>Gaylord</td>
                      <td>@Ritesh</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sanghani</td>
                      <td>Gusikowski</td>
                      <td>@Govinda</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Roshan</td>
                      <td>Rogahn</td>
                      <td>@Hritik</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Joshi</td>
                      <td>Hickle</td>
                      <td>@Maruti</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Nigam</td>
                      <td>Eichmann</td>
                      <td>@Sonu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
   
    <footer className="footer">© 2018 Adminwrap by wrappixel.com</footer>
   
  </div>

            </div>


        </Fragment>

    )
}
export default Table