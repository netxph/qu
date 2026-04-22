import log from "loglevel";

export interface ILogger {
    trace(msg: string): void,
    debug(msg: string): void,
    info(msg: string): void,
    warn(msg: string, error?: Error): void,
    error(msg: string, error?: Error): void
}

export class DefaultLogger implements ILogger {

    constructor() {
        const env = process.env.NODE_ENV || "development";

        if (env === "development") {
            log.setLevel("debug");
        } else {
            log.setLevel("error");
        }
    }

    trace(msg: string): void {
        log.trace(msg);
    }
    debug(msg: string): void {
        log.debug(msg);
    }
    info(msg: string): void {
        log.info(msg);
    }
    warn(msg: string, error?: Error): void {
        log.warn(msg);
    }
    error(msg: string, error?: Error): void {
        log.error(msg, error);
    }
}
