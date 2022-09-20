// Import your JS components here
import "./lazy-loading";
import { Sample } from "./components/sample";

class App {
  constructor() {
    this.components = [];
  }

  component(component) {
    this.components.push(component);
  }

  boot() {
    this.components.forEach((component) => component.init());
  }
}

const app = new App();
// Push imported JS to component variable using .component method
app.component(new Sample());

document.addEventListener("DOMContentLoaded", () => app.boot());


/**
 * Initialize Loading State
 */
// const loadingState = new LoadingState();
// window.addEventListener('load', (event) => loadingState.set('success'));

