import React,{Component} from 'react'
import Swiper from 'swiper'
import './index.scss'
import axios from 'axios'

class NewShow extends Component{
    constructor(props){
        super(props)

        this.state = {
            news: []
        }
    }
    getNewShowData(){
        axios.get('https://m.moretickets.com/showapi/pub/presale_shows?offset=0&length=10&siteOID=58a2bb1d0cf273b891c85e8f&siteCityOID=5101&time=1531381500207&src=m_web')
        .then(res => {
            this.setState({news: res.data.result.data})
        })
    }
    componentDidMount(){
        this.getNewShowData()
    }
    renderNew(){
        let {news} = this.state;
        return news.map(item => {
            return (
                <div className="swiper-slide"  key={item.showOID}>
                    <img src={item.posterURL}/>
                </div>
            )
        })
    }
    componentDidUpdate(props,state){
        if (this.state.news !== state.news) {
            new Swiper(this.el,{
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows : false
                }
            })
        }
    }
    render(){
        return (
            <div className='new'>
                <div className='new-title'>
                新演推荐
                    <span>查看更多</span>
                </div>
                <div ref={el => this.el = el} className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.renderNew()}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewShow;