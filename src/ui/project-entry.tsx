import * as React from "react";

interface ProjectEntryProps {
    title: string;
    description: string;
    submitter: string;
    imageURL: string;
}

export class ProjectEntry extends React.Component<ProjectEntryProps> {
    render() {
        return <div className="flex-down project-entry">
            <div className="thumb" style={{
                backgroundImage: `url('${this.props.imageURL}')`
            }}></div>
            <div className="flex-down project-entry-text-container">
                <div className="spread-across">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.submitter}</h4>
                </div>
                <span>{this.props.description}</span>
            </div>
        </div>
    }
}