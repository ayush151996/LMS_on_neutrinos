import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class LeaveRequest {
  @JsonProperty('_id', String, true)
  public _id: string = undefined;

  @JsonProperty('leaveType', String, true)
  public leaveType: string = undefined;

  @JsonProperty('fromDate', Date, true)
  public fromDate: Date = undefined;

  @JsonProperty('toDate', Date, true)
  public toDate: Date = undefined;

  @JsonProperty('duration', Number, true)
  public duration: number = undefined;

  @JsonProperty('leaveStatus', String, true)
  public leaveStatus: string = undefined;

  @JsonProperty('userName', String, true)
  public userName: string = undefined;

  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

  @JsonProperty('managername', String, true)
  public managername: string = undefined;

  @JsonProperty('leaveReason', String, true)
  public leaveReason: string = undefined;

}