import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './index.scss';

class AppFooter extends Component {
  constructor (props) {
      super(props);
      this.state = {
                navs :[
                    {id:1,title:'首页',icon:'',path:'/',className:'glyphicon glyphicon-home'},
                    {id:2,title:'演出',icon:'',path:'/list',className:'glyphicon glyphicon-facetime-video '},
                    {id:3,title:'我的',icon:'',path:'/mine',className:'glyphicon glyphicon-user'} 
                ]
      }
      this.changeNav = this.changeNav.bind(this);
  }
  changeNav(){
      console.log('haha');
  }
  render() {
    return (
      <div className="bottom-nav">
            {this.state.navs.map(item => (<FooterNavItem key={item.id} data = {item} onClick = {this.changeNav}/>))}     
      </div>
    );
  }
}
//无状态组件
const FooterNavItem = ({data})=>{
    return (
        <NavLink  to = {data.path} className ='nav-item active'>
            <i className = {data.className}></i>
            <span>{data.title}</span>
        </NavLink>
    )

}

export default AppFooter;
