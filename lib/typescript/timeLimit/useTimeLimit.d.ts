/// <reference types="react" />
import { TimeLimitOption } from "./type";
export declare const useTimeLimit: (targetDate: Date, { intervalTime, isSec }?: TimeLimitOption) => (number | import("react").Dispatch<import("react").SetStateAction<Date>>)[];
