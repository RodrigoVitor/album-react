import { AlbumTitle } from "../../components/AlbumTitle";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AlbumType } from "../../types/Album";



export function Album() {
    const [albums, setAlbums] = useState<AlbumType[]>([])
    useEffect(() => {
        request()
    }, [])

    const request = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setAlbums(res.data)
        } catch (e) {
            console.log('Error 500')
        }
           
    }

    return (
        <div>
            {albums.map(album => (
                <AlbumTitle id={album.id} title={album.title}/>
            ))}
        </div>
    )
}