import m from "mithril";

export const AboutComponent = () => {
    return {
        view: function () {
            return m("h1", { class: "text-5xl font-bold" }, "About")
        }
    }
}