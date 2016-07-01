/**
 * Include React and such
 */
 var React = require('react');
 var ReactDOM = require('react-dom');

/**
 * Create a new React component
 */
 var MyComponent = React.createClass({
     render: function(){
         return (
             <h1>Hello, world!</h1>
         );
     }
 });

/**
 * Render the component
 */
 ReactDOM.render(
     <MyComponent/>,
     document.getElementById('example')
 );