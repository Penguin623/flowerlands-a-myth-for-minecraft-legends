const wikiModWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(['wiki_mod', 'center'], 1);
    }
};

SNIPPET_InheritsFromGameMode('wiki_mod', () => {
    SetWorldGenDefinition(wikiModWorldGenDefinition);
});