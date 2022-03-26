
// function App() {
//     return (
//         <div>
//             <h1>Hello Mr.Mojahid</h1>
//         </div>
//     );
// }

import { Component } from "react";
import File from "./File";

class App extends Component {

    render() {
        return (
            <div>
                <File name="Mojahid" />
                <File name="Yassir" />
                <File name="Zakaria" />
            </div>
        );
    }
}

export default App;