import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import  Movie from "./Movies/Movie";
import  MovieList from "./Movies/MovieList";



const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
//     savedList.forEach((item)=>{
// if(!item.includes(item.id)){
  setSavedList( [...savedList, movie] );
}
// console.log(savedList)

//     })
//   };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route exact path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList} />}/>
    </div>
  );
};

export default App;
