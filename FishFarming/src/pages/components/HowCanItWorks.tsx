import React from 'react';

class HowCanItWorks extends React.Component {
    
  render() {
  	return (
        <section className="section pt-5" id="HowCanItWorks">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">How Can it Works</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary"><h4>In this project, we provided detailed use case and dynamic diagram. Also, conduct test
                        to our system</h4></p>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary"><h4>The main users of the proposed platform to be developed include:</h4></p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="HowCanItWorks-box text-center hover-effect">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">Internal User</h4>
                            <h4 className="padding-t-15 text-muted">Fish Manager & Fish Feeder</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="HowCanItWorks-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15"> Public User</h4>
                            <h4 className="padding-t-15 text-muted text-align-left">Importer : Supplier,Fishmongers,Food Processing Plants</h4>
                            <h4 className="padding-t-15 text-muted text-align-center">Customer,Agriculture, Fisheries and Conservation Department</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="HowCanItWorks-box text-center hover-effect">
                            <i className="pe-7s-piggy text-custom"></i>
                            <h4 className="padding-t-15">IT</h4>
                            <h4 className="padding-t-15 text-muted">Administrator</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
  	);
  }
}
export default HowCanItWorks;