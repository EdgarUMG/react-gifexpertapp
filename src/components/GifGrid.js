import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images,loading}=useFetchGifs(category);

    // getGifs();

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}

            <div>
                {
                    images.map(img=>(
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
        
    )
}
