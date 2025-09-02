import { vi } from 'vitest';
import { describe, it, expect } from 'vitest';
import { MyWidget } from '../src/my-widget';

describe('MyWidget connectedCallback', () => {
  let component;
  let addEventListenerSpy;

  beforeEach(() => {
    // Create a fresh component instance
    // component = document.createElement('my-widget');
	// document.body.appendChild(component);
	component = new MyWidget();
    
    // Spy on document.addEventListener
    addEventListenerSpy = vi.spyOn(document, 'addEventListener');
    
    // Clear any existing innerHTML
    component.innerHTML = '';
  });

  afterEach(() => {
    // Clean up spies
    vi.restoreAllMocks();
    
    // Remove component from DOM if it was added
    if (component.parentNode) {
      component.parentNode.removeChild(component);
    }
  });

  test('should add event listener for my-custom-event when connected', () => {
    // Act
    component.connectedCallback();

    // Assert
    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'my-custom-event',
      expect.any(Function)
    );
  });

  test('should set initial innerHTML with waiting message', () => {
    // Act
    component.connectedCallback();

    // Assert
    expect(component.innerHTML).toBe('my-widget micro-frontend waiting for my-custom-event: ');
  });

  test('should append to existing innerHTML when connected', () => {
    // Arrange
    component.innerHTML = '<div>Existing content</div>';

    // Act
    component.connectedCallback();

    // Assert
    expect(component.innerHTML).toBe(
      '<div>Existing content</div>my-widget micro-frontend waiting for my-custom-event: '
    );
  });

  test('should handle custom event and append message to innerHTML', () => {
    // Arrange
    component.connectedCallback();
    const testMessage = 'Hello from custom event!';

    // Act
    const customEvent = new CustomEvent('my-custom-event', {
      detail: { message: testMessage }
    });
    document.dispatchEvent(customEvent);

    // Assert
    expect(component.innerHTML).toContain(`<p>Received: ${testMessage}</p>`);
    expect(component.innerHTML).toBe(
      `my-widget micro-frontend waiting for my-custom-event: <p>Received: ${testMessage}</p>`
    );
  });
  
  test('should handle multiple custom events', () => {
    // Arrange
    component.connectedCallback();

    // Act
    const event1 = new CustomEvent('my-custom-event', {
      detail: { message: 'First message' }
    });
    const event2 = new CustomEvent('my-custom-event', {
      detail: { message: 'Second message' }
    });

    document.dispatchEvent(event1);
    document.dispatchEvent(event2);

    // Assert
    expect(component.innerHTML).toBe(
      'my-widget micro-frontend waiting for my-custom-event: ' +
      '<p>Received: First message</p>' +
      '<p>Received: Second message</p>'
    );
  });

  test('should handle custom event with empty message', () => {
    // Arrange
    component.connectedCallback();

    // Act
    const customEvent = new CustomEvent('my-custom-event', {
      detail: { message: '' }
    });
    document.dispatchEvent(customEvent);

    // Assert
    expect(component.innerHTML).toContain('<p>Received: </p>');
  });

  test('should handle custom event with special characters in message', () => {
    // Arrange
    component.connectedCallback();
    const specialMessage = '<script>alert("xss")</script> & "quotes"';

    // Act
    const customEvent = new CustomEvent('my-custom-event', {
      detail: { message: specialMessage }
    });
    document.dispatchEvent(customEvent);

    // Assert
    expect(component.innerHTML).toContain(`Received: ${specialMessage)`);
  });

});
