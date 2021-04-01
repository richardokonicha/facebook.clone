module.exports = {
    '/node-0': {
        target: 'https://api.github.com',
        secure: true,
        headers: {
            'Host': 'api.github.com',
            'Cookie': ''
        },
        pathRewrite: function(path){
            return path.replace(/^\/node-0/, '')
        }
    }
}