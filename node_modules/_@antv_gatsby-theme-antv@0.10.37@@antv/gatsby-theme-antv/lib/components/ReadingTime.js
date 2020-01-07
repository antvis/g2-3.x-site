"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const react_i18next_1 = require("react-i18next");
const ReadingTime = ({ readingTime }) => {
    const { i18n } = react_i18next_1.useTranslation();
    const { text = '', time = 0 } = readingTime;
    return (react_1.default.createElement(antd_1.Tag, null, i18n.language === 'zh'
        ? text.replace(/(\d+)\smin\sread/, (_, min) => {
            if (min) {
                return `阅读时间约 ${min} 分钟`;
            }
            return `阅读时间约 ${Math.ceil(time / 60000)} 分钟`;
        })
        : text));
};
exports.default = ReadingTime;
