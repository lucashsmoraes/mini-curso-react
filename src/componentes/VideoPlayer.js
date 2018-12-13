import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'


const VideoPlayer = props => {
    return (
        <div className='video-player'>
        {
            !props.video.id && (
                <Advertisement style={{'heigth': '433px'}} unit= 'top banner' test='Escolha um video'/>
            )
        }
        {
            props.video.id && (
                <Embed id={props.video.id.videoId} source='youtube' placeholder='https://ogcss.infoglobo.com.br/9876543210/img/no-video-img.png'/>
            )
        }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer)