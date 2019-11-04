import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { Staff } from './Staff.model';
import { Leaves } from './Leaves.model';

@JsonObject
export class Employee {
  @JsonProperty('staff', Staff, true)
  public staff: Staff = new Staff();

  @JsonProperty('leaves', Leaves, true)
  public leaves: Leaves = new Leaves();

}