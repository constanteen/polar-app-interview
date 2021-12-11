/**
 * Implement a class named ring buffer with fixed capacity such that
 *
 * constructor: takes the capacity for the ring buffer
 *
 * push: adds a value to the ring buffer.
 * pop: removes the last value from the ring buffer or undefined if it's empty.
 * peek: returns the current value of the most recent value added or undefined if none have been added
 *
 * If we have too many values (exceeding capacity) the oldest values are lost.
 *
 * The ordering of the push operations must be kept.
 */
export class RingBuffer<T> {
    arr: any[];
    length: number;
    cap: number;

    constructor(capacity: number) {
        this.arr = [];
        this.length = 0;
        this.cap = capacity;
    }

    public push(value: T) {
        if (this.length < this.cap) {
            this.arr.push(value);
            this.length++;
            return;
        }
        if (this.length === this.cap) {
            this.arr.shift();
            this.arr.push(value);
        }
    }

    public peek(): T | undefined {
        return this.length === 0 ? undefined : this.arr[this.length - 1];
    }

    public pop(): T | undefined {
        if (this.length === 0) return undefined;
        this.length--;
        return this.arr.pop();
    }

}
