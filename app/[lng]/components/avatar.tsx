import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    initial: string
    img?: string
}

export const UserAvatar = ({ initial, img }: UserAvatarProps) => {
    return (
        <Avatar>
            <AvatarImage src={img} />
            <AvatarFallback className="font-bold uppercase">{initial}</AvatarFallback>
        </Avatar>
    )
}