"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const classnames_1 = __importDefault(require("classnames"));
const shallowequal_1 = __importDefault(require("shallowequal"));
const react_i18next_1 = require("react-i18next");
const Header_module_less_1 = __importDefault(require("./Header.module.less"));
const getDocument = (navs, slug = '') => navs.find(doc => doc.slug === slug) || {
    title: {},
};
const capitalize = (s) => {
    if (typeof s !== 'string') {
        return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
};
const NavMenuItems = ({ navs = [], path }) => {
    const { i18n } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(react_1.default.Fragment, null, navs.map((nav) => {
        const href = `/${i18n.language}/${nav.slug}`;
        const title = capitalize(getDocument(navs, nav.slug).title[i18n.language]);
        const className = classnames_1.default('header-menu-item-active', {
            [Header_module_less_1.default.activeItem]: path.startsWith(href) ||
                shallowequal_1.default(path.split('/').slice(0, 4), href.split('/').slice(0, 4)),
        });
        return (react_1.default.createElement("li", { key: title, className: className }, nav.target === '_blank' ? (react_1.default.createElement("a", { href: href, target: "_blank", rel: "noopener noreferrer" }, title)) : (react_1.default.createElement(gatsby_1.Link, { to: href }, title))));
    })));
};
exports.default = NavMenuItems;
