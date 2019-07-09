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
* The TransactionHashes model module.
* @module model/TransactionHashes
* @version 1.0.12
*/
export default class TransactionHashes {
    /**
    * Constructs a new <code>TransactionHashes</code>.
    * @alias module:model/TransactionHashes
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TransactionHashes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransactionHashes} obj Optional instance to populate.
    * @return {module:model/TransactionHashes} The populated <code>TransactionHashes</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionHashes();

            
            
            

            if (data.hasOwnProperty('hashes')) {
                obj['hashes'] = ApiClient.convertToType(data['hashes'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} hashes
    */
    hashes = undefined;








}


