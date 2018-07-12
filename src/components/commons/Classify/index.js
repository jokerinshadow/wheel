import React,{Component} from 'react'
import './index.scss'

class Classify extends Component{
    constructor (props) {
        super(props) 
        this.state = {
            classies: [
                {id: 1, title: '演唱会', image_url: 'https://m.moretickets.com/images/homepage/YanChangHui-5b6a060d93.png'},
                {id: 2, title: '话剧歌剧', image_url: 'https://m.moretickets.com/images/homepage/HuaJuGeJu-cf15fa6cd4.png'},
                {id: 3, title: '体育赛事', image_url: 'https://m.moretickets.com/images/homepage/TiYuSaiShi-578e93eda8.png'},
                {id: 4, title: '音乐会', image_url: 'https://m.moretickets.com/images/homepage/YinYueHui-11cb2d5d0d.png'},
                {id: 5, title: '展览休闲', image_url: 'https://m.moretickets.com/images/homepage/XiuXianZhanLan-45bee1035f.png'},
                {id: 6, title: '舞蹈芭蕾', image_url: 'https://m.moretickets.com/images/homepage/WuDaoBaLei-706ea524c2.png'},
                {id: 7, title: '儿童亲子', image_url: 'https://m.moretickets.com/images/homepage/ErTongQinZi-07fb492950.png'},
                {id: 8, title: '曲艺杂谈', image_url: 'https://m.moretickets.com/images/homepage/QuYiZaTan-6d4597538c.png'}
            ]
        }
    }
    renderClassifyItems () {
        let { classies } = this.state
        return classies.map(item => <ClassifyItems data = { item } key = {item.id}/>)
    }
    render () {
        return (
            <div className="home-classify">
                { this.renderClassifyItems() }
                <div className='footer-ball'>
                    <img src="https://img0.tking.cn/assets/img/BRMrixzjAH.jpg"/>
                </div>
            </div>
        )
    }
}

const ClassifyItems = (props) => {
    let { image_url, title } = props.data
    return (
        <div className="home-classify-item">
            <img src={ image_url } alt=""/>
            <span>{ title }</span>
        </div>
    )
}

export default Classify;