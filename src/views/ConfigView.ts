import m from "mithril";

import { NavbarComponent } from "./components/NavbarComponent";
import { ConfigComponent } from "./components/ConfigComponent";

export const ConfigView = () => {
    return {
        view: function () {
            return m("div", { class: "flex flex-col place-items-center" }, [
                m(NavbarComponent),
                m(ConfigComponent)
            ])
        }
    }
}