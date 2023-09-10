const express = require('express');
const sharp = require('sharp');
const axios = require('axios');
const cors = require('cors'); // cors 패키지를 가져옴

const app = express();

// app.use(express.static('public'));
app.use(cors());

app.get('/api/convert-to-webp', async (req, res) => {
  try {
    const imageUrl = req.query.image;

    // 원격 이미지 다운로드
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    if (response.status === 200) {
      // 다운로드한 이미지의 형식을 확인하여 JPEG이라면 WebP로 변환
      if (response.headers['content-type'] === 'image/jpeg') {
        const webpImage = await sharp(response.data)
          .webp()
          .toBuffer();

        // 변환된 이미지를 클라이언트에 응답으로 전송
        res.type('webp').send(webpImage);
        console.log(webpImage);
      } else {
        // 이미지 형식이 지원되지 않는 경우 에러 응답
        res.status(500).send('Unsupported image format');
        console.log('Unsupported image format');
      }
    } else {
      // 이미지 다운로드 실패 시 에러 응답
      res.status(500).send('Failed to download image');
      console.log('Failed to download image');
    }
  } catch (error) {
    console.error('Error during image conversion:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
