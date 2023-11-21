export const Throttle = (callback, time) => {
    let timer;
    return () => {
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                callback();
            }, time);
        }
    };
};