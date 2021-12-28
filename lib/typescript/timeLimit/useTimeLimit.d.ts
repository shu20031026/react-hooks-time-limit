import { TimeLimitOption } from "./type";
export declare const useTimeLimit: (targetDate: Date, { intervalTime, isSec }?: TimeLimitOption) => [number, React.Dispatch<React.SetStateAction<Date>>];
