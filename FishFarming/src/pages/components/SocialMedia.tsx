import React from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline social margin-t-20">
                            <li className="list-inline-item"> <a href="javascript:void(0);" className="social-icon"><i className="mdi mdi-facebook"></i></a></li>
                            <li className="list-inline-item"> <a href="javascript:void(0);" className="social-icon"><i className="mdi mdi-twitter"></i></a></li>
                            <li className="list-inline-item"> <a href="javascript:void(0);" className="social-icon"><i className="mdi mdi-linkedin"></i></a></li>
                            <li className="list-inline-item"> <a href="javascript:void(0);" className="social-icon"><i className="mdi mdi-google-plus"></i></a></li>
                            <li className="list-inline-item"> <a href="javascript:void(0);" className="social-icon"><i className="mdi mdi-dribbble"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 margin-t-30">
                        <p className="margin-b-0 contact-title"><i className="pe-7s-call"></i> &nbsp;+852 1234 7231</p>
                    </div>
                    <div className="col-lg-3 margin-t-30 text-right">
                        <p className="contact-title"><i className="pe-7s-mail-open"></i>&nbsp; Support@info.com</p>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default SocialMedia;