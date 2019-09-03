import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../assets/images/pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: []
  // };

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //    .then(response => {
  //     this.setState({
  //       posts: response.data.slice(0, 10)
  //     });
  //   });
  // }

  render() {
    // destructuring using local state
    // const { posts } = this.state;

    // destructuring using redux store
    const { posts } = this.props;
    const postsList = posts.length ? (
      // Building the Post Structure
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            {/* Inserting an image  */}
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/posts/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>

              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">...Loading Posts...</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <h5 className="center">
          Posts below are fetched from a json placeholder using axios
        </h5>
        <h6 className="center">
          Clicking any post will redirect you to a single page using
          react-router-dom with an URL corresponding to the post's id
        </h6>
        {postsList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
