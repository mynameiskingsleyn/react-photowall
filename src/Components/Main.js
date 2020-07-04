import React,{Component} from 'react';

import Title from './Title';

import PhotoWall from './PhotoWall';

import AddPhoto from './AddPhoto';

import {Route,Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {removePost} from '../redux/actions';
import Single from './Single';

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
                <h1>
                    <Link to='/'> PhotoWall </Link>
                </h1>

                <Route exact path ="/" render ={()=>
                    <div>
                        <PhotoWall {...this.props} />
                    </div>
                } />

                {/*<Route path="/addPhoto" component={AddPhoto} />*/}
                <Route path="/addPhoto"  render={({history}) =>
                    <AddPhoto {...this.props} />
                } />

                <Route path="/single/:id" render={(params)=>
                    <Single {...this.props} {...params} />
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