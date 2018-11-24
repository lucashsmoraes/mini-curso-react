import React, { Component } from 'react'

import { Segment, Input } from 'semantic-ui-react'


class SearchBar extends Component {

    pesquisaTermo = e => {
        const termo = e.target.value
        if (e.keyCode === 13) {
            console.log(termo)
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

export default SearchBar