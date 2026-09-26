import m from "mithril";

export const ConfigComponent = () => {
    return {
        view: function () {
            return m("h1", { class: "text-5xl font-bold" }, "Config")
        }
    }
}