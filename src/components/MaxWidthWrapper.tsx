import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({ className,children,}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
    <div 
    className={cn("h-full max-w-screen-xl px-2 .5 md:px-20",
        className)}>
    {children}
    </div>
    )
}
export default MaxWidthWrapper