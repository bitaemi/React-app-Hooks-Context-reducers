import React, { Component } from "react";
import TodoApp from "./TodoApp";
import Navbar from "./Navbar";
import Form from "./Form";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <TodoApp />
                <Form />
            </>
        );
    }
}

export default App;