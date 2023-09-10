const sharp = require('sharp');
const fs = require('fs');

// 이미지 변환 함수
async function convertImage(inputPath, outputPath) {
  await sharp(inputPath)
    .webp() // WebP 형식으로 변환
    .toFile(outputPath);
}

// 이미지 변환할 경로 설정
const inputImagePath = 'imgs/original.jpg'; // 원본 이미지 경로
const outputImagePath = 'imgs/converted.webp'; // 변환된 이미지 저장 경로

// 이미지 변환 실행
convertImage(inputImagePath, outputImagePath)
  .then(() => {
    console.log('이미지 변환이 완료되었습니다.');
  })
  .catch((error) => {
    console.error('이미지 변환 중 오류 발생:', error);
  });
