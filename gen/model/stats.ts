/**
 * Freqtrade API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SellReason } from './sellReason';


export interface Stats { 
    sell_reasons: { [key: string]: SellReason; };
    durations: { [key: string]: string | number; };
}
