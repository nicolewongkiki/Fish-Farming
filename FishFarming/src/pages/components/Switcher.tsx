import React from 'react';

class Switcher extends React.Component {
   render() {
      return (
         <>
            <div id="style-switcher">
               <div>
                  <h3>Select your color</h3>
                  <ul className="pattern">
                     <li>
                        <a href="javascript:void(0);" className="color1" ></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color2"></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color3"></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color4"></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color5"></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color6"></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color7"></a>
                     </li>
                     <li>
                        <a href="javascript:void(0);" className="color8"></a>
                     </li>
                  </ul>
               </div>
               <div className="bottom">
                  <a href="#" className="settings"><i className="mdi mdi-settings mdi-spin"></i></a>
               </div>
            </div>
         </>
      );
   }
}
export default Switcher;