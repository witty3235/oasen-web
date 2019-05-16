export const log = (message?: any, ...optionalParams: any[]) => {
    if (typeof(window) !== 'undefined' && (window as any).botchatDebug && message) {
        console.log(message, ...optionalParams);
    }
};



// WEBPACK FOOTER //
// ./~/tslint-loader??ref--0!./src/Konsole.ts