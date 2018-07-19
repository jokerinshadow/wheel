

import React,{ Component } from 'react';
import Appheader from  '../../components/commons/Appheader';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import ConnectGroup from '../../modules/group';
import './index.scss'


class Cart extends Component{
    constructor(props){
        super(props);
        this.computedAllNumber = this.computedAllNumber.bind(this);
        this.addCount = this.addCount.bind(this);
        this.deleteGood = this.deleteGood.bind(this);
        this.allCheck = this.allCheck.bind(this);
        this.singleCheck = this.singleCheck.bind(this);
        this.miniusCount = this.miniusCount.bind(this);
        this.clearCart =  this.clearCart.bind(this);
        this.state = {
            checked:true,
            num:1
        }
    }
    //显示登陆成功后的购物车数据
    renderCartGoods(){
        let goods = JSON.parse(localStorage.goods);
         let items =  goods.map( good =>{ //里面的return是一个元素, 这个时候并不能渲染到页面当中，需要自己将生成的新数组返回出去才可以;
            return(
                <div key = { good.good_id } className='cart-item'>
                    <div><input type="checkbox" checked={ this.state.checked }  onChange = {this.singleCheck} data-checked={this.state.checked}/></div><div>{good.name.slice(0,5)}</div><div>{good.price}</div><div><button onClick={this.miniusCount} data-id={good.good_id}>-</button>{good.count}<button onClick={this.addCount} data-id={good.good_id}>+</button></div><button onClick={this.deleteGood} data-id={good.good_id}>删除</button>
                </div> 
            )
        }) 
        let allNumber = this.computedAllNumber();
        return (
            <div>
                {items}
                总数：   <span style={{color:'red'}}>{allNumber.count}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                全部金额：<span style={{color:'red'}}>{allNumber.price*allNumber.count}</span>
                <button style = {{border:'1px solid',marginLeft:'0.3rem'}}>删除选中的项目</button>
            </div>
        )
    }
    renderContent(){
        if(!this.props.commons.userInfo)
        return this.renderLogin()
        return this.renderCartGoods()
    }
    renderLogin(){
        //如果未登陆
        return (
            <div>
                <Button type='warning'><Link to='/login'>登陆</Link></Button>
            </div>
            )
    }
    //计算总数
    computedAllNumber (){
        let allNumber = { count:0,price:0 }
        let { goods } = this.props.car;
        goods.forEach(good => {
            allNumber.count += good.count;
            allNumber.price = good.count*good.price
        });
        return allNumber
    }
    //购物车数量+
    addCount(e){
        let good_id = e.target.dataset.id;
        let goods = this.props.car.goods;
        goods.forEach((good)=>{
            if(good.good_id === good_id)
            {
                let count = good.count+1;
                console.log(count);
                this.props.changeCounts({good_id,count,success:()=>{
                    console.log('add');
                }});
            }
        })
    }
    //购物车数量-
    miniusCount(e){
        let good_id = e.target.dataset.id;
        let goods = this.props.car.goods;
        goods.forEach((good)=>{
            if(good.good_id === good_id)
            {
                let count = good.count-1;
                if(count<1) return false;
                this.props.changeCounts({good_id,count,success:()=>{
                    console.log('minius');
                }});
            }
        })
    }
    //删除good
    deleteGood(e){
        let good_id = e.target.dataset.id;
        this.props.deleteGood({good_id,success:()=>{
            console.log('delete');
        }});
    }
    //清空购物车
    clearCart(){
       this.props.clearCart();
    }
    // 全选
    allCheck(e){
        console.log(this.state.checked)
        console.log(this.state.num)
        this.setState({
            checked:!this.state.checked,
            num:++this.state.num 
        })
        console.log(this.state.checked)
        console.log(this.state.num)
        //注意 ++this.state.num 会将this.state.num 直接更改 同时还会触发render()
        // this.stat.num + 1   由于没有给this.state.num赋值,这个时候类似与微信小程序,虽然num的值被改变,还得先触发componentWillReceiveProps
        //render()之后才是最终的输出结果
        //注意：在localStorage当中,JSON.parse()用于取数据，主要是针对数组,JSON.stringfy()用于存取数据，主要针对数组;
        //对于非数组我们直接localStorage.xxx就可以取到,不能使用JSON....
    }
    //单选
    singleCheck(e){
        console.log(e.target.dataset.checked);
        this.setState({
            checked:!this.state.checked
        })
    }
    render(){
        return(
            <div className='cart'>
                <Appheader title='购物车' right = { true }/>
                <div className='container page-top'>
               <label>全选<input type="checkbox" checked={ this.state.checked } onChange={ this.allCheck} /></label> <span className='clear-cart' onClick = {this.clearCart}>清空购物车</span>
                {this.renderContent()}
                {this.state.num}

                
                </div>
            </div>
        )
    }
}

export default  ConnectGroup(Cart,['commons','car'])
