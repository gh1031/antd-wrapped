import { image } from './mime';

export default function getFileInfo(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      const { result } = evt.currentTarget;
      if (image.includes(file.type)) {
        const img = new Image();
        img.src = result;
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
        img.onerror = (error) => {
          reject(error);
        };
      }
    };
  });
}
