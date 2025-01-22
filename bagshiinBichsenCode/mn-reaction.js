class MnReaction extends HTMLElement {
    constructor() {
        super();
        
    }

    #render(){
        this.innerHTML = `
        <p>
            <span>${this.count}</span>
            <span>${this.zurag}</span>
        </p>`;
    }

    connectedCallback() {
        this.count = this.getAttribute("cnt");
        this.zurag = this.getAttribute("icon");
        this.querySelector("button").addEventListener("click", e => {
            this.lks++
        })
        this.#render()
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }

    adoptedCallback() {
    }

}

window.customElements.define('mn-reaction', MnReaction);