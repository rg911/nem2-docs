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





/**
* The NetworkTypeDTO model module.
* @module model/NetworkTypeDTO
* @version 1.0.12
*/
export default class NetworkTypeDTO {
    /**
    * Constructs a new <code>NetworkTypeDTO</code>.
    * @alias module:model/NetworkTypeDTO
    * @class
    * @param name {String} 
    * @param description {String} 
    */

    constructor(name, description) {
        

        
        

        this['name'] = name;this['description'] = description;

        
    }

    /**
    * Constructs a <code>NetworkTypeDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworkTypeDTO} obj Optional instance to populate.
    * @return {module:model/NetworkTypeDTO} The populated <code>NetworkTypeDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkTypeDTO();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} description
    */
    description = undefined;








}

