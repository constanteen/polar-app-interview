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
exports.Settings = exports.Main = exports.App = void 0;
const react_1 = __importStar(require("react"));
const App = () => {
    return (react_1.default.createElement(exports.Main, null));
};
exports.App = App;
const Main = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(exports.Settings, null)));
};
exports.Main = Main;
const Settings = () => {
    const [darkMode, setDarkMode] = react_1.useState(false);
    const toggleMode = react_1.default.useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode]);
    return (react_1.default.createElement("button", { onClick: toggleMode }, "toggle light/dark mode"));
};
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlnaHREYXJrTW9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpZ2h0RGFya01vZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBc0Q7QUFFL0MsTUFBTSxHQUFHLEdBQUcsR0FBZ0IsRUFBRTtJQUVqQyxPQUFPLENBQ0gsOEJBQUMsWUFBSSxPQUFFLENBQ1YsQ0FBQztBQUVOLENBQUMsQ0FBQTtBQU5ZLFFBQUEsR0FBRyxPQU1mO0FBR00sTUFBTSxJQUFJLEdBQUcsR0FBZ0IsRUFBRTtJQUVsQyxPQUFPLENBQ0g7UUFDSSw4QkFBQyxnQkFBUSxPQUFFLENBQ1QsQ0FDVCxDQUFDO0FBRU4sQ0FBQyxDQUFBO0FBUlksUUFBQSxJQUFJLFFBUWhCO0FBRU0sTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBRXpCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUUvQyxNQUFNLFVBQVUsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUN0QyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMxQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNILDBDQUFRLE9BQU8sRUFBRSxVQUFVLDZCQUFpQyxDQUMvRCxDQUFDO0FBRU4sQ0FBQyxDQUFBO0FBWlksUUFBQSxRQUFRLFlBWXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwID0gKCk6UmVhY3RFbGVtZW50ID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluLz5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKTpSZWFjdEVsZW1lbnQgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNldHRpbmdzLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVNb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldERhcmtNb2RlKCFkYXJrTW9kZSlcclxuICAgIH0sIFtkYXJrTW9kZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNb2RlfT50b2dnbGUgbGlnaHQvZGFyayBtb2RlPC9idXR0b24+XHJcbiAgICApO1xyXG5cclxufVxyXG4iXX0=