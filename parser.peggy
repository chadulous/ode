import = ":(" packageString:packageString ") as " as:keyword";" { return { packageString, as } }
packageString = provider:keyword "/" scope:(@keyword ":")? name:keyword { return {
    provider,
    scope,
    name
} }

keyword = $[a-zA-Z]*