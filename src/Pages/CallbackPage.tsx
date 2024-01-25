import React from "react";
import { ORIGIN } from "../config";

export interface IBiodocCallbackParams {
    date: string,
    response: number,
    message: string,
    card: string
}

export interface ICallbackState extends IBiodocCallbackParams { }

class CallbackPage extends React.Component<React.PropsWithoutRef<"div">, ICallbackState> {
    constructor(props: React.PropsWithoutRef<"div">) {
        super(props);
        this.postMessage();
    }

    postMessage() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const date = urlSearchParams.get("date") as string;
        const response = Number.parseInt(urlSearchParams.get("response") as string);
        const message = urlSearchParams.get("message") as string;
        const card = urlSearchParams.get("card") as string;
        const biodocParams: IBiodocCallbackParams = {
            date,
            response,
            message,
            card
        };
        const json = JSON.stringify(biodocParams);
        console.log(json);
        parent?.window?.postMessage(json, ORIGIN);
        this.state = { ...biodocParams };
    }

    render() {
        const { message, response, card, date } = this.state;
        return <div>
            <h1>Callback da Biodoc(Filho do Dono)</h1>
            <p>message: {message}</p>
            <p>reponse: {response}</p>
            <p>card: {card}</p>
            <p>date: {date}</p>
        </div>
    }
}

export default CallbackPage;