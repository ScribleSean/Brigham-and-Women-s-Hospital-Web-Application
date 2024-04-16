import { ServiceRequest } from "./ServiceRequest";

export interface giftRequest extends ServiceRequest {
  senderName: string;
  receiverName: string;
  giftType: string;
  deliveryDate: string;
}
