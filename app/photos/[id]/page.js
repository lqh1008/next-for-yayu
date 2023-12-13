// photos/[id]/page.js
import {photos} from '../../data';

export default function PhotoPage({ params: { id } }) {
  console.log('🚀  id:::', id)

  const photo = photos.find((p) => p.id === id)
  return (
    <img style={{width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={photo.src} />
  )
}