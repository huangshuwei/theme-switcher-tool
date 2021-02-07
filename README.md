## Theme Switcher Tool

[![NPM version](https://img.shields.io/npm/v/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)
[![NPM downloads](http://img.shields.io/npm/dm/theme-switcher-tool.svg?style=flat)](https://npmjs.org/package/theme-switcher-tool)

theme switcher tool.
these are examples with [theme-generator-webpack-plugin](https://github.com/huangshuwei/theme-generator-webpack-plugin)
- [base on react antd demo](http://doc.huangsw.com/theme-generator-webpack-plugin/react-antd/)
- [base on vue element demo](http://doc.huangsw.com/theme-generator-webpack-plugin/vue-element/)


### Install

**Browser Environment**

```
<script src="//unpkg.com/theme-switcher-tool"></script>
```

**ES Module Environment**

```
yarn add theme-switcher-tool
```

or

```
npm install theme-switcher-tool
```

### Usage

```
import ThemeSwitcherTool from 'theme-switcher-tool';
```

```

const themeSwitcherTool = ThemeSwitcherTool({
    // Your theme list
    themeList: [
                { themeName: "theme-default", themePath: "https://unpkg.com/vue-easytable/libs/theme-default/index.css" },
                { themeName: "theme-dark", themePath: "https://unpkg.com/vue-easytable/libs/theme-dark/index.css" },
            ],
    // Your actual style id
    styleLinkId: "theme_creator_cli_style_id",
    useStorage: true,
    storageKey: "theme_switcher_tool_theme"
});

const historyTheme = themeSwitcherTool.getCurrentTheme() || "theme-dark";

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
**config**
| 参数      | 说明                              | 类型      | 可选值            | 默认值  | 参考值  |
|---------- |--------------------------------- |---------- |----------------  |-------- |-------- |
| `themeList` | 需要切换的主题列表 | `{Array<Object>}` | — | — | `[{"themeName":"theme-black","themePath":"./themes/theme-black.css"},{"themeName":"theme-blue","themePath":"./themes/theme-blue.css"}]` |
| `styleLinkId` | html`link`标签id | `{String}` | — | — | `theme_creator_cli_style_id` |
| `useStorage` | 是否使用 `localStorage`记录当前主题名称 | `{Bool}` | — | `false` | —  |
| `storageKey` | `localStorage` key 值 | `{String}` | — | —  | —  |

**methods**
| 名称      | 说明                              | 参数      | 返回值类型            |
|--------- |--------------------------------- |---------- |----------------  |
| `getCurrentTheme` | 返回当前主题名称（当设置了 `localStorage` 存储） | —  | `{String}`|
| `switcher` | 切换主题 | `themeName` | `{String}` | — |

## License
This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php)
