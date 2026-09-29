interface configSchema {
    work_time: number,
    short_break_time: number,
    long_break_time: number,
    clock_font: string,
    color_scheme: string,
    show_status_text_on_clock: boolean,
    enable_notification_desktop: boolean,
    enable_notification_sound: boolean
}

const defaultConfig: configSchema = {
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
        localStorage.setItem(key, defaultConfig[key]);
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
    if (!config) {
        setConfig(key, defaultConfig[key]);
        return defaultConfig[key];
    } else {
        switch (typeof defaultConfig[key]) {
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