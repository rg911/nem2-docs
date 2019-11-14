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
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import MosaicDTO from './MosaicDTO';
import UInt64DTO from './UInt64DTO';





/**
* The AccountDTO model module.
* @module model/AccountDTO
* @version 0.7.15
*/
export default class AccountDTO {
    /**
    * Constructs a new <code>AccountDTO</code>.
    * @alias module:model/AccountDTO
    * @class
    * @param address {String} The account unique address in hexadecimal. 
    * @param addressHeight {module:model/UInt64DTO} 
    * @param publicKey {String} The public key of an account can be used to verify signatures of the account. Only accounts that have already published a transaction have a public key assigned to the account. Otherwise, the field is null. 
    * @param publicKeyHeight {module:model/UInt64DTO} 
    * @param mosaics {Array.<module:model/MosaicDTO>} The list of mosaics the account owns. The amount is represented in absolute amount. Thus a balance of 123456789 for a mosaic with divisibility 6 (absolute) means the account owns 123.456789 instead. 
    * @param importance {module:model/UInt64DTO} 
    * @param importanceHeight {module:model/UInt64DTO} 
    */

    constructor(address, addressHeight, publicKey, publicKeyHeight, mosaics, importance, importanceHeight) {
        

        
        

        this['address'] = address;this['addressHeight'] = addressHeight;this['publicKey'] = publicKey;this['publicKeyHeight'] = publicKeyHeight;this['mosaics'] = mosaics;this['importance'] = importance;this['importanceHeight'] = importanceHeight;

        
    }

    /**
    * Constructs a <code>AccountDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountDTO} obj Optional instance to populate.
    * @return {module:model/AccountDTO} The populated <code>AccountDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDTO();

            
            
            

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('addressHeight')) {
                obj['addressHeight'] = UInt64DTO.constructFromObject(data['addressHeight']);
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('publicKeyHeight')) {
                obj['publicKeyHeight'] = UInt64DTO.constructFromObject(data['publicKeyHeight']);
            }
            if (data.hasOwnProperty('mosaics')) {
                obj['mosaics'] = ApiClient.convertToType(data['mosaics'], [MosaicDTO]);
            }
            if (data.hasOwnProperty('importance')) {
                obj['importance'] = UInt64DTO.constructFromObject(data['importance']);
            }
            if (data.hasOwnProperty('importanceHeight')) {
                obj['importanceHeight'] = UInt64DTO.constructFromObject(data['importanceHeight']);
            }
        }
        return obj;
    }

    /**
    * The account unique address in hexadecimal. 
    * @member {String} address
    */
    address = undefined;
    /**
    * @member {module:model/UInt64DTO} addressHeight
    */
    addressHeight = undefined;
    /**
    * The public key of an account can be used to verify signatures of the account. Only accounts that have already published a transaction have a public key assigned to the account. Otherwise, the field is null. 
    * @member {String} publicKey
    */
    publicKey = undefined;
    /**
    * @member {module:model/UInt64DTO} publicKeyHeight
    */
    publicKeyHeight = undefined;
    /**
    * The list of mosaics the account owns. The amount is represented in absolute amount. Thus a balance of 123456789 for a mosaic with divisibility 6 (absolute) means the account owns 123.456789 instead. 
    * @member {Array.<module:model/MosaicDTO>} mosaics
    */
    mosaics = undefined;
    /**
    * @member {module:model/UInt64DTO} importance
    */
    importance = undefined;
    /**
    * @member {module:model/UInt64DTO} importanceHeight
    */
    importanceHeight = undefined;








}

