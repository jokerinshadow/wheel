import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import AppShowItemList from '../../components/commons/AppShowList/AppShowItemList';
import Appcommonheader from '../../components/commons/Appcommonheader';

class List extends Component {
    render() {
        return (
            <div>
                <Appcommonheader filter={false}/>
                list
                <AppShowItemList/>
                <Appfooter/>   
            </div>
        )
    }
}

export default List;