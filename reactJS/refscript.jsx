class RefComponent extends React.Component{

    //constructor to show display
    constructor(props){
        super(props);
        this.display = this.display.bind(this);
    }

    display(){
        var name = this.inputName.value;
        document.getElementById('displayName').innerHTML = name;
    }

    render(){
        
        return(
            <div>
                <h2>
                    Name: <input type="text" ref={input => this.inputName = input}/>
                </h2><br/>
                <button onClick={this.display}>Click</button>
                <h1>Hi... <span id="displayName"></span></h1>
            </div>
        )
    }
}

ReactDOM.render(
    <RefComponent/>, document.getElementById('refContent')
)