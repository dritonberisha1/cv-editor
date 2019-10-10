import React, { Component, Fragment } from 'react';
const MODES = {
    VIEW: 'view',
    EDIT: 'edit'
}
class ListElement extends Component {

    state = {
        mode: MODES.VIEW
    }

    editMode = () => {
        this.setState({ mode: MODES.EDIT });
    }

    save = () => {

    }
    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
    }
    

    render() {
        return (
            <li>
                {this.state.mode === MODES.VIEW && (
                    <Fragment>
                        <i className="far fa-check-square"></i>
                        {this.props.text}
                        <button className="btn btn-primary d-on-li-hover" onClick={this.editMode}> Edit </button>
                    </Fragment>
                )}
                {this.state.mode === MODES.EDIT && (
                    <Fragment>
                        <input type="text" value={this.props.text} onChange={this.onChange}></input>
                        <button className="btn btn-primary" onClick={this.save}> save </button>
                    </Fragment>
                )}
            </li>
        )
    }
}

export default ListElement;