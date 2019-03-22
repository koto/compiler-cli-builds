/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/annotations/src/ng_module" />
import { R3InjectorMetadata, R3NgModuleMetadata, Statement } from '@angular/compiler';
import * as ts from 'typescript';
import { DefaultImportRecorder, Reference, ReferenceEmitter } from '../../imports';
import { PartialEvaluator } from '../../partial_evaluator';
import { Decorator, ReflectionHost } from '../../reflection';
import { NgModuleRouteAnalyzer } from '../../routing';
import { LocalModuleScopeRegistry } from '../../scope';
import { AnalysisOutput, CompileResult, DecoratorHandler, DetectResult, HandlerPrecedence, ResolveResult } from '../../transform';
import { ReferencesRegistry } from './references_registry';
export interface NgModuleAnalysis {
    ngModuleDef: R3NgModuleMetadata;
    ngInjectorDef: R3InjectorMetadata;
    metadataStmt: Statement | null;
    declarations: Reference<ts.Declaration>[];
}
/**
 * Compiles @NgModule annotations to ngModuleDef fields.
 *
 * TODO(alxhub): handle injector side of things as well.
 */
export declare class NgModuleDecoratorHandler implements DecoratorHandler<NgModuleAnalysis, Decorator> {
    private reflector;
    private evaluator;
    private scopeRegistry;
    private referencesRegistry;
    private isCore;
    private routeAnalyzer;
    private refEmitter;
    private defaultImportRecorder;
    constructor(reflector: ReflectionHost, evaluator: PartialEvaluator, scopeRegistry: LocalModuleScopeRegistry, referencesRegistry: ReferencesRegistry, isCore: boolean, routeAnalyzer: NgModuleRouteAnalyzer | null, refEmitter: ReferenceEmitter, defaultImportRecorder: DefaultImportRecorder);
    readonly precedence = HandlerPrecedence.PRIMARY;
    detect(node: ts.Declaration, decorators: Decorator[] | null): DetectResult<Decorator> | undefined;
    analyze(node: ts.ClassDeclaration, decorator: Decorator): AnalysisOutput<NgModuleAnalysis>;
    resolve(node: ts.Declaration, analysis: NgModuleAnalysis): ResolveResult;
    compile(node: ts.ClassDeclaration, analysis: NgModuleAnalysis): CompileResult[];
    private _toR3Reference;
    /**
     * Given a `FunctionDeclaration`, `MethodDeclaration` or `FunctionExpression`, check if it is
     * typed as a `ModuleWithProviders` and return an expression referencing the module if available.
     */
    private _extractModuleFromModuleWithProvidersFn;
    /**
     * Retrieve an `NgModule` identifier (T) from the specified `type`, if it is of the form:
     * `ModuleWithProviders<T>`
     * @param type The type to reflect on.
     * @returns the identifier of the NgModule type if found, or null otherwise.
     */
    private _reflectModuleFromTypeParam;
    /**
     * Retrieve an `NgModule` identifier (T) from the specified `type`, if it is of the form:
     * `A|B|{ngModule: T}|C`.
     * @param type The type to reflect on.
     * @returns the identifier of the NgModule type if found, or null otherwise.
     */
    private _reflectModuleFromLiteralType;
    /**
     * Compute a list of `Reference`s from a resolved metadata value.
     */
    private resolveTypeList;
}
