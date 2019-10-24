var Hello = React.createClass({
    render:function() {
        return(
            <h1>Hello From UserA</h1>
        );
    }

});

React.render(<Hello/>, document.getElementById("root"));