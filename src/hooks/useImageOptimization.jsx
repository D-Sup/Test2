import { useEffect } from 'react';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

function useImageOptimization(inputPath, outputPath, quality = 75) {
  useEffect(() => {
    const optimizeImage = async () => {
      if (!inputPath || !outputPath) {
        console.error('Input and output paths are required for image optimization.');
        return;
      }

      try {
        await imagemin([inputPath], {
          destination: outputPath,
          plugins: [imageminWebp({ quality })],
        });
        console.log('이미지 최적화 및 WebP 변환 완료');
      } catch (error) {
        console.error('이미지 최적화 및 WebP 변환 실패', error);
      }
    };

    optimizeImage();
  }, [inputPath, outputPath, quality]);

  return null; // 이 훅은 부수 효과만 수행하고 렌더링 결과를 반환하지 않음
}

export default useImageOptimization;
