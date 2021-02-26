import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { StylesProvider } from "@material-ui/core/styles";
// import Classes from "./components/Classes";
// import Hooks from "./components/Hooks";
import BaseLayout from "./components/layout/BaseLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { createStore } from "redux";
import { Provider } from "react-redux";
// import reducer from "./reducers/reducerTemplate";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import "./styles.css";
import store from "./redux/store";

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <BaseLayout>
              <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path="/hooks" component={Hooks} />
            <Route path="/classes" component={Classes} /> */}
              </Switch>
            </BaseLayout>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
