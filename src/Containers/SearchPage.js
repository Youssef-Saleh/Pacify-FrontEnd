import React, { Component }  from 'react';
// import logo from './logo.svg';
import './SearchPage.css';
import CardList from '../Components/SearchCardlist'
import {types} from '../Components/Searchtypes'
import Card from '../Components/SearchCard'

class SearchPage extends Component{
  constructor(){
    super();
    this.state={
      types:types,
      clickid:"0"
    }

  }

  componentDidMount(){
    fetch('http://localhost:5000/browse ').then(response=>response.json()).then(properties=>{
      this.setState({
        types:properties ,
        // clickid:types
      })
  })
  console.log(this.state.types[2].name)
  }
  ondivclick=(event)=>{
    this.setState({ clickid: event.target.getAttribute('IDC') })
    // console.log(this.state.clickid);

    // console.log(this.state.playlistsdata[(this.state.CardID)-1])

  } 
  render(){
    return(
      <div className="vh-100 dt w-100 pl2">
        <h1 className="pl4 fw7 pt4 f3 lh-title white  ">Your top genres</h1>
         {/* <div onClick={this.ondivclick}  IDC={this.state.types[7].id}>
          <Card 
            CardId={this.ondivclick}
            idc={7}
            title={this.state.types[7].name}
            // source={this.state.types[7].source}
            bg={this.state.types[7].name}
            />
           </div> */}
        <h1 className=" pl4 fw7 pt4 f3 lh-title white ">Browse all</h1>
        <CardList types={this.state.types} EVENT={this.ondivclick}/>
        
    </div>

    )
  }

}


// const SearchPage = ({id,SectionTitle,title,bg}) => {
//   return (
//     <div className="vh-100 dt w-100">
//       <h1 className="pl3 fw7 pt4 f3 lh-title white  ">Your top genres</h1>
//       <div>
//         <Card 
//           id={types[7].id}
//           title={types[7].title}
//           source={types[7].source}
//           bg={types[7].bg}/>
//         </div>
//       <h1 className=" pl3 fw7 pt4 f3 lh-title white ">Browse all</h1>
//       <CardList types={types}/>
      
//     </div>
//   );
// }
// //  f3 lh-solid white 
export default SearchPage;
