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
* The HeightDTO model module.
* @module model/HeightDTO
* @version 1.0.12
*/
export default class HeightDTO {
    /**
    * Constructs a new <code>HeightDTO</code>.
    * @alias module:model/HeightDTO
    * @class
    * @param height {module:model/UInt64DTO} 
    */

    constructor(height) {
        

        
        

        this['height'] = height;

        
    }

    /**
    * Constructs a <code>HeightDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HeightDTO} obj Optional instance to populate.
    * @return {module:model/HeightDTO} The populated <code>HeightDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeightDTO();

            
            
            

            if (data.hasOwnProperty('height')) {
                obj['height'] = UInt64DTO.constructFromObject(data['height']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} height
    */
    height = undefined;








}


