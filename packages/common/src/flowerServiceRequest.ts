export type Flower = {
  SRID: number;
  receiverName: string;
  senderName: string;
  priority: string;
  status: string;
  roomNumber: number;
  flowerType: string;
  message: string;
}; // todo: see if we can make a parent class of service request to better reflect the database
