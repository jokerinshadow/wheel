import React,{Component} from 'react'
import Swiper from 'swiper'
import './index.scss'

class Banner extends Component{
    render(){
        return (
            <div className='banner swiper-container'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
            </div>
        )
    }
}

export default Banner;