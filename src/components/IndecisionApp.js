import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const option = JSON.parse(json);
            if (option) {
                this.setState(() => ({ option }))
            }
        } catch (e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option);
            localStorage.setItem('options', json);
        }
    }

    state={
        option:[],
        active:undefined
    };

    closeModal=()=>{
        this.setState(()=>({active:undefined}));
    }

    removeAll=()=> {

        this.setState(() => ({ option: [] }));
    };
    removeOption=(toDelete) =>{
        this.setState((prevState) => ({
            option: prevState.option.filter((option) => toDelete !== option)
        }));
    };

    handlePick=()=> {
        const i = Math.floor(Math.random() * this.state.option.length);
        this.setState(()=>({active:this.state.option[i]}));
    };
    addOption=(option)=> {
        if (!option)
            return 'Empty string not allowed!'
        if (this.state.option.indexOf(option) > -1)
            return 'Duplicates not allowed'
        this.setState(((prevState) => ({ option: prevState.option.concat(option) })));
    };

    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
               <div className='container'>
                    <Action hasOptions={this.state.option.length > 0} 
                    handlePick={this.handlePick} />
                    <div className="widget">
                        <Options option={this.state.option}
                            removeAll={this.removeAll}
                            removeOption={this.removeOption} />
                        <AddOption addOption={this.addOption} />
                    </div>
                </div>
                <OptionModal active={this.state.active} closeModal={this.closeModal}/>
            </div>
        );
    }
}






