import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import AppShowItemList from '../../components/commons/AppShowList/AppShowItemList';

class List extends Component {
    render() {
        return (
            <div>
                list
                <AppShowItemList/>
                <Appfooter/>   
            </div>
        )
    }
}

export default List;