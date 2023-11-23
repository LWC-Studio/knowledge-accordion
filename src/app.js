import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
    handleToggleClick(evt) {
        this.template.querySelectorAll(".slds-accordion__section").forEach( (element) => {
            if(!evt.currentTarget.classList.contains("slds-is-open")) {
                element.classList.remove("slds-is-open")
                element.querySelector('.slds-accordion__content').setAttribute("hidden", "");
            } 
        });
        evt.currentTarget.classList.toggle("slds-is-open");
        evt.currentTarget.querySelector('.slds-accordion__content').removeAttribute("hidden");
    }
}
