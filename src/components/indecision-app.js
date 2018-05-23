import React from 'react';
import AddOption from './add-option.js';
import Header from './header.js';
import Action from './action.js';
import Options from './options.js';
import OptionModal from './option-modal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount(){
        const json = JSON.parse(localStorage.getItem('options'));
        if(json){
            this.setState(()=>({options: json}));
        }    
    }

    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(()=>({ options : []}));
    }

    handleDeleteOption = (option) => {
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((item)=>item!=option)
            };
        });
    }

    handlePick = () => {
        let option = this.state.options[Math.floor(Math.random(this.state.options.length)*this.state.options.length)];
        this.setState(()=> ({selectedOption:option}));
    }

    handleAddOption = (option) => {
        if(!option){
            return "Enter value to add item";
        }else if(this.state.options.indexOf(option)!=-1){
            return "This option already exists!";
        }
        this.setState((prevState)=>({options : prevState.options.concat(option)}));
    }

    clearSelectedOption = () => {
        this.setState(()=>({selectedOption: undefined}));
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Your own dumb AI to make your decisions";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className='container'>
                    <Action hasOptions={this.state.options.length>0}  handlePick={this.handlePick}/>
                    <div className='widget'>
                        <Options  options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    <OptionModal clearSelected={this.clearSelectedOption} selectedOption={this.state.selectedOption}/>
                </div>

            </div>
        );
    }
}