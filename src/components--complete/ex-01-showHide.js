import React, { Component } from 'react';

class ReadMore extends Component {
  constructor(parent){
    super()

    this.state = {
      extended: true
    }
  }

  _toggleExtended(){
    if(this.state.extended === true){
      this.setState({
        extended: false
      })
    } else {
      this.setState({
        extended: true
      })
    }
  }

  render() {
    let styleObj = {
      display: 'none'
    }

    if(this.state.extended === true){
      styleObj = {
        display: 'block'
      }
    }

    return (
      <article>
        <h3>My Opinion...</h3>
        <button onClick={ ()=>{ this._toggleExtended() } }>+ Read More</button>
        <p style={styleObj} className='my-opinion'>
          You should really should read more. Thats my opinion. It may be noted that this approach to life will make you smarter.
          I hope you consider picking up a book some day. It will be good for you.
        </p>
      </article>
    );
  }
}

export default ReadMore;
