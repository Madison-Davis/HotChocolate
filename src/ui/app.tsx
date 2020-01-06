import * as React from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { ProjectsList } from "./projects-list";
import { ProjectEntry } from "./project-entry";

export class App extends React.Component<{},{}> {
    render() {
        return (
            <div className="flex-down">
                <Header></Header>
                <Hero></Hero>
                <ProjectsList>
                    <ProjectEntry language="Java" clickURL="http://example.com" submitter="Submitter Name" title="Coding Project" description="This is my coding project! This is my coding project! This is my coding project!" imageURL="coding.jpg"></ProjectEntry>
                    <ProjectEntry language="Java" clickURL="http://example.com" submitter="Submitter Name" title="Coding Project" description="This is my coding project! This is my coding project! This is my coding project!" imageURL="coding.jpg"></ProjectEntry>
                    <ProjectEntry language="Java" clickURL="http://example.com" submitter="Submitter Name" title="Coding Project" description="This is my coding project! This is my coding project! This is my coding project!" imageURL="coding.jpg"></ProjectEntry>
                    <ProjectEntry language="Java" clickURL="http://example.com" submitter="Submitter Name" title="Coding Project" description="This is my coding project! This is my coding project! This is my coding project!" imageURL="coding.jpg"></ProjectEntry>
                </ProjectsList>
            </div>
        );
    }
}