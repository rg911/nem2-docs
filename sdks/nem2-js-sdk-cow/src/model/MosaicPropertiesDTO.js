/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.12
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
* The MosaicPropertiesDTO model module.
* @module model/MosaicPropertiesDTO
* @version 1.0.12
*/
export default class MosaicPropertiesDTO extends Array {
    /**
    * Constructs a new <code>MosaicPropertiesDTO</code>.
    * @alias module:model/MosaicPropertiesDTO
    * @class
    * @extends Array
    */

    constructor() {
        
        super();
        

        
        

        

        return this;
    }

    /**
    * Constructs a <code>MosaicPropertiesDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicPropertiesDTO} obj Optional instance to populate.
    * @return {module:model/MosaicPropertiesDTO} The populated <code>MosaicPropertiesDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicPropertiesDTO();

            ApiClient.constructFromObject(data, obj, 'UInt64DTO');

            
            

        }
        return obj;
    }









}


