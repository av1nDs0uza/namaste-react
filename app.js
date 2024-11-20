import React from "react";
import ReactDOM from "react-dom/client";



const elem = <span> React Element </span>

// React Element => Object => HTMLElement(render)

const Title = () => (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX
    </h1>
)

// // JSX - is not HTML in JS
// const jsxHeading = <h1 className="head"> Namaste react using JSX</h1>

// console.log(jsxHeading);

// React Component
// Class based Component - OLD
// Functional Component - NEW

// // React Functional Component
// const HeadingComponent = () => {
//     return <h1> Namaste React Functional Component</h1>
// };



const data = 10000;

//always use this (industry standard) 

// composing two components into one another is component composition
const HeadingComponent = () => (
    < div id="container">
        <Title></Title>
        {Title()}
        
        <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
    
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);




