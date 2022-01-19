class Slider extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML =
        `<input type="number" class="form-control" id="num" min="0" max="5" step="0.1" value="1" onInput="sliders.value=num.value">`
    }
}
window.customElements.define("s-lider",Slider);