import React from 'react';
export interface SearchProps {
    docsearchOptions?: {
        apiKey: string;
        indexName: string;
    };
}
declare const Search: React.FC<SearchProps>;
export default Search;
