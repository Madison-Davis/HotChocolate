import * as React from "react";

interface ProjectEntryProps {
    title: string;
    description: string;
    submitter: string;
    imageURL: string;
    clickURL: string;
    language: string;
}

export class ProjectEntry extends React.Component<ProjectEntryProps> {
    render() {
        return <div className="flex-down project-entry clickable" onClick={() => window.open(this.props.clickURL)}>
            <div className="thumb" style={{
                backgroundImage: `url('${this.props.imageURL}')`
            }}></div>
            <div className="flex-down project-entry-text-container">
                <span className="language-tab">{this.props.language}</span>
                <div className="spread-across">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.submitter}</h4>
                </div>
                <span>{this.props.description}</span>
            </div>
        </div>
    }
}