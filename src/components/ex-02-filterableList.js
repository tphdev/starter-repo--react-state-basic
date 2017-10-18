import React, { Component } from 'react';

const allUsersList = [
  { user: 'Tomas' , status: 'active'},
  { user: 'Maria' , status: 'inactive'},
  { user: 'Maria' , status: 'active'},
  { user: 'Alejandra' , status: 'active'},
  { user: 'Carolina' , status: 'active'},
  { user: 'Romina' , status: 'inactive'},
  { user: 'Daniela' , status: 'inactive'},
]

class FilterableList extends Component {
  constructor(){
    super()
    this.state = {
      visibleUserType: 'inactive'
    }
  }

  _handleClick(val){
    this.setState({
      visibleUserType: val
    })
  }

  _showList(uList){
    let jsxArray = uList.map(function(userObj){
      return (
        <div className={userClassValStatus}>
          <span>{userObj.user}</span>
          <span>{statusText}</span>
        </div>
      )
    })
    return jsxArray
  }

  render() {

    return (
      <main>

        <aside>
          <h4>
            Currently showing: <mark>{this.state.visibleUserType}</mark>
          </h4>
          <span onClick={ ()=>{this._handleClick('all') } }>All</span>
          <span onClick={ ()=>{this._handleClick('active') } }>Active</span>
          <span onClick={ ()=>{this._handleClick ('all')} }>Inactive</span>
        </aside>


        <section>
          { this._showList(allUsersList) }
        </section>

      </main>
    );
  }
}

export default FilterableList;
