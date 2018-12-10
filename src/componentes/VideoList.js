import React from 'react'
import { connect } from 'react-redux'
import { List, Image } from 'semantic-ui-react'

const VideoList = props => {
    return (
        <div className='video-list'>
            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='https://bit.ly/2RQu1Sv'></Image>
                    <List.Content>
                        <List.Header>Titulo do video</List.Header>
                    </List.Content>
                </List.Item>
            </List>
            <p>{JSON.stringify(props)}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

export default connect(mapStateToProps, null)(VideoList)