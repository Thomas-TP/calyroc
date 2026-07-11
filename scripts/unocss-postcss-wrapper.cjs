// Next.js's webpack build has its own PostCSS config loader (not the generic
// postcss-load-config) that `require()`s plugins by name and expects
// `module.exports` to be the plugin instance directly. `@unocss/postcss`'s
// CJS build exports `{ default: factory }`, which Next's loader can't
// unwrap, producing "[object Module] is not a PostCSS plugin". This wrapper
// unwraps and invokes the factory so Next gets a ready plugin object.
module.exports = require("@unocss/postcss").default();
