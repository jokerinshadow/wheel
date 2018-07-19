import React,{Component} from 'react'
import Swiper from 'swiper'
import './index.scss'
import axios from 'axios'

class RecentShow extends Component{
    constructor(props){
        super(props)

        this.state = {
            recents: []
        }
    }
    getRecentShowData(){
        axios.get('https://m.moretickets.com/showapi/pub/site/5101/recentShows?offset=0&length=10&siteCityOID=5101&time=1531313510488&src=m_web')
        .then(res => {
            this.setState({recents: res.data.result.data})
            console.log(res.data.result.data)
        })
    }
    componentDidMount(){
        this.getRecentShowData()
    }
    renderRecent(){
        let { recents } = this.state;
        return recents.map(item => {
            return (
                <div className="swiper-slide"  key={item.showOID}>
                    <img src={item.posterURL}/>
                </div>
            )
        })
    }
    componentDidUpdate(props,state){
        if (this.state.recents !== state.recents) {
            new Swiper(this.el,{
                freeMode: true,
                slidesPerView: 'auto',
                freeModeSticky: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    dragSize:30
                }
            })
        }
    }
    render(){
        return (
            <div className='recent'>
                <div className='recent-title'>
                近期热门
                    <span>查看更多</span>
                </div>
                <div ref={el => this.el = el} className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.renderRecent()}
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        )
    }
}

export default RecentShow;