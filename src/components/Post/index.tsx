import { PostComponent, PostContentComponent, PostHeaderComponent } from "./style"
import Image from "next/image"
import { ReactNode, useEffect, useState } from "react"

import trash from 'assets/trash.png'
import edit from 'assets/edit.png'
import { useData } from "Hooks/useData"

type PostProps = {
    id: number;
    username: string;
    time: string;
    title: string;
    content: string;
}

export const Post = ({ id, username, time, title, content }: PostProps) => {
    const [timeText, setTimeText] = useState<string>('')
    const { setModalDeleteIsOpen, modalDeleteIsOpen, setIdModal } = useData()

    function handleOpenModal(id: number){
        setIdModal(id)
        setModalDeleteIsOpen(!modalDeleteIsOpen)
    }

    useEffect(() => {
        const date = new Date(time);

        const diffInMs = Date.now() - date.getTime();
        const diffInMin = Math.round(diffInMs / 60000);
        const diffInHr = Math.round(diffInMs / 3600000);
        const diffInDay = Math.round(diffInMs / 86400000);

        if (diffInMin === 1) {
            setTimeText(`about ${diffInMin} minute ago`);
        } else if (diffInMin < 60) {
            setTimeText(`about ${diffInMin} minutes ago`);
        } else if (diffInHr === 1) {
            setTimeText(`about ${diffInHr} hour ago`);
        } else if (diffInHr < 24) {
            setTimeText(`about ${diffInHr} hours ago`);
        } else if (diffInDay === 1) {
            setTimeText(`about ${diffInHr} day ago`);
        } else {
            setTimeText(`about ${diffInDay} days ago`);
        }
    }, [time]);

    return (
        <>
            <PostComponent>
                <PostHeaderComponent>
                    <h3>{title}</h3>
                    <div className="post_header-btn">
                        <button onClick={() => handleOpenModal(id)}>
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

        </>
    )
}