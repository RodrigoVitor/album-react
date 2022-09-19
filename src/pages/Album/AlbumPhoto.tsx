import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import * as C from './styles'

interface Photos {
    id: number,
    title: string,
    thumbnailUrl: string
}

export function AlbumPhoto () {
    const params = useParams()
    const [photos, setPhotos] = useState<Photos[]>([])

    

    useEffect(() => {
        request()
    }, [])

    async function request() {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
            setPhotos(res.data)
        } catch (error) {
            console.log('Error 500')
        }
    }
    return (
        <div>

            <C.Container>
                {photos.map(photo => (
                    <C.Link key={photo.id} href={`/photos/${photo.id}`}>
                        <C.Figure>
                            <C.Image src={photo.thumbnailUrl} alt={photo.title} />
                            <C.Title>{photo.title}</C.Title>
                        </C.Figure>
                    </C.Link>
                ))}
                
            </C.Container>
        </div>
    )
}