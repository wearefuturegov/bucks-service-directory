import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import App from "./App"
import { render } from "react-dom";

const rootElement = document.getElementById("root")

render(<App />, rootElement)