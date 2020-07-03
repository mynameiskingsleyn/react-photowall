import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props){

    return <div>
                {/*<button className="add-icon" onClick={props.navigate}> </button>*/}
                <Link to='/addPhoto' className="add-icon"></Link>
                <div className="photo-grid">
                    {props.posts
                        .sort(function(x,y){
                            return y.id -x.id
                        })
                        .map((post,index)=><Photo key={post.id} post={post} {...props} />)}
                </div>
            </div>

}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}




export default PhotoWall;