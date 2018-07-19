import React, { Component } from "react";
import './index.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AppShowItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show_list:[]
    }
    this.renderList = this.renderList.bind(this); 
    this.pushDetail = this.pushDetail.bind(this);
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
  pushDetail(id,e){
     //根据父组件传过来的数据，编程式导航....
     //data-id:对循环也是有用的,如果只有一个标签采用e.target.dataset.id即可获取; 可以接受一个数组，只是输出的是字符串，需要e.target.dataset.id.split(',')
     //将它转换为数组使用,如果一个div中有多个标签,采用e.currentTarget.dataset.id来获取;
     //this.pushDetail.bind(null,id) 也可以传值,并且可以传多个值,传过来的参数依次为第一个，第二个。。最后接受e;
     this.props.history.push('/detail/'+e.currentTarget.dataset.id);
  }
  renderList(){
      let { show_list } = this.state;
        return (
          <div>
             {
               show_list.map((item)=>(   
            <div className="list" key = {item.showOID} onClick = {this.pushDetail.bind(null,item.showOID)} data-id={item.showOID} ref = {el =>this.item=el}>
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
     
                     <div className="tag seat-selectable" >{item.showType.displayName}</div>
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
             </div>
             ))
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
