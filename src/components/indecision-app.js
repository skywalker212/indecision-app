import React from 'react';
import AddOption from './add-option.js';
import Header from './header.js';
import Action from './action.js';
import Options from './options.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
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
        let option = Math.floor(Math.random(this.state.options.length)*this.state.options.length);
        alert(this.state.options[option])
    }

    handleAddOption = (option) => {
        if(!option){
            return "Enter value to add item";
        }else if(this.state.options.indexOf(option)!=-1){
            return "This option already exists!";
        }
        this.setState((prevState)=>({options : prevState.options.concat(option)}));
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Your own dumb AI to make your decisions";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0}  handlePick={this.handlePick}/>
                <Options  options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}