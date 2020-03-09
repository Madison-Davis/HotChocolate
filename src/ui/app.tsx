import * as React from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { ProjectsList } from "./projects-list";
import { ProjectEntry, ProjectEntryProps } from "./project-entry";

export class App extends React.Component<{},{entries: ProjectEntryProps[]}> {
    private readonly entriesPromise: Promise<ProjectEntryProps[]>;
    constructor(props: {}) {
        super(props);

        this.entriesPromise = new Promise<ProjectEntryProps[]>((resolve) => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (request.readyState == 4 && request.status == 200) {
                    console.log(request.responseText);
                    const lines = request.responseText.split("\n");
                    lines.shift();

                    const entries: ProjectEntryProps[] = [];
                    for (let i = 0; i < lines.length; i++) {
                        const pieces = lines[i].split(" ");
                        entries.push({
                            submitter: pieces[0],
                            language: pieces[1],
                            title: pieces[2],
                            imageURL: pieces[3],
                            clickURL: pieces[4]
                        })
                    }
                    resolve(entries);
                }
            }
            request.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIk7GUD66eeNgQdDN4Aunctuc6EoJGSNYRyi9W9l-gCIEsYcgSLMIA2nSG_0PuAKJic8FFF718goY4/pub?output=tsv", true); 
            request.send(null);
        });

        
    }
    render() {
        return (
            <div className="flex-down">
                <Header></Header>
                <Hero></Hero>
                <ProjectsList>
                    {() => {
                        this.entriesPromise.
                    }}
                </ProjectsList>
            </div>
        );
    }
}