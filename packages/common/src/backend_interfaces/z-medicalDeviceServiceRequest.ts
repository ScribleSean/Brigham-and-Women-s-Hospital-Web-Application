import { ServiceRequest } from "./ServiceRequest.ts";

export interface MedicalDeviceServiceRequest extends ServiceRequest {
  deviceName: string;
  quantity: number;
}
