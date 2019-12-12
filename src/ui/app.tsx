import * as React from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { ProjectsList } from "./projects-list";

export class App extends React.Component<{},{}> {
    render() {
        return (
            <div className="flex-down">
                <Header></Header>
                <Hero></Hero>
                <ProjectsList></ProjectsList>
            </div>
        );
    }
}