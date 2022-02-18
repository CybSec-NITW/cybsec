// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/workspace/cybsec/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/workspace/cybsec/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-files-js": () => import("/workspace/cybsec/src/pages/files.js" /* webpackChunkName: "component---src-pages-files-js" */),
  "component---src-pages-index-js": () => import("/workspace/cybsec/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-phantom-js": () => import("/workspace/cybsec/src/pages/phantom.js" /* webpackChunkName: "component---src-pages-phantom-js" */),
  "component---src-pages-team-js": () => import("/workspace/cybsec/src/pages/team.js" /* webpackChunkName: "component---src-pages-team-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/workspace/cybsec/.cache/data.json")

