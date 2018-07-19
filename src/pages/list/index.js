import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import AppShowItemList from '../../components/commons/AppShowList/AppShowItemList';
import Appcommonheader from '../../components/commons/Appcommonheader';
import ShowiTimeTypes from './ShowTimeType';
import './index.scss';
import FilterItem from './FilterItem';
import ClickMore from '../../components/commons/ClickMore';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:1
        }
        this.change = this.change.bind(this);
    }
    change(e){
        this.setState({
            num:e.target.innerText
        })
    }
    render() {
        console.log(this.state.num)
        return (

            <div>
                <Appcommonheader filter={false}/>
                <ShowiTimeTypes/>
                <FilterItem  change = {this.change}/>
                <AppShowItemList location = {this.props.location} history = {this.props.history}/>
                <Appfooter/>   
                <ClickMore/>
            </div>
        )
    }
}

export default List;