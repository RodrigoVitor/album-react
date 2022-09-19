import { AlbumType } from '../../types/Album'
import * as C from './styles'

interface AlbumProps extends AlbumType {}

export function AlbumTitle({id, title}: AlbumProps) {
    return (
        <C.Link href={`/album/${id}/photos`}>
            {title}
        </C.Link>
    )
}