import React, { Fragment } from "react";
import Header from "./header";
import Graphic from "./graphic";
import Crypto from "./crypto";
import Wallet from "./wallet";

const Home = () => {
    return (
        <Fragment>
            
            <div id="main-wrapper">
           
               
                <div className="page-wrapper">
                <Header/>
                   
                    <div className="container-fluid">
                   
                        <div className="row page-titles">
                            <div className="col-md-5 align-self-center">
                                <h3 className="text-themecolor">Dashboard</h3>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0)">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                           
                        </div>

                        <Graphic />
                        
                        <div className="row" >
                            {/* Column */}
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <Crypto />



                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            {/* Column */}

                        </div>
                      
                        <div className="row">
                            {/* Start Notification */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card card-body mailbox">
                                    <h5 className="card-title">Wallet</h5>
                                    <div
                                        className="message-center ps ps--theme_default ps--active-y"
                                        
                                    >
                                        <Wallet/>
                                    </div>
                                </div>
                            </div>
                            {/* End Notification */}
                            {/* Start Feeds */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Feeds</h5>
                                        <ul className="feeds">
                                            <li>
                                                <div className="bg-light-info">
                                                    <i className="fa fa-bell-o" />
                                                </div>{" "}
                                                You have 4 pending tasks.{" "}
                                                <span className="text-muted">Just Now</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-success">
                                                    <i className="fa fa-server" />
                                                </div>{" "}
                                                Server #1 overloaded.
                                                <span className="text-muted">2 Hours ago</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-warning">
                                                    <i className="fa fa-shopping-cart" />
                                                </div>{" "}
                                                New order received.<span className="text-muted">31 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-danger">
                                                    <i className="fa fa-user" />
                                                </div>{" "}
                                                New user registered.<span className="text-muted">30 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-inverse">
                                                    <i className="fa fa-bell-o" />
                                                </div>{" "}
                                                New Version just arrived.{" "}
                                                <span className="text-muted">27 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-info">
                                                    <i className="fa fa-bell-o" />
                                                </div>{" "}
                                                You have 4 pending tasks.{" "}
                                                <span className="text-muted">Just Now</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-danger">
                                                    <i className="fa fa-user" />
                                                </div>{" "}
                                                New user registered.<span className="text-muted">30 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-inverse">
                                                    <i className="fa fa-bell-o" />
                                                </div>{" "}
                                                New Version just arrived.{" "}
                                                <span className="text-muted">27 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-light-primary">
                                                    <i className="fa fa-cog" />
                                                </div>{" "}
                                                You have 4 pending tasks.{" "}
                                                <span className="text-muted">27 May</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Feeds */}
                        </div>
                     
                    </div>
               
                    <footer className="footer"> © 2018 Adminwrap by wrappixel.com </footer>
                 
                </div>
               
            </div>


        </Fragment>

    )
}
export default Home