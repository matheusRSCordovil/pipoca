import React from "react";

export default class KeyboardNavigator extends React.Component {
  onKeydown = (event) => {
    const { prevHandler, nextHandler } = this.props;
    // eslint-disable-next-line default-case
    switch (event.key) {
      case "j":
        prevHandler();
        break;
      case "k":
        nextHandler();
        break;
    }
  };

  componentDidMount() {
    const { index, total, loop, prevHandler, nextHandler } = props;
    window.addEventListener("keydown", this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
  }

  render() {
    return null;
  }
}
