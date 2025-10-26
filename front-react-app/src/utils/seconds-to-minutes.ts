import { zeroLeft } from "./zero-left";

export function secondsToMinutes(seconds: number): string {
    //const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
    const minuts = zeroLeft((seconds / 60) % 60);
    const secs = zeroLeft((seconds % 60) % 60);
    //return `${seconds}s`
    return `${minuts}:${secs}`;
}