class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            visible:0
        }
    }
    toggle(){
        this.setState((prevState)=>{
            return{
                visible:!prevState.visible 
            }
        });
    }
    render(){
        return(
            <div>
            <h1>Visibility</h1>
            <button onClick={this.toggle}>{this.state.visible?'Hide me':'Show me'}</button>
            {this.state.visible && <p>Here i am</p>}
               
            </div>
        );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));