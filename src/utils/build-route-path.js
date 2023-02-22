export function buildRoutePath(path){
    const routeParemetersRegex = /:([a-zA-Z]+)/g
    const pathwithparams = path.replaceAll(routeParemetersRegex,'(?<$1>/[a-z0-9\-_]+)')
    
    const pathRegex = new RegExp(`^${paramsWithParams}(?<query>\\?(.*))?$`)
    return pathRegex
}