import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GIfGridItem } from './GIfGridItem';


const GifGrid = ({jugador}) => 
{
  const {loading, data}= useFetchGifs(jugador);
  
  return (
    <>
        <h3>{jugador}</h3>
         {
            data.map(img=>
                (
                <GIfGridItem
                    key={img.id}
                    {...img}                
                />
                ))
        }          
    </>
  )
}
export default GifGrid