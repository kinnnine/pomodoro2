import m from "mithril";

import { NavbarComponent } from "./components/NavbarComponent";
import { ClockComponent } from "./components/ClockComponent";

export const ClockView = () => {
    return {
        view: function () {
            return m("div", { class: "flex flex-col place-items-center" }, [
                m(NavbarComponent),
                m(ClockComponent)
            ])
        }
    }
}