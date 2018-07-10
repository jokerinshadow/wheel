import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './index.scss';

class AppFooter extends Component {
  constructor (props) {
      super(props);
      this.state = {
                navs :[
                    {id:1,title:'首页',icon:'',path:'/'},
                    {id:2,title:'演出',icon:'',path:'/list'},
                    {id:3,title:'我的',icon:'',path:'/mine'} 
                ]
      }
  }
  render() {
    return (
      <div className="app-footer">
            {this.state.navs.map(item => (<FooterNavItem key={item.id} data = {item}/>))}
            
            <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
      </div>
    );
  }
}
//无状态组件
const FooterNavItem = ({data})=>{
    return (
        <NavLink  to = {data.path} className ='nav-item'>
            <i className = ''></i>
            <span>{data.title}</span>
        </NavLink>
    )

}

export default AppFooter;
