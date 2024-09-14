import { computed, Directive, input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
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
  variant = input<AlertVariants['variant']>('default');
  // size = input<ButtonVariants['size']>('default');
	protected combinedClass = computed(() => cn(alertVariants({ variant: this.variant()}), this.inputClass()));


}
