import axios from "axios";
import React, { Component } from "react";

export class AddingPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  subdata = async (e) => {
    const { userId, title, body } = this.state;
    e.preventDefault();
    const result = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        body: JSON.stringify({
          userId: userId,
          title: title,
          body: body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
      
    );
    if (result.status===201) {
        alert(" data run")
        
    }
    this.props.getdata(true)
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <div className="mt-4 mb-4 display-6 ">Post data</div>
        <form action="" onSubmit={this.subdata}>
          <div>
            User Id :{" "}
            <input
              type="text"
              name=""
              id=""
              value={userId}
              onChange={(event) =>
                this.setState({ userId: event.target.value })
              }
            />
            Title :{" "}
            <input
              type="text"
              name=""
              id=""
              value={title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
            Body :{" "}
            <input
              type="text"
              name=""
              id=""
              value={body}
              onChange={(event) => this.setState({ body: event.target.value })}
            />
          </div>
          <div className="mt-4 mb-4">
            <button>save data</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddingPost;
