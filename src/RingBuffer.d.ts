export declare class RingBuffer<T> {
    arr: any[];
    length: number;
    cap: number;
    constructor(capacity: number);
    push(value: T): void;
    peek(): T | undefined;
    pop(): T | undefined;
}
