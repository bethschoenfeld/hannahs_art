import React, {Components} from 'react'

class Product extends Component {
    deleteProduct = () => {
        this.props.deleteProductFromListByIndex(this.props.index)
    };
    
}