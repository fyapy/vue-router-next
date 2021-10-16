import { inject } from 'vue'
import { routerKey, routeLocationKey } from './injectionSymbols'
import { Router } from './router'
import { RouteLocationNormalizedLoaded, RouteParams } from './types'

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
export function useRouter(): Router {
  return inject(routerKey)!
}

/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
export function useRoute<
  Params extends RouteParams = RouteParams
>(): RouteLocationNormalizedLoaded<Params> {
  return inject<RouteLocationNormalizedLoaded<Params>>(routeLocationKey)!
}
