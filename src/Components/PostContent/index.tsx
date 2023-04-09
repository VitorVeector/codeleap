import { PostContentComponent } from "./style"

export const PostContent = () => {
    return (
        <PostContentComponent>
            <div>
                <p className="postAuthor">@Vitor</p>
                <p className="published">25 minutes ago</p>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus laudantium sint eveniet nesciunt quo ratione? Itaque sunt, unde at quam autem placeat architecto asperiores eius ipsum ducimus veniam reprehenderit?</p>
        </PostContentComponent>
    )
}