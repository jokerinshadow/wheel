import React, { Component } from "react";
import './index.scss';
import axios from 'axios';

class AppShowItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show_list:[]
    }
    this.renderList = this.renderList.bind(this); 
  }
  componentWillMount(){
      axios.get(
'https://m.moretickets.com/showapi/pub/site/5101/active_show?offset=10&length=10&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=5101&siteCityOID=5101&time=1531311619070&src=m_web'
      ).then((res)=>{
          this.setState({
            show_list:res.data.result.data
          })
      }).catch(()=>{
        console.log('获取数据失败！')
      })
  }
  renderList(){
      let { show_list } = this.state;
        return (
          <div>
             {
               show_list.map((item)=>(      <div className="list" key = {item.id}>
               <img src={item.posterURL} />
               <div className="right-column">
                 <div className="discount">
                        <i>{item.discount}</i>
                        <i>折起</i>
                 </div>
                 <div className="show-name">
                   {item.showName}
                 </div>
                 <div className="show-time">{item.latestShowTime}</div>
                 <div className="show-avenue">{item.venueName}</div>
                 <div className="other-detail">
                   <div className="left-part">
                     <div className="tag sell">{item.showStatus.displayName}</div>
     
                     <div className="tag seat-selectable">{item.showType.displayName}</div>
                   </div>
                   <div className="right-part">
                     <div className="price">
                       <span className="number">{item.minPrice}</span>
                       <span>元起</span>
                     </div>
                   </div>
                   <div className="advertise">
                     <div className="decorate-icon" />
                       {item.advertise}
                   </div>
                 </div>
               </div>
             </div>))
             }
          </div>
        )
  }
  render() {
    return (
      <div className="show-item-list">
         {this.renderList()}
      </div>
    );
  }
}

export default AppShowItemList;
