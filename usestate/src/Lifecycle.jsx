import React from "react";
class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log("1. Constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("2. getDerivedStateFromProps");
        return null;
    }
    render() {
        console.log("3. Render");
        return (<h1>Lifecycle Component - Count: {this.state.count}</h1>);
    }
    componentDidMount() {
        console.log("4. componentDidMount");
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
        }, 2000);
    }
    shouldComponentUpdate() {
        console.log("5. shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("6. getSnapshotBeforeUpdate");
        return null;
    }   
    componentDidUpdate() {
        console.log("7. componentDidUpdate");
        return null;
    }
    componentWillUnmount() {
        console.log("8. componentWillUnmount");
        return null;
    }
}
export default Lifecycle;