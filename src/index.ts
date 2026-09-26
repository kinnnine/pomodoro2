import m from "mithril";

import "./css/Base.css";

import { ClockView } from "./views/ClockView";
import { ConfigView } from "./views/ConfigView";
import { AboutView } from "./views/AboutView";

m.route(document.body, "/clock", {
	"/clock": ClockView,
	"/config": ConfigView,
	"/about": AboutView
})
