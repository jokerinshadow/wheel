import React,{Component} from 'react';
import Appheader from '../../components/commons/Appheader';
import './index.scss';
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props);
        this.changeImg = this.changeImg.bind(this);
        this.clickCode = this.clickCode.bind(this);
        this.state = {
            url:'data:image/jpg;base64,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',
            num:60,
            isSend:false
        }
    }
    changeImg(){
        //获取验证码;
        axios.get('https://m.moretickets.com/userapi/pub/csrfCode?time=1531236886836&src=m_web').then((res)=>{
            this.setState({
                url:res.data
            })
        })
    }
    renderCode(){
        let { isSend } = this.props;
        if(!isSend) return (<span onClick = {this.clickCode}>获取验证码</span>)
        return ( <span  className='resend'>({this.state.num})重新获取</span>) //为什么这里可以？
    }
    clickCode(){
        axios.get('https://m.moretickets.com/userapi/pub/v1_1/send_sms_for_regist?cellphone=15308119578&token=5b44d6a1e4b0e1c384e43e7f&code=6273&time=1531238177298&src=m_web').
        then((res)=>{
            console.log(res);
            this.setState({
                isSend:true
            })
            console.log(this.state.isSend);
            //注意获取数据是异步的
        }).catch(()=>{
            console.log('数据请求失败！');
        })
    }
    render(){
        return (
            <div className='login'>
                <Appheader  right = {false}/>
                    <form>
                        <div>
                            <input type="text"   placeholder="请输入手机换号码"/>
                        </div>
                        <div>
                            <input type="text"   placeholder="请输入图形码" className='password'/>
                           <span> <img onClick = {this.changeImg} src = {this.state.url}/></span>
                        </div>
                        <div>
                            <input type="text"  placeholder="请输入验证码" className='password'/>
                            <i>{this.renderCode()}</i>
                        </div>  
                    </form>
                        <p><button>登陆</button></p>
                        <p>*未注册的手机号将自动创建摩天轮账号</p>   
                   
            </div>
        )
    }
}

export default Login;