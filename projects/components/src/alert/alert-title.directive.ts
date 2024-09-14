import { computed, Directive, input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const variants = cva("mb-1 font-medium leading-none tracking-tight",
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

export type Variants = VariantProps<typeof variants>;

@Directive({
  selector: '[uiAlertTitle]',
  standalone: true,
  host: {
    role: 'alert',
    '[class]': 'combinedClass()',
  }
})
export class AlertTitleDirective {

  constructor() { }

  public readonly inputClass = input('', { alias: 'class' });
  variant = input<Variants['variant']>('default');
	protected combinedClass = computed(() => cn(variants({ variant: this.variant()}), this.inputClass()));

}
