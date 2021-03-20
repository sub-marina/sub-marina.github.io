import axios from 'axios';
import saveProducts from './actions';

const getAllProds = () => (dispatch) => {
    axios.get('./products.json')
        .then(resp => dispatch(saveProducts(resp.data)))
        .catch(console.error);
}

export default getAllProds;