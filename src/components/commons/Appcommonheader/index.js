import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import axios from 'axios';
import './index.scss';

class Appcommonheader extends Component{
    constructor(props){
        super(props)

        this.state = {
            hot_cityname: [],
            all_cityname: []
        }
    }
    getCityName(){
        axios.get('https://m.moretickets.com/showapi/cities?time=1531446295465&src=m_web').then(res =>{
            this.setState({
                hot_cityname: res.data.result.hotCities, 
                all_cityname: res.data.result.allCities
            })
        })
    }
    componentDidMount(){
        this.getCityName();
    }
    renderFilter(){
        let {filter} = this.props;
        if (filter) {
            return (
                <div className='header-rili'>
                    <i className='glyphicon glyphicon-calendar'></i>
                </div>
            )
        }
    }
    render(){
        return (
            <div className='app-common-header'>
                <NavLink to='/cities' className='herder-address'>
                    成都
                    <div className='triangle'></div>
                </NavLink>
                <div className='header-search'>
                    <i className='glyphicon glyphicon-search'></i>
                    共有5849场折扣演出在售
                </div>
                {this.renderFilter()}
            </div>
        )
    }
}

export default Appcommonheader;