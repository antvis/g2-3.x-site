"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const ptz_i18n_1 = require("ptz-i18n");
const react_i18next_1 = require("react-i18next");
const Seo_1 = __importDefault(require("./Seo"));
const PageLoading_1 = __importDefault(require("./PageLoading"));
class RedirectIndex extends react_1.default.PureComponent {
    constructor(args) {
        super(args);
        this.langKey = '';
        this.renderIndex = (data) => {
            const { t } = this.props;
            const { site: { siteMetadata: { title = '' }, }, } = data;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Seo_1.default, { title: title || 'AntV', titleSuffix: t('蚂蚁数据可视化'), description: t('AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。'), lang: this.langKey }),
                react_1.default.createElement(PageLoading_1.default, null)));
        };
        // Skip build, Browsers only
        if (typeof window !== 'undefined') {
            const langKey = ptz_i18n_1.getUserLangKey(['zh', 'en'], 'zh');
            this.langKey = langKey;
            // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961
            gatsby_1.navigate(langKey);
        }
    }
    render() {
        return (react_1.default.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql `
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `, render: this.renderIndex }));
    }
}
exports.default = react_i18next_1.withTranslation()(RedirectIndex);
