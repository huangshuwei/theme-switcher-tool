## Theme Switcher Tool

[![NPM version](https://img.shields.io/npm/v/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)
[![NPM downloads](http://img.shields.io/npm/dm/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)

theme switcher tool.
here is an [example](http://doc.huangsw.com/theme-creator-cli-demo/) with [theme-creator-cli](https://github.com/huangshuwei/theme-creator-cli)

### Install

**Browser Environment**

```
<script src="//unpkg.com/theme-switcher-tool"></script>
```

**ES Module Environment**
```
import themeSwitcherTool from 'theme-switcher-tool';
```
### Usage

```

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

const historyTheme = themeSwitcherTool.getCurrentTheme() || "theme-black";

/*
switcher theme
1、you can show your loading message
*/ 
themeSwitcherTool.switcher({
    themeName: historyTheme
}).then(()=>{

    // somthing to do. such as close your loading message
})

```

### API
| 参数      | 说明                              | 类型      | 可选值            | 默认值  | 参考值  |
|---------- |--------------------------------- |---------- |----------------  |-------- |-------- |
| themeList | 需要切换的主题列表 | Array<Object> | — | — | `[{"themeName":"theme-black","themePath":"./themes/theme-black.css"},{"themeName":"theme-blue","themePath":"./themes/theme-blue.css"}]` |
| styleLinkId | html`link`标签id | String | — | — | theme_creator_cli_style_id |
| useStorage | 是否使用 `localStorage`记录当前主题名称 | Bool | — | false | - |
| storageKey | `localStorage` key 值 | String | — | false | - |


## License
http://www.opensource.org/licenses/mit-license.php
