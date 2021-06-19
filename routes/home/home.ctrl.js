"use strict";

const home = (req, res) => {
    res.render("home")
}

const login = (req, res) => {
    res.render("home/login")
}

// 외부에서 사용가능하도록 추가
module.exports= {
    home, login  
}