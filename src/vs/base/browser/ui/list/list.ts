/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface IIdentityProvider<T> {
	getId(element: T): string;
}

export interface IDelegate<T> {
	getHeight(element: T): number;
	getTemplateId(element: T): string;
}

export interface IRenderer<TElement, TTemplateData> {
	templateId: string;
	renderTemplate(container: HTMLElement): TTemplateData;
	renderElement(element: TElement, templateData: TTemplateData): void;
	disposeTemplate(templateData: TTemplateData): void;
}
