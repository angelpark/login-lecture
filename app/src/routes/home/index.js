"use scrict"

const express = require("express")
const router = express.Router()
const ctr = require("./home.ctrl")          
const { home, login } = require("./home.ctrl")

/* router.get("/", (req, res) => {
    res.render("home")
});
router.get("/login", (req, res) => {
    res.render("home/login")
}); */

// 컨트롤러 분리
router.get("/", home);
router.get("/login", ctr.login);

module.exports = router // 외부에서 사용가능하도록 추가