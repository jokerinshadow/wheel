import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import Appcommonheader from '../../components/commons/Appcommonheader';

class Home extends Component {
    render() {
        return (
            <div>
                <Appcommonheader/>
                home
                <Appfooter/>   
            </div>
        )
    }
}

export default Home;