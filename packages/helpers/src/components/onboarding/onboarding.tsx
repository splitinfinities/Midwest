import { Component, Element, Listen, Method, Prop } from '@stencil/core';
import Shepherd from 'shepherd.js';
import { asyncForEach } from '@midwest-design/common';

@Component({
  tag: 'midwest-onboarding',
  styleUrl: 'onboarding.css'
})
export class Onboarding {
  @Element() element: HTMLElement;
  @Prop() autoOpen: boolean;
  @Prop() returnsTo: string;
  @Prop() returnsToStep: string;
  tour: Shepherd.Tour; 

  async componentDidLoad() {
    const steps = this.element.querySelectorAll('midwest-onboarding-step');

    const offset = {
      name: 'offset',
      options: {
        offset: ({ placement }) => {
          if (placement === 'bottom') {
            return [0, 48];
          } else {
            return [];
          }
        },
      },
    };

    this.tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shadow-2xl',
        cancelIcon: {
          enabled: false
        },
        popperOptions: {
          modifiers: [
            offset
          ]
        },
        scrollTo: {
          behavior: "smooth",
          block: "center"
        }
      }
    });

    await asyncForEach(steps, async (step) => {
      const details = await step.details(this.tour, this.element.id)
      this.tour.addStep(details);
    });

    if (this.autoOpen) {
      await this.start();
    }
  }

  @Method()
  async show(name: string) {
    this.tour.show(name)
  }

  @Method()
  async start() {
    if (this.returnsTo && this.returnsToStep) {
      this.tour.on("complete", () => {
        const chainedTour = document.querySelector(`midwest-onboarding#${this.returnsTo}`) as HTMLMidwestOnboardingElement
        chainedTour.start()
        chainedTour.show(this.returnsToStep)
        this.returnsToStep = undefined;
        this.returnsTo = undefined;
      })

      this.tour.on("cancel", () => {
        const chainedTour = document.querySelector(`midwest-onboarding#${this.returnsTo}`) as HTMLMidwestOnboardingElement
        chainedTour.start()
        chainedTour.show(this.returnsToStep)
        this.returnsToStep = undefined;
        this.returnsTo = undefined;
      })
    }

    this.tour.start();
  }

  @Listen("open-onboarding", { target: "window" }) 
  handleOpen(e) {
    if (e.detail.href.replace("#", "") === this.element.id) {
      this.tour.start()
    }
  }

}
