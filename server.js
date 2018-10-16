const server = require('diet')
const ecstatic = require('diet-ecstatic')

const app = server()

app.listen('http://191.101.14.134')

app.footer(ecstatic({path: app.path + '/static'}))
