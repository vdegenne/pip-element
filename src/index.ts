import {LitElement, html} from 'lit';
import {
	customElement,
	query,
	queryAssignedElements,
	queryAssignedNodes,
} from 'lit/decorators.js';

declare global {
	interface HTMLElementTagNameMap {
		'pip-element': LitElement;
	}
}

@customElement('pip-element')
export class PipElement extends LitElement {
	protected createRenderRoot() {
		return this;
	}

	async pip() {
		if (this.children.length === 0 || this.children.length > 1) {
			throw new Error('content of <pip-element> needs to have only 1 element');
		}
		console.log(this.childNodes);
		// @ts-ignore
		const pipWindow = await documentPictureInPicture.requestWindow();
		pipWindow.document.body.append(this.children[0]);
		pipWindow.addEventListener('pagehide', () => {
			this.append(pipWindow.document.body.children[0]);
			console.log(this.childNodes);
		});
	}
}
