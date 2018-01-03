
function createOutletHistory(baseHistory) {
    const history = {
        length: baseHistory.length,
        action: baseHistory.action,
        location: baseHistory.location,
        createHref: (location) => {
            return baseHistory.createHref(location);
        },
        push: (path, state) => {
            debugger;
            return baseHistory.push(path,state);
        },
        replace: (path, state) => {
            baseHistory.replace(path, state);
        },
        go: (n) => {baseHistory.go(n)},
        goBack: () => {baseHistory.goBack()},
        goForward: () => {baseHistory.goForward()},
        block:(prompt) => {return baseHistory.block(prompt)},
        listen: (listener) => {return baseHistory.listen(listener)}
    };
    return history
}

export default createOutletHistory