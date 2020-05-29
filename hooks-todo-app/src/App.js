import React from "react";
import TodoApp from "./todo-app/TodoApp";
import Navbar from "./Navbar";
import Form from "./login-form/Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
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