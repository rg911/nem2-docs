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


export class MultisigDTO {
    /**
    * The account public key.
    */
    'account': string;
    /**
    * The account address in hexadecimal.
    */
    'accountAddress'?: string;
    /**
    * The number of signatures needed to approve a transaction.
    */
    'minApproval': number;
    /**
    * The number of signatures needed to remove a cosignatory.
    */
    'minRemoval': number;
    /**
    * The array of public keys of the cosignatory accounts.
    */
    'cosignatories': Array<string>;
    /**
    * The array of multisig accounts where the account is cosignatory.
    */
    'multisigAccounts': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "accountAddress",
            "baseName": "accountAddress",
            "type": "string"
        },
        {
            "name": "minApproval",
            "baseName": "minApproval",
            "type": "number"
        },
        {
            "name": "minRemoval",
            "baseName": "minRemoval",
            "type": "number"
        },
        {
            "name": "cosignatories",
            "baseName": "cosignatories",
            "type": "Array<string>"
        },
        {
            "name": "multisigAccounts",
            "baseName": "multisigAccounts",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return MultisigDTO.attributeTypeMap;
    }
}
