const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\about.js"))),
  "component---src-pages-files-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\files.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\index.js"))),
  "component---src-pages-phantom-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\phantom.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\projects.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("C:\\Users\\hp\\Desktop\\cybsec\\src\\pages\\team.js")))
}

