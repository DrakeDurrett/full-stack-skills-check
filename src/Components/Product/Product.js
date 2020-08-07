import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }
    render() {
        console.log(this.props)
        return <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.price}</h1>
            <img src={this.props.img} alt="Product Img"></img>
        </div>
    }
}

export default Product;