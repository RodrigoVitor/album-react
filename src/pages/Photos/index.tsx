import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Photo {
    id: number,
    url: string,
    title: string
}

export function Photos () {
    const params = useParams()
    const [photo, setPhoto] = useState<Photo>(Object)

    useEffect(() => {
        request()
    }, [])

    async function request() {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
            setPhoto(res.data)
        } catch (error) {
            console.log('Error 500')
        }
    }

    return (
        <div>
            <img src={photo.url} alt={photo.title} />
        </div>
    )
}