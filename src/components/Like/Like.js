import { useState } from 'react';
import './Like.css';

function Like() { 
    const [likeCount, setCount] = useState(0)
    return ( 
        <div className="Like"> 
            <button
                onClick={() => { 
                setCount(likeCount + 1)
                }}
            >^</button>
            <h2>{likeCount} Likes </h2>
            <button 
                onClick={() => { 
                setCount(likeCount - 1)
                }}
            >v</button>
        </div>
    )
}

export default Like;