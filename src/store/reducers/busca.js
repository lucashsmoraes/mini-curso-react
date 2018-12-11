const INITIAL_STATE = {
    videos: [],
    carregando: false,
    erro: false
}

export default function busca(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BUSCA_VIDEO_INICIO':
            return {
                videos: [],
                caregando: true,
                erro: false
            }
        case 'BUSCA_VIDEO_SUCESSO':
            return {
                videos: action.videos,
                caregando: false,
                erro: false
            }
        case 'BUSCA_VIDEO_ERRO':
            return {
                videos: [],
                caregando: false,
                erro: true
            }
        default: return state
    }
}