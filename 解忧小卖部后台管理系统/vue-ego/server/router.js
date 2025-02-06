const express = require("express");
const router = express.Router();
const sqlClient = require("./config");


/*登录*/
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sql = "select * from user where `username`=? and `password`=?";
    const arr = [username, password];
    sqlClient(sql, arr, result => {
        // 返回用户信息
        if (result.length > 0) {
            let token = jwt.sign({
                usname,
                id: result[0].id
            }, 'soomekeys')
            res.send({
                status: 200,
                token,
                username
            })
        } else {
            res.send({
                status: 401,
                msg: "登录失败"
            })
        }

    })
})

/*注册
 */
router.post("/register", (req, res) => {
    const { username, password, email } = req.body;
    const sql = "insert into user values(null,?,?,?)";
    const arr = [username, password, email];
    sqlClient(sql, arr, result => {
        // 返回用户信息
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                result
            });
        } else {
            res.send({
                status: 401,
                msg: "注册失败"
            })
        }
    })
})



module.exports = router;