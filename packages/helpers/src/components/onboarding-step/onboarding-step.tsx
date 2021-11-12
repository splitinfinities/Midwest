import { Component, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';
import Shepherd from 'shepherd.js';
import delay from 'async-delay';

@Component({
  tag: 'midwest-onboarding-step',
  shadow: true,
})
export class OnboardingStep {
  @Element() element: HTMLElement;
  @Prop() name: string;
  @Prop() stepTitle: string;
  @Prop() back: string;
  @Prop() awaitModal: boolean;
  @Prop() forceAction: boolean;
  @Prop() canClickTarget: boolean;
  @Prop() closeModalAfterward: boolean;
  @Prop() delay: number;
  @Prop() next: string;
  @Prop() navigateTo: string;
  @Prop() chainTo: string;
  @Prop() nextText: string = 'next';
  @Prop() completeText: string;
  @Prop() selector: string;
  @Prop() position:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'auto';
  text: string;
  pjax: any = document.querySelector('midwest-pjax').pjax;
  tour: Shepherd.Tour;

  tourName: string;

  @Event({ bubbles: true, composed: true, eventName: 'modalClose' }) closeModal: EventEmitter;

  componentWillLoad() {
    let code: any = this.element.querySelector('template');

    if (!code.innerHTML) {
      code = Array.from(code.children)
        .map((node: any) => {
          return node.outerHTML;
        })
        .join();
    } else {
      code = code.innerHTML;
    }

    this.text = code;
  }

  @Method()
  async details(tour, id) {
    this.tourName = id;

    const details = {
      id: this.name,
      text: this.text,
      title: this.stepTitle,
      beforeShowPromise: undefined,
      canClickTarget: this.canClickTarget,
      advanceOn: { selector: this.selector, event: 'click' },
      when: {
        hide: () => {
          if (this.closeModalAfterward) {
            this.closeModal.emit({});
          }
        },
      },
      attachTo: {
        element: this.selector,
        on: this.position,
      },

      buttons: [
        ...[
          this.back && {
            text: 'Back',
            action: () => {
              tour.back();
            },
          },
          this.completeText && {
            text: this.completeText,
            action: () => {
              tour.complete();
            },
          },
          this.next &&
            !this.chainTo && {
              text: this.nextText,
              action: () => {
                tour.show(this.next);
              },
            },
          this.chainTo && {
            text: this.nextText,
            action: () => {
              const chainedTour = document.querySelector(`midwest-onboarding#${this.chainTo}`) as HTMLMidwestOnboardingElement;
              chainedTour.returnsTo = this.tourName;
              chainedTour.returnsToStep = this.next;
              chainedTour.start();
              tour.cancel();
            },
          },
        ].filter(Boolean),
      ],
    };

    if (this.forceAction) {
      details.buttons = [];
    }

    if (this.awaitModal) {
      details.beforeShowPromise = async () => {
        await new Promise(resolve => {
          document.addEventListener('modalOpened', () => {
            resolve(false);
          });

          document.addEventListener('modalClosed', () => {
            resolve(false);
          });
        });

        if (this.delay) {
          await delay(this.delay);
        }

        return true;
      };
    }

    if (this.delay || this.navigateTo) {
      details.beforeShowPromise = async () => {
        if (this.navigateTo && this.pjax) {
          await new Promise(resolve => {
            document.addEventListener('pjax:complete', () => {
              resolve(false);
            });

            this.pjax.loadUrl(this.navigateTo);
          });
        }

        if (this.delay) {
          await delay(this.delay);
        }

        return true;
      };
    }

    return details;
  }
}
