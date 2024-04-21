Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
} = require("./runtime/index-browser");

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "473ed3124229e22d881cb7addf559799debae1ab",
};

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.EdgeScalarFieldEnum = {
  edgeID: "edgeID",
  startNodeID: "startNodeID",
  endNodeID: "endNodeID",
};

exports.Prisma.NodeScalarFieldEnum = {
  nodeID: "nodeID",
  xcoord: "xcoord",
  ycoord: "ycoord",
  floor: "floor",
  building: "building",
  nodeType: "nodeType",
  longName: "longName",
  shortName: "shortName",
};

exports.Prisma.ServiceRequestScalarFieldEnum = {
  SRID: "SRID",
  employeeName: "employeeName",
  priority: "priority",
  location: "location",
  status: "status",
  serviceType: "serviceType",
  description: "description",
};

exports.Prisma.FlowerServiceRequestScalarFieldEnum = {
  SRID: "SRID",
  flowerType: "flowerType",
  receiverName: "receiverName",
  date: "date",
};

exports.Prisma.RoomSchedulingRequestScalarFieldEnum = {
  SRID: "SRID",
  startTime: "startTime",
  endTime: "endTime",
};

exports.Prisma.MedicalDeviceServiceRequestScalarFieldEnum = {
  SRID: "SRID",
  deviceName: "deviceName",
  deviceQuantity: "deviceQuantity",
};

exports.Prisma.GiftServiceRequestScalarFieldEnum = {
  SRID: "SRID",
  senderName: "senderName",
  receiverName: "receiverName",
  giftType: "giftType",
  deliveryDate: "deliveryDate",
};

exports.Prisma.MedicineDeliveryServiceRequestScalarFieldEnum = {
  SRID: "SRID",
  medicineType: "medicineType",
  dosageType: "dosageType",
  dosageAmount: "dosageAmount",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.ModelName = {
  Edge: "Edge",
  Node: "Node",
  ServiceRequest: "ServiceRequest",
  FlowerServiceRequest: "FlowerServiceRequest",
  RoomSchedulingRequest: "RoomSchedulingRequest",
  MedicalDeviceServiceRequest: "MedicalDeviceServiceRequest",
  GiftServiceRequest: "GiftServiceRequest",
  MedicineDeliveryServiceRequest: "MedicineDeliveryServiceRequest",
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    );
  }
}
exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
