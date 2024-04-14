import { ServiceRequest } from "./ServiceRequest.ts";

export interface MedicalDeviceRequest extends ServiceRequest {
  deviceName: string;
  deviceQuantity: string;
}
