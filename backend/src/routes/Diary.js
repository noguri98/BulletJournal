const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 데이터베이스 연결
const db = new sqlite3.Database(path.join(__dirname, '../../public/datebase.db'), (err) => {
    if (err) {
        console.error('DIARY 테이블 연결 실패:', err.message);
    } else {
        console.log('DIARY 테이블 연결 성공');
    }
});

// 모든 일기 가져오기
router.get('/', (req, res) => {
    db.all("SELECT * FROM DIARY", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// 특정 날짜의 일기 가져오기
router.get('/:date', (req, res) => {
    db.get("SELECT * FROM DIARY WHERE Date = ?", [req.params.date], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

module.exports = router;
