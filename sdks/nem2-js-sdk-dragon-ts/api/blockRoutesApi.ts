/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { BlockInfoDTO } from '../model/blockInfoDTO';
import { MerkleProofInfoDTO } from '../model/merkleProofInfoDTO';
import { StatementsDTO } from '../model/statementsDTO';
import { TransactionInfoDTO } from '../model/transactionInfoDTO';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BlockRoutesApiApiKeys {
}

export class BlockRoutesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: BlockRoutesApiApiKeys, value: string) {
        (this.authentications as any)[BlockRoutesApiApiKeys[key]].apiKey = value;
    }

    /**
     * Gets a block from the chain that has the given height.
     * @summary Get block information
     * @param height The height of the block.
     */
    public async getBlockByHeight (height: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: BlockInfoDTO;  }> {
        const localVarPath = this.basePath + '/block/{height}'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getBlockByHeight.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: BlockInfoDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "BlockInfoDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the receipts linked to a block.
     * @summary Get receipts from a block
     * @param height The height of the block.
     */
    public async getBlockReceipts (height: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: StatementsDTO;  }> {
        const localVarPath = this.basePath + '/block/{height}/receipts'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getBlockReceipts.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: StatementsDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "StatementsDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns an array of transactions included in a block for a given block height.
     * @summary Get transactions from a block
     * @param height The height of the block.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned.
     */
    public async getBlockTransactions (height: number, pageSize?: number, id?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }> {
        const localVarPath = this.basePath + '/block/{height}/transactions'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getBlockTransactions.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Gets up to limit number of blocks after given block height.
     * @summary Get blocks information
     * @param height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param limit The number of blocks to be returned.
     */
    public async getBlocksByHeightWithLimit (height: number, limit: 25 | 50 | 75 | 100, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<BlockInfoDTO>;  }> {
        const localVarPath = this.basePath + '/blocks/{height}/limit/{limit}'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)))
            .replace('{' + 'limit' + '}', encodeURIComponent(String(limit)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getBlocksByHeightWithLimit.');
        }

        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getBlocksByHeightWithLimit.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<BlockInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<BlockInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the merkle path for a receipt statement or resolution linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block. 
     * @summary Get the merkle path for a given a receipt statement hash and block
     * @param height The height of the block.
     * @param hash The hash of the receipt statement or resolution.
     */
    public async getMerkleReceipts (height: number, hash: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: MerkleProofInfoDTO;  }> {
        const localVarPath = this.basePath + '/block/{height}/receipt/{hash}/merkle'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)))
            .replace('{' + 'hash' + '}', encodeURIComponent(String(hash)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getMerkleReceipts.');
        }

        // verify required parameter 'hash' is not null or undefined
        if (hash === null || hash === undefined) {
            throw new Error('Required parameter hash was null or undefined when calling getMerkleReceipts.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: MerkleProofInfoDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "MerkleProofInfoDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the merkle path for a transaction included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block. 
     * @summary Get the merkle path for a given a transaction and block
     * @param height The height of the block.
     * @param hash The hash of the transaction.
     */
    public async getMerkleTransaction (height: number, hash: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: MerkleProofInfoDTO;  }> {
        const localVarPath = this.basePath + '/block/{height}/transaction/{hash}/merkle'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)))
            .replace('{' + 'hash' + '}', encodeURIComponent(String(hash)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getMerkleTransaction.');
        }

        // verify required parameter 'hash' is not null or undefined
        if (hash === null || hash === undefined) {
            throw new Error('Required parameter hash was null or undefined when calling getMerkleTransaction.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: MerkleProofInfoDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "MerkleProofInfoDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
}
