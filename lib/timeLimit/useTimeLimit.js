import { useState, useEffect } from "react";
var getTimeLeft = function (targetDate, isSec) {
    return (isSec ?
        Math.floor((targetDate.getTime() - Date.now()) / 1000) :
        (targetDate.getTime() - Date.now()));
};
export var useTimeLimit = function (targetDate, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.intervalTime, intervalTime = _c === void 0 ? 1000 : _c, _d = _b.isSec, isSec = _d === void 0 ? false : _d;
    var _e = useState(getTimeLeft(targetDate, isSec)), timeLeft = _e[0], setTimeLeft = _e[1];
    var _f = useState(targetDate), targetTime = _f[0], setTargetTime = _f[1];
    useEffect(function () {
        var id = setInterval(function () {
            setTimeLeft(getTimeLeft(targetTime, isSec));
        }, intervalTime);
        return function () {
            clearInterval(id);
        };
    }, []);
    return [timeLeft, setTargetTime];
};
