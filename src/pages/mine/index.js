import React,{ Component } from 'react';
import Appfooter from  '../../components/commons/Appfooter';
import ConnectGroup from '../../modules/group';

class Mine extends Component {
    constructor(props){
        super(props);
        this.judgeLogin = this.judgeLogin.bind(this);
        this.judgeLogin();
    }

    judgeLogin (){
        if (!this.props.commons.userInfo)
        this.props.history.replace('./login')
    }
    render() {
        return (
            <div>
                mine
                <Appfooter/>   
            </div>
        )
    }
}

export default ConnectGroup(Mine, ['commons'])