import Terminal from '../Applications/Terminal.vue';
import Settings from '../Applications/Settings.vue';
import Mails from '../Applications/Mails.vue';
import Safari from '../Applications/Safari.vue';
import Finder from '../Applications/Finder.vue';
import LaunchPad from '../Applications/LaunchPad.vue';
import { createApp } from 'vue';
const initApp=()=>{
    console.log("Terminal", Terminal)
    let app = createApp(Terminal);
        app.mount("#terminal");
        let app1 = createApp(Settings);
        app1.mount("#settings")
    let app2 = createApp(Mails);
    app2.mount("#mails")
    let app3 = createApp(Safari);
    app3.mount("#safari");
    const app4 = createApp(Finder);
    app4.mount("#finder");
    const app5 = createApp(LaunchPad);
    app5.mount("#launchpad")
}

export default initApp;