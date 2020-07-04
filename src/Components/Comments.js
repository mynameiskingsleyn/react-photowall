import React, {Component} from 'react';


class Comments extends Component
{
    constructor(){
        super();
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
         event.preventDefault();
         //console.log(event.target.elements);
         const comment = event.target.elements.comment.value;
         const postId = this.props.post.id;
        event.target.elements.comment.value = "";
         this.props.addComment(comment,postId);
         //console.log(event.target.elements.comment.value);
    }
    render(){
        //emit action this.props.addComment
        //const commen
        console.log(this.props.comments)
        //console.log(this.props);
        return <div className="comments">
            {
                this.props.comments.map((comment,index)=>{
                    return <p key={index}> {comment}</p>
                })
            }
                    <h2>works for comments</h2>
                    <form onSubmit={this.handleSubmit} className="comment-form">
                        <input type="text" placeholder="comment" name="comment"/>
                        <input type="submit" hidden/>
                    </form>
                    <div>

                    </div>
                </div>
    }
}

export default Comments;