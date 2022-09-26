import React from 'react'

export const GIfGridItem = ({title, url}) => {
  return (
    <>
        <img src={url} alt = {title}/>
        <p>{title}</p>
    </>

  )
}
