// // import Button from 'react-bootstrap/Button';
// import React from 'react';
// // import { Button } from 'react-bootstrap';
// import Button from '@material-ui/core/Button';

// class But extends React.Component {
//     render() {
//         return (
//             <>
//                 <Button variant="primary">Primary</Button>
//                 <Button variant="secondary">Secondary</Button>
//                 <Button variant="success">Success</Button>
//                 <Button variant="danger">Danger</Button>
//                 <Button variant="warning">Warning</Button>
//                 <Button variant="info">Info</Button>
//                 <Button variant="light">Light</Button>
//                 <Button variant="dark">Dark</Button>
//                 <Button variant="link">Link</Button>
//             </>
//         );
//     }
// }

// export default But;

// demo 1 css inline and css classes
import React from 'react';
import './ex2.css';
class Appcomp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome to React</h1>
                <button className="button">Submit</button>
            </React.Fragment>
        );
    }
}
export default Appcomp;

// // demo 3 with material-ui
// // import React from 'react';
// import Button from '@material-ui/core/Button';

// class Appcompm extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <h1 style={{ color: 'green', fontfamily: 'verdana' }}>
//                     Welcome to React
//                 </h1>
//                 <Button variant="contained" color="primary">
//                     Hello World
//                 </Button>
//             </React.Fragment>
//         );
//     }
// }
// export default Appcompm;
