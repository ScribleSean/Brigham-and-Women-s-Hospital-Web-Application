import { ServiceRequest } from "./ServiceRequest.ts";

export interface medDeviceRequest extends ServiceRequest {
  deviceName: string;
  deviceQuantity: string;
}
