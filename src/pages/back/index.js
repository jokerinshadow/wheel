
import React,{ Component} from 'react';
import './index.scss';
import Appheader from  '../../components/commons/Appheader';

class Back extends Component {
    constructor(props){
        super(props);
        this.input = this.input.bind(this);
        this.click  =this.click.bind(this);
    }
    render(){
        return(
            <div style = {{overflow:'hidden',width:'100%',height:'100%'}} className='back'>
                < Appheader title='后台管理' right = { true } />
                <div className='page-top'>
                    <form onClick={this.click}>
                        <input type="text" onChange = {this.input} ref = 'inp'/>
                        <div className="text">

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Back;