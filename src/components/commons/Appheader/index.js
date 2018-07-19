import React,{Component} from 'react';
import './index.scss';
import {withRouter} from 'react-router-dom'

class Appheader extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.pushIndex = this.pushIndex.bind(this);
    }
    pushIndex(){
        this.props.history.push('/');
    }
    renderFileter(){
            let { right } = this.props;
            if(right) 
            return(
                <i className='glyphicon glyphicon-home right' onClick={ this.pushIndex}></i>
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
                <i className='center'>{this.props.title}</i>
                 {this.renderFileter()}
            </div>
        )
    }
}

export default withRouter(Appheader);