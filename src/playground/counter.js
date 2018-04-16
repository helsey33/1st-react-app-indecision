class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state= {
            count:0
        }
    } 
componentDidMount(){
    let count=localStorage.getItem('count');
    count=Number(count);
    this.setState(()=>({count}));
}
componentDidUpdate(){
    localStorage.setItem('count',this.state.count);
}
    addOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        })
    }
    subOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
    render(){
        return(
            <div>
            <h1>Count :{this.state.count} </h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.subOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
        
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'));