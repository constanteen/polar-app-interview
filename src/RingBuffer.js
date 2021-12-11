"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RingBuffer = void 0;
class RingBuffer {
    constructor(capacity) {
        this.arr = [];
        this.length = 0;
        this.cap = capacity;
    }
    push(value) {
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
    peek() {
        return this.length === 0 ? undefined : this.arr[this.length - 1];
    }
    pop() {
        if (this.length === 0)
            return undefined;
        this.length--;
        return this.arr.pop();
    }
}
exports.RingBuffer = RingBuffer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmluZ0J1ZmZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJpbmdCdWZmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBYUEsTUFBYSxVQUFVO0lBS25CLFlBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRU0sSUFBSSxDQUFDLEtBQVE7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLEdBQUc7UUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBRUo7QUFqQ0QsZ0NBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEltcGxlbWVudCBhIGNsYXNzIG5hbWVkIHJpbmcgYnVmZmVyIHdpdGggZml4ZWQgY2FwYWNpdHkgc3VjaCB0aGF0XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yOiB0YWtlcyB0aGUgY2FwYWNpdHkgZm9yIHRoZSByaW5nIGJ1ZmZlclxyXG4gKlxyXG4gKiBwdXNoOiBhZGRzIGEgdmFsdWUgdG8gdGhlIHJpbmcgYnVmZmVyLlxyXG4gKiBwb3A6IHJlbW92ZXMgdGhlIGxhc3QgdmFsdWUgZnJvbSB0aGUgcmluZyBidWZmZXIgb3IgdW5kZWZpbmVkIGlmIGl0J3MgZW1wdHkuXHJcbiAqIHBlZWs6IHJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG1vc3QgcmVjZW50IHZhbHVlIGFkZGVkIG9yIHVuZGVmaW5lZCBpZiBub25lIGhhdmUgYmVlbiBhZGRlZFxyXG4gKlxyXG4gKiBJZiB3ZSBoYXZlIHRvbyBtYW55IHZhbHVlcyAoZXhjZWVkaW5nIGNhcGFjaXR5KSB0aGUgb2xkZXN0IHZhbHVlcyBhcmUgbG9zdC5cclxuICpcclxuICogVGhlIG9yZGVyaW5nIG9mIHRoZSBwdXNoIG9wZXJhdGlvbnMgbXVzdCBiZSBrZXB0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJpbmdCdWZmZXI8VD4ge1xyXG4gICAgYXJyOiBhbnlbXTtcclxuICAgIGxlbmd0aDogbnVtYmVyO1xyXG4gICAgY2FwOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FwYWNpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXJyID0gW107XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuY2FwID0gY2FwYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2godmFsdWU6IFQpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPCB0aGlzLmNhcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyci5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuY2FwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiB0aGlzLmFyclt0aGlzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3AoKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLnBvcCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=