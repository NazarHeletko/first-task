import React from "react";

import {
    FormGroup as ReactstrapFormGroup
} from "reactstrap";

export default class FormGroupMd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClass: ''
        }
    }

    addActiveClass(e) {
        const className = 'active';

        switch (e.type) {
            case 'focus':
                this.setState({ activeClass: className })
                break;
            case 'blur':
                const inputValue = e.target.value;
                if (inputValue !== '') {
                    this.setState({ activeClass: className })
                } else {
                    this.setState({ activeClass: '' })
                }
                break;
            default:
                this.setState({ activeClass: '' })
        }
    }
    
    render() {
        const { activeClass } = this.state;
        return (
            <ReactstrapFormGroup className={this.props.className + ' ' + activeClass}
                onBlur={(e) => { this.addActiveClass(e) }}
                onFocus={(e) => { this.addActiveClass(e) }}
            >
                { this.props.children }
            </ReactstrapFormGroup>
        );
    }
}
