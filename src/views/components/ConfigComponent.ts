import m from "mithril";

import * as t from "../../paraglide/messages";
import { locales, getLocale, setLocale } from "../../paraglide/runtime";

export const ConfigComponent = () => {
    return {
        view: function () {
            return m("div", { class: "w-fit flex flex-col place-items-start" }, [
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.language()),
                    m("select", { class: "select w-70", onchange: function () { setLocale(this.value, { reload: false }) } },
                        locales.map(function (locale) {
                            if (getLocale() == locale) {
                                return m("option", {"selected":"selected"}, locale)
                            } else {
                                return m("option", locale)
                            }
                        })
                    ),
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.interface_font()),
                    m("select", { class: "select w-70" }, [
                        // ..
                    ]),
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.clock_font()),
                    m("select", { class: "select w-70" }, [
                        // ..
                    ]),
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.color_scheme()),
                    // ..
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.show_status_text_on_clock()),
                    m("input", { class: "toggle", "type": "checkbox" })
                ]),
                m("fieldset", { class: "fieldset mb-3" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.enable_notification_desktop()),
                    m("input", { class: "toggle", "type": "checkbox" })
                ]),
                m("fieldset", { class: "fieldset mb-5" }, [
                    m("legend", { class: "fieldset-legend text-base" }, t.enable_notification_sound()),
                    m("input", { class: "toggle", "type": "checkbox" })
                ]),
                m("button", { class: "btn btn-active btn-warning" }, t.factory_reset())
            ])
        }
    }
}