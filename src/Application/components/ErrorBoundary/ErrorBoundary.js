import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError() {
    return {
      error: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  onClick() {
    this.props.onReset();
    this.setState({ error: false });
    this.props.history.push("/");
  }

  render() {
    return this.state.error ? (
      <div>
        <h1>{this.props.message}</h1>
        <button onClick={this.onClick}>Volver a Inivio</button>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
