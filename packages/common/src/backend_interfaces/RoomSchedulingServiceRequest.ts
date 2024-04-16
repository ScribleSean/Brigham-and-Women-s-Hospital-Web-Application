import { ServiceRequest } from "./ServiceRequest.ts";

export interface RoomScheduling extends ServiceRequest {
  startTime: string;
  endTime: string;
}
