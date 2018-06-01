// import React from 'react';
// import {connect} from 'react-redux'
//
// function withPathFromSelection(reduxStoreId) {
//     return (WrappedComponent) => {
//         return connect(
//             (state, ownProps) => ({
//                 ...ownProps,
//                 path: (state["selectedPaths_" + reduxStoreId] && state["selectedPaths_" + reduxStoreId].length === 1) ? state["selectedPaths_" + reduxStoreId][0] : null,
//             }),
//             () => ({}))(WrappedComponent);
//     }
// }
//
// export { withPathFromSelection }