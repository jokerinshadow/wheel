

import { BALANCE_CAR ,CHANGE_COUNTS,DELETE_GOOD,CLEAR_CART} from './const';

const actionCreator = {
    getInitialGoods(){
        return dispatch =>{
            setTimeout(()=>{
                let goods = handler.getCartGoods();
                dispatch({
                    type: BALANCE_CAR,
                    goods
                })  //dispatch作为一个参数,将action dispatch出去;
            },500)
        }
    },
    //加入购物车的操作
    balanceCar({ count,price,good_id,name,success }){
        return dispatch => {
            setTimeout(()=>{
                let goods = handler.balanceCar({name,price,count,good_id});
                 dispatch({
                     type:BALANCE_CAR,
                     goods
                 })
                 success()
            },500)
        }  
    },
    changeCounts({good_id,count,success}) {
        return dispatch => {
            setTimeout(()=>{
                    let goods = handler.changeCounts({good_id,count});
                    dispatch({
                        type:CHANGE_COUNTS,
                        goods
                    })
                    success()
            },100)
        }
    },
    deleteGood({good_id,success}){
        return dispatch =>{
            let goods = handler.deleteGood({good_id});
            dispatch({
                type:DELETE_GOOD,
                goods
            })
            success()
        }
    },
    clearCart(){
        return dispatch => {
            let goods = handler.clearCart();
            dispatch({
                type:CLEAR_CART,
                goods
            })
        }
    }
}



//目前没有后端，我们自己做处理

const  handler = {
    getCartGoods(){
        return localStorage.goods?JSON.parse(localStorage.goods) : []
    },
    balanceCar({name,price,count,good_id}){
        let goods = handler.getCartGoods();
        //判断数组中有没有加入的商品;
        let hasGood = goods.some(good=>{
            if(good.good_id === good_id) {

                good.count += count;
                return true;
            }
                return false;
        })
        if(!hasGood && count!==0) {
            goods.push({
                name,price,count,good_id
            })
        }
        localStorage.goods = JSON.stringify(goods)
        return goods;  //return，这个玩意一定记住要写!
    },
    changeCounts({good_id,count}){
        let goods = handler.getCartGoods();
        for(let i = 0;i<goods.length;i++){
            if(goods[i].good_id=== good_id)
            {
                goods[i].count = count;
                break;
            }
        }
        localStorage.goods = JSON.stringify(goods);
        return goods;
    },
    deleteGood({good_id}) {
        let goods = handler.getCartGoods();
        for(let i=0;i<goods.length;i++){
            if( goods[i].good_id === good_id ){
                goods.splice(i,1)
            }
        }
        localStorage.goods = JSON.stringify(goods);
        return goods;
    },
    clearCart(){
        let goods = [];
        localStorage.remove('goods');
        return goods;
    }
}

export default actionCreator;