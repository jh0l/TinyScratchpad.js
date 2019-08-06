import EventEmitter from "events"

class XtermHelper {
    constructor() {
        this.instane = null
        this.emitter = new EventEmitter();
    }

    emit(event) {
        this.emitter.emit(event);
    }

    init(instance) {
        this.instane = instance;
    }
}

export const xtermInstance = new XtermHelper();
