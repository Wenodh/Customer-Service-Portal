import React from 'react';
import './sty.css';
import Button from 'react-bootstrap/Button';
class Trac extends React.Component {
    render() {
        let login = 1;
        return (
            <>
                <h1>Defect Tracker</h1>
                <a href="#">Logout</a>
                <ul class="list">
                    <li>
                        <a href="#">Add Defects</a>
                    </li>
                    <li>
                        <a href="#">View Defect</a>
                    </li>
                </ul>
                <div class="fl">
                    <h2>Fliter Details</h2>
                    <label>
                        Priority
                        <select>
                            <option>All</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Catergory
                        <select>
                            <option>All</option>
                        </select>
                    </label>
                </div>
                {login == 1 && <h3>Thank you for login</h3>}
                {login == 0 && <h3>Please login</h3>}
                <form class="form">
                    <div>
                        <label class="label">
                            Username:
                            <input type="text" placeholder="Username" />
                        </label>
                        <br />
                        <label class="label">
                            Password:
                            <input type="password" placeholder="Password" />
                        </label>
                        <br />
                        <button class="b">Signin</button>
                    </div>
                </form>
                <table class="t">
                    <thead class="the ,t">
                        <tr class="t">
                            <th class="t">Username</th>
                            <th class="t">Description</th>
                        </tr>
                    </thead>
                    <tbody class="t">
                        <tr class="t">
                            <td class="t">January</td>
                            <td class="t">$100</td>
                        </tr>
                        <tr class="t">
                            <td class="t">January</td>
                            <td class="t">$100</td>
                        </tr>
                    </tbody>
                </table>
                <Button variant="warning"> Click here </Button>
            </>
        );
    }
}
export default Trac;
