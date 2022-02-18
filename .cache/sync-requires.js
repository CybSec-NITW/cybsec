const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/workspace/cybsec/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/workspace/cybsec/src/pages/about.js"))),
  "component---src-pages-files-js": hot(preferDefault(require("/workspace/cybsec/src/pages/files.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/workspace/cybsec/src/pages/index.js"))),
  "component---src-pages-phantom-js": hot(preferDefault(require("/workspace/cybsec/src/pages/phantom.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/workspace/cybsec/src/pages/team.js")))
}

