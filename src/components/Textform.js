import React, { Component } from 'react';

export class Textform extends Component{
  constructor(){
    super();
    this.state = {
      textVal: ''
    }
  }

  handleOnChange = (e)=>{
    this.setState({
      textVal: e.target.value
    })
  }

  handleUpperCase = ()=>{
    let uppercase = this.state.textVal.toUpperCase();
    this.setState({
      textVal: uppercase
    })
  }

  handleLowerCase = ()=>{
    let lowercase = this.state.textVal.toLowerCase();
    this.setState({
      textVal: lowercase
    })
  }

  handleCopy = ()=>{
    navigator.clipboard.writeText(this.state.textVal);
  }

  handleClear = ()=>{
    this.setState({
      textVal: ""
    })
  }

  handleDownload = ()=>{
    if(this.state.textVal != ""){
      const anchortag = document.createElement("a");
      const file = new Blob([this.state.textVal], {type: 'text/plain'});
      anchortag.href = URL.createObjectURL(file);
      anchortag.download = "new_file.txt";
      anchortag.click();
    }
    else{
      alert("Please write your content to download")
    }

  }


  render(){
    return(
      <>
      <section className="container mt-5">
      <h1 className="text-uppercase text-center">Format your text <span className="">easily</span></h1>
      <textarea
        className={`col-12 form-control rounded-0 bg-${this.props.bg} text-${this.props.color}`}
        rows="7"
        placeholder="Paste your text here"
        onChange={this.handleOnChange}
        value={this.state.textVal}
      ></textarea>

      <div className="d-flex gap-3 align-items-center my-2">
        <button onClick={this.handleUpperCase} className="btn btn-primary rounded-0">Uppercase all</button>
        <button onClick={this.handleLowerCase} className="btn btn-success rounded-0">Lowercase all</button>
        <button onClick={this.handleCopy} className="btn btn-danger rounded-0">Copy to clipboard</button>
        <button onClick={this.handleDownload} className="btn btn-info rounded-0">Download</button>
        <button onClick={this.handleClear} className="btn btn-warning rounded-0">Clear</button>
        <p className="ms-auto">
        {this.state.textVal.length > 0 ? `${this.state.textVal.trim().split(/\s+/).length}` : '0'} words / {this.state.textVal.length} characters</p>
      </div>

      {this.state.textVal == 0 ? "" : <hr/>}

      <h2 className="">{this.state.textVal == 0 ? ""  : "Preview"}</h2>
      {this.state.textVal == 0 ? ""  : <p className={`notebook notebook-${this.props.bg}`}>{this.state.textVal}</p>}

      </section>
      </>
    )
  }
}
