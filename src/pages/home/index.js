import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import Appcommonheader from '../../components/commons/Appcommonheader';
import Banner from '../../components/commons/Banner'

class Home extends Component {
    render() {
        return (
            <div>
                <Appcommonheader filter={true}/>
                <Banner/>
                home
                <Appfooter/>   
            </div>
        )
    }
}

export default Home;