import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div", 
        {id:"child1"},
        [
            React.createElement("h1", {}, "This is Namaste React"),
            React.createElement("h2", {}, "I'm an h2 tag"),
            React.createElement("h3", {}, "I'm an h3 tag"),
            React.createElement("h4", {}, "I'm an h4 tag"),
            React.createElement("h5", {}, "I'm an h5 tag"),
        ]
    ),
    React.createElement(
        "div", 
        {id:"child2"},
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag"),
            React.createElement("h3", {}, "I'm an h3 tag"),
            React.createElement("h4", {}, "I'm an h4 tag"),
            React.createElement("h5", {}, "I'm an h5 tag"),
        ]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
