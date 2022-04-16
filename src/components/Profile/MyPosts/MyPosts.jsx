import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'



const maxLength10 = maxLengthCreator(10)


const MyPosts = React.memo(props => {
    let postsElement = props.posts.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likesCount} />
    })

    let onAddPost = (value) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>
                myposts
            </h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[requiredField, maxLength10]} placeholder={'postMEssage'} />
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts