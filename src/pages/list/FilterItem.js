

import React,{ Component } from 'react';
import './index.scss';


class FilterItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = 'filter-item'>
                <div className='sort' onClick={this.props.change}>推荐排序<div className='triangle'></div></div><span>|</span><div className='time'>全部时间<div className='triangle'></div></div>
            </div>
        )
    }

}

export default FilterItem; 