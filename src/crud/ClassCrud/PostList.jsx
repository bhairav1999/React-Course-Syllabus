import React, { Component } from "react";
import axios from "axios";
import "./ClassCrud.css";
import DeleteBtn from './DeleteBtn'
export class PostList extends Component {
  // data fetch zalyavr mla ky karaych ahe  conrolled compoent kraycha ahe
  // kahi jari change zal tri comp prt render zala pahihe
  // ya sathi state create krayla lagel---ka,,tr data return zalela statet la assign kra

  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  // asy---asynthronus call ---axios--retun promise--->handle sathi async await
  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(result);
    if (result.data.length > 0) {
      this.setState({
        post: result.data,
      });
    }
  }

  render() {
    return (
      <div className="postlist">
        {/* <h6>{JSON.stringify(this.state)}</h6> */}
        <table>
          <thead>
            <tr>
              <td> User Id</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {this.state.post.map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>{<DeleteBtn id={post.id}/>}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostList;
