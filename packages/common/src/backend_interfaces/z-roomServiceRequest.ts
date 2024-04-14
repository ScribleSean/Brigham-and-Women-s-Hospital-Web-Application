import { ServiceRequest } from "./ServiceRequest.ts";

export interface RoomServiceRequest extends ServiceRequest {
  startTime: string;
  duration: number;
}
