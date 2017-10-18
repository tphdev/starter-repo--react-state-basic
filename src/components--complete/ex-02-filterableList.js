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

      let userClassValStatus
      let statusText

      if(userObj.status === 'active'){
        statusText = 'ACTIVE'
        userClassValStatus = 'status--active'
      } else {
        statusText = 'INACTIVE'
        userClassValStatus = 'status--inactive'
      }

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

    let userList = allUsersList.filter((u)=>{
      if(this.state.visibleUserType === 'all') return true
      if(this.state.visibleUserType === 'active' && u.status === 'active') return true
      if(this.state.visibleUserType === 'inactive' && u.status === 'inactive') return true
      return false
    })

    return (
      <main>
        <aside>
          <h4>
            Currently showing: <mark>{this.state.visibleUserType}</mark>
          </h4>

          <span onClick={ ()=>{this._handleClick('all') } }>All</span>
          <span className="" onClick={ ()=>{this._handleClick('active') } }>Active</span>
          <span className="" onClick={ ()=>{this._handleClick ('inactive')} }>Inactive</span>
        </aside>


        <section>
          { this._showList(userList) }
        </section>

      </main>
    );
  }
}

export default FilterableList;
