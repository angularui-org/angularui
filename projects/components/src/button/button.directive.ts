import { computed, Directive, input, signal } from '@angular/core';
import { type VariantProps, cva } from 'class-variance-authority';
import { ClassValue } from 'class-variance-authority/types';
import { cn } from '../lib/utils';


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: '[uiButton]',
  standalone: true,
  host: {
    role: 'button',
    '[class]': 'combinedClass()',
  },
})
export class ButtonDirective {

  public readonly inputClass = input('', { alias: 'class' });
  variant = input<ButtonVariants['variant']>('default');
  size = input<ButtonVariants['size']>('default');
	protected combinedClass = computed(() => cn(buttonVariants({ variant: this.variant(), size: this.size() }), this.inputClass()));


}