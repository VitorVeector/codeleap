import { PostHeader } from "Components/PostHeader"
import { PostComponent } from "./style"
import { PostContent } from "Components/PostContent"

export const Post = () => {
    return (
        <PostComponent>
            <PostHeader/>
            <PostContent />
        </PostComponent>
    )
}