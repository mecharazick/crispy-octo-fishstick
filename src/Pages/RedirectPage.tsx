import React from "react";

const HOME = window.location.origin;

class RedirectPage extends React.Component {
    constructor(props: React.PropsWithoutRef<"div">) {
        super(props);
        const searchParams = new URLSearchParams(window.location.search);
        const redirectUrl = searchParams.get("encoded-url");
        window.location.replace(redirectUrl || HOME);
    }

    render() {
        return <div></div>
    }
}

export default RedirectPage;