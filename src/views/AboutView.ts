import m from "mithril";

import { NavbarComponent } from "./components/NavbarComponent";
import { AboutComponent } from "./components/AboutComponent";

export const AboutView = () => {
    return {
        view: function () {
            return m("div", { class: "flex flex-col p-5 place-items-center" }, [
                m(NavbarComponent),
                m(AboutComponent)
            ])
        }
    }
}