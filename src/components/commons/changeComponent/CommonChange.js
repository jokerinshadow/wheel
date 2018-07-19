

import React,{ Component } from 'react';


class CommonChange extends Component {

    render(){
        let {title,id,left} = this.props;
        return(
            <div>
                <p>hello world!</p>
                <p>{title}</p>
                <p>{id}</p>
                <p>{left}</p>
            </div>
        )
    }

}


export default CommonChange;