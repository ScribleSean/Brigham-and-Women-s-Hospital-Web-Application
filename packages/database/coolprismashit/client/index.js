Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
} = require("./runtime/binary");

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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
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

const path = require("path");

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
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "C:\\Users\\maddu\\WebstormProjects\\NeonNymphs\\packages\\database\\.prisma\\client",
      fromEnvVar: null,
    },
    config: {
      engineType: "binary",
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "windows",
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
  },
  relativePath: "../../prisma",
  clientVersion: "4.15.0",
  engineVersion: "473ed3124229e22d881cb7addf559799debae1ab",
  datasourceNames: ["db"],
  activeProvider: "postgresql",
  postinstall: false,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
  config.dirname = path.join(process.cwd(), ".prisma/client");
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"Edge":{"dbName":null,"fields":[{"name":"edgeID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"startNodeID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"endNodeID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"startNode","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Node","relationName":"startNode","relationFromFields":["startNodeID"],"relationToFields":["nodeID"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"endNode","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Node","relationName":"endNode","relationFromFields":["endNodeID"],"relationToFields":["nodeID"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Node":{"dbName":null,"fields":[{"name":"nodeID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xcoord","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"ycoord","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"floor","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"building","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"nodeType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"longName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"shortName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"startEdges","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Edge","relationName":"startNode","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"endEdges","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Edge","relationName":"endNode","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ServiceRequest":{"dbName":null,"fields":[{"name":"SRID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"employeeName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"priority","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"location","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"serviceType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"FlowerServiceRequest","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"FlowerServiceRequest","relationName":"FlowerServiceRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"RoomSchedulingRequest","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RoomSchedulingRequest","relationName":"RoomSchedulingRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"MedicalDeviceServiceRequest","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MedicalDeviceServiceRequest","relationName":"MedicalDeviceServiceRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"GiftServiceRequest","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"GiftServiceRequest","relationName":"GiftServiceRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"MedicineDeliveryServiceRequest","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MedicineDeliveryServiceRequest","relationName":"MedicineDeliveryServiceRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"FlowerServiceRequest":{"dbName":null,"fields":[{"name":"ServiceRequest","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ServiceRequest","relationName":"FlowerServiceRequest","relationFromFields":["SRID"],"relationToFields":["SRID"],"isGenerated":false,"isUpdatedAt":false},{"name":"SRID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"flowerType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"receiverName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RoomSchedulingRequest":{"dbName":null,"fields":[{"name":"ServiceRequest","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ServiceRequest","relationName":"RoomSchedulingRequest","relationFromFields":["SRID"],"relationToFields":["SRID"],"isGenerated":false,"isUpdatedAt":false},{"name":"SRID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"startTime","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"endTime","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"MedicalDeviceServiceRequest":{"dbName":null,"fields":[{"name":"ServiceRequest","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ServiceRequest","relationName":"MedicalDeviceServiceRequest","relationFromFields":["SRID"],"relationToFields":["SRID"],"isGenerated":false,"isUpdatedAt":false},{"name":"SRID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"deviceName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"deviceQuantity","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"GiftServiceRequest":{"dbName":null,"fields":[{"name":"ServiceRequest","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ServiceRequest","relationName":"GiftServiceRequest","relationFromFields":["SRID"],"relationToFields":["SRID"],"isGenerated":false,"isUpdatedAt":false},{"name":"SRID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"senderName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"receiverName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"giftType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"deliveryDate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"MedicineDeliveryServiceRequest":{"dbName":null,"fields":[{"name":"ServiceRequest","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ServiceRequest","relationName":"MedicineDeliveryServiceRequest","relationFromFields":["SRID"],"relationToFields":["SRID"],"isGenerated":false,"isUpdatedAt":false},{"name":"SRID","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"medicineType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"dosageType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"dosageAmount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);

const { warnEnvConflicts } = require("./runtime/binary");

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

path.join(__dirname, "query-engine-windows");
path.join(process.cwd(), ".prisma/client/query-engine-windows");
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), ".prisma/client/schema.prisma");
