import React, {Component} from 'react';
import './index.scss';

class Appcommonheader extends Component{
    render(){
        return (
            <div className='app-common-header'>
                <div className='herder-address'>
                    成都
                    <div className='triangle'></div>
                </div>
                <div className='header-search'>
                    <i className='glyphicon glyphicon-search'></i>
                    共有5849场折扣演出在售
                </div>
                <div className='header-rili'>
                    <i className='glyphicon glyphicon-film'></i>
                </div>
            </div>
        )
    }
}

export default Appcommonheader;