import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {

  renderList(){
    return this.props.books.map((book, i)=>{
      return(
        <li
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
          key={i}>{book.title}
        </li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Whatever is returned will show up as props
// inside BookList
function mapStateToProps(state){
  return{
    books: state.books
  };
}

//Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  //whatever selectBook is called, the result should
  //be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote booklist from a Component to a container
//it needs to know about this dispatch method, selectBook, Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
