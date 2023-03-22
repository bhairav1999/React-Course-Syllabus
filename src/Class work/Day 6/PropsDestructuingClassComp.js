import React, { Component } from 'react';

class PropsDestructuingClassComp extends Component {
    render() {
        const {name, city, company} = this.props
       
        return (
            <div>
                {/* <h1>Props Destructuing in Class Comp</h1>
                <h3>Name :{this.props.name}</h3>
                <h3>City :{this.props.city}</h3>
                <h3>Company:{this.props.company}</h3> */}

                <h3>Name :{name}</h3>
                <h3>City :{city}</h3>
                <h3>Company:{company}</h3>
                
            </div>
        );
    }
}

export default PropsDestructuingClassComp;