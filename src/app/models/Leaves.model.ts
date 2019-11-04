import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class Leaves {
  @JsonProperty('sickLeaves', Number, true)
  public sickLeaves: number = undefined;

  @JsonProperty('approvedLeaves', Number, true)
  public approvedLeaves: number = undefined;

  @JsonProperty('annualLeaves', Number, true)
  public annualLeaves: number = undefined;

}