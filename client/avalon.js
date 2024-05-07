const javalon = require('javalon')

if (localStorage.getItem('avalonAPI')) {
    javalon.init({api: localStorage.getItem('avalonAPI')})
} else {
    javalon.init({api: 'https://s1dtube.nekosunevr.co.uk'})
}

Session.set('avalonAPI',javalon.config.api)

// javalon.init({api: 'https://bran.nannal.com:443'})
//javalon.init({api: 'http://localhost:3001'})
window.avalon = javalon
