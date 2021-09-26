__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/examples/dashboard.html')
})
router.get('/docs/social', (req, res) => {
    res.sendFile(__path + '/examples/social.html')
})
router.get('/docs/search', (req, res) => {
    res.sendFile(__path + '/examples/search.html')
})
router.get('/docs/islamic', (req, res) => {
    res.sendFile(__path + '/examples/islamic.html')
})
router.get('/docs/photooxy', (req, res) => {
    res.sendFile(__path + '/examples/photooxy.html')
})
router.get('/docs/textpro', (req, res) => {
    res.sendFile(__path + '/examples/textpro.html')
})
router.get('/docs/fun', (req, res) => {
    res.sendFile(__path + '/examples/fun.html')
})
router.get('/docs/animanga', (req, res) => {
    res.sendFile(__path + '/examples/animanga.html')
})
router.get('/docs/info', (req, res) => {
    res.sendFile(__path + '/examples/info.html')
})
router.get('/docs/tools', (req, res) => {
    res.sendFile(__path + '/examples/tools.html')
})
router.get('/docs/random', (req, res) => {
    res.sendFile(__path + '/examples/random.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/examples/dashboard.html')
})


module.exports = router
