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
/*
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.openapitools.client.model.MosaicDefinitionDTO;
import org.openapitools.client.model.MosaicMetaDTO;

/**
 * MosaicInfoDTO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-06-20T19:56:23.892+01:00[Europe/London]")
public class MosaicInfoDTO {
  public static final String SERIALIZED_NAME_META = "meta";
  @SerializedName(SERIALIZED_NAME_META)
  private MosaicMetaDTO meta = null;

  public static final String SERIALIZED_NAME_MOSAIC = "mosaic";
  @SerializedName(SERIALIZED_NAME_MOSAIC)
  private MosaicDefinitionDTO mosaic = null;

  public MosaicInfoDTO meta(MosaicMetaDTO meta) {
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @ApiModelProperty(required = true, value = "")
  public MosaicMetaDTO getMeta() {
    return meta;
  }

  public void setMeta(MosaicMetaDTO meta) {
    this.meta = meta;
  }

  public MosaicInfoDTO mosaic(MosaicDefinitionDTO mosaic) {
    this.mosaic = mosaic;
    return this;
  }

   /**
   * Get mosaic
   * @return mosaic
  **/
  @ApiModelProperty(required = true, value = "")
  public MosaicDefinitionDTO getMosaic() {
    return mosaic;
  }

  public void setMosaic(MosaicDefinitionDTO mosaic) {
    this.mosaic = mosaic;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MosaicInfoDTO mosaicInfoDTO = (MosaicInfoDTO) o;
    return Objects.equals(this.meta, mosaicInfoDTO.meta) &&
        Objects.equals(this.mosaic, mosaicInfoDTO.mosaic);
  }

  @Override
  public int hashCode() {
    return Objects.hash(meta, mosaic);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MosaicInfoDTO {\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    mosaic: ").append(toIndentedString(mosaic)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

