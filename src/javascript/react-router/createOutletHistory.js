import * as _ from "lodash";

function createOutletHistory(baseHistory, outletName) {

    const getPath = (path) => {
        let parts = [];
        let base = baseHistory.location.pathname;
        let newPath = outletName + ':' + path;
        if (base.indexOf('(') > -1) {
            base = base.substr(base.indexOf('(')+1);
            base = base.substr(0,base.indexOf(')'));
            parts = base.split('//')
            parts = _.map(parts, (p)=> (p.startsWith(outletName + ':') ? newPath : p));
        }
        if (parts.indexOf(newPath) === -1) {
            parts.push(newPath);
        }
        return '/('+ _.join(parts,'//') + ')';
    };

    const getState = function (state) {
        let newState;
        if (state) {
            newState = baseHistory.location.state ? baseHistory.location.state : {};
            newState['router_' + outletName] = state;
        } else if (baseHistory.location.state) {
            newState = baseHistory.location.state;
            delete newState['router_' + outletName]
        }
        return newState;
    };

    const extractPath = function(base) {
        if (base.indexOf('(') > -1) {
            base = base.substr(base.indexOf('(') + 1);
            base = base.substr(0, base.indexOf(')'));
            let parts = base.split('//')
            let s = outletName + ':';
            let part = _.find(parts, (p)=> (p.startsWith(s)));
            if (part) {
                return part.substr(s.length)
            }
        }
        return '';
    };

    let initialLocation = _.clone(baseHistory.location);
    initialLocation.pathname = extractPath(initialLocation.pathname);

    let listeners = [];

    const history = {
        length: baseHistory.length,
        action: baseHistory.action,
        location: initialLocation,
        createHref: (location) => {
            return baseHistory.createHref({pathname:getPath(location.pathname)});
        },
        push: (path, state) => {
            return baseHistory.push(getPath(path),getState(state));
        },
        replace: (path, state) => {
            baseHistory.replace(getPath(path),getState(state));
        },
        go: (n) => {
            baseHistory.go(n)
        },
        goBack: () => {
            baseHistory.goBack()
        },
        goForward: () => {
            baseHistory.goForward()
        },
        block:(prompt) => {
            return baseHistory.block(prompt)
        },
        listen: (listener) => {
            listeners.push(listener);
            return () => {
                _.pull(listeners, listener);
            }
        },
        dispose: () => {
            unlisten();
        }
    };

    const unlisten = baseHistory.listen( (event) => {
        let path = extractPath(event.pathname);
        let state;
        if (event.state && event.state['router_' + outletName]) {
            state = event.state['router_' + outletName];
        }
        if (history.location.pathname !== path || history.location.state !== state) {
            Object.assign(history.location, event);
            history.location.pathname = path;
            history.location.state = state;
            _.each(listeners, (listener) => listener.call(this,history.location))
        }
    });

    // unlisten when not used anymore !

    return history
}

export { createOutletHistory }