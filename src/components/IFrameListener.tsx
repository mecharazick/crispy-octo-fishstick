import React from "react";

export interface IIFrameListenerProps<T>
  extends React.ComponentPropsWithRef<"iframe"> {
  origin?: string;
  onMessageReceived?: HandleReceiveMessageType<T>;
}

export type HandleReceiveMessageType<T> = (data: T) => {};

const MESSAGE_EVENT = "message";

class IFrameListener<
  T,
  P extends IIFrameListenerProps<T>
> extends React.Component<P> {
  origin: string;
  constructor(props: P | Readonly<P>) {
    super(props);
    this.handleMessageEventListener =
      this.handleMessageEventListener.bind(this);
    this.origin = props?.origin || window.location.origin;
  }

  componendDidMount(): void {
    window?.addEventListener(MESSAGE_EVENT, this.handleMessageEventListener);
  }

  componentWillUnmount(): void {
    window?.removeEventListener(MESSAGE_EVENT, this.handleMessageEventListener);
  }

  handleMessageEventListener(ev: MessageEvent<any>) {
    if (ev.origin != this.origin) return;
    if (this.props?.onMessageReceived == null) return;
    const data = JSON.parse(ev.data) as T;
    this.props.onMessageReceived(data);
  }

  render() {
    return (
      <iframe
        {...(this.props as React.ComponentPropsWithRef<"iframe">)}
      ></iframe>
    );
  }
}

export default IFrameListener;
