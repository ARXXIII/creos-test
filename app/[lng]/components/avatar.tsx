import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    initial: string
    img?: string
}

export const UserAvatar = ({ initial, img }: UserAvatarProps) => {
    return (
        <Avatar className="shadow-neumorphism-light dark:shadow-neumorphism-dark">
            <AvatarImage src={img} />
            <AvatarFallback className="font-bold bg-neutral-200 dark:bg-zinc-800 uppercase">{initial}</AvatarFallback>
        </Avatar>
    )
}