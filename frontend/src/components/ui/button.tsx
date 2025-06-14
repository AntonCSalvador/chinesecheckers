import React, { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../../lib/utils.tsx"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-transparent",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent",
      ghost: "hover:bg-accent hover:text-accent-foreground border border-transparent",
      link: "text-primary underline-offset-4 hover:underline border-none bg-transparent",
    }

    const sizeStyles = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md text-sm",
      lg: "h-11 px-8 rounded-md text-base",
      icon: "h-10 w-10",
    }

    const Comp = asChild ? React.cloneElement : "button"

    return (
      <button className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} ref={ref} {...props} />
    )
  },
)

Button.displayName = "Button"

export { Button }
