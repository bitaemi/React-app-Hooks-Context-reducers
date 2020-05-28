import React, { Component } from "react";
import TodoApp from "./todo-app/TodoApp";
import Navbar from "./Navbar";
import Form from "./login-form/Form";
import PageContent from "./PageContent";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <LanguageProvider>
                    <PageContent>
                        <Navbar />
                        <Form />
                        <TodoApp />
                    </PageContent>
                </LanguageProvider>
            </ThemeProvider>
        );
    }
}

export default App;