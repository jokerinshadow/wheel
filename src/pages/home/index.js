import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import Appcommonheader from '../../components/commons/Appcommonheader';
import Banner from '../../components/commons/Banner';
import Classify from '../../components/commons/Classify';
import RecentShow from '../../components/commons/RecentShow';
import NewShow from '../../components/commons/NewShow';

import './index.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <Appcommonheader filter={true}/>
                <Banner/>
                <Classify/>
                <RecentShow title="近期热门" url='https://m.moretickets.com/showapi/pub/site/5101/recentShows?offset=0&length=10&siteCityOID=5101&time=1531313510488&src=m_web'/>
                <NewShow/>
                <RecentShow title="演唱会" url='https://m.moretickets.com/showapi/pub/site/5101/active_show?offset=20&length=10&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=5101&siteCityOID=5101&time=1531388280301&src=m_web'/>
                <RecentShow title="话剧歌剧" url='https://m.moretickets.com/showapi/pub/site/5101/active_show?offset=30&length=10&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=5101&siteCityOID=5101&time=1531396036122&src=m_web'/>
                <RecentShow title="展览休闲" url='https://m.moretickets.com/showapi/pub/site/5101/active_show?offset=40&length=10&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=5101&siteCityOID=5101&time=1531396139531&src=m_web'/>
                <div className='blank'></div>
                <Appfooter/>   
            </div>
        )
    }
}

export default Home;