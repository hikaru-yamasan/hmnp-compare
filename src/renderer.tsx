import React from "react";
import ReactDOM from "react-dom";

interface States {
  filename: string;
}

class RootDiv extends React.Component<{}, States> {
  constructor(props: {}) {
    super(props);
    this.state = {
      filename: "",
    };
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      filename: event.target.value,
    });
  };

  handleOnClick = async () => {
    const { filename } = this.state;
    const result = await window.api.existFile(filename);
    alert(`${filename}は${result ? "存在しています" : "存在していません"}`);
  };

  render = () => {
    return (
      <>
        <input type="text" onChange={this.handleOnChange} />
        <button onClick={this.handleOnClick}>検索</button>
      </>
    );
  };
}

ReactDOM.render(<RootDiv />, document.getElementById("root"));
