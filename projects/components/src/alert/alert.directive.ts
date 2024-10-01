import { computed, Directive, input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const alertVariants = cva("relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
        'primary-light': "bg-primary-100 border-primary-200 text-primary",
        'secondary-light': "bg-secondary-100 border-secondary-200 text-secondary",
        'success-light': "bg-success-100 border-success-200 text-success",
        'warning-light': "bg-warning-100 border-warning-200 text-warning",
        'danger-light': "bg-danger-100 border-danger-200 text-danger",
      }
    },
    defaultVariants: {
      variant: "primary"
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;

@Directive({
  selector: '[uiAlert]',
  standalone: true,
  host: {
    role: 'alert',
    '[class]': 'combinedClass()',
  }
})
export class AlertDirective {

  constructor() { }

  public readonly inputClass = input('', { alias: 'class' });
  variant = input<AlertVariants['variant']>('primary');
  // size = input<ButtonVariants['size']>('default');
	protected combinedClass = computed(() => cn(alertVariants({ variant: this.variant()}), this.inputClass()));


}
