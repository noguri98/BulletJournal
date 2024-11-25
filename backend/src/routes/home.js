const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 데이터베이스 연결
const db = new sqlite3.Database(path.join(__dirname, '../../public/datebase.db'));

// 모든 데이터 가져오기
router.get('/', (req, res) => {
    db.all("SELECT Date, Feel, Title FROM DIARY", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

module.exports = router;
