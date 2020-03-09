import * as React from "react";

export interface ProjectEntryProps {
    title: string;
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
                <div className="first-grow-down">
                    <span>{this.props.title}</span>
                    <div className="spread-across">
                        <div></div>
                        <div className="first-grow-down">
                            <div></div>
                            <h4>{this.props.submitter}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}