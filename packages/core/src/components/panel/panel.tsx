import { Component, Prop, State, Element, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'midwest-panel',
  styleUrl: 'panel.css',
  shadow: true,
})
export class Panel {
  @Element() element: HTMLElement;

  @State() position: 'left' | 'right' = 'left';
  @State() ready: boolean;

  @Prop() closeOnBlur: boolean = false;
  @Prop({ reflect: true }) hideClose: boolean = false;

  componentDidLoad() {
    setTimeout(() => {
      this.ready = true;
    }, 500);
  }

  @Listen('click', { target: 'window' })
  click(e) {
    var path = e.path || (e.composedPath && e.composedPath());

    if (this.closeOnBlur && !path.includes(this.element)) {
      this.element.classList.remove('active');
    }
  }

  render() {
    return (
      <Host class={`${this.ready ? 'ready' : ''}`}>
        <div class="panel-wrap">
          <slot />
        </div>
      </Host>
    );
  }
}
