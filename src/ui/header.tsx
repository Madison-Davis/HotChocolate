import * as React from "react";

interface HeaderState {
    height: number;
}

export class Header extends React.Component<{},HeaderState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            height: 0
        }
    }
    render() {
        return <div className="header-fixed" ref={(h) => h != null && h.offsetHeight != this.state.height && this.setState({height: h.offsetHeight})}>
            <h2>Coding Thing</h2>
        </div>
        
        
        /*<div style={{
            height: this.state.height
        }}>*/
            
        //</div>;
    }
}