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
import java.util.ArrayList;
import java.util.List;

/**
 * NamespaceNameDTO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-06-20T19:56:23.892+01:00[Europe/London]")
public class NamespaceNameDTO {
  public static final String SERIALIZED_NAME_PARENT_ID = "parentId";
  @SerializedName(SERIALIZED_NAME_PARENT_ID)
  private List<Integer> parentId = new ArrayList<Integer>();

  public static final String SERIALIZED_NAME_NAMESPACE_ID = "namespaceId";
  @SerializedName(SERIALIZED_NAME_NAMESPACE_ID)
  private List<Integer> namespaceId = new ArrayList<Integer>();

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public NamespaceNameDTO parentId(List<Integer> parentId) {
    this.parentId = parentId;
    return this;
  }

  public NamespaceNameDTO addParentIdItem(Integer parentIdItem) {
    if (this.parentId == null) {
      this.parentId = new ArrayList<Integer>();
    }
    this.parentId.add(parentIdItem);
    return this;
  }

   /**
   * Get parentId
   * @return parentId
  **/
  @ApiModelProperty(example = "[lower, higher]", value = "")
  public List<Integer> getParentId() {
    return parentId;
  }

  public void setParentId(List<Integer> parentId) {
    this.parentId = parentId;
  }

  public NamespaceNameDTO namespaceId(List<Integer> namespaceId) {
    this.namespaceId = namespaceId;
    return this;
  }

  public NamespaceNameDTO addNamespaceIdItem(Integer namespaceIdItem) {
    this.namespaceId.add(namespaceIdItem);
    return this;
  }

   /**
   * Get namespaceId
   * @return namespaceId
  **/
  @ApiModelProperty(example = "[lower, higher]", required = true, value = "")
  public List<Integer> getNamespaceId() {
    return namespaceId;
  }

  public void setNamespaceId(List<Integer> namespaceId) {
    this.namespaceId = namespaceId;
  }

  public NamespaceNameDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The name of the namespace.
   * @return name
  **/
  @ApiModelProperty(example = "cat", required = true, value = "The name of the namespace.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NamespaceNameDTO namespaceNameDTO = (NamespaceNameDTO) o;
    return Objects.equals(this.parentId, namespaceNameDTO.parentId) &&
        Objects.equals(this.namespaceId, namespaceNameDTO.namespaceId) &&
        Objects.equals(this.name, namespaceNameDTO.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(parentId, namespaceId, name);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NamespaceNameDTO {\n");
    sb.append("    parentId: ").append(toIndentedString(parentId)).append("\n");
    sb.append("    namespaceId: ").append(toIndentedString(namespaceId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
