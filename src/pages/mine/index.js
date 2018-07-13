import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import ConnectGroup from '../../modules/group';
import Cookie from 'react-cookies';
import Appheader from '../../components/commons/Appheader';
import './index.scss';

class Mine extends Component {
    constructor(props){
        super(props);
        this.judgeLogin = this.judgeLogin.bind(this);
        this.judgeLogin();
        this.exit = this.exit.bind(this);
        this.hasUseInfo = this.hasUseInfo.bind(this);
    }

    judgeLogin (){
        if (!this.props.commons.userInfo)
        this.props.history.replace('./login')
    }
    exit(){//退出登陆
        Cookie.remove('username',{path:'/'});
        this.props.getInitialUserInfo();
        this.props.history.replace('./login');
    }
    hasUseInfo(){
        if(this.props.commons.userInfo)
        {
            return this.props.commons.userInfo.username
        }
    }
    render() {
        return (
            <div className='mine'>
                <Appheader title='个人中心'/>
                <button className='btn btn-primary'>欢迎{this.hasUseInfo()} </button>
                <button className='btn btn-danger' onClick = {this.exit}>退出登录</button>
                <Appfooter/>   
            </div>
        )
    }
}

export default ConnectGroup(Mine, ['commons'])