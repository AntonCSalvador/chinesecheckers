import { cn } from "../../lib/utils.tsx"
import { type HTMLAttributes, forwardRef } from "react"

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "bg-red-300 text-primary-foreground hover:bg-primary/80",
    secondary: "bg-gray-300 text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-blue-300 text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export { Badge }
