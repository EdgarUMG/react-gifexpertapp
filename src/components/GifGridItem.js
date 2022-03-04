import React from 'react'

export const GifGridItem = ({title,url}) => {

    // console.log(id,title,url);

    return (
        <div className="animate__animated animate__flip animate__delay-1s">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
