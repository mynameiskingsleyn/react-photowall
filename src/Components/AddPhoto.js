import React,{Component} from 'react';


class AddPhoto extends Component {

    constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            urlError:'',
            description:''
        }
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description:description,
            imageLink: imageLink
        }
        if(imageLink && description){
            this.props.addPost(post);
            this.props.history.push('/')
        }else{
            if(!imageLink){
               // this.setState({urlError:'this field is required'});
            }
        }

    }

    render(){
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" required='required' />
                        <span class="error">{this.state.urlError} </span>
                        <input type="text" placeholder="Description" name="description"/>
                        <button> Post </button>

                    </form>
                </div>

            </div>


        )
    }
}

export default AddPhoto;