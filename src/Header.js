import React from 'react';
import Home from './Home';
import About from './About';
import ContactUs from './Contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">ContactUs</Link>
                    <Route exact path="/home" component={Home} />
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={ContactUs} />
                </>
            </Router>
        );
    }
}
export default Header;
