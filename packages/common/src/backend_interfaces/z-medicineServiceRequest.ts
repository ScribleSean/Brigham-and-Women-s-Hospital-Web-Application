import { ServiceRequest } from "./ServiceRequest.ts";

export interface MedicineServiceRequest extends ServiceRequest {
  medicineName: string;
  dosageAmount: number;
  dosageForm: string;
}
