


class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.addOption=this.addOption.bind(this);
        this.removeOption=this.removeOption.bind(this);
        this.state={
            option: []
        }
    }

    componentDidMount(){
        try {
          const json= localStorage.getItem('options');
          const option=JSON.parse(json);
          if(option){
              this.setState(()=>({option}))
          }  
        } catch (e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.option.length!==this.state.option.length){
            const json=JSON.stringify(this.state.option);
            localStorage.setItem('options',json);
        }
    }
    removeAll(){
       
        this.setState(()=>({option:[]}));
    }
    removeOption(toDelete){
        this.setState((prevState)=> ({
            option:prevState.option.filter((option)=> toDelete!==option)
        }));
    }
    
    handlePick(){
        const i=Math.floor(Math.random()*this.state.option.length);
        alert(this.state.option[i]);
    }
    addOption(option){
        if(!option)
        return 'Empty string not allowed!'
        if(this.state.option.indexOf(option)>-1)
        return 'Duplicates not allowed'
        this.setState(((prevState)=>({option:prevState.option.concat(option)})));
    }
    render(){

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.option.length>0} handlePick={this.handlePick}/>
                <Options option={this.state.option} removeAll={this.removeAll} removeOption={this.removeOption}/>
                <AddOption  addOption={this.addOption}/>  
            </div>
        );
    }   
}


const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}


const Action=(props)=>{
    return (
            <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
            </div>

        );
}


const Options=(props)=>{
    return (
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            {props.option.length===0 && <p>Add an option to start!</p>}
            <ol>
                {
                    props.option.map((val, i) => <Option key={i} optionText={val} removeOption={props.removeOption} />)
                }
            </ol>
        </div>
            );
}



const Option=(props)=>{
    return(
        <li>
        {props.optionText}
        &ensp;
        <button onClick={(e)=>{
            props.removeOption(props.optionText)
        }}>Remove</button>
        </li>
    );
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.addOption=this.addOption.bind(this);
        this.state={
            error:undefined
        }
    }
    addOption(e){
        e.preventDefault();
        const val=e.target.elements.addOp.value.trim();
        
            const error=this.props.addOption(val);
        e.target.elements.addOp.value='';
        this.setState(()=>({error}));
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.addOption}>
            <input type="text" name="addOp" autoComplete="off"/>
            <button>Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));