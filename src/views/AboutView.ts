import m from "mithril";

import { NavbarComponent } from "./components/NavbarComponent";
import { AboutComponent } from "./components/AboutComponent";

export const AboutView = () => {
    return {
        view: function () {
            return m("div", { class: "flex flex-col place-items-center" }, [
                m(NavbarComponent),
                m(AboutComponent)
            ])
        }
    }
}