import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/range';
import {busca} from '../store/reducers/busca';
import {buscaVideo} from '../store/actions/busca-video'


class SearchBar extends Component {

    pesquisaTermo = e => {
        const termo = e.target.value
        if (e.keyCode === 13) {
            console.log(termo)
            this.props.buscaVideo(termo)
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' onKeyDown={(e) => this.pesquisaTermo(e)} size='large' placeholder='Search ...' />
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)