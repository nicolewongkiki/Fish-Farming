import React from 'react';

class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                
            <div className="features-img features-right text-right">
                        <img src="/images/AquaMon1.png" alt="macbook image" className="img-fluid" />
                   </div>   
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#HowCanItWorks" className="nav-link">How Can It Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#features" className="nav-link">Benefits</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Location" className="nav-link">Location</a>
                        </li>
                      
                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light"><a href="/EmployeeIndex">Login</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;

