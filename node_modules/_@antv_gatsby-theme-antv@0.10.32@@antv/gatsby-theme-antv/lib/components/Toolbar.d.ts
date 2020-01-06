import React from 'react';
interface ToolbarProps {
    sourceCode: string;
    fileExtension: string;
    title: {
        zh?: string;
        en?: string;
    } | string;
    location?: Location;
    playground: {
        container?: string;
        playgroundDidMount?: string;
        playgroundWillUnmount?: string;
        dependencies?: {
            [key: string]: string;
        };
        htmlCodeTemplate?: string;
    };
    isFullScreen: boolean;
    onToggleFullscreen: () => void;
    onExecuteCode: () => void;
}
declare const Toolbar: React.FC<ToolbarProps>;
export default Toolbar;
