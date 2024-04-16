import { ServiceRequest } from "./ServiceRequest";

export interface Gift extends ServiceRequest {
  senderName: string;
  receiverName: string;
  giftType: string;
  deliveryDate: string;
}
