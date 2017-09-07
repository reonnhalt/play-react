class HomeWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
        this.handleClick = this.handleClick.bind(this);
        this.getNumber = this.getNumber.bind(this);
        this.updateJson = this.updateJson.bind(this);
    }
    getNumber(){
        $.ajaxSetup({ async: false });
        const number = $.getJSON("/getJson", function(data){ return data.number }).responseJSON.number
        return number;
    }
    updateJson(number){
        $.ajax({
            url: "/updateJson",
            type:'POST',
            data : { "number" : number + 1 }
        });
    }
    componentWillMount() {
        this.setState(() => { return { number: this.getNumber() } });
    }
    handleClick() {
        const number = this.getNumber();
        this.setState(() => { return { number: number + 1 } });
        this.updateJson(number);
    }
    render() {
        // ゼロパディング
        const zeroPadding = (num, len) => {
            return (Array(len).join('0') + num).slice(len * -1);
        }
        // 年度返却
        const getYear = () => {
            return "17"
        }
        // 整形
        const formatter = (x) => {
            return "SPES" + getYear() + "-" + zeroPadding(x, 3)
        }
        return (
            <div>
                <button onClick={() => this.handleClick()} >採番</button>
                <p>{formatter(this.state.number)}</p>
            </div>
        );
    }
};

function renderHomework(){
    ReactDOM.render(
        <HomeWork />,
        document.getElementById('main')
    );
}