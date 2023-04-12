import { PostComponent, PostContentComponent, PostHeaderComponent } from "./style"
import Image from "next/image"
import { useEffect, useState } from "react"

import trash from 'assets/trash.png'
import edit from 'assets/edit.png'

type PostProps = {
    username: string;
    time: string;
    title: string;
    content: string;
}

export const Post = ({ username, time, title, content }: PostProps) => {
    const [timeText, setTimeText] = useState<string>('')
    
    useEffect(() => {
        const date = new Date(time);
    
        const diffInMs = Date.now() - date.getTime();
        const diffInMin = Math.round(diffInMs / 60000);
        const diffInHr = Math.round(diffInMs / 3600000);
        const diffInDay = Math.round(diffInMs / 86400000);
    
        if (diffInMin === 1) {
          setTimeText(`${diffInMin} minuto atrás`);
        } else if(diffInMin < 60){
            setTimeText(`${diffInMin} minutos atrás`);
        } else if (diffInHr === 1) {
          setTimeText(`${diffInHr} hora atrás`);
        }  else if (diffInHr < 24) {
          setTimeText(`${diffInHr} horas atrás`);
        }  else if (diffInDay === 1) {
          setTimeText(`${diffInHr} dia atrás`);
        } else {
          setTimeText(`${diffInDay} dias atrás`);
        }
      }, [time]);

    return (
        <PostComponent>
            <PostHeaderComponent>
                <h3>{title}</h3>
                <div className="post_header-btn">
                    <button>
                        <Image className="post_header-trash img-btn" src={trash} alt="" />
                    </button>
                    <button>
                        <Image className="post_header-edit img-btn" src={edit} alt="" />
                    </button>
                </div>
            </PostHeaderComponent>
            <PostContentComponent>
                <div>
                    <p className="postAuthor">@{username}</p>
                    <p className="published">{timeText}</p>
                </div>
                <p>{content}</p>
            </PostContentComponent>
        </PostComponent>
    )
}