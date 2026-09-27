import m from "mithril";

import * as t from "../../paraglide/messages";

export const AboutComponent = () => {
    return {
        view: function () {
            return m("div", { class: "w-fit flex flex-col place-items-start" }, [
                m("article", { class: "mb-7" }, [
                    m("p", { class: "text-2xl mb-2" }, t.about_pomodoro_header()),
                    m("p", { class: "whitespace-break-spaces" }, t.about_pomodoro())
                ]),
                m("article", { class: "mb-7" }, [
                    m("p", { class: "text-2xl mb-2" }, t.about_using_pomodoro_effectively_header()),
                    m("p", { class: "whitespace-break-spaces" }, t.about_using_pomodoro_effectively())
                ]),
                m("article", { class: "mb-2" }, [
                    m("p", { class: "text-2xl mb-2" }, t.about_pomodoro2_header()),
                    m("p", { class: "whitespace-break-spaces" }, t.about_pomodoro2())
                ])
            ])
        }
    }
}