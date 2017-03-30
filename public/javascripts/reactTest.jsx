const DataList = React.createClass({
    getInitialState: () => {
        return {data: []};
    },
    componentDidMount: function() {
        const self = this;
        superagent
            .get("/getJson")
            .end(function(err, res){
                self.setState({data: res.body});
            });
    },
    render: function() {
        const toListItem = x => <li>{x}</li>;
        return (
            <ul>
                {this.state.data.map(toListItem)}
            </ul>
        );
    }
});

ReactDOM.render(
    <DataList />,
    document.getElementById("main")
);