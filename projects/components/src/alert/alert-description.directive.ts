import { computed, Directive, input } from '@angular/core';
import { cva } from 'class-variance-authority';
import { Variants } from './alert-title.directive';
import { cn } from '../lib/utils';

const variants = cva("text-sm [&_p]:leading-relaxed",
  {
    variants: {
      variant: {
        default: ""
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

@Directive({
  selector: '[uiAlertDescription]',
  standalone: true,
  host: {
    role: 'alert',
    '[class]': 'combinedClass()',
  }
})
export class AlertDescriptionDirective {

  public readonly inputClass = input('', { alias: 'class' });
  variant = input<Variants['variant']>('default');
	protected combinedClass = computed(() => cn(variants({ variant: this.variant()}), this.inputClass()));

}
