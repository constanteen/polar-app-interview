"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RememberPassword = exports.useLocalStorageState = void 0;
const react_1 = __importStar(require("react"));
function useLocalStorageState(key, initialValue) {
    const [initialState, setInitialState] = react_1.useState(initialValue);
    const setUseLocalStorage = (value) => {
        if (typeof value === 'number' || typeof value === 'string' || typeof value === 'object') {
            localStorage.setItem(key, value);
            setInitialState(value);
        }
    };
    return [initialState, setUseLocalStorage];
}
exports.useLocalStorageState = useLocalStorageState;
const RememberPassword = () => {
    const [value, setValue] = react_1.default.useState('off');
    const [initialLocalStorageState, setUseLocalStorageState] = useLocalStorageState('remember-password', 'off');
    const handleUseLocalStorageState = () => {
        setUseLocalStorageState('another thing');
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        initialLocalStorageState,
        react_1.default.createElement("input", { type: "checkbox", value: value, onChange: event => setValue(event.currentTarget.value) })));
};
exports.RememberPassword = RememberPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlTG9jYWxTdG9yYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXNDO0FBNkJ0QyxTQUFnQixvQkFBb0IsQ0FBSSxHQUFXLEVBQUUsWUFBZTtJQUNoRSxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLGdCQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHL0QsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQVEsRUFBTyxFQUFFO1FBQ3pDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDckYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBWSxDQUFDLENBQUM7WUFDeEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFYRCxvREFXQztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO0lBR2pDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU3RyxNQUFNLDBCQUEwQixHQUFHLEdBQUcsRUFBRTtRQUNwQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM1QyxDQUFDLENBQUE7SUFFRCxPQUFPLENBQ0g7UUFDSyx3QkFBd0I7UUFDekIseUNBQU8sSUFBSSxFQUFDLFVBQVUsRUFDbEIsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUM5RCxDQUNOLENBQUM7QUFFTixDQUFDLENBQUE7QUFuQlksUUFBQSxnQkFBZ0Isb0JBbUI1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50IGEgcmVwbGFjZW1lbnQgZm9yIHVzZVN0YXRlIHdoaWNoIGtlZXBzIHZhbHVlcyBpbiB0aGUgbG9jYWxTdG9yYWdlLlxyXG4gKlxyXG4gKiBUaGUgaWRlYSBoZXJlIGlzIHRoYXQgYWxsIGNhbGxzIHRvIHVzZSB1c2VTdGF0ZSBjYW4gYmUgcmVwbGFjZWQgd2l0aFxyXG4gKiB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShrZXksIGluaXRpYWxWYWx1ZSkgYW5kIGltcGxlbWVudCB0aGUgc2FtZSBiZWhhdmlvci5cclxuICpcclxuICogVGhlIGZpcnN0IHRpbWUgdXNlTG9jYWxTdG9yYWdlU3RhdGUgaXMgY2FsbGVkIHRoZSB2YWx1ZSB3aWxsIGJlIGluaXRpYWxWYWx1ZVxyXG4gKiBiZWNhdXNlIG5vdGhpbmcgaXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZS5cclxuICpcclxuICogRWFjaCB0aW1lIHRoZSB1c2VyIGNhbGxzIHRoZSBzZXR0ZXIgKHNpbWlsYXIgdG8gdXNlU3RhdGUpIHdlIG5lZWQgdG8gdHJpZ2dlclxyXG4gKiBjb21wb25lbnQgcmUtcmVuZGVyIGFuZCBzYXZlIHRoZSB1cGRhdGVkIHZhbHVlIGluIGxvY2FsU3RvcmFnZS5cclxuICpcclxuICogVGhlIG5leHQgdGltZSB3ZSBhcmUgY2FsbGVkIHdlIHNob3VsZCB1c2UgdGhlIHZhbHVlIGZyb20gbG9jYWxTdG9yYWdlLlxyXG4gKlxyXG4gKiBXZSBzaG91bGQgc3VwcG9ydCB0aGUgZm9sbG93aW5nIHZhbHVlcyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlOlxyXG4gKlxyXG4gKiBzdHJpbmcsIG51bWJlciwgb2JqZWN0LCBhcnJheVxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgR2l0SHViIGdpc3RzIGhlcmUgYmVjYXVzZSB0aGVyZSdzIG5vIGNvbXBpbGVyLiAgUGxlYXNlXHJcbiAqIG1ha2Ugc3VyZSB5b3VyIGNvZGUgaXMgZnVsbHkgZm9ybWVkLCBubyBlZGdlIGNhc2UsIGNsZWFuLCBldGMuXHJcbiAqXHJcbiAqIFdlJ3JlIG5vdCB3b3JyaWVkIGFib3V0IHNtYWxsIGlzc3VlcyBsaWtlIGltcG9ydHMuIFRoZSBtYWluIGlzc3VlIGlzIHRoYXQgdGhlXHJcbiAqIGNvZGUgaXMgZnJlZSBvZiBidWdzIGFuZCBoaWdoIHF1YWxpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXkgVGhlIGtleSBzaG91bGQgYmUgdGhlIGtleSB1c2VkIGJ5IGxvY2FsU3RvcmFnZVxyXG4gKiBAcGFyYW0gaW5pdGlhbFZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIHRvIHN0b3JlIGZvciB0aGUgZmlyc3QgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlU3RhdGU8Vj4oa2V5OiBzdHJpbmcsIGluaXRpYWxWYWx1ZTogVik6IFtWLCAobmV3VmFsdWU6IFYpID0+IHZvaWRdIHtcclxuICAgIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgXHJcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgdGhpcyBjb2RlIC0gdGhpcyBqdXN0IHJldHVybnMgJ2FueScgd2hpY2ggd291bGQgbm90IGJlIHVzYWJsZS5cclxuICAgIGNvbnN0IHNldFVzZUxvY2FsU3RvcmFnZSA9ICh2YWx1ZTogVik6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUgYXMgYW55KTtcclxuICAgICAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW2luaXRpYWxTdGF0ZSwgc2V0VXNlTG9jYWxTdG9yYWdlXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlbWVtYmVyUGFzc3dvcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gVE9ETzogY2hhbmdlIHRoaXMgdG8gdXNlIHVzZUxvY2FsU3RvcmFnZVN0YXRlXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCdvZmYnKTtcclxuICAgIGNvbnN0IFtpbml0aWFsTG9jYWxTdG9yYWdlU3RhdGUsIHNldFVzZUxvY2FsU3RvcmFnZVN0YXRlXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKCdyZW1lbWJlci1wYXNzd29yZCcsICdvZmYnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVc2VMb2NhbFN0b3JhZ2VTdGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRVc2VMb2NhbFN0b3JhZ2VTdGF0ZSgnYW5vdGhlciB0aGluZycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW5pdGlhbExvY2FsU3RvcmFnZVN0YXRlfVxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn1cclxuIl19