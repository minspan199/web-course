var styles = {'color' : 'yellow', border: '3px solid grey', 'backgroundColor':'green' }

class Header extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
          name: 'Einstain',
          password: '1010'
        };
      };

    render() {
        setTimeout(()=>{this.setState({name: 'Chris', password: 1251})}, 2000);
        return(
            <div>
                <h2>{this.state.name} 
                <br/>
                {this.state.password}</h2>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

class MyComponent extends React.Component{
    render(){
        return(
            <div style = {styles}>
                <h1>Ming</h1>
                <h2>Hello World!</h2>
                <Header name = "Alex"/>
                <Header name = "Bob"/>
            </div> 
        )
    }
}

ReactDOM.render(
    // <MyComponent/>, document.querySelector('#content')
    <MyComponent/>, document.getElementById('content')
)