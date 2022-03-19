import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likesCount} />
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let pressedOn = () => {
        let text = newPostElement.current.value
        props.pressedOn(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>
                myposts
            </h3>
            <div>
                <div>
                    <textarea onChange={pressedOn} value={props.newPostText} ref={newPostElement} cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts