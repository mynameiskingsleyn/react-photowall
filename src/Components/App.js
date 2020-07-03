import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePost} from '../redux/actions';
function mapStateToProps(state){
    return {
        posts:state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removePost}, dispatch)
}

// mapStateToProps maps data from our store to state which is then put into posts. this data is mapped
// from the provider in index.js
const App = connect(mapStateToProps,mapDispatchToProps)(Main); // connect mapStateToProps is mapping the state to Main props

export default App;