import { useState, useEffect } from 'react';

function useWebPImage( imagePath ) {
  const [webPImage, setWebPImage] = useState(null);

  useEffect(() => {
    async function convertToWebP() {
      try {
        // 이미지 변환 요청
        const response = await fetch(`http://localhost:3000/api/convert-to-webp?image=${imagePath}`);
        
        if (response.ok) {
          // 변환된 이미지 데이터를 ArrayBuffer로 읽어옴
          const webPImageData = await response.arrayBuffer();

          // ArrayBuffer를 Blob으로 변환
          const webPImageBlob = new Blob([webPImageData], { type: 'image/webp' });

          // Blob URL 생성
          const webPImageUrl = URL.createObjectURL(webPImageBlob);

          // 변환된 이미지 URL을 상태로 저장
          setWebPImage(webPImageUrl);
        }
      } catch (error) {
        console.error('이미지 변환 중 오류 발생:', error);
      }
    }

    convertToWebP();
  }, [imagePath]);

  return webPImage;
}

export default useWebPImage;
