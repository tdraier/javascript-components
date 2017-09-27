import * as _ from "lodash";
import {gql} from 'react-apollo';

function findParametersInDocument(doc) {
    if (doc && doc.definitions) {
        return _.flatMap(doc.definitions, def => findParametersInSelectionSet(def.selectionSet));
    }
    return [];
}

function findParametersInSelectionSet(selectionSet) {
    if (selectionSet && selectionSet.selections) {
        return _.flatMap(selectionSet.selections, (sel) =>
            _.without(_.concat(
                _.flatMap(_.filter(sel.arguments, (arg) => (arg.value.kind == 'Variable')), (arg) => arg.value.name.value),
                findParametersInSelectionSet(sel.selectionSet)),
                undefined)
        );
    }
    return [];
}

function parseFragment(fragments, types) {
    types = types || {};
    let typesToUse = {};

    let gqlFragment = "";
    let spread = "";
    let variableNames = _.keys(types);
    if (fragments && fragments.length > 0) {
        gqlFragment = gql([_.join(_.map(fragments, "gql.loc.source.body"), "\n")]);
        spread = _.join(_.map(gqlFragment.definitions, (def) => "..." + def.name.value), " ");
        _.each(fragments, (frag) => {
            _.assign(typesToUse, frag.arguments)
        });

        let varsInDocument = findParametersInDocument(gqlFragment);
        variableNames = _.uniq(_.concat(varsInDocument, variableNames));
    }
    _.assign(typesToUse, types);
    let array = _.map(variableNames, arg => "$" + arg + ":" + typesToUse[arg]);
    let varString = _.join(array, ",");
    if (varString.length > 0) {
        varString = "(" + varString + ")";
    }

    return {
        parametersString: varString,
        fragmentSpread: spread,
        aggregatedFragment: gqlFragment
    }

}


export default parseFragment