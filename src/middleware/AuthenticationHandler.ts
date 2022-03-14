/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module AuthenticationHandler
 */

import { AccessTokenProvider } from "@microsoft/kiota-abstractions";

import { isCustomHost, isGraphURL } from "../GraphRequestUtil";
import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";
import { appendRequestHeader } from "./MiddlewareUtil";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";

/**
 * @class
 * @implements Middleware
 * Class representing AuthenticationHandler
 */
export class AuthenticationHandler implements Middleware {
	/**
	 * @private
	 * A member representing the authorization header name
	 */
	private static AUTHORIZATION_HEADER = "Authorization";

	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware: Middleware;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of AuthenticationHandler
	 * @param {AuthenticationProvider} authenticationProvider - The authentication provider for the authentication handler
	 */
	public constructor(private accessTokenProvider: AccessTokenProvider) {}

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		const url = typeof context.request === "string" ? context.request : context.request.url;
		if (isGraphURL(url) || (context.customHosts && isCustomHost(url, context.customHosts))) {
			const token: string = await this.accessTokenProvider.getAuthorizationToken(url);
			const bearerKey = `Bearer ${token}`;
			appendRequestHeader(context.request, context.options, AuthenticationHandler.AUTHORIZATION_HEADER, bearerKey);
			TelemetryHandlerOptions.updateFeatureUsageFlag(context, FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
		} else {
			if (context.options.headers) {
				delete context.options.headers[AuthenticationHandler.AUTHORIZATION_HEADER];
			}
		}
		return await this.nextMiddleware.execute(context);
	}

	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	public setNext(next: Middleware): void {
		this.nextMiddleware = next;
	}
}
