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
        axios.get(this.props.url)
        .then(res => {
            this.setState({recents: res.data.result.data})
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
                    <span className='show-name'>{item.showName}</span>
                    <span className='short-showdate'>{item.shortShowDate}</span>
                    <p className='price'>
                        <span className='number'>{item.minPrice}</span>元起
                    </p>
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
                    dragSize:100,
                    hide:true
                }
            })
        }
    }
    render(){
        return (
            <div className='recent'>
                <div className='recent-title'>
                {this.props.title}
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