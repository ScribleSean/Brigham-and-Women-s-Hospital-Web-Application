import { ServiceRequest } from "./ServiceRequest.ts";

export interface roomSchedRequest extends ServiceRequest {
  startTime: string;
  endTime: string;
}
