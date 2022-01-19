class Amplitude extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML =
        `<input type="range" class="form-control-range" id="sliders" min="0" max="5" step="0.1" value="1" onInput="num.value=sliders.value">`
    }
}
window.customElements.define("a-mplitude",Amplitude);