const defaultConfig = {
    work_time: 25,
    short_break_time: 5,
    long_break_time: 15,
    clock_font: "default",
    color_scheme: "default",
    show_status_text_on_clock: false,
    enable_notification_desktop: false,
    enable_notification_sound: false
}

export let setConfig = (key: string, value: string | number | boolean | undefined) => {
    if (!key) return;
    if (!value) {
        const defaultValue = defaultConfig[key as keyof typeof defaultConfig];
        localStorage.setItem(key, defaultValue.toString());
    } else {
        switch (typeof value) {
            case "number":
            case "boolean":
                localStorage.setItem(key, value.toString());
                break;
            default:
                localStorage.setItem(key, value);
                break;
        }
    }
}

export let getConfig = (key: string) => {
    if (!key) return;
    const config = localStorage.getItem(key);
    const defaultValue = defaultConfig[key as keyof typeof defaultConfig];
    if (!config) {
        setConfig(key, defaultValue.toString());
        return defaultValue;
    } else {
        switch (typeof defaultValue) {
            case "number":
                return Number(config);
            case "boolean":
                return Boolean(config);
            default:
                return config;
        }
    }
}

export let clearConfig = (key: string | undefined) => {
    if (!key) {
        localStorage.clear();
    } else {
        localStorage.removeItem(key);
    }
}