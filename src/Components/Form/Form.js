import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product_name: '',
            price: '',
            image_url: ''
        }
        this.handleImgInput = this.handleImgInput.bind(this);
        this.handleProductNameInput = this.handleProductNameInput.bind(this);
        this.handlePriceInput = this.handlePriceInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleProductNameInput(event) {
        this.setState({
            product_name: event.target.value
        })
    };

    handlePriceInput(event) {
        this.setState({
            price: event.target.value
        })
    };

    handleImgInput(event) {
        this.setState({
            image_url: event.target.value
        })
    };

    handleCancel() {
        document.querySelectorAll('input');
        this.setState({
            product_name: "",
            price: "",
            image_url: ""
        })
    };

    handleSubmit = () => {
        const { product_name, price, image_url } = this.state;
        axios.post('/api/product', {product_name, price, image_url}).then( res => {
            this.setState({
                product_name,
                price,
                image_url
            })
            this.props.getInventory();
            this.handleCancel();
        }).catch(err => console.log(err))
    }
    

    render() {
        return (
        <div>
            <input type="text" value={this.state.product_name} onChange={this.handleProductNameInput} />
            <input type="text" value={this.state.price} onChange={this.handlePriceInput} />
            <input type="text" value={this.state.image_url} onChange={this.handleImgInput} />
            <button onClick={this.handleCancel}> Cancel </button>
            <button onClick={(e) => this.handleSubmit()}> Add to Inventory </button>
        </div>
        )
    }
}

export default Form;
