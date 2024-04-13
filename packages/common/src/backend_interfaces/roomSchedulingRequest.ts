import { ServiceRequest } from "./ServiceRequest.ts";

export interface Room extends ServiceRequest {
  startTime: string;
  duration: number;
}
