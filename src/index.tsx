/* @refresh reload */
import { render } from "solid-js/web";

import "@/index.css";
import "@/lib/mouseHandler";
import "@fontsource-variable/jetbrains-mono";
import App from "@/App";

const root = document.getElementById("root");

render(() => <App />, root!);
