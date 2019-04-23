import * as rxjs from 'rxjs';

class SeaBird {
    run() {
        console.log("start seabird...", rxjs.of(1,2,3));
    }
}

new SeaBird().run();
