import { reactivities, usedReactivities, handlerMap, ReactiveProxy } from './shared';

export function reactive(target: any): ReactiveProxy {
  if (reactivities.has(target)) {
    return reactivities.get(target);
  }
  const proxy = new Proxy(target, {
    get(obj, key) {
      usedReactivities.push([obj, key]);

      if (typeof obj[key] === 'object') {
        return reactive(obj[key]);
      }
      return obj[key];
    },
    set(obj, key, value) {
      obj[key] = value;
      if(handlerMap.get(obj)) {
        handlerMap.get(obj).get(key).forEach(handler => handler());
      }
      return true;
    }
  });
  reactivities.set(target, proxy);
  reactivities.set(proxy, proxy);
  return proxy;
}