import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Separator = forwardRef<
	HTMLHRElement,
	React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		role="separator"
		className={cn("ui-separator", className)}
		{...props}
	/>
));
Separator.displayName = "Separator";
