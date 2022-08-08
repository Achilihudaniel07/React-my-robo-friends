import SearchBox from './SearchBox';
// import Card from './Card';
import Cardlist from './CardList';
import users from './users.json';
import "./App.css";
import React from 'react';



// function App() {

//   return (
//     <div className="">
//       <h1 style={{textAlign:'center'}}>Robofriends</h1>
      
//       <SearchBox/>
//       <Cardlist clients ={users}/>
//     </div>
//   );
// }


//To convert to Class Component 

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      searchInput: ''
    }
  }

  updateSearchInput = (event) =>{
    // console.log (event.target.value);
    this.setState({searchInput:event.target.value})
  }

  render(){
    const filteredRobots = users.filter (item =>(item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())))


    return (
      <div className="">
        <h1 style={{textAlign:'center'}}>Robofriends</h1>
        
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        <Cardlist clients ={filteredRobots}/>
      </div>
    );
  }
}


export default App;