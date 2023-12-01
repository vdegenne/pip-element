import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('test-element')
class TestElement extends LitElement {
	@state() i = 0;

	render() {
		return html`<i>${this.i}</i
			><button @click=${() => this.i++}>increment++</button>`;
	}
}
