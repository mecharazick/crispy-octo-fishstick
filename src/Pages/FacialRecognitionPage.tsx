import React, { RefObject, createRef } from "react";
import { ORIGIN, facialRecognitionUrl } from "../config";
import { IBiodocCallbackParams } from "./CallbackPage";
import IFrameListener from "../components/IFrameListener";

export interface IFacialRecognitionState {
    received?: IBiodocCallbackParams
}

// const callbackUrl = "http://localhost:5173/biodoc-callback"

const FacialRecognitionListener = IFrameListener<IBiodocCallbackParams>;

class FacialRecognitionPage extends React.Component<React.PropsWithChildren, IFacialRecognitionState> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = {
        }
        this.handleMessageReceived = this.handleMessageReceived.bind(this);
    }


    handleMessageReceived(data: IBiodocCallbackParams) {
        console.log("Received " + data);
        this.setState({ received: data });
    }

    render() {
        return <section>
            <h1>Pai do Iframe(Dono)</h1>
            <FacialRecognitionListener src={facialRecognitionUrl} onMessageReceived={this.handleMessageReceived} allow="camera" origin={ORIGIN} />
            <h2>Recebidos do Callback da Biodoc(do Filho do Dono)</h2>
            <p>{this.state.received?.card}</p>
            <p>{this.state.received?.response}</p>
            <p>{this.state.received?.message}</p>
            <p>{this.state.received?.date}</p>
        </section>
    }
}

export default FacialRecognitionPage;