// src/my-widget.js
import { decode } from 'he';

export class MyWidget extends HTMLElement {
	
	/* constructor() {
		super();	
	} */
	
	connectedCallback() {
	  document.addEventListener('my-custom-event', (e: Event) => {
		const customEvent = e as CustomEvent<{ message: string }>;
		const decodedmsg = decode(customEvent.detail.message)
		this.innerHTML += `<p>Received: ${decodedmsg}</p>`;
	  });
      this.innerHTML +=	`my-widget micro-frontend waiting for my-custom-event: `;  
	}
}

customElements.define('my-widget', MyWidget);

