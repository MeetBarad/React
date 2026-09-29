import {Component} from 'react';
class Car5 extends Component {
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <h2>Class component constructor in Props color :{this.props.color}</h2>
        );
    }
}
export default Car5;