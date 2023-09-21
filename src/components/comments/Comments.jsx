import React, {useEffect, useState} from 'react';
import Title from "../reusable/Title/Title";
import Body from "../reusable/body/Body";
import s from "./Comments.module.scss";
import Button from "../reusable/button/Button";
import Textarea from "../reusable/inputs/Textarea";
import avatar from '../img/avatar.png'

const Comments = () => {
    const [textComment,setTextComment] = useState('')
    const [isValidComment,setIsValidComment] = useState(false)
    const [comments,setComments] = useState([{
        id:1,
        img: avatar,
        text: 'test'
    }])
    useEffect(() => {
        localStorage.getItem('comments') ? setComments(JSON.parse(localStorage.getItem('comments'))) : setComments(comments);
    }, []);
    const commentsItems = comments.map((comment)=>{
            return <div className={s.comments} key={comment.id}>
                <img src={comment.img} alt="avatar" className={s.avatar}/>
                {comment.text}
            </div>
        }
    )
    const ohHandleChangeComment = (comment) => {
        setTextComment(comment)
        setIsValidComment(false)
    }
    const AddComment = () => {
        if (textComment !== '') {
        setComments([...comments, {
            id: comments.length + 1,
            img: avatar,
            text: textComment
        }])
            localStorage.setItem('comments', JSON.stringify(comments));
        setTextComment('')
        } else {
            setIsValidComment(true)
        }
    }
    return (
        <Body>
            <Title >
                Comments
            </Title>
            <div className={s.comments_body}>
                <span>
                    {commentsItems}
                </span>
            </div>
            <div className={s.add_container}>
                <div>
                <Textarea
                    value={textComment}
                    setValue={e => ohHandleChangeComment(e.target.value)}
                    placeholder='Type comment here...'
                />
                <span className={isValidComment ? s.visible : s.hide }>Enter comment</span>
                </div>
                <Button className={s.item_btn} onClick={() => AddComment()}>Add New</Button>
            </div>
        </Body>
    );
};

export default Comments;