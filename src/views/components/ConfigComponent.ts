import m from "mithril";

import { setConfig, toggleConfig, getConfig } from "../../config";
import * as t from "../../paraglide/messages";
import { locales, getLocale, setLocale } from "../../paraglide/runtime";

export const ConfigComponent = () => {
    return {
        view: function () {
            return m("div", { class: "w-fit flex flex-col place-items-start" }, [
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.work_time()),
                    m("label", { class: "label text-base" }, [
                        m("input", {
                            class: "input input-ghost w-15",
                            type: "number",
                            min: 1,
                            max: 999,
                            placeholder: "25",
                            oninput: function (e: any) {
                                setConfig("work_time", e.target.value)
                            },
                            value: getConfig("work_time")
                        }),
                        t.minutes()
                    ])
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.short_break_time()),
                    m("label", { class: "label text-base" }, [
                        m("input", {
                            class: "input input-ghost w-15",
                            type: "number",
                            min: 1,
                            max: 999,
                            placeholder: "5",
                            oninput: function (e: any) {
                                setConfig("short_break_time", e.target.value)
                            },
                            value: getConfig("short_break_time")
                        }),
                        t.minutes()
                    ])
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.long_break_time()),
                    m("label", { class: "label text-base" }, [
                        m("input", {
                            class: "input input-ghost w-15",
                            type: "number",
                            min: 1,
                            max: 999,
                            placeholder: "15",
                            oninput: function (e: any) {
                                setConfig("long_break_time", e.target.value)
                            },
                            value: getConfig("long_break_time")
                        }),
                        t.minutes()
                    ])
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.language()),
                    m("select", { class: "select select-ghost w-70", onchange: function () { setLocale(this.value, { reload: false }) } },
                        locales.map(function (locale) {
                            if (getLocale() == locale) {
                                return m("option", { "selected": "selected" }, locale)
                            } else {
                                return m("option", locale)
                            }
                        })
                    ),
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.clock_font()),
                    m("select", { class: "select select-ghost w-70" }, [
                        // ..
                    ]),
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.color_scheme()),
                    // ..
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("label", { class: "label text-base" }, [
                        m("input", {
                            class: "toggle",
                            type: "checkbox",
                            onclick: function () {
                                toggleConfig("show_status_text_on_clock");
                            },
                            checked: `${getConfig("show_status_text_on_clock") === true ? "checked" : ""}`
                        }),
                        t.show_status_text_on_clock()
                    ])
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("label", { class: "label text-base" }, [
                        m("input", {
                            class: "toggle",
                            type: "checkbox",
                            onclick: function () {
                                toggleConfig("enable_notification_desktop");
                            },
                            checked: `${getConfig("enable_notification_desktop") === true ? "checked" : ""}`
                        }),
                        t.enable_notification_desktop()
                    ])
                ]),
                m("fieldset", { class: "fieldset mb-5" }, [
                    m("label", { class: "label text-base" }, [
                        m("input", {
                            class: "toggle",
                            type: "checkbox",
                            onclick: function () {
                                toggleConfig("enable_notification_sound");
                            },
                            checked: `${getConfig("enable_notification_sound") === true ? "checked" : ""}`
                        }),
                        t.enable_notification_sound()
                    ])
                ]),
                m("button", { class: "btn btn-active btn-warning" }, t.factory_reset())
            ])
        }
    }
}