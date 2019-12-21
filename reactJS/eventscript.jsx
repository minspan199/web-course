class Bulb extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
          status: false
        };
        this.switchState = this.switchState.bind(this);//need to ensure this is bound properly
    };

    switchState(){
        this.setState(
            {status: !this.state.status}
        )
    }

    render() {
        var display = this.state.status ? 'img/ONbulb.jpg' : 'img/OFFbulb.jpg';
        return(
            <div>
                <img src={display} alt="event image"/>
                <button onClick={this.switchState}>Click Me</button>
            </div>
        )
    }

    
}

ReactDOM.render(
        <Bulb/>, document.getElementById('bulb')
)