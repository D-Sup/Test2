import { useEffect, useState } from 'react';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

function useImageConversion(inputUrl, quality = 75) {
  const [webPImageUrl, setWebPImageUrl] = useState(null);

  useEffect(() => {
    const convertToWebP = async () => {
      try {
        // 이미지 최적화 및 WebP 변환
        const webpImageData = await imagemin.buffer(inputUrl, {
          plugins: [imageminWebp({ quality })],
        });

        // Blob 생성
        const webpImageBlob = new Blob([webpImageData], { type: 'image/webp' });

        // Blob URL 생성
        const webpImageUrl = URL.createObjectURL(webpImageBlob);

        // 변환된 이미지 URL 저장
        setWebPImageUrl(webpImageUrl);
      } catch (error) {
        console.error('이미지 변환 중 오류 발생:', error);
      }
    };

    if (inputUrl) {
      convertToWebP();
    }
  }, [inputUrl, quality]);

  return webPImageUrl;
}

export default useImageConversion;
