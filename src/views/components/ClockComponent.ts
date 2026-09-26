import m from "mithril";

export const ClockComponent = () => {
    return {
        view: function () {
            return m("h1", { class: "text-5xl font-bold" }, "Clock")
        }
    }
}