import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  // state = {
  //   post: null
  // };

  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //     .then(response => {
  //       this.setState({
  //         post: response.data
  //       });
  //     });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    let post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button onClick={this.handleClick} className="btn red">
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <h4 className="center">Post is loading...</h4>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === Number(id))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
