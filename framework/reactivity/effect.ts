import { usedReactivities, clearUsedReactivities, handlerMap } from './shared';

export function effect(handler: () => unknown) {
  clearUsedReactivities();
  handler();

  for (let [obj, key] of usedReactivities) {
    if (!handlerMap.has(obj)) {
      handlerMap.set(obj, new Map());
    }
    if (!handlerMap.get(obj).has(key)) {
      handlerMap.get(obj).set(key, new Set());
    }
    handlerMap.get(obj).get(key).add(handler);
  }
}