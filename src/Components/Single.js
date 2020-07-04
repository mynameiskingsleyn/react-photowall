import React,{Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends Component
{
    render() {
        //console.log(this.props);
        const{match,posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post)=> post.id === id);
        const comments = this.props.comments[id] || [];

        return <div className="single-photo">
                    <Photo post={post} {...this.props} />
                    <Comments addComment={this.props.addComment} comments={comments} post={post}/>
                </div>
    }
}

export default Single;