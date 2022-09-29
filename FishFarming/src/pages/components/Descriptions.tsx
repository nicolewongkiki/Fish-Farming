import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
        
            <div className="bg-pattern-effect">
                <img src="/images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;