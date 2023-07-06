import algoliasearch from 'algoliasearch';

const algoliaConfig = {
    appId: '8CEDQX2VWF',
    apiKey: '1ee70e9214d3ea21cc33afa934e4e57f',
    indexName: 'dialin-index'
};

const algoliaClient = algoliasearch(algoliaConfig.appId, algoliaConfig.apiKey);
const algoliaIndex = algoliaClient.initIndex(algoliaConfig.indexName);

export { algoliaClient, algoliaIndex };