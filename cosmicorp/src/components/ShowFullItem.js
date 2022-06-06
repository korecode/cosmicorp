import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt={"Error"}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>

                </div>
            </div>
        )
    }
}

export default ShowFullItem