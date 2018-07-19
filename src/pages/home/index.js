import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import Appcommonheader from '../../components/commons/Appcommonheader';
import Banner from '../../components/commons/Banner';
import Classify from '../../components/commons/Classify';
import RecentShow from '../../components/commons/RecentShow';

class Home extends Component {
    render() {
        return (
            <div>
                <Appcommonheader filter={true}/>
                <Banner/>
                <Classify/>
                <RecentShow/>
                home
                <Appfooter/>   
            </div>
        )
    }
}

export default Home;