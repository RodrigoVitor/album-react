import {Routes, Route} from 'react-router-dom'
import { Album } from '../pages/Album'
import { AlbumPhoto } from '../pages/Album/AlbumPhoto'
import { Photos } from '../pages/Photos'

export function Router() {
    return (
    <div> 
        <Routes>
         <Route path="/" element={<Album />}/>
         <Route path="/album/:id/photos" element={<AlbumPhoto />}/>
         <Route path="/photos/:id" element={<Photos />}/>
        </Routes>
    </div>
    )
}