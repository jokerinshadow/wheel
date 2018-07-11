import React,{Component} from 'react';
import './index.scss';
import {withRouter} from 'react-router-dom'

class Appheader extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    renderFileter(){
            let { right } = this.props;
            if(right) 
            return(
                <i className='glyphicon glyphicon-home right'></i>
            )
        return (<i className = 'rightNull'></i>);
           
    }
    goBack(){
        this.props.history.go(-1);
    }
    render(){
        return (
            <div className ='app-header'>
                <i className='glyphicon glyphicon-chevron-left left' onClick={this.goBack}></i>
                <i className='center'>登陆摩天轮票务</i>
               {this.renderFileter()}
            </div>
        )
    }
}

export default withRouter(Appheader);