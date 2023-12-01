import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

declare global {
	interface HTMLElementTagNameMap {
		'pip-element': LitElement;
	}
}

@customElement('pip-element')
export class PipElement extends LitElement {
	render() {
		return html` <slot></slot> `;
	}
}
