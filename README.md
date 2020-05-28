## Theme Switcher Tool

[![NPM version](https://img.shields.io/npm/v/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)
[![NPM downloads](http://img.shields.io/npm/dm/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)

theme switcher tool.
here is a [example](http://doc.huangsw.com/theme-switcher-cli-demo/) with [theme-creator-cli](https://github.com/huangshuwei/theme-creator-cli)

### Install & Usage

**Browser Environment**

```
<script src="//unpkg.com/theme-switcher-tool"></script>
<script>
const themeSwitcherTool = window.ThemeSwitcherTool({
    // Your theme list
    themeList: [
                { themeName: "theme-black", themePath: "./themes/theme-black.css" },
                { themeName: "theme-blue", themePath: "./themes/theme-blue.css" },
                { themeName: "theme-orange", themePath: "./themes/theme-orange.css" },
                { themeName: "theme-red", themePath: "./themes/theme-red.css" }
            ],
    // Your actual style id
    styleLinkId: "theme_creator_cli_style_id",
    useStorage: true,
    storageKey: "theme_switcher_tool_theme"
});

// switch Theme Loding
function switchThemeLoding(){

    console.log("switch theme loding...")
}

// switch Theme Completed
function switchThemeCompleted(){

    console.log("switch theme completed.")
}

const historyTheme = themeSwitcherTool.getCurrentTheme() || "theme-black";

// switcher theme
themeSwitcherTool.switcher({
    themeName: historyTheme,
    loadingFn: switchThemeLoding,
    completedFn: switchThemeCompleted
});

</script>
```

**ES Module Environment**
```
import themeSwitcherTool from 'theme-switcher-tool';

const themeSwitcherTool = window.ThemeSwitcherTool({
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

// switch Theme Loding
function switchThemeLoding(){

    console.log("switch theme loding...")
}

// switch Theme Completed
function switchThemeCompleted(){

    console.log("switch theme completed.")
}

const historyTheme = themeSwitcherTool.getCurrentTheme() || "theme-black";

// switcher theme
themeSwitcherTool.switcher({
    themeName: historyTheme,
    loadingFn: switchThemeLoding,
    completedFn: switchThemeCompleted
});

```

### API


## License
http://www.opensource.org/licenses/mit-license.php
