import { PostHeader } from "components/PostHeader"
import { PostComponent } from "./style"
import { PostContent } from "components/PostContent"

export const Post = () => {
    return (
        <PostComponent>
            <PostHeader/>
            <PostContent /> 
        </PostComponent>
    )
}