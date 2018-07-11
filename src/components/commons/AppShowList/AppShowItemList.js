import React, { Component } from "react";
import './index.scss'

class AppShowItemList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="show-item-list">
        <div className="list">
          <img src="https://img0.tking.cn/assets/img/chndHAXs6y.jpg" />
          <div className="right-column">
            <div className="discount">
                   <i>9.6</i>
                   <i>折起</i>
            </div>
            <div className="show-name">
              【成都站】2018张韶涵“旅程”世界巡回演唱会
            </div>
            <div className="show-time">2018.08.04 19:30</div>
            <div className="show-avenue">成都双流体育场</div>
            <div className="other-detail">
              <div className="left-part">
                <div className="tag sell">售票中</div>

                <div className="tag seat-selectable">可选座</div>
              </div>
              <div className="right-part">
                <div className="price">
                  <span className="number">389</span>
                  元起
                </div>
              </div>
              <div className="advertise">
                <div className="decorate-icon" />
                好幸运，她是亲爱的 Angela。
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppShowItemList;
