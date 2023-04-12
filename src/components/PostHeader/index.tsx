import Image from "next/image"
import { PostHeaderComponent } from "./style"
import trash from 'assets/trash.png'
import edit from 'assets/edit.png'

export const PostHeader = () => {
    return (
        <PostHeaderComponent>
            <h3>My First Post at CodeLeap Network!</h3>
            <div className="post_header-btn">
                <button>
                    <Image className="post_header-trash img-btn" src={trash} alt="" />
                </button>
                <button>
                    <Image className="post_header-edit img-btn" src={edit} alt="" />
                </button>
            </div>
        </PostHeaderComponent>  
    )
}