import React from 'react';
import './sty.css';
class Rater extends React.Component {
    render() {
        return (
            <ul style={{ display: 'flex', justifyContent: 'center' }}>
                <li class="filled">{'\u2605'}</li>
                <li class="filled">{'\u2605'}</li>
                <li class="filled">{'\u2605'}</li>
                <li>{'\u2605'}</li>
                <li>{'\u2605'}</li>
            </ul>
        );
    }
}
export default Rater;
