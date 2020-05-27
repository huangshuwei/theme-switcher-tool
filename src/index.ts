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
    loadingFn?: () => void;
    completedFn?: () => void;
}

interface Result {
    switcher: (config: SwitchConfig) => void;
    getCurrentTheme: () => string;
}

const themeSwitcherTool = (config: Config): Result => {
    const {
        themeList = config.themeList,
        styleLinkId = "theme_switcher_cli_style_id",
        useStorage = false,
        storageKey = "theme_switcher_cli_theme"
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

    const switcher: (config: SwitchConfig) => void = switchConfig => {
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
                console.error(`link id was not found:${styleLinkId}`);
            }

            switchConfig.loadingFn && switchConfig.loadingFn();

            let creatLink = document.createElement("link");
            creatLink.type = "text/css";
            creatLink.id = styleLinkId;
            creatLink.rel = "stylesheet";
            creatLink.href = currentTheme.themePath;
            document.getElementsByTagName("head")[0].appendChild(creatLink);

            // Remove the old theme after the new theme is loaded to prevent layout jitter
            creatLink.onload = () => {
                oldLinkNode &&
                    setTimeout(() => {
                        oldLinkNode.parentNode.removeChild(oldLinkNode);
                        useStorage &&
                            localStorage.setItem(
                                storageKey,
                                currentTheme.themeName
                            );
                        switchConfig.completedFn && switchConfig.completedFn();
                    });
            };
        }
    };

    return {
        switcher,
        getCurrentTheme
    };
};

export default themeSwitcherTool;
