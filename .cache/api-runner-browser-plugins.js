module.exports = [{
      plugin: require('/workspace/cybsec/node_modules/gatsby-plugin-jss/gatsby-browser.js'),
      options: {"plugins":[],"theme":{"typography":{"primary":"Orbitron, sans-serif","secondary":"Electrolize, sans-serif"},"color":{"accent":0.2,"alpha":0.5,"primary":{"dark":"#bbbbbb","main":"#eeeeee","light":"#ffffff"},"secondary":{"dark":"#19a0b3","main":"#27e1fa","light":"#7eecfb"},"tertiary":{"dark":"#b5a005","main":"#fae127","light":"#feec67"},"heading":{"main":"#eeeeee"},"text":{"main":"#cccccc"},"link":{"dark":"#55cbd0","main":"#87f7fc","light":"#aff3f6"},"background":{"dark":"#000000","main":"#02161a","light":"#043b3b"}},"animation":{"time":250,"stagger":50}}},
    },{
      plugin: require('/workspace/cybsec/node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/workspace/cybsec/src/layouts/Template/index.js"},
    },{
      plugin: require('/workspace/cybsec/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-158065992-1"},
    },{
      plugin: require('/workspace/cybsec/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
