## Theme Switcher Tool

[![NPM version](https://img.shields.io/npm/v/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)
[![NPM downloads](http://img.shields.io/npm/dm/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool) 

theme switcher tool.
here is a [example](http://doc.huangsw.com/theme-switcher-cli-demo/) with [theme-switcher-cli](https://github.com/huangshuwei/theme-switcher-cli)

### Install & Usage

**Browser Environment**
```
<script src="//unpkg.com/theme-switcher-tool"></script>
<script>
var themeSwitcherTool = window.ThemeSwitcherTool({
    // Your theme list
    themeList: [
                { themeName: "theme-black", themePath: "./themes/theme-black.css" },
                { themeName: "theme-blue", themePath: "./themes/theme-blue.css" },
                { themeName: "theme-orange", themePath: "./themes/theme-orange.css" },
                { themeName: "theme-red", themePath: "./themes/theme-red.css" }
            ],
    // Your actual style id
    styleLinkId: "theme_switcher_cli_style_id",
    useStorage: true,
    storageKey: "theme_switcher_cli_theme"
});

// => will load <link rel="prefetch" href="dark.css" />
// => will load <link rel="prefetch" href="default.css" />

themeSwitcher.switcher({
  theme: 'dark',
});
// => will load <link rel="stylesheet" href="dark.css">

console.log(themeSwitcher.getTheme()); // => dark
</script>
```