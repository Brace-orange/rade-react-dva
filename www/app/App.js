import React from "react";
import {connect} from "dva";
import classnames from "classnames"
import "./styles/less.less";

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    //草写
    const colors=["red","blue","green","brown"];
    const curcolor="blue";
    return <div className="da1">
              <div className="rightwrap">
              <div className="title">
                  <h1 className="mz">宝马</h1>
                  <h3>2017新款</h3></div>
              <div className="picker">
                  <ul className="album">
                     <li className="cur">外观</li>
                     <li>内饰</li>
                     <li>细节</li>
                  </ul>
                  <div className="cl"></div>
                  <ul className="colorss">
                     <li></li>
                     {
                       colors.map((item,index)=>{
                         return <li key={index}
                          style={{"backgroundColor" : item}}
                          className={classnames({"cur":curcolor==item})}
                          >*</li>
                       })
                     }
                  </ul></div>
                  <div className="cl"></div>
            <div className="picNav">
               <ul>
                <li className="cur" ><img src="./images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKgFV1kUMn-AUFbJAATQUjKGAc4281.jpg"/></li>
                <li><img src="./images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKgFV1kUMn-AUFbJAATQUjKGAc4281.jpg"/></li>
                <li><img src="./images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKgFV1kUMn-AUFbJAATQUjKGAc4281.jpg"/></li>
                <li><img src="./images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKgFV1kUMn-AUFbJAATQUjKGAc4281.jpg"/></li>
                <li><img src="./images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKgFV1kUMn-AUFbJAATQUjKGAc4281.jpg"/></li>
                <li><img src="./images/Corolla/blue/center/1024x0_1_q87_autohomecar__wKgFV1kUMn-AUFbJAATQUjKGAc4281.jpg"/></li>
               </ul>
               <ol >
                <li
                style={{"width":100/4 +"%"}}
                 className={classnames({"cur":true})}
                >_</li>
                  <li style={{"width":100/4 +"%"}}>_</li>
                  <li style={{"width":100/4 +"%"}}>_</li>
                  <li style={{"width":100/4+"%"}}>_</li>
               </ol>
            </div>

            </div>
         </div>
  }
}

export default connect()(App);
