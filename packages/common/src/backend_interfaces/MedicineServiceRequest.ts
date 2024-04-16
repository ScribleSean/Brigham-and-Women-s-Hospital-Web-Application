import { ServiceRequest } from "./ServiceRequest.ts";

export interface Medicine extends ServiceRequest {
  medicineType: string;
  dosageType: string;
  dosageAmount: number;
}
