interface ThemeItem {
    themeName: string;
    themePath: string;
}

interface Config {
    themeList: Array<ThemeItem>;
    styleLinkId?: string;
    useStorage?: boolean;
    storageKey?: string;
}

interface SwitchConfig {
    themeName: string;
}

interface Result {
    switcher: (config: SwitchConfig) => Promise<void>;
    getCurrentTheme: () => string;
}

const PACKAGE_NAME = "theme-switcher-tool";

const themeSwitcherTool = (config: Config): Result => {
    const {
        themeList = config.themeList,
        styleLinkId = "theme_switcher_cli_style_id",
        useStorage = false,
        storageKey = "theme_switcher_cli_theme",
    } = config || {};

    if (!(Array.isArray(themeList) && themeList.length > 0)) {
        throw new Error(
            'ThemeSwitcherTool need themeList like:  [{ key: "theme-black", themePath: "./themes/theme-black.css" }]'
        );
    }

    const getCurrentTheme: () => string = () => {
        if (!useStorage) {
            console.warn("ThemeSwitcherTool should set 'useStorage:true'");
            return null;
        }
        return localStorage.getItem(storageKey);
    };

    const switcher: (config: SwitchConfig) => Promise<void> = (
        switchConfig
    ) => {
        const currentTheme = themeList.find(
            (x: ThemeItem) => x.themeName === switchConfig.themeName
        );

        if (!currentTheme) {
            console.error(
                `can not find theme name '${switchConfig.themeName}'`
            );
        }

        if (currentTheme) {
            let oldLinkNode = document.getElementById(styleLinkId);
            if (!oldLinkNode) {
                console.warn(
                    `link id was not found:${styleLinkId},${PACKAGE_NAME} will create new stylesheet. `
                );
            }

            let creatLink = document.createElement("link");
            creatLink.type = "text/css";
            creatLink.id = styleLinkId;
            creatLink.rel = "stylesheet";
            creatLink.href = currentTheme.themePath;
            document.getElementsByTagName("head")[0].appendChild(creatLink);

            // Remove the old theme after the new theme is loaded to prevent layout jitter
            return new Promise((resolve, reject) => {
                creatLink.onload = () => {
                    setTimeout(() => {
                        if (oldLinkNode) {
                            oldLinkNode.parentNode.removeChild(oldLinkNode);
                        }
                        useStorage &&
                            localStorage.setItem(
                                storageKey,
                                currentTheme.themeName
                            );
                        resolve();
                    });
                };

                creatLink.onerror = () => {
                    reject();
                };
            });
        }
    };

    return {
        switcher,
        getCurrentTheme,
    };
};

export default themeSwitcherTool;
