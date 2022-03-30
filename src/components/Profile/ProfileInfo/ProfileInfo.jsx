import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={style.profileInfo_img} src="data:image/png;base64,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" alt="" />
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <ProfileStatus status={'jija'} />
            </div>
        </div>
    )
}

export default ProfileInfo