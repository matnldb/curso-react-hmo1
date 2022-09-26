import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (jugador) => 
{
  const [state, setState] = useState(
    {
        data: [],
        loading: true
    }
  ); 
  
  useEffect(() => 
  {
    getGifs(jugador).then(img=>
      {
        setState({data: img,loading: false}); 
      })
 }, [jugador]); 

  return state;
}
