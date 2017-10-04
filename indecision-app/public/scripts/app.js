console.log('App.js is running!');

// JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
    "p",
    { "class": "manyThings" },
    React.createElement(
      "h1",
      { id: "myHeader" },
      "This is JSX from app.js!"
    )
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);