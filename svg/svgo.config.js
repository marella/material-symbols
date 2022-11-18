/**
 * @see https://github.com/svg/svgo#built-in-plugins
 * @see https://github.com/twbs/icons/blob/main/svgo.config.js
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui-icons/builder.js
 * @see https://github.com/primer/octicons/blob/main/.svgo.yml
 */

const { extendDefaultPlugins } = require('svgo');
const addViewBox = require('svgo-add-viewbox');

module.exports = {
  multipass: true,
  plugins: extendDefaultPlugins([
    'cleanupListOfValues',
    // converting styles such as style="enable-background:new 0 0 24 24", style="fill:none" to attributes
    // allows plugins such as cleanupEnableBackground, removeUselessStrokeAndFill to do further processing
    'convertStyleToAttrs',
    'removeOffCanvasPaths',
    'removeRasterImages',
    'removeScriptElement',
    'removeStyleElement',
    {
      name: 'removeUselessStrokeAndFill',
      params: {
        removeNone: true, // remove elements that have computed fill and stroke equal to "none"
      },
    },
    {
      name: 'removeViewBox',
      active: false,
    },
    'sortAttrs',
    {
      name: 'addViewBox',
      ...addViewBox,
    },
  ]),
};
