import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        const dashboardMap = this.props.products.map( products => {
            return <Product key={products.product_id} name={products.product_name} price={products.price} img={products.image_url} />
        })
        return (
        <div>
            {dashboardMap}
        </div>
        )
    }
}

export default Dashboard;