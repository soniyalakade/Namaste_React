const parent = React.createElement("div", 
    {id: "parent"}, 
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am h1 tag" ), 
        React.createElement("h1", {}, "I am 2nd h1 tag", )
    ]));
    
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);