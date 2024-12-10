class MnPost extends HTMLElement {
    constructor() {
        super();
    }

    #render(){
        this.innerHTML = `
        <article>
            <h3>${this.title}</h3>
            <p>${this.body}</p>
            <mn-reaction cnt="123" icon="#"></mn-reaction>
            <mn-reaction cnt="1" icon="!"></mn-reaction>
            <mn-reaction cnt="3" icon="&"></mn-reaction>
        </article>`;
    }

    connectedCallback() {
        this.title = this.getAttribute("garchig") || "garchiggui";
        this.body = this.getAttribute("body") || "baihgui"
        

        // Use backticks for template literals
        this.#render();
        // This is called when the element is added to the DOM
    }

    disconnectedCallback() {
        // This is called when the element is removed from the DOM
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // This is called when an observed attribute changes
    }

    adoptedCallback() {
        // This is called when the element is moved to a new document
    }
}

window.customElements.define('mn-post', MnPost);
