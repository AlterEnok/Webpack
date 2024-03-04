export const createLogger = name => {
    const logs = [];

    return {
        log(message) {
            logs.push(`Log - ${name} - ${message}`);
        },
        error(errorText) {
            logs.push(`Log - ${name} - ${errorText}`);
        },
        getLogs() {
            return logs;
        }
    };
};