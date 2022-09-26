import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {
   const [players, setPlayers] = useState(['Ichiro']);

  return (
    <>
        <h2>GifApp</h2>
        <AddCategory setPlayers={setPlayers}/>
        <hr/>
        {/* <button onClick={addPlayer}>Add player</button> */}
        <ol>
        { 
            players.map(jugador=>
             // return(<li key = {jugador}>{jugador}</li>);
             < GifGrid 
                key = {jugador}
                jugador = {jugador}
              />            
          )}
        </ol>
    </>
  )
}

export default GifApp

