

import React,{ Component } from 'react'
import Swiper from 'swiper';
class ShowTimeTypes extends Component {
        constructor(props){
            super(props);
            this.renderSlides = this.renderSlides.bind(this);
        }
       renderSlides(){
            let { types } = this.props;
            return types.map(item =>(
                <div key={ item.id } className='swiper-slide swiper-slide-next'> { item.title }</div>
            ))
       }
        render(){
            return(
                <div className='main'>
                    <div ref ={el => this.el = el} className = 'swiper-container show-types'>
                        <div className='swiper-wrapper'>
                            {this.renderSlides()}
                        </div>
                     </div>
                </div>

            )
        }
        componentDidMount(props,state){
            var navSwiper = new Swiper(this.el,{
                freeMode:true,
                slidesPerView:'auto',
                freeModeSticky:true
            })
        }
}
ShowTimeTypes.defaultProps = {
    types:[
        {id:1,title:'全部'},
        {id:2,title:'演唱会'},
        {id:3,title:'话剧歌剧'},
        {id:4,title:'体育赛事'},
        {id:5,title:'音乐会'},
        {id:6,title:'展览休闲'},
        {id:7,title:'舞蹈芭蕾'},
        {id:8,title:'儿童亲子'},
        {id:9,title:'曲艺杂谈'}
    ]
}

export default ShowTimeTypes;