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

const MosaicHttp = nem2Sdk.MosaicHttp;
const MosaicId = nem2Sdk.MosaicId;

/* start block 01 */
const mosaicIdHex = process.env.MOSAIC_ID_HEX;
const mosaicId = new MosaicId(mosaicIdHex);

const mosaicHttp = new MosaicHttp('http://localhost:3000');
mosaicHttp
    .getMosaic(mosaicId)
    .subscribe(mosaicInfo => console.log(mosaicInfo), err => console.error(err));
/* end block 01 */
