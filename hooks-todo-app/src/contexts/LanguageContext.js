import React, { Component, createContext } from "react";

// use this contex in order to enable visibility of language accross all app's pages
export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "spanish" };
    // create a new fc with bind where the var this receives the value of this
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      // each context comes with provider
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
// for those components that consume more than one contexts, we use consumer components
// create a high order component, wich takes a different component and some props,as argument,
// and returns that same component, with all it's original props, but also it injects in a property
// e.g laguageContext, coming from the consumer taht takes the value from consumer
export const withLanguageContext = Component => props => (
  // Component is just a generatic name for whatever component we pass
  // for those components that consume more than one contexts, we use consumer components
  // these components take as child function components:
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);
