import React, { Component } from 'react';
import ListElement from './_list-element';
class CvList extends Component {

    render() {
        return (
            <div className="cv-list">
                <ul className="p-0">
                    {this.props.list.map(li => (
                        <ListElement {...li}/>
                    ))}
                    <button className="btn btn-primary d-on-ul-hover">+Add</button>
                </ul>
            </div>
        );
    }
}

export default CvList;