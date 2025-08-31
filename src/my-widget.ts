// src/my-widget.js
export class MyWidget extends HTMLElement {
	
	constructor() {
		super();

	
	}
	
	connectedCallback() {
	  document.addEventListener('my-custom-event', (e: Event) => {
		const customEvent = e as CustomEvent<{ message: string }>;
		this.innerHTML += `<p>Received: ${customEvent.detail.message}</p>`;
	  });
      this.innerHTML +=	`my-widget waiting for my-custom-event: `;  
	}
}

customElements.define('my-widget', MyWidget);

