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
 * TransactionStatusDTO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-06-20T19:56:23.892+01:00[Europe/London]")
public class TransactionStatusDTO {
  public static final String SERIALIZED_NAME_GROUP = "group";
  @SerializedName(SERIALIZED_NAME_GROUP)
  private String group;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private String status;

  public static final String SERIALIZED_NAME_HASH = "hash";
  @SerializedName(SERIALIZED_NAME_HASH)
  private String hash;

  public static final String SERIALIZED_NAME_DEADLINE = "deadline";
  @SerializedName(SERIALIZED_NAME_DEADLINE)
  private List<Integer> deadline = new ArrayList<Integer>();

  public static final String SERIALIZED_NAME_HEIGHT = "height";
  @SerializedName(SERIALIZED_NAME_HEIGHT)
  private List<Integer> height = new ArrayList<Integer>();

  public TransactionStatusDTO group(String group) {
    this.group = group;
    return this;
  }

   /**
   * Get group
   * @return group
  **/
  @ApiModelProperty(value = "")
  public String getGroup() {
    return group;
  }

  public void setGroup(String group) {
    this.group = group;
  }

  public TransactionStatusDTO status(String status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(required = true, value = "")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public TransactionStatusDTO hash(String hash) {
    this.hash = hash;
    return this;
  }

   /**
   * Get hash
   * @return hash
  **/
  @ApiModelProperty(value = "")
  public String getHash() {
    return hash;
  }

  public void setHash(String hash) {
    this.hash = hash;
  }

  public TransactionStatusDTO deadline(List<Integer> deadline) {
    this.deadline = deadline;
    return this;
  }

  public TransactionStatusDTO addDeadlineItem(Integer deadlineItem) {
    if (this.deadline == null) {
      this.deadline = new ArrayList<Integer>();
    }
    this.deadline.add(deadlineItem);
    return this;
  }

   /**
   * Get deadline
   * @return deadline
  **/
  @ApiModelProperty(example = "[lower, higher]", value = "")
  public List<Integer> getDeadline() {
    return deadline;
  }

  public void setDeadline(List<Integer> deadline) {
    this.deadline = deadline;
  }

  public TransactionStatusDTO height(List<Integer> height) {
    this.height = height;
    return this;
  }

  public TransactionStatusDTO addHeightItem(Integer heightItem) {
    if (this.height == null) {
      this.height = new ArrayList<Integer>();
    }
    this.height.add(heightItem);
    return this;
  }

   /**
   * Get height
   * @return height
  **/
  @ApiModelProperty(example = "[lower, higher]", value = "")
  public List<Integer> getHeight() {
    return height;
  }

  public void setHeight(List<Integer> height) {
    this.height = height;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransactionStatusDTO transactionStatusDTO = (TransactionStatusDTO) o;
    return Objects.equals(this.group, transactionStatusDTO.group) &&
        Objects.equals(this.status, transactionStatusDTO.status) &&
        Objects.equals(this.hash, transactionStatusDTO.hash) &&
        Objects.equals(this.deadline, transactionStatusDTO.deadline) &&
        Objects.equals(this.height, transactionStatusDTO.height);
  }

  @Override
  public int hashCode() {
    return Objects.hash(group, status, hash, deadline, height);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionStatusDTO {\n");
    sb.append("    group: ").append(toIndentedString(group)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    hash: ").append(toIndentedString(hash)).append("\n");
    sb.append("    deadline: ").append(toIndentedString(deadline)).append("\n");
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
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

