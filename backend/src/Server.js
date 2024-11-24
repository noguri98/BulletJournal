
const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어 설정
app.use(cors());                // CORS 활성화
app.use(express.json());        // JSON 파싱

// IP 주소 가져오기 함수
function ipAddress() {
    const interfaces = os.networkInterfaces();
    for (const interfaceName of Object.keys(interfaces)) {
      const addresses = interfaces[interfaceName];
      for (const address of addresses) {
        // IPv4이고 내부 주소가 아닌 경우
        if (address.family === 'IPv4' && !address.internal) {
          return address.address;
        }
      }
    }
    return 'localhost'; // 기본값
}

// 기본 라우트
app.get('/', (req, res) => {
    res.json({message: 'Connect'});
});

// 서버 시작
app.listen(PORT, () => {
  const ip = ipAddress();
  console.log(`로컬 접속 URL: http://localhost:${PORT}`);
  console.log(`네트워크 접속 URL: http://${ip}:${PORT}`);
});