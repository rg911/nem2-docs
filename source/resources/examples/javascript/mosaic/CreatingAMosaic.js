/*
 *
 * Copyright 2018-present NEM
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
 *
 */

const nem2Sdk = require("nem2-sdk");
const Account = nem2Sdk.Account,
    AggregateTransaction = nem2Sdk.AggregateTransaction,
    Deadline = nem2Sdk.Deadline,
    MosaicDefinitionTransaction = nem2Sdk.MosaicDefinitionTransaction,
    MosaicFlags = nem2Sdk.MosaicFlags,
    MosaicId = nem2Sdk.MosaicId,
    MosaicNonce = nem2Sdk.MosaicNonce,
    MosaicSupplyChangeTransaction = nem2Sdk.MosaicSupplyChangeTransaction,
    MosaicSupplyChangeAction = nem2Sdk.MosaicSupplyChangeAction,
    NetworkType = nem2Sdk.NetworkType,
    TransactionHttp = nem2Sdk.TransactionHttp,
    UInt64 = nem2Sdk.UInt64;

/* start block 01 */
const privateKey = process.env.PRIVATE_KEY;
const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

const nonce = MosaicNonce.createRandom();
const mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(
    Deadline.create(),
    nonce,
    MosaicId.createFromNonce(nonce, account.publicAccount),
    MosaicFlags.create(true, true, true),
    0,
    UInt64.fromUint(0),
    NetworkType.MIJIN_TEST);
/* end block 01 */

/* start block 02 */
const mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction.create(
    Deadline.create(),
    mosaicDefinitionTransaction.mosaicId,
    MosaicSupplyChangeAction.Increase,
    UInt64.fromUint(1000000),
    NetworkType.MIJIN_TEST);
/* end block 02 */

/* start block 03 */
const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(),
    [
        mosaicDefinitionTransaction.toAggregate(account.publicAccount),
        mosaicSupplyChangeTransaction.toAggregate(account.publicAccount)
    ],
    NetworkType.MIJIN_TEST,
    []);

const networkGenerationHash = process.env.NETWORK_GENERATION_HASH;
const signedTransaction = account.sign(aggregateTransaction, networkGenerationHash);

const transactionHttp = new TransactionHttp('http://localhost:3000');
transactionHttp
    .announce(signedTransaction)
    .subscribe(x=> console.log(x),err => console.error(err));
/* end block 03 */
