// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, onSelectedImage} = props
  const {thumbnailUrl, imageUrl, thumbnailAltText} = galleryDetails

  const onChangeImage = () => {
    onSelectedImage(imageUrl)
  }

  return (
    <li className="list-container">
      <div className="thumb-container">
        <button type="button" className="button" onClick={onChangeImage}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </div>
    </li>
  )
}

export default ThumbnailItem
