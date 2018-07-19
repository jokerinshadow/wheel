import React,{Component} from 'react';
import './index.scss';
import axios from 'axios';
import Appheader from '../Appheader';
import ConnectGroup from '../../../modules/group';

class Cities extends Component{
    constructor(props){
        super(props)

        this.state = {
            hot_cities: [],
            all_titles: [],
        }
        this.changeCityId = this.changeCityId.bind(this)
    }
    getCitiesData(){
        axios.get('https://m.moretickets.com/showapi/cities?time=1531446295465&src=m_web').then(res =>{
            this.setState({
                hot_cities: res.data.result.hotCities, 
                all_titles: res.data.result.allCities
            })
        })
    }
    componentDidMount(){
        this.getCitiesData()
    }
    renderHotCity(){
        let {hot_cities} = this.state;
        return hot_cities.map(item => {
            return (
                <div className='city hot-city' key={item.cityOID} data-id={item.cityOID} onClick={this.changeCityId}>{item.cityName}</div>
            )
        })
    }
    renderAllTitle(){
        let {all_titles} = this.state;
        return all_titles.map(item => {
            return (
                <div className='all-cities' key={item.title}>
                    <div className='title'>{item.title}</div>
                    {item.cities.map(element => {
                        return (
                            <div className='all-city' key={element.cityOID}>
                                <div className='city-item' data-id={element.cityOID} onClick={this.changeCityId}>{element.cityName}</div>
                            </div>
                        )
                    })}
                </div>
            )
        })
    }
    changeCityId(e){
        this.props.changeCityId(e.target.dataset.id)
        console.log(e.target.dataset.id)
    }
    render(){
        return (
            <div className='cities'>
                <Appheader title='选择城市'/>
                <div className='select-city'>
                    <div className='dingwei'>定位城市</div>
                    <div className='city selected-city'>成都</div>
                    <div className='dingwei'>最近访问城市</div>
                    <div className='city recent-city'>上海</div>
                    <div className='dingwei'>热门城市</div>
                    <div className='hot-cities'>
                        {this.renderHotCity()}
                    </div>
                    {this.renderAllTitle()}
                    <div className='sitebar-city'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectGroup(Cities,['commons', 'cities'])