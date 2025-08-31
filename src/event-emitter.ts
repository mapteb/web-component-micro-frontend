export class EventEmitter {
	listeners: any;
    constructor() {
        this.listeners = {};
    }

    // Register an event listener
    on(eventName: string, callback: any) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }

    // Unregister an event listener
    off(eventName: string, callback: any) {
        if (this.listeners[eventName]) {
            this.listeners[eventName] = this.listeners[eventName].filter(
                (listener: any) => listener !== callback
            );
        }
    }

    // Emit an event
    emit(eventName: string, ...args: any[]) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].forEach((callback: any) => {
                callback(...args);
            });
        }
    }
}