import React from 'react';

class Benefits extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="features">
        <div className="container" >
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Benefits</h3>
                        <h4 className="text-muted web-desc">Integrated dashboard to display all fishponds.</h4>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className=""><h4>Real time water quality</h4></li>
                            <li className=""><h4>Feeding recording</h4></li>
                            <li className=""><h4>Intelligent environment monitoring</h4></li>
                            <li className=""><h4>Warning on problems</h4></li>
                        </ul>
                        <a href="javascript:void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="/images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Benefits;