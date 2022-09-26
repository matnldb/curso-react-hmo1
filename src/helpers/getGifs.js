
export const getGifs = async(jugador)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(jugador)}&limit=10&api_key=ROCPg1RNQvpFZD0tAkPTtQJTxUeVZNIX`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((elemento)=>
    {
       return{
        id: elemento.id,
        title: elemento.title,
        url: elemento.images.downsized.url
        }
    });
    return gifs;        
}  