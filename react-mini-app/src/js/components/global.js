import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    search() {
console.log('search', this.state.query);
    }
    render() {
        return (
            <div className="Global container">
                <h2>Global Componet here - Explore Books</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Seach for a book"
                            onChange={event => this.setState({query: event.target})}
                            onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.search();
                            } 
                        }}
                        />
                    </InputGroup>
                    <InputGroup.Addon onClick={() => this.search()}>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                </FormGroup>
            </div>
        )
    }
}

export default Global;

const rootElement = document.getElementById('root');
rootElement ? ReactDOM.render(<Global />, rootElement) : false;