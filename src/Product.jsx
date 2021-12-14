import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import PurchasedItems from './Components/PurchasedItems';
// import ProductDetails from './Components/ProductDetails';
// import { Provider } from 'react-redux';
// import { initStore } from './Stores/Store';
import Rater from './Rater.jsx';

class Product extends React.Component {
    render() {
        return (
            <div>
                <div className={'thumbnail'}>
                    <img
                        src="Images/Laptop.jpg"
                        class="img img-rounded img-responsive"
                        style={{ align: 'center' }}
                    />

                    <div class="caption" style={{ textAlign: 'center' }}>
                        <a href={'/productDetails'}>
                            <h3>Gamia Laptop</h3>
                        </a>
                        <h4>
                            <span style={{ color: 'red' }}>RS. 33000</span>
                        </h4>
                        <p>
                            An excellent choice for an awesome gaming
                            experience.
                        </p>
                        <Rater />
                        <span style={{ fontSize: +'9px' }}>3/5</span>
                    </div>
                </div>
            </div>
        );

        // return (
        //     <Provider store={store}>
        //         <BrowserRouter>
        //             <div>
        //                 <Route exact path="/" component={LoginForm} />
        //                 <Route exact path="/purchaseditems" component={PurchasedItems} />
        //                 <Route exact path="/productdetails" component={ProductDetails} />
        //             </div>
        //         </BrowserRouter>
        //     </Provider>
        // );
    }
}

export default Product;
