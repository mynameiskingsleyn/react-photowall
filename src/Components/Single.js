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
        const index = posts.findIndex((post)=>post.id === id);
        const loading = this.props.loading;
        //console.log(index);
        const comments = this.props.comments[id] || [];
        if(this.props.loading ===true){
            return <div className="loader">.....loading </div>
        }else if(post){
            return <div className="single-photo">
                <Photo post={post} {...this.props} />
                <Comments startAddingComment={this.props.startAddingComment} comments={comments} post={post}/>
            </div>
        }else{
           return <h2 class="loader">....post not found</h2>
        }

    }
}

export default Single;