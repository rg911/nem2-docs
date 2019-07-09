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
import ResolutionStatementDTO from './ResolutionStatementDTO';
import TransactionStatementDTO from './TransactionStatementDTO';





/**
* The StatementsDTO model module.
* @module model/StatementsDTO
* @version 0.7.15
*/
export default class StatementsDTO {
    /**
    * Constructs a new <code>StatementsDTO</code>.
    * The collection of transaction statements and resolutions triggered for the block requested.
    * @alias module:model/StatementsDTO
    * @class
    * @param transactionStatements {Array.<module:model/TransactionStatementDTO>} The array of transaction statements for the block requested.
    * @param addressResolutionStatements {Array.<module:model/ResolutionStatementDTO>} The array of address resolutions for the block requested.
    * @param mosaicResolutionStatements {Array.<module:model/ResolutionStatementDTO>} The array of mosaic resolutions for the block requested.
    */

    constructor(transactionStatements, addressResolutionStatements, mosaicResolutionStatements) {
        

        
        

        this['transactionStatements'] = transactionStatements;this['addressResolutionStatements'] = addressResolutionStatements;this['mosaicResolutionStatements'] = mosaicResolutionStatements;

        
    }

    /**
    * Constructs a <code>StatementsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StatementsDTO} obj Optional instance to populate.
    * @return {module:model/StatementsDTO} The populated <code>StatementsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatementsDTO();

            
            
            

            if (data.hasOwnProperty('transactionStatements')) {
                obj['transactionStatements'] = ApiClient.convertToType(data['transactionStatements'], [TransactionStatementDTO]);
            }
            if (data.hasOwnProperty('addressResolutionStatements')) {
                obj['addressResolutionStatements'] = ApiClient.convertToType(data['addressResolutionStatements'], [ResolutionStatementDTO]);
            }
            if (data.hasOwnProperty('mosaicResolutionStatements')) {
                obj['mosaicResolutionStatements'] = ApiClient.convertToType(data['mosaicResolutionStatements'], [ResolutionStatementDTO]);
            }
        }
        return obj;
    }

    /**
    * The array of transaction statements for the block requested.
    * @member {Array.<module:model/TransactionStatementDTO>} transactionStatements
    */
    transactionStatements = undefined;
    /**
    * The array of address resolutions for the block requested.
    * @member {Array.<module:model/ResolutionStatementDTO>} addressResolutionStatements
    */
    addressResolutionStatements = undefined;
    /**
    * The array of mosaic resolutions for the block requested.
    * @member {Array.<module:model/ResolutionStatementDTO>} mosaicResolutionStatements
    */
    mosaicResolutionStatements = undefined;








}


