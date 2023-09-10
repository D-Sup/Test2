// convert-images.js
const express = require('express');
const sharp = require('sharp'); // 이미지 변환을 위한 라이브러리
const app = express();

// 이미지 변환 엔드포인트
app.get('/api/convert-to-webp', async (req, res) => {
  try {
    const imagePath = req.query.image; // 클라이언트에서 전달한 이미지 경로

    // 이미지를 WebP로 변환
    const webpImage = await sharp(imagePath)
      .webp()
      .toBuffer();

    // 변환된 이미지를 클라이언트에 응답으로 전송
    res.type('webp').send(webpImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
