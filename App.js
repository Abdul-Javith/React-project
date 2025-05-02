import React from "react";
import ReactDOM from "react-dom/client";




//const heading = React.createElement("h1",{id:"heading"},"hello world from react");
// recat element 
const Title = () => (<h1 id="heading">hello javit this react learning</h1>)
// react component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading">hello javith what are you doing?</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
//ReactDOM.hydrateRoot(document.getElementById("root"), heading);



