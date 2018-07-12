import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import AppShowItemList from '../../components/commons/AppShowList/AppShowItemList';
import Appcommonheader from '../../components/commons/Appcommonheader';
import ShowiTimeTypes from './ShowTimeType';
import './index.scss';
import FilterItem from './FilterItem';
import ClickMore from '../../components/commons/ClickMore';

class List extends Component {
    render() {
        return (
            <div>
                <Appcommonheader filter={false}/>
                <ShowiTimeTypes/>
                <FilterItem/>
                <AppShowItemList/>
                <Appfooter/>   
                <ClickMore/>
            </div>
        )
    }
}

export default List;