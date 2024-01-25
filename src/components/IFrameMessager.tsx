import React from "react";

interface IIFrameMessagerProps extends React.ComponentProps<"div"> {}

class IFrameMessager extends React.Component<IIFrameMessagerProps> {
  constructor(props: IIFrameMessagerProps) {
    super(props);
  }

  sendMessage(){

  }

  render() {
    return this.props.children;
  }
}

export default IFrameMessager;
