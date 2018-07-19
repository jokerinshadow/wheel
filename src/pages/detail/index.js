

import React,{ Component } from 'react';
import Appheader from '../../components/commons/Appheader';
import './index.scss';
import ConnenctGroup from '../../modules/group'

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            price:10,
            num:4,
            count:0,
            good_id:this.props.match.params.id,
            name:this.props.match.params.id
        }
        this.addCar = this.addCar.bind(this);
        this.balanceCar = this.balanceCar.bind(this);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
    }
    addCar(){
    //   判断是否登陆
        if(!this.props.commons.userInfo){
            this.props.history.replace('/login')
            return false;
        }
       let { num,count } = this.state;
       if( num>0 ){
           num--;
           count++;
           this.setState({
               num:num,
               count:count
           })
       }
    }
    //结算购物车
    balanceCar(e){
        //   判断是否登陆
        if(!this.props.commons.userInfo){
            this.props.history.replace('/login');
            return false;
        }
        let { name,price,count,good_id } = this.state;
        this.props.balanceCar({
            name,price,count,good_id,
            success:()=>{
                alert('加入成功!');
                this.props.history.push('/cart/'+good_id)
            }
        })
    }
    //加/减
    add(){
        let { count,num } = this.state;
        if(count<4) 
        {
            this.setState({
                count:++count,
                num:--num
            })
        }else{ return false;}
    }
    minus(){
        let { count,num } = this.state;
        if(count>0) 
        {
            this.setState({
                count:--count,
                num:++num
            })
        }else{ return false;}

    }
    render(){
        return(
            <div>
                    <div className='detail'>
                        < Appheader right = {true} title='演出详情'/>
                        <div className='container'>
                            <div className='pord'>
                                商品id:{this.props.match.params.id}<br/>
                                商品价格:$<span className='price'>{this.state.price}</span><br/>
                                剩余数量：{this.state.num}<br/>
                                <button className='btn btn-dark' onClick={this.add}>+</button><button className='btn btn-dark' onClick={this.minus}>-</button>
                                    <div className='button'>
                                        <button className='btn btn-danger' onClick={ this.addCar }>加入购物车</button>
                                        <button className='btn btn-primary' onClick = {this.balanceCar} >结算购物车</button>
                                    </div>
                                    <span>已加入<span className='count'>{this.state.count}</span>份</span>    
                            </div>
                        </div>
                    </div>

            </div>

        )
    }
}

export default ConnenctGroup(Detail,['commons','car']);