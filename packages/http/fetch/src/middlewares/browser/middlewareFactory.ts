/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MiddlewareFactory
 */

import { CustomFetchHandler } from "../customFetchHandler";
import { Middleware } from "../middleware";
import { RetryHandlerOptions } from "../options/retryHandlerOptions";
import { RetryHandler } from "../retryHandler";

/**
 * @class
 * Class containing function(s) related to the middleware pipelines.
 */
export class MiddlewareFactory {
	/**
	 * @public
	 * @static
	 * Returns the default middleware chain an array with the  middleware handlers
	 * @param {AuthenticationProvider} authProvider - The authentication provider instance
	 * @returns an array of the middleware handlers of the default middleware chain
	 */
	public static getDefaultMiddlewareChain(customFetch?: (request: string, init?: RequestInit) => Promise<Response>): Middleware[] {
		// Browsers handles redirection automatically and do not require the redirectionHandler

		const middlewareArray: Middleware[] = [];
		const retryHandler = new RetryHandler(new RetryHandlerOptions());
		middlewareArray.push(retryHandler);
		if (customFetch) {
			middlewareArray.push(new CustomFetchHandler(customFetch));
		} else {
			middlewareArray.push(new CustomFetchHandler(fetch as any));
		}
		return middlewareArray;
	}
}
