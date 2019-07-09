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
import MosaicDefinitionDTO from './MosaicDefinitionDTO';
import MosaicMetaDTO from './MosaicMetaDTO';





/**
* The MosaicInfoDTO model module.
* @module model/MosaicInfoDTO
* @version 1.0.12
*/
export default class MosaicInfoDTO {
    /**
    * Constructs a new <code>MosaicInfoDTO</code>.
    * @alias module:model/MosaicInfoDTO
    * @class
    * @param meta {module:model/MosaicMetaDTO} 
    * @param mosaic {module:model/MosaicDefinitionDTO} 
    */

    constructor(meta, mosaic) {
        

        
        

        this['meta'] = meta;this['mosaic'] = mosaic;

        
    }

    /**
    * Constructs a <code>MosaicInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicInfoDTO} obj Optional instance to populate.
    * @return {module:model/MosaicInfoDTO} The populated <code>MosaicInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicInfoDTO();

            
            
            

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MosaicMetaDTO.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('mosaic')) {
                obj['mosaic'] = MosaicDefinitionDTO.constructFromObject(data['mosaic']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/MosaicMetaDTO} meta
    */
    meta = undefined;
    /**
    * @member {module:model/MosaicDefinitionDTO} mosaic
    */
    mosaic = undefined;








}


