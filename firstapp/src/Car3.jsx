import {Component} from 'react';
class Car3 extends Component {
    constructor() {
        super();
        this.state = {
            color: "red"
        };
    }
    render()
    {
        return (
            <h2>Class component constructor color :{this.state.color}</h2>
        );
    }
}
export default Car3;