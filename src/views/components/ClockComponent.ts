import m from "mithril";

import { getConfig } from "../../config";

export const ClockComponent = () => {
    return {
        view: function () {
            return m("div", { class: "w-fit flex flex-col mt-13 place-items-center" }, [
                m("span", { class: "text-8xl mb-1" }, `${getConfig("work_time")}:00`),
                m("ul", { class: "menu menu-horizontal rounded-box" }, [
                    m("li", [
                        m(m.route.Link, { href: "/clock", selector: "button" }, [
                            m("svg", { "class": "size-6", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor" },
                                m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" })
                            )
                        ])
                    ]),
                    m("li", [
                        m(m.route.Link, { href: "/config", selector: "button" }, [
                            m("svg", { "class": "size-6", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor" },
                                m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" })
                            )
                        ])
                    ]),
                    m("li", [
                        m(m.route.Link, { href: "/about", selector: "button" }, [
                            m("svg", { "class": "size-6", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor" },
                                m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" })
                            )
                        ])
                    ])
                ])
            ])
        }
    }
}