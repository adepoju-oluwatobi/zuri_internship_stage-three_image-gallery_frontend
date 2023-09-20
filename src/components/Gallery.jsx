import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'src/assets/img-1.jpg', position: { x: 0, y: 0 } },
    { id: 2, src: 'src/assets/img-2.jpg', position: { x: 0, y: 0 } },
    { id: 3, src: 'src/assets/img-3.jpg', position: { x: 0, y: 0 } },
    { id: 4, src: 'src/assets/wed-1.jpg', position: { x: 0, y: 0 } },
    { id: 5, src: 'src/assets/wed-3.jpg', position: { x: 0, y: 0 } },
    { id: 6, src: 'src/assets/wed-3.jpg', position: { x: 0, y: 0 } },
    { id: 7, src: 'src/assets/wed-4.jpg', position: { x: 0, y: 0 } },
    { id: 8, src: 'src/assets/wed-5.jpg', position: { x: 0, y: 0 } },
    { id: 9, src: 'src/assets/rand-1.jpg', position: { x: 0, y: 0 } },
    { id: 10, src: 'src/assets/rand-2.jpg', position: { x: 0, y: 0 } },
    // Add more images as needed
  ]);

  const imageWidth = 192; // Adjust this value based on your image width
  const imageHeight = 192; // Adjust this value based on your image height
  const borderSize = 4; // Adjust the border size as needed

  const handleDrag = (index, newPosition) => {
    const updatedImages = [...images];
    const x = newPosition.x;
    const y = newPosition.y;

    // Update the image position
    updatedImages[index].position = { x, y };
    setImages(updatedImages);
  };

  const handleDrop = (index, dropIndex) => {
    if (index !== dropIndex) {
      const updatedImages = [...images];
      const [draggedImage] = updatedImages.splice(index, 1);
      updatedImages.splice(dropIndex, 0, draggedImage);
      setImages(updatedImages);
    }
  };

  return (
    <div className='flex justify-center items-center w-[800px] m-auto h-[1200px]'>
      <div className="gallery-container p-4 border border-gray-500 w-[1200px]">
        <div className="image-gallery grid grid-cols-4 gap-5">
          {images.map((image, index) => (
            <Draggable
              key={image.id}
              position={image.position}
              onStop={(e, data) => {
                handleDrag(index, { x: data.x, y: data.y });
              }}
              disabled={image.position.x !== 0 || image.position.y !== 0}
              // Disable dragging for images with a fixed position
              handle=".draggable-handle" // Set the handle element for dragging
            >
              <div
                className="image-container w-48 h-48 relative bg-gray-200 hover:bg-gray-300 rounded-lg"
                onDrop={() => handleDrop(index, index - 1)}
                onDragOver={(e) => e.preventDefault()}
              >
                <img
                  src={image.src}
                  alt={`Image ${index}`}
                  className="draggable-image w-full h-full rounded-lg"
                />
                <div className="draggable-handle absolute w-full h-full"></div>
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
