



import React,{ Component } from 'react';
import { Link , NavLink , Route } from 'react-router-dom';
import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';
import './index.scss';

class Test  extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {path:'/test/test1',id:1,isActive:true,name:'子路由1'},
                {path:'/test/test2',id:2,isActive:false,name:'子路由2'},
                {path:'/test/test3',id:3,isActive:false,name:'子路由3'}
            ]
        }
        this.renderPath = this.renderPath.bind(this);
    }
    renderPath(){
        return  this.state.list.map(item=>{
           return (<Link to={item.path} key={item.id} className={item.isActive?'active':''} onClick={this.changeActive.bind(null,item.id)}>{item.name}</Link>)
        })
    }
    changeActive(id,e){
        console.log(id,e.target)
        this.state.list.forEach(item=>{
            this.setState({
                
            })
            if(item.id === id)
            {
                this.setState({

                })
            }

        })
    }
    render(){
       return( 
       <div>  test
          <NavLink to='/test/test1' className='active'>子路由1</NavLink>
          <NavLink to='/test/test2'>子路由2</NavLink>
          <br/>
            {
              this.renderPath()
            }
          <Route path='/test/test1' component={ Test1 }/>
          <Route path='/test/test2' component={ Test2 }/>
          <Route path='/test/test3' component={ Test3 }/>
         </div>) //return 后面必须紧跟() 不然会有问题;
                 //子路由在下面配即可
                 //navlink会自动切换样式
    }
} 
export default Test;

