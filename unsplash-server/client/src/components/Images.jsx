import React, {useEffect, useState} from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

const Images = (props)=>{
    
    //useState - count, start
    const [imageQuery, setImageQuery] = useState({start:1, count:30});
    
    //useState - images
    const [images, setImages] = useState([]);

    const fetchImages = () => {
        console.log(123);
        setImageQuery({start: imageQuery.start + imageQuery.count, count: imageQuery.count});        
    };
    
    //useEffect()
    useEffect(()=>{
        axios.get(`/api/photos?start=${imageQuery.start}&count=${imageQuery.count}`)
        .then(res => {
            setImages(images.concat(res.data));      
        });
    },[imageQuery]); // componentDidUpdate

    return(        
        <div className="images">
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader = {<h4>Loading...</h4>}
            >
            {images.map(image => (
                <Image key={image.id} image={image}/>
            ))}
            </InfiniteScroll>
        </div>
    );
};

export default Images;