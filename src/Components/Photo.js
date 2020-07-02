import React from 'react';
import PropTypes from 'prop-types';

function Photo(props){
    const post = props.post;
    return <figure className="figure">
                <img src={post.imageLink} alt={post.description} className="photo" />
                <figcaption> <p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button className="remove-button" onClick = {()=>{
                        props.onRemovePhoto(post)
                    }}> Remove  </button>
                </div>
            </figure>
}

Photo.propTypes = {
    onRemovePhoto:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}

// class Photo extends Component
// {
//     render(){
//         const post = this.props.post;
//         return <figure className="figure">
//                     <img src={post.imageLink} alt={post.description} className="photo" />
//                     <figcaption> <p>{post.description}</p></figcaption>
//                     <div className="button-container">
//                         <button className="remove-button"> Remove  </button>
//                     </div>
//                 </figure>
//     }
// }

export default Photo;