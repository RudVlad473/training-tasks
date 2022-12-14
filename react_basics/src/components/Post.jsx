import React, { useState } from "react"
import Button from "./UI/button/Button"

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.remove(props.post)}>Remove</Button>
            </div>
        </div>
    )
}

export default Post
