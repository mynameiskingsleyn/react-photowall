import React,{Component} from 'react';

import Title from './Title';

import PhotoWall from './PhotoWall';

import AddPhoto from './AddPhoto';

import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import {removePost} from '../redux/actions';

class Main extends Component{
    constructor(){
        super();
        // this.state = {
        //     posts:[],
        //     screen:'photos' //photos. addPhotos
        // }
        //this.removePhoto = this.removePhoto.bind(this);
        //this.addPhoto = this.addPhoto.bind(this);
        //console.log('construtor called')
    }

    // removePhoto(postRemoved){
    //     this.setState((state)=>({
    //         posts: state.posts.filter(post=>post !== postRemoved)
    //     }))
    // }
    //
    // addPhoto(postSubmited){
    //     this.setState((state)=>({
    //         posts: state.posts.concat([postSubmited])
    //     }))
    // }

    componentDidMount(){
        //this.props.removePost(1)
    }

    componentWillMount(){
        //console.log('componentWillMount called')
    }

    componentDidUpdate(){
        //console.log('componentDidUpdate called');
    }


    render(){
        //console.log('render called')
        //console.log(this.state.posts)
        //console.log(this.props.posts);
        return(
            <div>
                <Route exact path ="/" render ={()=>
                    <div>
                        <Title title={'Photowall'}/>
                        <PhotoWall {...this.props} />
                    </div>
                } />

                {/*<Route path="/addPhoto" component={AddPhoto} />*/}
                <Route path="/addPhoto"  render={({history}) =>
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')
                    }
                    } />
                } />
            </div>
        )
    }


}

// function mapStateToProps(state){
//     return {
//         posts:state
//     }
// }
//
// export default connect(mapStateToProps)(Main);

export default Main;