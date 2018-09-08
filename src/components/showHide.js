import React, { Component } from 'react';

class ReadMore extends Component {

  render() {
    const styleHiddenClassVal = 'my-opinion--hidden'
    const styleVisibleClassVal = 'my-opinion--visible'

    return (
      <article>
        <h3>My Opinion...</h3>
        <button>+ Read More</button>
        <p className={`my-opinion ${styleHiddenClassVal}`}>
          You should really should read more. Thats my opinion. It may be noted that this approach to life will make you smarter.
          I hope you consider picking up a book some day. It will be good for you.
        </p>
      </article>
    );
  }
}

export default ReadMore;
