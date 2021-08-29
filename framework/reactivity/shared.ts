type ReactiveTarget = Object;
type TargetKey = string | number | symbol;
type ReactiveSet = [ReactiveTarget, TargetKey];
export type ReactiveProxy = any;

/**
 * 收集effect创建的，引用了ReactiveTarget对应的key的函数集合
 * reactive Proxy对应的target的key set是触发对应的函数集合
 */
export const handlerMap = new Map<ReactiveTarget, Map<TargetKey, Set<Function>>>();
/**
 * 存放reactive创建的Proxy和ReactiveTarget对应Map，key为Proxy自身和ReactiveTarget
 * 防止重复创建Proxy
 */
export const reactivities = new Map<ReactiveTarget | ReactiveProxy, ReactiveProxy>();

/**
 * reactive的ReactiveTarget和effect使用usedReactivities交互
 * 记录被访问过的[target, key]
 * 调用effect时清空，reactive Proxy对应target set时加入
 */
export let usedReactivities: ReactiveSet[] = [];

export function clearUsedReactivities(): void {
  usedReactivities = [];
}