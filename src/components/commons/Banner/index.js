import React,{Component} from 'react'
import Swiper from 'swiper'
import './index.scss'
import axios from 'axios'

class Banner extends Component{
    constructor(props){
        super(props)

        this.state = {
            banner: []
        }
    }
    getBannerData(){
        axios.get('https://m.moretickets.com/showapi/pub/site/58a2bb1d0cf273b891c85e8f/banner/app?siteCityOID=5101&time=1531306409470&src=m_web')
        .then(res => {
            // console.log((res.data.result.data).splice(1))
            let ban = (res.data.result.data).splice(1)
            this.setState({banner: ban})
        })
    }
    componentDidMount(){
        this.getBannerData()
    }
    renderBanner(){
        let { banner } = this.state;
        return banner.map(item => {
            return (
                <div className="swiper-slide"  key={item.bannerOID}>
                    <img src={item.posterUrl}/>
                </div>
            )
        })
    }
    componentDidUpdate(props,state){
        if (this.state.banner !== state.banner) {
            new Swiper(this.el,{
                loop:true,
                autoplay:true
            })
        }
    }
    render(){
        return (
            <div className='banner swiper-container'>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
            </div>
        )
    }
}

export default Banner;