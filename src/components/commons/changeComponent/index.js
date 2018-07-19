

import React,{ Component } from 'react';
import './index.scss';
import CommonChange from './CommonChange';

class Change extends Component{
    render(){
        return (
            <div>
                <p><span>组件一</span><span>组件二</span></p>
                <CommonChange title='我是第一' id={1} left = 'left1'></CommonChange>
                <CommonChange title='我是第二' id={2} left = 'left2'></CommonChange>

            </div>
        )
    }
}

export default Change;