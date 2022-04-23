import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ava from "../../../assets/images/ava.png";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
            </div>
            <div className={style.descriptionBlock}>

                <img src={props.profile.photos.large || ava} alt="" />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo