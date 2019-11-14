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
import UInt64DTO from './UInt64DTO';





/**
* The MosaicDTO model module.
* @module model/MosaicDTO
* @version 0.7.15
*/
export default class MosaicDTO {
    /**
    * Constructs a new <code>MosaicDTO</code>.
    * @alias module:model/MosaicDTO
    * @class
    * @param id {module:model/UInt64DTO} 
    * @param amount {module:model/UInt64DTO} 
    */

    constructor(id, amount) {
        

        
        

        this['id'] = id;this['amount'] = amount;

        
    }

    /**
    * Constructs a <code>MosaicDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicDTO} obj Optional instance to populate.
    * @return {module:model/MosaicDTO} The populated <code>MosaicDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicDTO();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = UInt64DTO.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = UInt64DTO.constructFromObject(data['amount']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} id
    */
    id = undefined;
    /**
    * @member {module:model/UInt64DTO} amount
    */
    amount = undefined;








}

