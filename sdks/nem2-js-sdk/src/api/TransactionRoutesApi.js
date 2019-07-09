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


import ApiClient from "../ApiClient";
import TransactionHashes from '../model/TransactionHashes';
import TransactionIds from '../model/TransactionIds';
import TransactionPayload from '../model/TransactionPayload';
import TransactionStatusDTO from '../model/TransactionStatusDTO';

/**
* TransactionRoutes service.
* @module api/TransactionRoutesApi
* @version 1.0.12
*/
export default class TransactionRoutesApi {

    /**
    * Constructs a new TransactionRoutesApi. 
    * @alias module:api/TransactionRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Announce a cosignature transaction
     * Announces a [cosignature transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#cosignature-transaction) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    announceCosignatureTransactionWithHttpInfo(payload) {
      let postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling announceCosignatureTransaction");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/transaction/cosignature', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Announce a cosignature transaction
     * Announces a [cosignature transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#cosignature-transaction) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    announceCosignatureTransaction(payload) {
      return this.announceCosignatureTransactionWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Announce an aggregate bonded transaction
     * Announces an [aggregate bonded transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    announcePartialTransactionWithHttpInfo(payload) {
      let postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling announcePartialTransaction");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/transaction/partial', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Announce an aggregate bonded transaction
     * Announces an [aggregate bonded transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    announcePartialTransaction(payload) {
      return this.announcePartialTransactionWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Announce a new transaction
     * Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be [serialized](https://nemtech.github.io/api.html#serialization).
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    announceTransactionWithHttpInfo(payload) {
      let postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling announceTransaction");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/transaction', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Announce a new transaction
     * Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be [serialized](https://nemtech.github.io/api.html#serialization).
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    announceTransaction(payload) {
      return this.announceTransactionWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transaction information
     * Returns transaction information given a transactionId or hash.
     * @param {String} transactionId The transaction id or hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getTransactionWithHttpInfo(transactionId) {
      let postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransaction");
      }


      let pathParams = {
        'transactionId': transactionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/transaction/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transaction information
     * Returns transaction information given a transactionId or hash.
     * @param {String} transactionId The transaction id or hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getTransaction(transactionId) {
      return this.getTransactionWithHttpInfo(transactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transaction status
     * Returns the transaction status for a given hash.
     * @param {String} hash The transaction hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionStatusDTO} and HTTP response
     */
    getTransactionStatusWithHttpInfo(hash) {
      let postBody = null;

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getTransactionStatus");
      }


      let pathParams = {
        'hash': hash
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionStatusDTO;

      return this.apiClient.callApi(
        '/transaction/{hash}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transaction status
     * Returns the transaction status for a given hash.
     * @param {String} hash The transaction hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionStatusDTO}
     */
    getTransactionStatus(hash) {
      return this.getTransactionStatusWithHttpInfo(hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transactions information
     * Returns transactions information for a given array of transactionIds.
     * @param {module:model/TransactionIds} transactionIds An array of transaction ids or hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    getTransactionsWithHttpInfo(transactionIds) {
      let postBody = transactionIds;

      // verify the required parameter 'transactionIds' is set
      if (transactionIds === undefined || transactionIds === null) {
        throw new Error("Missing the required parameter 'transactionIds' when calling getTransactions");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];

      return this.apiClient.callApi(
        '/transaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transactions information
     * Returns transactions information for a given array of transactionIds.
     * @param {module:model/TransactionIds} transactionIds An array of transaction ids or hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    getTransactions(transactionIds) {
      return this.getTransactionsWithHttpInfo(transactionIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transactions status.
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * @param {module:model/TransactionHashes} transactionHashes An array of transaction hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TransactionStatusDTO>} and HTTP response
     */
    getTransactionsStatusesWithHttpInfo(transactionHashes) {
      let postBody = transactionHashes;

      // verify the required parameter 'transactionHashes' is set
      if (transactionHashes === undefined || transactionHashes === null) {
        throw new Error("Missing the required parameter 'transactionHashes' when calling getTransactionsStatuses");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TransactionStatusDTO];

      return this.apiClient.callApi(
        '/transaction/statuses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transactions status.
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * @param {module:model/TransactionHashes} transactionHashes An array of transaction hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TransactionStatusDTO>}
     */
    getTransactionsStatuses(transactionHashes) {
      return this.getTransactionsStatusesWithHttpInfo(transactionHashes)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
