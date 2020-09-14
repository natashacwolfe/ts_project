// Code goes here!

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.mount();
    }

    private mount() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}


const prjInput = new ProjectInput();