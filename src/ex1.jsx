import React from 'react';
import './sty.css';
class Def extends React.Component {
    render() {
        return (
            <div>
                <h1 class="login">Defect Tracker</h1>
                <p class="login">Login</p>
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
            </div>
        );
    }
}

export default Def;
