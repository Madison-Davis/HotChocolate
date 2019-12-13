import * as React from "react";

export class ProjectsList extends React.Component {
    render() {
        return <div className="projects-list">{this.props.children}</div>
    }
}