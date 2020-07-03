import React from 'react';
import PropTypes from 'prop-types';

function Photo(props){
    const post = props.post;
    return <figure className="figure">
                <img src={post.imageLink} alt={post.description} className="photo" />
                <figcaption> <p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button className="remove-button" onClick = {()=>{
                        props.removePost(post.id)
                    }}> Remove  </button>
                </div>
            </figure>
}

Photo.propTypes = {
    post:PropTypes.object.isRequired
}


export default Photo;