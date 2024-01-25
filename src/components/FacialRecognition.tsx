import React, { RefObject, createRef } from "react";
import { ORIGIN, facialRecognitionUrl } from "../config";
import { IBiodocCallbackParams } from "../Pages/CallbackPage";

type TFacialRecognitionProps = React.PropsWithoutRef<"iframe">;

interface IFacialRecognitionState {
    received?: IBiodocCallbackParams
}

// const callbackUrl = "http://localhost:5173/biodoc-callback"

class FacialRecognition extends React.Component<TFacialRecognitionProps, IFacialRecognitionState> {
    state: IFacialRecognitionState;
    biodocWindowRef: RefObject<HTMLIFrameElement> | null = null;
    constructor(props: TFacialRecognitionProps) {
        super(props);
        this.biodocWindowRef = createRef();
        this.state = {
        }
        this.handleMessageReceived = this.handleMessageReceived.bind(this);
    }

    componentDidMount(): void {
        window?.addEventListener("message", this.handleMessageReceived, false);
        return;
    }

    handleMessageReceived(ev: MessageEvent<string>) {
        if (ev.origin != ORIGIN) {
            return;
        }
        if (ev.data) {
            try {
                const obj = JSON.parse(ev.data) as IBiodocCallbackParams;
                console.log(obj);
                this.setState({ received: obj });
            } catch (err) {
                console.error(err);
            }
        }
        // console.log(ev);
    }

    render() {
        return <section>
            <h1>Pai do Iframe(Dono)</h1>
            <iframe src={facialRecognitionUrl} ref={this.biodocWindowRef}
                allow="camera"
            ></iframe>
            <h2>Recebidos do Callback da Biodoc(do Filho do Dono)</h2>
            <p>{this.state.received?.card}</p>
            <p>{this.state.received?.response}</p>
            <p>{this.state.received?.message}</p>
            <p>{this.state.received?.date}</p>
        </section>
    }
}

export default FacialRecognition;