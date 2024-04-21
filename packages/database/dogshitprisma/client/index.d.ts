
/**
 * Client
**/

import * as runtime from './runtime/binary';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Edge
 * 
 */
export type Edge = {
  edgeID: string
  startNodeID: string
  endNodeID: string
}

/**
 * Model Node
 * 
 */
export type Node = {
  nodeID: string
  xcoord: number
  ycoord: number
  floor: string
  building: string
  nodeType: string
  longName: string
  shortName: string
}

/**
 * Model ServiceRequest
 * 
 */
export type ServiceRequest = {
  SRID: number
  employeeName: string
  priority: string
  location: string
  status: string
  serviceType: string
  description: string
}

/**
 * Model FlowerServiceRequest
 * 
 */
export type FlowerServiceRequest = {
  SRID: number
  flowerType: string
  senderName: string
  receiverName: string
  deliveryDate: string
}

/**
 * Model RoomSchedulingRequest
 * 
 */
export type RoomSchedulingRequest = {
  SRID: number
  startTime: string
  endTime: string
}

/**
 * Model MedicalDeviceServiceRequest
 * 
 */
export type MedicalDeviceServiceRequest = {
  SRID: number
  deviceName: string
  deviceQuantity: string
}

/**
 * Model ReligiousServiceRequest
 * 
 */
export type ReligiousServiceRequest = {
  SRID: number
  religionName: string
  objectName: string
}

/**
 * Model GiftServiceRequest
 * 
 */
export type GiftServiceRequest = {
  SRID: number
  senderName: string
  receiverName: string
  giftType: string
  deliveryDate: string
}

/**
 * Model MedicineDeliveryServiceRequest
 * 
 */
export type MedicineDeliveryServiceRequest = {
  SRID: number
  medicineType: string
  dosageType: string
  dosageAmount: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Edges
 * const edges = await prisma.edge.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Edges
   * const edges = await prisma.edge.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.edge`: Exposes CRUD operations for the **Edge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edges
    * const edges = await prisma.edge.findMany()
    * ```
    */
  get edge(): Prisma.EdgeDelegate<GlobalReject>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<GlobalReject>;

  /**
   * `prisma.serviceRequest`: Exposes CRUD operations for the **ServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequests
    * const serviceRequests = await prisma.serviceRequest.findMany()
    * ```
    */
  get serviceRequest(): Prisma.ServiceRequestDelegate<GlobalReject>;

  /**
   * `prisma.flowerServiceRequest`: Exposes CRUD operations for the **FlowerServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowerServiceRequests
    * const flowerServiceRequests = await prisma.flowerServiceRequest.findMany()
    * ```
    */
  get flowerServiceRequest(): Prisma.FlowerServiceRequestDelegate<GlobalReject>;

  /**
   * `prisma.roomSchedulingRequest`: Exposes CRUD operations for the **RoomSchedulingRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomSchedulingRequests
    * const roomSchedulingRequests = await prisma.roomSchedulingRequest.findMany()
    * ```
    */
  get roomSchedulingRequest(): Prisma.RoomSchedulingRequestDelegate<GlobalReject>;

  /**
   * `prisma.medicalDeviceServiceRequest`: Exposes CRUD operations for the **MedicalDeviceServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalDeviceServiceRequests
    * const medicalDeviceServiceRequests = await prisma.medicalDeviceServiceRequest.findMany()
    * ```
    */
  get medicalDeviceServiceRequest(): Prisma.MedicalDeviceServiceRequestDelegate<GlobalReject>;

  /**
   * `prisma.religiousServiceRequest`: Exposes CRUD operations for the **ReligiousServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReligiousServiceRequests
    * const religiousServiceRequests = await prisma.religiousServiceRequest.findMany()
    * ```
    */
  get religiousServiceRequest(): Prisma.ReligiousServiceRequestDelegate<GlobalReject>;

  /**
   * `prisma.giftServiceRequest`: Exposes CRUD operations for the **GiftServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiftServiceRequests
    * const giftServiceRequests = await prisma.giftServiceRequest.findMany()
    * ```
    */
  get giftServiceRequest(): Prisma.GiftServiceRequestDelegate<GlobalReject>;

  /**
   * `prisma.medicineDeliveryServiceRequest`: Exposes CRUD operations for the **MedicineDeliveryServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineDeliveryServiceRequests
    * const medicineDeliveryServiceRequests = await prisma.medicineDeliveryServiceRequest.findMany()
    * ```
    */
  get medicineDeliveryServiceRequest(): Prisma.MedicineDeliveryServiceRequestDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Edge: 'Edge',
    Node: 'Node',
    ServiceRequest: 'ServiceRequest',
    FlowerServiceRequest: 'FlowerServiceRequest',
    RoomSchedulingRequest: 'RoomSchedulingRequest',
    MedicalDeviceServiceRequest: 'MedicalDeviceServiceRequest',
    ReligiousServiceRequest: 'ReligiousServiceRequest',
    GiftServiceRequest: 'GiftServiceRequest',
    MedicineDeliveryServiceRequest: 'MedicineDeliveryServiceRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NodeCountOutputType
   */


  export type NodeCountOutputType = {
    startEdges: number
    endEdges: number
  }

  export type NodeCountOutputTypeSelect = {
    startEdges?: boolean | NodeCountOutputTypeCountStartEdgesArgs
    endEdges?: boolean | NodeCountOutputTypeCountEndEdgesArgs
  }

  export type NodeCountOutputTypeGetPayload<S extends boolean | null | undefined | NodeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NodeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (NodeCountOutputTypeArgs)
    ? NodeCountOutputType 
    : S extends { select: any } & (NodeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof NodeCountOutputType ? NodeCountOutputType[P] : never
  } 
      : NodeCountOutputType




  // Custom InputTypes

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the NodeCountOutputType
     */
    select?: NodeCountOutputTypeSelect | null
  }


  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountStartEdgesArgs = {
    where?: EdgeWhereInput
  }


  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountEndEdgesArgs = {
    where?: EdgeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Edge
   */


  export type AggregateEdge = {
    _count: EdgeCountAggregateOutputType | null
    _min: EdgeMinAggregateOutputType | null
    _max: EdgeMaxAggregateOutputType | null
  }

  export type EdgeMinAggregateOutputType = {
    edgeID: string | null
    startNodeID: string | null
    endNodeID: string | null
  }

  export type EdgeMaxAggregateOutputType = {
    edgeID: string | null
    startNodeID: string | null
    endNodeID: string | null
  }

  export type EdgeCountAggregateOutputType = {
    edgeID: number
    startNodeID: number
    endNodeID: number
    _all: number
  }


  export type EdgeMinAggregateInputType = {
    edgeID?: true
    startNodeID?: true
    endNodeID?: true
  }

  export type EdgeMaxAggregateInputType = {
    edgeID?: true
    startNodeID?: true
    endNodeID?: true
  }

  export type EdgeCountAggregateInputType = {
    edgeID?: true
    startNodeID?: true
    endNodeID?: true
    _all?: true
  }

  export type EdgeAggregateArgs = {
    /**
     * Filter which Edge to aggregate.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: Enumerable<EdgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Edges
    **/
    _count?: true | EdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EdgeMaxAggregateInputType
  }

  export type GetEdgeAggregateType<T extends EdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdge[P]>
      : GetScalarType<T[P], AggregateEdge[P]>
  }




  export type EdgeGroupByArgs = {
    where?: EdgeWhereInput
    orderBy?: Enumerable<EdgeOrderByWithAggregationInput>
    by: EdgeScalarFieldEnum[]
    having?: EdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EdgeCountAggregateInputType | true
    _min?: EdgeMinAggregateInputType
    _max?: EdgeMaxAggregateInputType
  }


  export type EdgeGroupByOutputType = {
    edgeID: string
    startNodeID: string
    endNodeID: string
    _count: EdgeCountAggregateOutputType | null
    _min: EdgeMinAggregateOutputType | null
    _max: EdgeMaxAggregateOutputType | null
  }

  type GetEdgeGroupByPayload<T extends EdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EdgeGroupByOutputType[P]>
            : GetScalarType<T[P], EdgeGroupByOutputType[P]>
        }
      >
    >


  export type EdgeSelect = {
    edgeID?: boolean
    startNodeID?: boolean
    endNodeID?: boolean
    startNode?: boolean | NodeArgs
    endNode?: boolean | NodeArgs
  }


  export type EdgeInclude = {
    startNode?: boolean | NodeArgs
    endNode?: boolean | NodeArgs
  }

  export type EdgeGetPayload<S extends boolean | null | undefined | EdgeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Edge :
    S extends undefined ? never :
    S extends { include: any } & (EdgeArgs | EdgeFindManyArgs)
    ? Edge  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'startNode' ? NodeGetPayload<S['include'][P]> :
        P extends 'endNode' ? NodeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EdgeArgs | EdgeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'startNode' ? NodeGetPayload<S['select'][P]> :
        P extends 'endNode' ? NodeGetPayload<S['select'][P]> :  P extends keyof Edge ? Edge[P] : never
  } 
      : Edge


  type EdgeCountArgs = 
    Omit<EdgeFindManyArgs, 'select' | 'include'> & {
      select?: EdgeCountAggregateInputType | true
    }

  export interface EdgeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Edge that matches the filter.
     * @param {EdgeFindUniqueArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EdgeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EdgeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Edge'> extends True ? Prisma__EdgeClient<EdgeGetPayload<T>> : Prisma__EdgeClient<EdgeGetPayload<T> | null, null>

    /**
     * Find one Edge that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EdgeFindUniqueOrThrowArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EdgeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EdgeFindUniqueOrThrowArgs>
    ): Prisma__EdgeClient<EdgeGetPayload<T>>

    /**
     * Find the first Edge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindFirstArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EdgeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EdgeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Edge'> extends True ? Prisma__EdgeClient<EdgeGetPayload<T>> : Prisma__EdgeClient<EdgeGetPayload<T> | null, null>

    /**
     * Find the first Edge that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindFirstOrThrowArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EdgeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EdgeFindFirstOrThrowArgs>
    ): Prisma__EdgeClient<EdgeGetPayload<T>>

    /**
     * Find zero or more Edges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edges
     * const edges = await prisma.edge.findMany()
     * 
     * // Get first 10 Edges
     * const edges = await prisma.edge.findMany({ take: 10 })
     * 
     * // Only select the `edgeID`
     * const edgeWithEdgeIDOnly = await prisma.edge.findMany({ select: { edgeID: true } })
     * 
    **/
    findMany<T extends EdgeFindManyArgs>(
      args?: SelectSubset<T, EdgeFindManyArgs>
    ): Prisma.PrismaPromise<Array<EdgeGetPayload<T>>>

    /**
     * Create a Edge.
     * @param {EdgeCreateArgs} args - Arguments to create a Edge.
     * @example
     * // Create one Edge
     * const Edge = await prisma.edge.create({
     *   data: {
     *     // ... data to create a Edge
     *   }
     * })
     * 
    **/
    create<T extends EdgeCreateArgs>(
      args: SelectSubset<T, EdgeCreateArgs>
    ): Prisma__EdgeClient<EdgeGetPayload<T>>

    /**
     * Create many Edges.
     *     @param {EdgeCreateManyArgs} args - Arguments to create many Edges.
     *     @example
     *     // Create many Edges
     *     const edge = await prisma.edge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EdgeCreateManyArgs>(
      args?: SelectSubset<T, EdgeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Edge.
     * @param {EdgeDeleteArgs} args - Arguments to delete one Edge.
     * @example
     * // Delete one Edge
     * const Edge = await prisma.edge.delete({
     *   where: {
     *     // ... filter to delete one Edge
     *   }
     * })
     * 
    **/
    delete<T extends EdgeDeleteArgs>(
      args: SelectSubset<T, EdgeDeleteArgs>
    ): Prisma__EdgeClient<EdgeGetPayload<T>>

    /**
     * Update one Edge.
     * @param {EdgeUpdateArgs} args - Arguments to update one Edge.
     * @example
     * // Update one Edge
     * const edge = await prisma.edge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EdgeUpdateArgs>(
      args: SelectSubset<T, EdgeUpdateArgs>
    ): Prisma__EdgeClient<EdgeGetPayload<T>>

    /**
     * Delete zero or more Edges.
     * @param {EdgeDeleteManyArgs} args - Arguments to filter Edges to delete.
     * @example
     * // Delete a few Edges
     * const { count } = await prisma.edge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EdgeDeleteManyArgs>(
      args?: SelectSubset<T, EdgeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edges
     * const edge = await prisma.edge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EdgeUpdateManyArgs>(
      args: SelectSubset<T, EdgeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Edge.
     * @param {EdgeUpsertArgs} args - Arguments to update or create a Edge.
     * @example
     * // Update or create a Edge
     * const edge = await prisma.edge.upsert({
     *   create: {
     *     // ... data to create a Edge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edge we want to update
     *   }
     * })
    **/
    upsert<T extends EdgeUpsertArgs>(
      args: SelectSubset<T, EdgeUpsertArgs>
    ): Prisma__EdgeClient<EdgeGetPayload<T>>

    /**
     * Count the number of Edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeCountArgs} args - Arguments to filter Edges to count.
     * @example
     * // Count the number of Edges
     * const count = await prisma.edge.count({
     *   where: {
     *     // ... the filter for the Edges we want to count
     *   }
     * })
    **/
    count<T extends EdgeCountArgs>(
      args?: Subset<T, EdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EdgeAggregateArgs>(args: Subset<T, EdgeAggregateArgs>): Prisma.PrismaPromise<GetEdgeAggregateType<T>>

    /**
     * Group by Edge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EdgeGroupByArgs['orderBy'] }
        : { orderBy?: EdgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Edge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EdgeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    startNode<T extends NodeArgs= {}>(args?: Subset<T, NodeArgs>): Prisma__NodeClient<NodeGetPayload<T> | Null>;

    endNode<T extends NodeArgs= {}>(args?: Subset<T, NodeArgs>): Prisma__NodeClient<NodeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Edge base type for findUnique actions
   */
  export type EdgeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * Filter, which Edge to fetch.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge findUnique
   */
  export interface EdgeFindUniqueArgs extends EdgeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Edge findUniqueOrThrow
   */
  export type EdgeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * Filter, which Edge to fetch.
     */
    where: EdgeWhereUniqueInput
  }


  /**
   * Edge base type for findFirst actions
   */
  export type EdgeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * Filter, which Edge to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: Enumerable<EdgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: Enumerable<EdgeScalarFieldEnum>
  }

  /**
   * Edge findFirst
   */
  export interface EdgeFindFirstArgs extends EdgeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Edge findFirstOrThrow
   */
  export type EdgeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * Filter, which Edge to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: Enumerable<EdgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: Enumerable<EdgeScalarFieldEnum>
  }


  /**
   * Edge findMany
   */
  export type EdgeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * Filter, which Edges to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: Enumerable<EdgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    distinct?: Enumerable<EdgeScalarFieldEnum>
  }


  /**
   * Edge create
   */
  export type EdgeCreateArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * The data needed to create a Edge.
     */
    data: XOR<EdgeCreateInput, EdgeUncheckedCreateInput>
  }


  /**
   * Edge createMany
   */
  export type EdgeCreateManyArgs = {
    /**
     * The data used to create many Edges.
     */
    data: Enumerable<EdgeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Edge update
   */
  export type EdgeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * The data needed to update a Edge.
     */
    data: XOR<EdgeUpdateInput, EdgeUncheckedUpdateInput>
    /**
     * Choose, which Edge to update.
     */
    where: EdgeWhereUniqueInput
  }


  /**
   * Edge updateMany
   */
  export type EdgeUpdateManyArgs = {
    /**
     * The data used to update Edges.
     */
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyInput>
    /**
     * Filter which Edges to update
     */
    where?: EdgeWhereInput
  }


  /**
   * Edge upsert
   */
  export type EdgeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * The filter to search for the Edge to update in case it exists.
     */
    where: EdgeWhereUniqueInput
    /**
     * In case the Edge found by the `where` argument doesn't exist, create a new Edge with this data.
     */
    create: XOR<EdgeCreateInput, EdgeUncheckedCreateInput>
    /**
     * In case the Edge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EdgeUpdateInput, EdgeUncheckedUpdateInput>
  }


  /**
   * Edge delete
   */
  export type EdgeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    /**
     * Filter which Edge to delete.
     */
    where: EdgeWhereUniqueInput
  }


  /**
   * Edge deleteMany
   */
  export type EdgeDeleteManyArgs = {
    /**
     * Filter which Edges to delete
     */
    where?: EdgeWhereInput
  }


  /**
   * Edge without action
   */
  export type EdgeArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
  }



  /**
   * Model Node
   */


  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _avg: NodeAvgAggregateOutputType | null
    _sum: NodeSumAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeAvgAggregateOutputType = {
    xcoord: number | null
    ycoord: number | null
  }

  export type NodeSumAggregateOutputType = {
    xcoord: number | null
    ycoord: number | null
  }

  export type NodeMinAggregateOutputType = {
    nodeID: string | null
    xcoord: number | null
    ycoord: number | null
    floor: string | null
    building: string | null
    nodeType: string | null
    longName: string | null
    shortName: string | null
  }

  export type NodeMaxAggregateOutputType = {
    nodeID: string | null
    xcoord: number | null
    ycoord: number | null
    floor: string | null
    building: string | null
    nodeType: string | null
    longName: string | null
    shortName: string | null
  }

  export type NodeCountAggregateOutputType = {
    nodeID: number
    xcoord: number
    ycoord: number
    floor: number
    building: number
    nodeType: number
    longName: number
    shortName: number
    _all: number
  }


  export type NodeAvgAggregateInputType = {
    xcoord?: true
    ycoord?: true
  }

  export type NodeSumAggregateInputType = {
    xcoord?: true
    ycoord?: true
  }

  export type NodeMinAggregateInputType = {
    nodeID?: true
    xcoord?: true
    ycoord?: true
    floor?: true
    building?: true
    nodeType?: true
    longName?: true
    shortName?: true
  }

  export type NodeMaxAggregateInputType = {
    nodeID?: true
    xcoord?: true
    ycoord?: true
    floor?: true
    building?: true
    nodeType?: true
    longName?: true
    shortName?: true
  }

  export type NodeCountAggregateInputType = {
    nodeID?: true
    xcoord?: true
    ycoord?: true
    floor?: true
    building?: true
    nodeType?: true
    longName?: true
    shortName?: true
    _all?: true
  }

  export type NodeAggregateArgs = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: Enumerable<NodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs = {
    where?: NodeWhereInput
    orderBy?: Enumerable<NodeOrderByWithAggregationInput>
    by: NodeScalarFieldEnum[]
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _avg?: NodeAvgAggregateInputType
    _sum?: NodeSumAggregateInputType
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }


  export type NodeGroupByOutputType = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    _count: NodeCountAggregateOutputType | null
    _avg: NodeAvgAggregateOutputType | null
    _sum: NodeSumAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect = {
    nodeID?: boolean
    xcoord?: boolean
    ycoord?: boolean
    floor?: boolean
    building?: boolean
    nodeType?: boolean
    longName?: boolean
    shortName?: boolean
    startEdges?: boolean | Node$startEdgesArgs
    endEdges?: boolean | Node$endEdgesArgs
    _count?: boolean | NodeCountOutputTypeArgs
  }


  export type NodeInclude = {
    startEdges?: boolean | Node$startEdgesArgs
    endEdges?: boolean | Node$endEdgesArgs
    _count?: boolean | NodeCountOutputTypeArgs
  }

  export type NodeGetPayload<S extends boolean | null | undefined | NodeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Node :
    S extends undefined ? never :
    S extends { include: any } & (NodeArgs | NodeFindManyArgs)
    ? Node  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'startEdges' ? Array < EdgeGetPayload<S['include'][P]>>  :
        P extends 'endEdges' ? Array < EdgeGetPayload<S['include'][P]>>  :
        P extends '_count' ? NodeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NodeArgs | NodeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'startEdges' ? Array < EdgeGetPayload<S['select'][P]>>  :
        P extends 'endEdges' ? Array < EdgeGetPayload<S['select'][P]>>  :
        P extends '_count' ? NodeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Node ? Node[P] : never
  } 
      : Node


  type NodeCountArgs = 
    Omit<NodeFindManyArgs, 'select' | 'include'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Node'> extends True ? Prisma__NodeClient<NodeGetPayload<T>> : Prisma__NodeClient<NodeGetPayload<T> | null, null>

    /**
     * Find one Node that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NodeFindUniqueOrThrowArgs>
    ): Prisma__NodeClient<NodeGetPayload<T>>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Node'> extends True ? Prisma__NodeClient<NodeGetPayload<T>> : Prisma__NodeClient<NodeGetPayload<T> | null, null>

    /**
     * Find the first Node that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NodeFindFirstOrThrowArgs>
    ): Prisma__NodeClient<NodeGetPayload<T>>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `nodeID`
     * const nodeWithNodeIDOnly = await prisma.node.findMany({ select: { nodeID: true } })
     * 
    **/
    findMany<T extends NodeFindManyArgs>(
      args?: SelectSubset<T, NodeFindManyArgs>
    ): Prisma.PrismaPromise<Array<NodeGetPayload<T>>>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
    **/
    create<T extends NodeCreateArgs>(
      args: SelectSubset<T, NodeCreateArgs>
    ): Prisma__NodeClient<NodeGetPayload<T>>

    /**
     * Create many Nodes.
     *     @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     *     @example
     *     // Create many Nodes
     *     const node = await prisma.node.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NodeCreateManyArgs>(
      args?: SelectSubset<T, NodeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
    **/
    delete<T extends NodeDeleteArgs>(
      args: SelectSubset<T, NodeDeleteArgs>
    ): Prisma__NodeClient<NodeGetPayload<T>>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NodeUpdateArgs>(
      args: SelectSubset<T, NodeUpdateArgs>
    ): Prisma__NodeClient<NodeGetPayload<T>>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NodeDeleteManyArgs>(
      args?: SelectSubset<T, NodeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NodeUpdateManyArgs>(
      args: SelectSubset<T, NodeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
    **/
    upsert<T extends NodeUpsertArgs>(
      args: SelectSubset<T, NodeUpsertArgs>
    ): Prisma__NodeClient<NodeGetPayload<T>>

    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NodeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    startEdges<T extends Node$startEdgesArgs= {}>(args?: Subset<T, Node$startEdgesArgs>): Prisma.PrismaPromise<Array<EdgeGetPayload<T>>| Null>;

    endEdges<T extends Node$endEdgesArgs= {}>(args?: Subset<T, Node$endEdgesArgs>): Prisma.PrismaPromise<Array<EdgeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Node base type for findUnique actions
   */
  export type NodeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUnique
   */
  export interface NodeFindUniqueArgs extends NodeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }


  /**
   * Node base type for findFirst actions
   */
  export type NodeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: Enumerable<NodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: Enumerable<NodeScalarFieldEnum>
  }

  /**
   * Node findFirst
   */
  export interface NodeFindFirstArgs extends NodeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: Enumerable<NodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: Enumerable<NodeScalarFieldEnum>
  }


  /**
   * Node findMany
   */
  export type NodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: Enumerable<NodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    distinct?: Enumerable<NodeScalarFieldEnum>
  }


  /**
   * Node create
   */
  export type NodeCreateArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }


  /**
   * Node createMany
   */
  export type NodeCreateManyArgs = {
    /**
     * The data used to create many Nodes.
     */
    data: Enumerable<NodeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Node update
   */
  export type NodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }


  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
  }


  /**
   * Node upsert
   */
  export type NodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }


  /**
   * Node delete
   */
  export type NodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }


  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
  }


  /**
   * Node.startEdges
   */
  export type Node$startEdgesArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    where?: EdgeWhereInput
    orderBy?: Enumerable<EdgeOrderByWithRelationInput>
    cursor?: EdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EdgeScalarFieldEnum>
  }


  /**
   * Node.endEdges
   */
  export type Node$endEdgesArgs = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EdgeInclude | null
    where?: EdgeWhereInput
    orderBy?: Enumerable<EdgeOrderByWithRelationInput>
    cursor?: EdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EdgeScalarFieldEnum>
  }


  /**
   * Node without action
   */
  export type NodeArgs = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NodeInclude | null
  }



  /**
   * Model ServiceRequest
   */


  export type AggregateServiceRequest = {
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  export type ServiceRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type ServiceRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type ServiceRequestMinAggregateOutputType = {
    SRID: number | null
    employeeName: string | null
    priority: string | null
    location: string | null
    status: string | null
    serviceType: string | null
    description: string | null
  }

  export type ServiceRequestMaxAggregateOutputType = {
    SRID: number | null
    employeeName: string | null
    priority: string | null
    location: string | null
    status: string | null
    serviceType: string | null
    description: string | null
  }

  export type ServiceRequestCountAggregateOutputType = {
    SRID: number
    employeeName: number
    priority: number
    location: number
    status: number
    serviceType: number
    description: number
    _all: number
  }


  export type ServiceRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type ServiceRequestSumAggregateInputType = {
    SRID?: true
  }

  export type ServiceRequestMinAggregateInputType = {
    SRID?: true
    employeeName?: true
    priority?: true
    location?: true
    status?: true
    serviceType?: true
    description?: true
  }

  export type ServiceRequestMaxAggregateInputType = {
    SRID?: true
    employeeName?: true
    priority?: true
    location?: true
    status?: true
    serviceType?: true
    description?: true
  }

  export type ServiceRequestCountAggregateInputType = {
    SRID?: true
    employeeName?: true
    priority?: true
    location?: true
    status?: true
    serviceType?: true
    description?: true
    _all?: true
  }

  export type ServiceRequestAggregateArgs = {
    /**
     * Filter which ServiceRequest to aggregate.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: Enumerable<ServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequests
    **/
    _count?: true | ServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type GetServiceRequestAggregateType<T extends ServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequest[P]>
      : GetScalarType<T[P], AggregateServiceRequest[P]>
  }




  export type ServiceRequestGroupByArgs = {
    where?: ServiceRequestWhereInput
    orderBy?: Enumerable<ServiceRequestOrderByWithAggregationInput>
    by: ServiceRequestScalarFieldEnum[]
    having?: ServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequestCountAggregateInputType | true
    _avg?: ServiceRequestAvgAggregateInputType
    _sum?: ServiceRequestSumAggregateInputType
    _min?: ServiceRequestMinAggregateInputType
    _max?: ServiceRequestMaxAggregateInputType
  }


  export type ServiceRequestGroupByOutputType = {
    SRID: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  type GetServiceRequestGroupByPayload<T extends ServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequestSelect = {
    SRID?: boolean
    employeeName?: boolean
    priority?: boolean
    location?: boolean
    status?: boolean
    serviceType?: boolean
    description?: boolean
    FlowerServiceRequest?: boolean | ServiceRequest$FlowerServiceRequestArgs
    RoomSchedulingRequest?: boolean | ServiceRequest$RoomSchedulingRequestArgs
    MedicalDeviceServiceRequest?: boolean | ServiceRequest$MedicalDeviceServiceRequestArgs
    GiftServiceRequest?: boolean | ServiceRequest$GiftServiceRequestArgs
    MedicineDeliveryServiceRequest?: boolean | ServiceRequest$MedicineDeliveryServiceRequestArgs
    ReligiousServiceRequest?: boolean | ServiceRequest$ReligiousServiceRequestArgs
  }


  export type ServiceRequestInclude = {
    FlowerServiceRequest?: boolean | ServiceRequest$FlowerServiceRequestArgs
    RoomSchedulingRequest?: boolean | ServiceRequest$RoomSchedulingRequestArgs
    MedicalDeviceServiceRequest?: boolean | ServiceRequest$MedicalDeviceServiceRequestArgs
    GiftServiceRequest?: boolean | ServiceRequest$GiftServiceRequestArgs
    MedicineDeliveryServiceRequest?: boolean | ServiceRequest$MedicineDeliveryServiceRequestArgs
    ReligiousServiceRequest?: boolean | ServiceRequest$ReligiousServiceRequestArgs
  }

  export type ServiceRequestGetPayload<S extends boolean | null | undefined | ServiceRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ServiceRequest :
    S extends undefined ? never :
    S extends { include: any } & (ServiceRequestArgs | ServiceRequestFindManyArgs)
    ? ServiceRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'FlowerServiceRequest' ? FlowerServiceRequestGetPayload<S['include'][P]> | null :
        P extends 'RoomSchedulingRequest' ? RoomSchedulingRequestGetPayload<S['include'][P]> | null :
        P extends 'MedicalDeviceServiceRequest' ? MedicalDeviceServiceRequestGetPayload<S['include'][P]> | null :
        P extends 'GiftServiceRequest' ? GiftServiceRequestGetPayload<S['include'][P]> | null :
        P extends 'MedicineDeliveryServiceRequest' ? MedicineDeliveryServiceRequestGetPayload<S['include'][P]> | null :
        P extends 'ReligiousServiceRequest' ? ReligiousServiceRequestGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ServiceRequestArgs | ServiceRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'FlowerServiceRequest' ? FlowerServiceRequestGetPayload<S['select'][P]> | null :
        P extends 'RoomSchedulingRequest' ? RoomSchedulingRequestGetPayload<S['select'][P]> | null :
        P extends 'MedicalDeviceServiceRequest' ? MedicalDeviceServiceRequestGetPayload<S['select'][P]> | null :
        P extends 'GiftServiceRequest' ? GiftServiceRequestGetPayload<S['select'][P]> | null :
        P extends 'MedicineDeliveryServiceRequest' ? MedicineDeliveryServiceRequestGetPayload<S['select'][P]> | null :
        P extends 'ReligiousServiceRequest' ? ReligiousServiceRequestGetPayload<S['select'][P]> | null :  P extends keyof ServiceRequest ? ServiceRequest[P] : never
  } 
      : ServiceRequest


  type ServiceRequestCountArgs = 
    Omit<ServiceRequestFindManyArgs, 'select' | 'include'> & {
      select?: ServiceRequestCountAggregateInputType | true
    }

  export interface ServiceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ServiceRequest that matches the filter.
     * @param {ServiceRequestFindUniqueArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServiceRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ServiceRequest'> extends True ? Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>> : Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | null, null>

    /**
     * Find one ServiceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServiceRequestFindUniqueOrThrowArgs>
    ): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>>

    /**
     * Find the first ServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServiceRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ServiceRequest'> extends True ? Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>> : Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | null, null>

    /**
     * Find the first ServiceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceRequestFindFirstOrThrowArgs>
    ): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>>

    /**
     * Find zero or more ServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany()
     * 
     * // Get first 10 ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const serviceRequestWithSRIDOnly = await prisma.serviceRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends ServiceRequestFindManyArgs>(
      args?: SelectSubset<T, ServiceRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<ServiceRequestGetPayload<T>>>

    /**
     * Create a ServiceRequest.
     * @param {ServiceRequestCreateArgs} args - Arguments to create a ServiceRequest.
     * @example
     * // Create one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.create({
     *   data: {
     *     // ... data to create a ServiceRequest
     *   }
     * })
     * 
    **/
    create<T extends ServiceRequestCreateArgs>(
      args: SelectSubset<T, ServiceRequestCreateArgs>
    ): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>>

    /**
     * Create many ServiceRequests.
     *     @param {ServiceRequestCreateManyArgs} args - Arguments to create many ServiceRequests.
     *     @example
     *     // Create many ServiceRequests
     *     const serviceRequest = await prisma.serviceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceRequestCreateManyArgs>(
      args?: SelectSubset<T, ServiceRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceRequest.
     * @param {ServiceRequestDeleteArgs} args - Arguments to delete one ServiceRequest.
     * @example
     * // Delete one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequest
     *   }
     * })
     * 
    **/
    delete<T extends ServiceRequestDeleteArgs>(
      args: SelectSubset<T, ServiceRequestDeleteArgs>
    ): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>>

    /**
     * Update one ServiceRequest.
     * @param {ServiceRequestUpdateArgs} args - Arguments to update one ServiceRequest.
     * @example
     * // Update one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceRequestUpdateArgs>(
      args: SelectSubset<T, ServiceRequestUpdateArgs>
    ): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>>

    /**
     * Delete zero or more ServiceRequests.
     * @param {ServiceRequestDeleteManyArgs} args - Arguments to filter ServiceRequests to delete.
     * @example
     * // Delete a few ServiceRequests
     * const { count } = await prisma.serviceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceRequestDeleteManyArgs>(
      args?: SelectSubset<T, ServiceRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceRequestUpdateManyArgs>(
      args: SelectSubset<T, ServiceRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceRequest.
     * @param {ServiceRequestUpsertArgs} args - Arguments to update or create a ServiceRequest.
     * @example
     * // Update or create a ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.upsert({
     *   create: {
     *     // ... data to create a ServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceRequestUpsertArgs>(
      args: SelectSubset<T, ServiceRequestUpsertArgs>
    ): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T>>

    /**
     * Count the number of ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestCountArgs} args - Arguments to filter ServiceRequests to count.
     * @example
     * // Count the number of ServiceRequests
     * const count = await prisma.serviceRequest.count({
     *   where: {
     *     // ... the filter for the ServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequestCountArgs>(
      args?: Subset<T, ServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequestAggregateArgs>(args: Subset<T, ServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestAggregateType<T>>

    /**
     * Group by ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServiceRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    FlowerServiceRequest<T extends ServiceRequest$FlowerServiceRequestArgs= {}>(args?: Subset<T, ServiceRequest$FlowerServiceRequestArgs>): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T> | Null>;

    RoomSchedulingRequest<T extends ServiceRequest$RoomSchedulingRequestArgs= {}>(args?: Subset<T, ServiceRequest$RoomSchedulingRequestArgs>): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T> | Null>;

    MedicalDeviceServiceRequest<T extends ServiceRequest$MedicalDeviceServiceRequestArgs= {}>(args?: Subset<T, ServiceRequest$MedicalDeviceServiceRequestArgs>): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T> | Null>;

    GiftServiceRequest<T extends ServiceRequest$GiftServiceRequestArgs= {}>(args?: Subset<T, ServiceRequest$GiftServiceRequestArgs>): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T> | Null>;

    MedicineDeliveryServiceRequest<T extends ServiceRequest$MedicineDeliveryServiceRequestArgs= {}>(args?: Subset<T, ServiceRequest$MedicineDeliveryServiceRequestArgs>): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T> | Null>;

    ReligiousServiceRequest<T extends ServiceRequest$ReligiousServiceRequestArgs= {}>(args?: Subset<T, ServiceRequest$ReligiousServiceRequestArgs>): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ServiceRequest base type for findUnique actions
   */
  export type ServiceRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findUnique
   */
  export interface ServiceRequestFindUniqueArgs extends ServiceRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ServiceRequest findUniqueOrThrow
   */
  export type ServiceRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }


  /**
   * ServiceRequest base type for findFirst actions
   */
  export type ServiceRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: Enumerable<ServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: Enumerable<ServiceRequestScalarFieldEnum>
  }

  /**
   * ServiceRequest findFirst
   */
  export interface ServiceRequestFindFirstArgs extends ServiceRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ServiceRequest findFirstOrThrow
   */
  export type ServiceRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: Enumerable<ServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: Enumerable<ServiceRequestScalarFieldEnum>
  }


  /**
   * ServiceRequest findMany
   */
  export type ServiceRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * Filter, which ServiceRequests to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: Enumerable<ServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    distinct?: Enumerable<ServiceRequestScalarFieldEnum>
  }


  /**
   * ServiceRequest create
   */
  export type ServiceRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * The data needed to create a ServiceRequest.
     */
    data: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
  }


  /**
   * ServiceRequest createMany
   */
  export type ServiceRequestCreateManyArgs = {
    /**
     * The data used to create many ServiceRequests.
     */
    data: Enumerable<ServiceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ServiceRequest update
   */
  export type ServiceRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * The data needed to update a ServiceRequest.
     */
    data: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequest to update.
     */
    where: ServiceRequestWhereUniqueInput
  }


  /**
   * ServiceRequest updateMany
   */
  export type ServiceRequestUpdateManyArgs = {
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
  }


  /**
   * ServiceRequest upsert
   */
  export type ServiceRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * The filter to search for the ServiceRequest to update in case it exists.
     */
    where: ServiceRequestWhereUniqueInput
    /**
     * In case the ServiceRequest found by the `where` argument doesn't exist, create a new ServiceRequest with this data.
     */
    create: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
    /**
     * In case the ServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
  }


  /**
   * ServiceRequest delete
   */
  export type ServiceRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
    /**
     * Filter which ServiceRequest to delete.
     */
    where: ServiceRequestWhereUniqueInput
  }


  /**
   * ServiceRequest deleteMany
   */
  export type ServiceRequestDeleteManyArgs = {
    /**
     * Filter which ServiceRequests to delete
     */
    where?: ServiceRequestWhereInput
  }


  /**
   * ServiceRequest.FlowerServiceRequest
   */
  export type ServiceRequest$FlowerServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    where?: FlowerServiceRequestWhereInput
  }


  /**
   * ServiceRequest.RoomSchedulingRequest
   */
  export type ServiceRequest$RoomSchedulingRequestArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    where?: RoomSchedulingRequestWhereInput
  }


  /**
   * ServiceRequest.MedicalDeviceServiceRequest
   */
  export type ServiceRequest$MedicalDeviceServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    where?: MedicalDeviceServiceRequestWhereInput
  }


  /**
   * ServiceRequest.GiftServiceRequest
   */
  export type ServiceRequest$GiftServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    where?: GiftServiceRequestWhereInput
  }


  /**
   * ServiceRequest.MedicineDeliveryServiceRequest
   */
  export type ServiceRequest$MedicineDeliveryServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    where?: MedicineDeliveryServiceRequestWhereInput
  }


  /**
   * ServiceRequest.ReligiousServiceRequest
   */
  export type ServiceRequest$ReligiousServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    where?: ReligiousServiceRequestWhereInput
  }


  /**
   * ServiceRequest without action
   */
  export type ServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequestInclude | null
  }



  /**
   * Model FlowerServiceRequest
   */


  export type AggregateFlowerServiceRequest = {
    _count: FlowerServiceRequestCountAggregateOutputType | null
    _avg: FlowerServiceRequestAvgAggregateOutputType | null
    _sum: FlowerServiceRequestSumAggregateOutputType | null
    _min: FlowerServiceRequestMinAggregateOutputType | null
    _max: FlowerServiceRequestMaxAggregateOutputType | null
  }

  export type FlowerServiceRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type FlowerServiceRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type FlowerServiceRequestMinAggregateOutputType = {
    SRID: number | null
    flowerType: string | null
    senderName: string | null
    receiverName: string | null
    deliveryDate: string | null
  }

  export type FlowerServiceRequestMaxAggregateOutputType = {
    SRID: number | null
    flowerType: string | null
    senderName: string | null
    receiverName: string | null
    deliveryDate: string | null
  }

  export type FlowerServiceRequestCountAggregateOutputType = {
    SRID: number
    flowerType: number
    senderName: number
    receiverName: number
    deliveryDate: number
    _all: number
  }


  export type FlowerServiceRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type FlowerServiceRequestSumAggregateInputType = {
    SRID?: true
  }

  export type FlowerServiceRequestMinAggregateInputType = {
    SRID?: true
    flowerType?: true
    senderName?: true
    receiverName?: true
    deliveryDate?: true
  }

  export type FlowerServiceRequestMaxAggregateInputType = {
    SRID?: true
    flowerType?: true
    senderName?: true
    receiverName?: true
    deliveryDate?: true
  }

  export type FlowerServiceRequestCountAggregateInputType = {
    SRID?: true
    flowerType?: true
    senderName?: true
    receiverName?: true
    deliveryDate?: true
    _all?: true
  }

  export type FlowerServiceRequestAggregateArgs = {
    /**
     * Filter which FlowerServiceRequest to aggregate.
     */
    where?: FlowerServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowerServiceRequests to fetch.
     */
    orderBy?: Enumerable<FlowerServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowerServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowerServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowerServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowerServiceRequests
    **/
    _count?: true | FlowerServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowerServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowerServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowerServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowerServiceRequestMaxAggregateInputType
  }

  export type GetFlowerServiceRequestAggregateType<T extends FlowerServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowerServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowerServiceRequest[P]>
      : GetScalarType<T[P], AggregateFlowerServiceRequest[P]>
  }




  export type FlowerServiceRequestGroupByArgs = {
    where?: FlowerServiceRequestWhereInput
    orderBy?: Enumerable<FlowerServiceRequestOrderByWithAggregationInput>
    by: FlowerServiceRequestScalarFieldEnum[]
    having?: FlowerServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowerServiceRequestCountAggregateInputType | true
    _avg?: FlowerServiceRequestAvgAggregateInputType
    _sum?: FlowerServiceRequestSumAggregateInputType
    _min?: FlowerServiceRequestMinAggregateInputType
    _max?: FlowerServiceRequestMaxAggregateInputType
  }


  export type FlowerServiceRequestGroupByOutputType = {
    SRID: number
    flowerType: string
    senderName: string
    receiverName: string
    deliveryDate: string
    _count: FlowerServiceRequestCountAggregateOutputType | null
    _avg: FlowerServiceRequestAvgAggregateOutputType | null
    _sum: FlowerServiceRequestSumAggregateOutputType | null
    _min: FlowerServiceRequestMinAggregateOutputType | null
    _max: FlowerServiceRequestMaxAggregateOutputType | null
  }

  type GetFlowerServiceRequestGroupByPayload<T extends FlowerServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowerServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowerServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowerServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FlowerServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type FlowerServiceRequestSelect = {
    SRID?: boolean
    flowerType?: boolean
    senderName?: boolean
    receiverName?: boolean
    deliveryDate?: boolean
    ServiceRequest?: boolean | ServiceRequestArgs
  }


  export type FlowerServiceRequestInclude = {
    ServiceRequest?: boolean | ServiceRequestArgs
  }

  export type FlowerServiceRequestGetPayload<S extends boolean | null | undefined | FlowerServiceRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowerServiceRequest :
    S extends undefined ? never :
    S extends { include: any } & (FlowerServiceRequestArgs | FlowerServiceRequestFindManyArgs)
    ? FlowerServiceRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowerServiceRequestArgs | FlowerServiceRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['select'][P]> :  P extends keyof FlowerServiceRequest ? FlowerServiceRequest[P] : never
  } 
      : FlowerServiceRequest


  type FlowerServiceRequestCountArgs = 
    Omit<FlowerServiceRequestFindManyArgs, 'select' | 'include'> & {
      select?: FlowerServiceRequestCountAggregateInputType | true
    }

  export interface FlowerServiceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FlowerServiceRequest that matches the filter.
     * @param {FlowerServiceRequestFindUniqueArgs} args - Arguments to find a FlowerServiceRequest
     * @example
     * // Get one FlowerServiceRequest
     * const flowerServiceRequest = await prisma.flowerServiceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowerServiceRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowerServiceRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FlowerServiceRequest'> extends True ? Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>> : Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T> | null, null>

    /**
     * Find one FlowerServiceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowerServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a FlowerServiceRequest
     * @example
     * // Get one FlowerServiceRequest
     * const flowerServiceRequest = await prisma.flowerServiceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowerServiceRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowerServiceRequestFindUniqueOrThrowArgs>
    ): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>>

    /**
     * Find the first FlowerServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestFindFirstArgs} args - Arguments to find a FlowerServiceRequest
     * @example
     * // Get one FlowerServiceRequest
     * const flowerServiceRequest = await prisma.flowerServiceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowerServiceRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowerServiceRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FlowerServiceRequest'> extends True ? Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>> : Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T> | null, null>

    /**
     * Find the first FlowerServiceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestFindFirstOrThrowArgs} args - Arguments to find a FlowerServiceRequest
     * @example
     * // Get one FlowerServiceRequest
     * const flowerServiceRequest = await prisma.flowerServiceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowerServiceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowerServiceRequestFindFirstOrThrowArgs>
    ): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>>

    /**
     * Find zero or more FlowerServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowerServiceRequests
     * const flowerServiceRequests = await prisma.flowerServiceRequest.findMany()
     * 
     * // Get first 10 FlowerServiceRequests
     * const flowerServiceRequests = await prisma.flowerServiceRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const flowerServiceRequestWithSRIDOnly = await prisma.flowerServiceRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends FlowerServiceRequestFindManyArgs>(
      args?: SelectSubset<T, FlowerServiceRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowerServiceRequestGetPayload<T>>>

    /**
     * Create a FlowerServiceRequest.
     * @param {FlowerServiceRequestCreateArgs} args - Arguments to create a FlowerServiceRequest.
     * @example
     * // Create one FlowerServiceRequest
     * const FlowerServiceRequest = await prisma.flowerServiceRequest.create({
     *   data: {
     *     // ... data to create a FlowerServiceRequest
     *   }
     * })
     * 
    **/
    create<T extends FlowerServiceRequestCreateArgs>(
      args: SelectSubset<T, FlowerServiceRequestCreateArgs>
    ): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>>

    /**
     * Create many FlowerServiceRequests.
     *     @param {FlowerServiceRequestCreateManyArgs} args - Arguments to create many FlowerServiceRequests.
     *     @example
     *     // Create many FlowerServiceRequests
     *     const flowerServiceRequest = await prisma.flowerServiceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowerServiceRequestCreateManyArgs>(
      args?: SelectSubset<T, FlowerServiceRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowerServiceRequest.
     * @param {FlowerServiceRequestDeleteArgs} args - Arguments to delete one FlowerServiceRequest.
     * @example
     * // Delete one FlowerServiceRequest
     * const FlowerServiceRequest = await prisma.flowerServiceRequest.delete({
     *   where: {
     *     // ... filter to delete one FlowerServiceRequest
     *   }
     * })
     * 
    **/
    delete<T extends FlowerServiceRequestDeleteArgs>(
      args: SelectSubset<T, FlowerServiceRequestDeleteArgs>
    ): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>>

    /**
     * Update one FlowerServiceRequest.
     * @param {FlowerServiceRequestUpdateArgs} args - Arguments to update one FlowerServiceRequest.
     * @example
     * // Update one FlowerServiceRequest
     * const flowerServiceRequest = await prisma.flowerServiceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowerServiceRequestUpdateArgs>(
      args: SelectSubset<T, FlowerServiceRequestUpdateArgs>
    ): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>>

    /**
     * Delete zero or more FlowerServiceRequests.
     * @param {FlowerServiceRequestDeleteManyArgs} args - Arguments to filter FlowerServiceRequests to delete.
     * @example
     * // Delete a few FlowerServiceRequests
     * const { count } = await prisma.flowerServiceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowerServiceRequestDeleteManyArgs>(
      args?: SelectSubset<T, FlowerServiceRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowerServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowerServiceRequests
     * const flowerServiceRequest = await prisma.flowerServiceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowerServiceRequestUpdateManyArgs>(
      args: SelectSubset<T, FlowerServiceRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowerServiceRequest.
     * @param {FlowerServiceRequestUpsertArgs} args - Arguments to update or create a FlowerServiceRequest.
     * @example
     * // Update or create a FlowerServiceRequest
     * const flowerServiceRequest = await prisma.flowerServiceRequest.upsert({
     *   create: {
     *     // ... data to create a FlowerServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowerServiceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends FlowerServiceRequestUpsertArgs>(
      args: SelectSubset<T, FlowerServiceRequestUpsertArgs>
    ): Prisma__FlowerServiceRequestClient<FlowerServiceRequestGetPayload<T>>

    /**
     * Count the number of FlowerServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestCountArgs} args - Arguments to filter FlowerServiceRequests to count.
     * @example
     * // Count the number of FlowerServiceRequests
     * const count = await prisma.flowerServiceRequest.count({
     *   where: {
     *     // ... the filter for the FlowerServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends FlowerServiceRequestCountArgs>(
      args?: Subset<T, FlowerServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowerServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowerServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowerServiceRequestAggregateArgs>(args: Subset<T, FlowerServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetFlowerServiceRequestAggregateType<T>>

    /**
     * Group by FlowerServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowerServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowerServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowerServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: FlowerServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowerServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowerServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowerServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowerServiceRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ServiceRequest<T extends ServiceRequestArgs= {}>(args?: Subset<T, ServiceRequestArgs>): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FlowerServiceRequest base type for findUnique actions
   */
  export type FlowerServiceRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * Filter, which FlowerServiceRequest to fetch.
     */
    where: FlowerServiceRequestWhereUniqueInput
  }

  /**
   * FlowerServiceRequest findUnique
   */
  export interface FlowerServiceRequestFindUniqueArgs extends FlowerServiceRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowerServiceRequest findUniqueOrThrow
   */
  export type FlowerServiceRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * Filter, which FlowerServiceRequest to fetch.
     */
    where: FlowerServiceRequestWhereUniqueInput
  }


  /**
   * FlowerServiceRequest base type for findFirst actions
   */
  export type FlowerServiceRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * Filter, which FlowerServiceRequest to fetch.
     */
    where?: FlowerServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowerServiceRequests to fetch.
     */
    orderBy?: Enumerable<FlowerServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowerServiceRequests.
     */
    cursor?: FlowerServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowerServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowerServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowerServiceRequests.
     */
    distinct?: Enumerable<FlowerServiceRequestScalarFieldEnum>
  }

  /**
   * FlowerServiceRequest findFirst
   */
  export interface FlowerServiceRequestFindFirstArgs extends FlowerServiceRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowerServiceRequest findFirstOrThrow
   */
  export type FlowerServiceRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * Filter, which FlowerServiceRequest to fetch.
     */
    where?: FlowerServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowerServiceRequests to fetch.
     */
    orderBy?: Enumerable<FlowerServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowerServiceRequests.
     */
    cursor?: FlowerServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowerServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowerServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowerServiceRequests.
     */
    distinct?: Enumerable<FlowerServiceRequestScalarFieldEnum>
  }


  /**
   * FlowerServiceRequest findMany
   */
  export type FlowerServiceRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * Filter, which FlowerServiceRequests to fetch.
     */
    where?: FlowerServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowerServiceRequests to fetch.
     */
    orderBy?: Enumerable<FlowerServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowerServiceRequests.
     */
    cursor?: FlowerServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowerServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowerServiceRequests.
     */
    skip?: number
    distinct?: Enumerable<FlowerServiceRequestScalarFieldEnum>
  }


  /**
   * FlowerServiceRequest create
   */
  export type FlowerServiceRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * The data needed to create a FlowerServiceRequest.
     */
    data: XOR<FlowerServiceRequestCreateInput, FlowerServiceRequestUncheckedCreateInput>
  }


  /**
   * FlowerServiceRequest createMany
   */
  export type FlowerServiceRequestCreateManyArgs = {
    /**
     * The data used to create many FlowerServiceRequests.
     */
    data: Enumerable<FlowerServiceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FlowerServiceRequest update
   */
  export type FlowerServiceRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * The data needed to update a FlowerServiceRequest.
     */
    data: XOR<FlowerServiceRequestUpdateInput, FlowerServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which FlowerServiceRequest to update.
     */
    where: FlowerServiceRequestWhereUniqueInput
  }


  /**
   * FlowerServiceRequest updateMany
   */
  export type FlowerServiceRequestUpdateManyArgs = {
    /**
     * The data used to update FlowerServiceRequests.
     */
    data: XOR<FlowerServiceRequestUpdateManyMutationInput, FlowerServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which FlowerServiceRequests to update
     */
    where?: FlowerServiceRequestWhereInput
  }


  /**
   * FlowerServiceRequest upsert
   */
  export type FlowerServiceRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * The filter to search for the FlowerServiceRequest to update in case it exists.
     */
    where: FlowerServiceRequestWhereUniqueInput
    /**
     * In case the FlowerServiceRequest found by the `where` argument doesn't exist, create a new FlowerServiceRequest with this data.
     */
    create: XOR<FlowerServiceRequestCreateInput, FlowerServiceRequestUncheckedCreateInput>
    /**
     * In case the FlowerServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowerServiceRequestUpdateInput, FlowerServiceRequestUncheckedUpdateInput>
  }


  /**
   * FlowerServiceRequest delete
   */
  export type FlowerServiceRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
    /**
     * Filter which FlowerServiceRequest to delete.
     */
    where: FlowerServiceRequestWhereUniqueInput
  }


  /**
   * FlowerServiceRequest deleteMany
   */
  export type FlowerServiceRequestDeleteManyArgs = {
    /**
     * Filter which FlowerServiceRequests to delete
     */
    where?: FlowerServiceRequestWhereInput
  }


  /**
   * FlowerServiceRequest without action
   */
  export type FlowerServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the FlowerServiceRequest
     */
    select?: FlowerServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowerServiceRequestInclude | null
  }



  /**
   * Model RoomSchedulingRequest
   */


  export type AggregateRoomSchedulingRequest = {
    _count: RoomSchedulingRequestCountAggregateOutputType | null
    _avg: RoomSchedulingRequestAvgAggregateOutputType | null
    _sum: RoomSchedulingRequestSumAggregateOutputType | null
    _min: RoomSchedulingRequestMinAggregateOutputType | null
    _max: RoomSchedulingRequestMaxAggregateOutputType | null
  }

  export type RoomSchedulingRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type RoomSchedulingRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type RoomSchedulingRequestMinAggregateOutputType = {
    SRID: number | null
    startTime: string | null
    endTime: string | null
  }

  export type RoomSchedulingRequestMaxAggregateOutputType = {
    SRID: number | null
    startTime: string | null
    endTime: string | null
  }

  export type RoomSchedulingRequestCountAggregateOutputType = {
    SRID: number
    startTime: number
    endTime: number
    _all: number
  }


  export type RoomSchedulingRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type RoomSchedulingRequestSumAggregateInputType = {
    SRID?: true
  }

  export type RoomSchedulingRequestMinAggregateInputType = {
    SRID?: true
    startTime?: true
    endTime?: true
  }

  export type RoomSchedulingRequestMaxAggregateInputType = {
    SRID?: true
    startTime?: true
    endTime?: true
  }

  export type RoomSchedulingRequestCountAggregateInputType = {
    SRID?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type RoomSchedulingRequestAggregateArgs = {
    /**
     * Filter which RoomSchedulingRequest to aggregate.
     */
    where?: RoomSchedulingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomSchedulingRequests to fetch.
     */
    orderBy?: Enumerable<RoomSchedulingRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomSchedulingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomSchedulingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomSchedulingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomSchedulingRequests
    **/
    _count?: true | RoomSchedulingRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomSchedulingRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSchedulingRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomSchedulingRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomSchedulingRequestMaxAggregateInputType
  }

  export type GetRoomSchedulingRequestAggregateType<T extends RoomSchedulingRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomSchedulingRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomSchedulingRequest[P]>
      : GetScalarType<T[P], AggregateRoomSchedulingRequest[P]>
  }




  export type RoomSchedulingRequestGroupByArgs = {
    where?: RoomSchedulingRequestWhereInput
    orderBy?: Enumerable<RoomSchedulingRequestOrderByWithAggregationInput>
    by: RoomSchedulingRequestScalarFieldEnum[]
    having?: RoomSchedulingRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomSchedulingRequestCountAggregateInputType | true
    _avg?: RoomSchedulingRequestAvgAggregateInputType
    _sum?: RoomSchedulingRequestSumAggregateInputType
    _min?: RoomSchedulingRequestMinAggregateInputType
    _max?: RoomSchedulingRequestMaxAggregateInputType
  }


  export type RoomSchedulingRequestGroupByOutputType = {
    SRID: number
    startTime: string
    endTime: string
    _count: RoomSchedulingRequestCountAggregateOutputType | null
    _avg: RoomSchedulingRequestAvgAggregateOutputType | null
    _sum: RoomSchedulingRequestSumAggregateOutputType | null
    _min: RoomSchedulingRequestMinAggregateOutputType | null
    _max: RoomSchedulingRequestMaxAggregateOutputType | null
  }

  type GetRoomSchedulingRequestGroupByPayload<T extends RoomSchedulingRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomSchedulingRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomSchedulingRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomSchedulingRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RoomSchedulingRequestGroupByOutputType[P]>
        }
      >
    >


  export type RoomSchedulingRequestSelect = {
    SRID?: boolean
    startTime?: boolean
    endTime?: boolean
    ServiceRequest?: boolean | ServiceRequestArgs
  }


  export type RoomSchedulingRequestInclude = {
    ServiceRequest?: boolean | ServiceRequestArgs
  }

  export type RoomSchedulingRequestGetPayload<S extends boolean | null | undefined | RoomSchedulingRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomSchedulingRequest :
    S extends undefined ? never :
    S extends { include: any } & (RoomSchedulingRequestArgs | RoomSchedulingRequestFindManyArgs)
    ? RoomSchedulingRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomSchedulingRequestArgs | RoomSchedulingRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['select'][P]> :  P extends keyof RoomSchedulingRequest ? RoomSchedulingRequest[P] : never
  } 
      : RoomSchedulingRequest


  type RoomSchedulingRequestCountArgs = 
    Omit<RoomSchedulingRequestFindManyArgs, 'select' | 'include'> & {
      select?: RoomSchedulingRequestCountAggregateInputType | true
    }

  export interface RoomSchedulingRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoomSchedulingRequest that matches the filter.
     * @param {RoomSchedulingRequestFindUniqueArgs} args - Arguments to find a RoomSchedulingRequest
     * @example
     * // Get one RoomSchedulingRequest
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomSchedulingRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomSchedulingRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoomSchedulingRequest'> extends True ? Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>> : Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T> | null, null>

    /**
     * Find one RoomSchedulingRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomSchedulingRequestFindUniqueOrThrowArgs} args - Arguments to find a RoomSchedulingRequest
     * @example
     * // Get one RoomSchedulingRequest
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomSchedulingRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomSchedulingRequestFindUniqueOrThrowArgs>
    ): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>>

    /**
     * Find the first RoomSchedulingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestFindFirstArgs} args - Arguments to find a RoomSchedulingRequest
     * @example
     * // Get one RoomSchedulingRequest
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomSchedulingRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomSchedulingRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoomSchedulingRequest'> extends True ? Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>> : Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T> | null, null>

    /**
     * Find the first RoomSchedulingRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestFindFirstOrThrowArgs} args - Arguments to find a RoomSchedulingRequest
     * @example
     * // Get one RoomSchedulingRequest
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomSchedulingRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomSchedulingRequestFindFirstOrThrowArgs>
    ): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>>

    /**
     * Find zero or more RoomSchedulingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomSchedulingRequests
     * const roomSchedulingRequests = await prisma.roomSchedulingRequest.findMany()
     * 
     * // Get first 10 RoomSchedulingRequests
     * const roomSchedulingRequests = await prisma.roomSchedulingRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const roomSchedulingRequestWithSRIDOnly = await prisma.roomSchedulingRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends RoomSchedulingRequestFindManyArgs>(
      args?: SelectSubset<T, RoomSchedulingRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoomSchedulingRequestGetPayload<T>>>

    /**
     * Create a RoomSchedulingRequest.
     * @param {RoomSchedulingRequestCreateArgs} args - Arguments to create a RoomSchedulingRequest.
     * @example
     * // Create one RoomSchedulingRequest
     * const RoomSchedulingRequest = await prisma.roomSchedulingRequest.create({
     *   data: {
     *     // ... data to create a RoomSchedulingRequest
     *   }
     * })
     * 
    **/
    create<T extends RoomSchedulingRequestCreateArgs>(
      args: SelectSubset<T, RoomSchedulingRequestCreateArgs>
    ): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>>

    /**
     * Create many RoomSchedulingRequests.
     *     @param {RoomSchedulingRequestCreateManyArgs} args - Arguments to create many RoomSchedulingRequests.
     *     @example
     *     // Create many RoomSchedulingRequests
     *     const roomSchedulingRequest = await prisma.roomSchedulingRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomSchedulingRequestCreateManyArgs>(
      args?: SelectSubset<T, RoomSchedulingRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomSchedulingRequest.
     * @param {RoomSchedulingRequestDeleteArgs} args - Arguments to delete one RoomSchedulingRequest.
     * @example
     * // Delete one RoomSchedulingRequest
     * const RoomSchedulingRequest = await prisma.roomSchedulingRequest.delete({
     *   where: {
     *     // ... filter to delete one RoomSchedulingRequest
     *   }
     * })
     * 
    **/
    delete<T extends RoomSchedulingRequestDeleteArgs>(
      args: SelectSubset<T, RoomSchedulingRequestDeleteArgs>
    ): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>>

    /**
     * Update one RoomSchedulingRequest.
     * @param {RoomSchedulingRequestUpdateArgs} args - Arguments to update one RoomSchedulingRequest.
     * @example
     * // Update one RoomSchedulingRequest
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomSchedulingRequestUpdateArgs>(
      args: SelectSubset<T, RoomSchedulingRequestUpdateArgs>
    ): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>>

    /**
     * Delete zero or more RoomSchedulingRequests.
     * @param {RoomSchedulingRequestDeleteManyArgs} args - Arguments to filter RoomSchedulingRequests to delete.
     * @example
     * // Delete a few RoomSchedulingRequests
     * const { count } = await prisma.roomSchedulingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomSchedulingRequestDeleteManyArgs>(
      args?: SelectSubset<T, RoomSchedulingRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomSchedulingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomSchedulingRequests
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomSchedulingRequestUpdateManyArgs>(
      args: SelectSubset<T, RoomSchedulingRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomSchedulingRequest.
     * @param {RoomSchedulingRequestUpsertArgs} args - Arguments to update or create a RoomSchedulingRequest.
     * @example
     * // Update or create a RoomSchedulingRequest
     * const roomSchedulingRequest = await prisma.roomSchedulingRequest.upsert({
     *   create: {
     *     // ... data to create a RoomSchedulingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomSchedulingRequest we want to update
     *   }
     * })
    **/
    upsert<T extends RoomSchedulingRequestUpsertArgs>(
      args: SelectSubset<T, RoomSchedulingRequestUpsertArgs>
    ): Prisma__RoomSchedulingRequestClient<RoomSchedulingRequestGetPayload<T>>

    /**
     * Count the number of RoomSchedulingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestCountArgs} args - Arguments to filter RoomSchedulingRequests to count.
     * @example
     * // Count the number of RoomSchedulingRequests
     * const count = await prisma.roomSchedulingRequest.count({
     *   where: {
     *     // ... the filter for the RoomSchedulingRequests we want to count
     *   }
     * })
    **/
    count<T extends RoomSchedulingRequestCountArgs>(
      args?: Subset<T, RoomSchedulingRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomSchedulingRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomSchedulingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomSchedulingRequestAggregateArgs>(args: Subset<T, RoomSchedulingRequestAggregateArgs>): Prisma.PrismaPromise<GetRoomSchedulingRequestAggregateType<T>>

    /**
     * Group by RoomSchedulingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomSchedulingRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomSchedulingRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomSchedulingRequestGroupByArgs['orderBy'] }
        : { orderBy?: RoomSchedulingRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomSchedulingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomSchedulingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomSchedulingRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomSchedulingRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ServiceRequest<T extends ServiceRequestArgs= {}>(args?: Subset<T, ServiceRequestArgs>): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RoomSchedulingRequest base type for findUnique actions
   */
  export type RoomSchedulingRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * Filter, which RoomSchedulingRequest to fetch.
     */
    where: RoomSchedulingRequestWhereUniqueInput
  }

  /**
   * RoomSchedulingRequest findUnique
   */
  export interface RoomSchedulingRequestFindUniqueArgs extends RoomSchedulingRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoomSchedulingRequest findUniqueOrThrow
   */
  export type RoomSchedulingRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * Filter, which RoomSchedulingRequest to fetch.
     */
    where: RoomSchedulingRequestWhereUniqueInput
  }


  /**
   * RoomSchedulingRequest base type for findFirst actions
   */
  export type RoomSchedulingRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * Filter, which RoomSchedulingRequest to fetch.
     */
    where?: RoomSchedulingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomSchedulingRequests to fetch.
     */
    orderBy?: Enumerable<RoomSchedulingRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomSchedulingRequests.
     */
    cursor?: RoomSchedulingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomSchedulingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomSchedulingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomSchedulingRequests.
     */
    distinct?: Enumerable<RoomSchedulingRequestScalarFieldEnum>
  }

  /**
   * RoomSchedulingRequest findFirst
   */
  export interface RoomSchedulingRequestFindFirstArgs extends RoomSchedulingRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoomSchedulingRequest findFirstOrThrow
   */
  export type RoomSchedulingRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * Filter, which RoomSchedulingRequest to fetch.
     */
    where?: RoomSchedulingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomSchedulingRequests to fetch.
     */
    orderBy?: Enumerable<RoomSchedulingRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomSchedulingRequests.
     */
    cursor?: RoomSchedulingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomSchedulingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomSchedulingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomSchedulingRequests.
     */
    distinct?: Enumerable<RoomSchedulingRequestScalarFieldEnum>
  }


  /**
   * RoomSchedulingRequest findMany
   */
  export type RoomSchedulingRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * Filter, which RoomSchedulingRequests to fetch.
     */
    where?: RoomSchedulingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomSchedulingRequests to fetch.
     */
    orderBy?: Enumerable<RoomSchedulingRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomSchedulingRequests.
     */
    cursor?: RoomSchedulingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomSchedulingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomSchedulingRequests.
     */
    skip?: number
    distinct?: Enumerable<RoomSchedulingRequestScalarFieldEnum>
  }


  /**
   * RoomSchedulingRequest create
   */
  export type RoomSchedulingRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * The data needed to create a RoomSchedulingRequest.
     */
    data: XOR<RoomSchedulingRequestCreateInput, RoomSchedulingRequestUncheckedCreateInput>
  }


  /**
   * RoomSchedulingRequest createMany
   */
  export type RoomSchedulingRequestCreateManyArgs = {
    /**
     * The data used to create many RoomSchedulingRequests.
     */
    data: Enumerable<RoomSchedulingRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoomSchedulingRequest update
   */
  export type RoomSchedulingRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * The data needed to update a RoomSchedulingRequest.
     */
    data: XOR<RoomSchedulingRequestUpdateInput, RoomSchedulingRequestUncheckedUpdateInput>
    /**
     * Choose, which RoomSchedulingRequest to update.
     */
    where: RoomSchedulingRequestWhereUniqueInput
  }


  /**
   * RoomSchedulingRequest updateMany
   */
  export type RoomSchedulingRequestUpdateManyArgs = {
    /**
     * The data used to update RoomSchedulingRequests.
     */
    data: XOR<RoomSchedulingRequestUpdateManyMutationInput, RoomSchedulingRequestUncheckedUpdateManyInput>
    /**
     * Filter which RoomSchedulingRequests to update
     */
    where?: RoomSchedulingRequestWhereInput
  }


  /**
   * RoomSchedulingRequest upsert
   */
  export type RoomSchedulingRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * The filter to search for the RoomSchedulingRequest to update in case it exists.
     */
    where: RoomSchedulingRequestWhereUniqueInput
    /**
     * In case the RoomSchedulingRequest found by the `where` argument doesn't exist, create a new RoomSchedulingRequest with this data.
     */
    create: XOR<RoomSchedulingRequestCreateInput, RoomSchedulingRequestUncheckedCreateInput>
    /**
     * In case the RoomSchedulingRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomSchedulingRequestUpdateInput, RoomSchedulingRequestUncheckedUpdateInput>
  }


  /**
   * RoomSchedulingRequest delete
   */
  export type RoomSchedulingRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
    /**
     * Filter which RoomSchedulingRequest to delete.
     */
    where: RoomSchedulingRequestWhereUniqueInput
  }


  /**
   * RoomSchedulingRequest deleteMany
   */
  export type RoomSchedulingRequestDeleteManyArgs = {
    /**
     * Filter which RoomSchedulingRequests to delete
     */
    where?: RoomSchedulingRequestWhereInput
  }


  /**
   * RoomSchedulingRequest without action
   */
  export type RoomSchedulingRequestArgs = {
    /**
     * Select specific fields to fetch from the RoomSchedulingRequest
     */
    select?: RoomSchedulingRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomSchedulingRequestInclude | null
  }



  /**
   * Model MedicalDeviceServiceRequest
   */


  export type AggregateMedicalDeviceServiceRequest = {
    _count: MedicalDeviceServiceRequestCountAggregateOutputType | null
    _avg: MedicalDeviceServiceRequestAvgAggregateOutputType | null
    _sum: MedicalDeviceServiceRequestSumAggregateOutputType | null
    _min: MedicalDeviceServiceRequestMinAggregateOutputType | null
    _max: MedicalDeviceServiceRequestMaxAggregateOutputType | null
  }

  export type MedicalDeviceServiceRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type MedicalDeviceServiceRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type MedicalDeviceServiceRequestMinAggregateOutputType = {
    SRID: number | null
    deviceName: string | null
    deviceQuantity: string | null
  }

  export type MedicalDeviceServiceRequestMaxAggregateOutputType = {
    SRID: number | null
    deviceName: string | null
    deviceQuantity: string | null
  }

  export type MedicalDeviceServiceRequestCountAggregateOutputType = {
    SRID: number
    deviceName: number
    deviceQuantity: number
    _all: number
  }


  export type MedicalDeviceServiceRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type MedicalDeviceServiceRequestSumAggregateInputType = {
    SRID?: true
  }

  export type MedicalDeviceServiceRequestMinAggregateInputType = {
    SRID?: true
    deviceName?: true
    deviceQuantity?: true
  }

  export type MedicalDeviceServiceRequestMaxAggregateInputType = {
    SRID?: true
    deviceName?: true
    deviceQuantity?: true
  }

  export type MedicalDeviceServiceRequestCountAggregateInputType = {
    SRID?: true
    deviceName?: true
    deviceQuantity?: true
    _all?: true
  }

  export type MedicalDeviceServiceRequestAggregateArgs = {
    /**
     * Filter which MedicalDeviceServiceRequest to aggregate.
     */
    where?: MedicalDeviceServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalDeviceServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicalDeviceServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalDeviceServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalDeviceServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalDeviceServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalDeviceServiceRequests
    **/
    _count?: true | MedicalDeviceServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalDeviceServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalDeviceServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalDeviceServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalDeviceServiceRequestMaxAggregateInputType
  }

  export type GetMedicalDeviceServiceRequestAggregateType<T extends MedicalDeviceServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalDeviceServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalDeviceServiceRequest[P]>
      : GetScalarType<T[P], AggregateMedicalDeviceServiceRequest[P]>
  }




  export type MedicalDeviceServiceRequestGroupByArgs = {
    where?: MedicalDeviceServiceRequestWhereInput
    orderBy?: Enumerable<MedicalDeviceServiceRequestOrderByWithAggregationInput>
    by: MedicalDeviceServiceRequestScalarFieldEnum[]
    having?: MedicalDeviceServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalDeviceServiceRequestCountAggregateInputType | true
    _avg?: MedicalDeviceServiceRequestAvgAggregateInputType
    _sum?: MedicalDeviceServiceRequestSumAggregateInputType
    _min?: MedicalDeviceServiceRequestMinAggregateInputType
    _max?: MedicalDeviceServiceRequestMaxAggregateInputType
  }


  export type MedicalDeviceServiceRequestGroupByOutputType = {
    SRID: number
    deviceName: string
    deviceQuantity: string
    _count: MedicalDeviceServiceRequestCountAggregateOutputType | null
    _avg: MedicalDeviceServiceRequestAvgAggregateOutputType | null
    _sum: MedicalDeviceServiceRequestSumAggregateOutputType | null
    _min: MedicalDeviceServiceRequestMinAggregateOutputType | null
    _max: MedicalDeviceServiceRequestMaxAggregateOutputType | null
  }

  type GetMedicalDeviceServiceRequestGroupByPayload<T extends MedicalDeviceServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MedicalDeviceServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalDeviceServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalDeviceServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalDeviceServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type MedicalDeviceServiceRequestSelect = {
    SRID?: boolean
    deviceName?: boolean
    deviceQuantity?: boolean
    ServiceRequest?: boolean | ServiceRequestArgs
  }


  export type MedicalDeviceServiceRequestInclude = {
    ServiceRequest?: boolean | ServiceRequestArgs
  }

  export type MedicalDeviceServiceRequestGetPayload<S extends boolean | null | undefined | MedicalDeviceServiceRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MedicalDeviceServiceRequest :
    S extends undefined ? never :
    S extends { include: any } & (MedicalDeviceServiceRequestArgs | MedicalDeviceServiceRequestFindManyArgs)
    ? MedicalDeviceServiceRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MedicalDeviceServiceRequestArgs | MedicalDeviceServiceRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['select'][P]> :  P extends keyof MedicalDeviceServiceRequest ? MedicalDeviceServiceRequest[P] : never
  } 
      : MedicalDeviceServiceRequest


  type MedicalDeviceServiceRequestCountArgs = 
    Omit<MedicalDeviceServiceRequestFindManyArgs, 'select' | 'include'> & {
      select?: MedicalDeviceServiceRequestCountAggregateInputType | true
    }

  export interface MedicalDeviceServiceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one MedicalDeviceServiceRequest that matches the filter.
     * @param {MedicalDeviceServiceRequestFindUniqueArgs} args - Arguments to find a MedicalDeviceServiceRequest
     * @example
     * // Get one MedicalDeviceServiceRequest
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicalDeviceServiceRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MedicalDeviceServiceRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MedicalDeviceServiceRequest'> extends True ? Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>> : Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T> | null, null>

    /**
     * Find one MedicalDeviceServiceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicalDeviceServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a MedicalDeviceServiceRequest
     * @example
     * // Get one MedicalDeviceServiceRequest
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicalDeviceServiceRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MedicalDeviceServiceRequestFindUniqueOrThrowArgs>
    ): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>>

    /**
     * Find the first MedicalDeviceServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestFindFirstArgs} args - Arguments to find a MedicalDeviceServiceRequest
     * @example
     * // Get one MedicalDeviceServiceRequest
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicalDeviceServiceRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MedicalDeviceServiceRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MedicalDeviceServiceRequest'> extends True ? Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>> : Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T> | null, null>

    /**
     * Find the first MedicalDeviceServiceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestFindFirstOrThrowArgs} args - Arguments to find a MedicalDeviceServiceRequest
     * @example
     * // Get one MedicalDeviceServiceRequest
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicalDeviceServiceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MedicalDeviceServiceRequestFindFirstOrThrowArgs>
    ): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>>

    /**
     * Find zero or more MedicalDeviceServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalDeviceServiceRequests
     * const medicalDeviceServiceRequests = await prisma.medicalDeviceServiceRequest.findMany()
     * 
     * // Get first 10 MedicalDeviceServiceRequests
     * const medicalDeviceServiceRequests = await prisma.medicalDeviceServiceRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const medicalDeviceServiceRequestWithSRIDOnly = await prisma.medicalDeviceServiceRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends MedicalDeviceServiceRequestFindManyArgs>(
      args?: SelectSubset<T, MedicalDeviceServiceRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<MedicalDeviceServiceRequestGetPayload<T>>>

    /**
     * Create a MedicalDeviceServiceRequest.
     * @param {MedicalDeviceServiceRequestCreateArgs} args - Arguments to create a MedicalDeviceServiceRequest.
     * @example
     * // Create one MedicalDeviceServiceRequest
     * const MedicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.create({
     *   data: {
     *     // ... data to create a MedicalDeviceServiceRequest
     *   }
     * })
     * 
    **/
    create<T extends MedicalDeviceServiceRequestCreateArgs>(
      args: SelectSubset<T, MedicalDeviceServiceRequestCreateArgs>
    ): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>>

    /**
     * Create many MedicalDeviceServiceRequests.
     *     @param {MedicalDeviceServiceRequestCreateManyArgs} args - Arguments to create many MedicalDeviceServiceRequests.
     *     @example
     *     // Create many MedicalDeviceServiceRequests
     *     const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicalDeviceServiceRequestCreateManyArgs>(
      args?: SelectSubset<T, MedicalDeviceServiceRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalDeviceServiceRequest.
     * @param {MedicalDeviceServiceRequestDeleteArgs} args - Arguments to delete one MedicalDeviceServiceRequest.
     * @example
     * // Delete one MedicalDeviceServiceRequest
     * const MedicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.delete({
     *   where: {
     *     // ... filter to delete one MedicalDeviceServiceRequest
     *   }
     * })
     * 
    **/
    delete<T extends MedicalDeviceServiceRequestDeleteArgs>(
      args: SelectSubset<T, MedicalDeviceServiceRequestDeleteArgs>
    ): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>>

    /**
     * Update one MedicalDeviceServiceRequest.
     * @param {MedicalDeviceServiceRequestUpdateArgs} args - Arguments to update one MedicalDeviceServiceRequest.
     * @example
     * // Update one MedicalDeviceServiceRequest
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicalDeviceServiceRequestUpdateArgs>(
      args: SelectSubset<T, MedicalDeviceServiceRequestUpdateArgs>
    ): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>>

    /**
     * Delete zero or more MedicalDeviceServiceRequests.
     * @param {MedicalDeviceServiceRequestDeleteManyArgs} args - Arguments to filter MedicalDeviceServiceRequests to delete.
     * @example
     * // Delete a few MedicalDeviceServiceRequests
     * const { count } = await prisma.medicalDeviceServiceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicalDeviceServiceRequestDeleteManyArgs>(
      args?: SelectSubset<T, MedicalDeviceServiceRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalDeviceServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalDeviceServiceRequests
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicalDeviceServiceRequestUpdateManyArgs>(
      args: SelectSubset<T, MedicalDeviceServiceRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalDeviceServiceRequest.
     * @param {MedicalDeviceServiceRequestUpsertArgs} args - Arguments to update or create a MedicalDeviceServiceRequest.
     * @example
     * // Update or create a MedicalDeviceServiceRequest
     * const medicalDeviceServiceRequest = await prisma.medicalDeviceServiceRequest.upsert({
     *   create: {
     *     // ... data to create a MedicalDeviceServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalDeviceServiceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends MedicalDeviceServiceRequestUpsertArgs>(
      args: SelectSubset<T, MedicalDeviceServiceRequestUpsertArgs>
    ): Prisma__MedicalDeviceServiceRequestClient<MedicalDeviceServiceRequestGetPayload<T>>

    /**
     * Count the number of MedicalDeviceServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestCountArgs} args - Arguments to filter MedicalDeviceServiceRequests to count.
     * @example
     * // Count the number of MedicalDeviceServiceRequests
     * const count = await prisma.medicalDeviceServiceRequest.count({
     *   where: {
     *     // ... the filter for the MedicalDeviceServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends MedicalDeviceServiceRequestCountArgs>(
      args?: Subset<T, MedicalDeviceServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalDeviceServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalDeviceServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalDeviceServiceRequestAggregateArgs>(args: Subset<T, MedicalDeviceServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetMedicalDeviceServiceRequestAggregateType<T>>

    /**
     * Group by MedicalDeviceServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalDeviceServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalDeviceServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalDeviceServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MedicalDeviceServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalDeviceServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalDeviceServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalDeviceServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MedicalDeviceServiceRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ServiceRequest<T extends ServiceRequestArgs= {}>(args?: Subset<T, ServiceRequestArgs>): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MedicalDeviceServiceRequest base type for findUnique actions
   */
  export type MedicalDeviceServiceRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * Filter, which MedicalDeviceServiceRequest to fetch.
     */
    where: MedicalDeviceServiceRequestWhereUniqueInput
  }

  /**
   * MedicalDeviceServiceRequest findUnique
   */
  export interface MedicalDeviceServiceRequestFindUniqueArgs extends MedicalDeviceServiceRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MedicalDeviceServiceRequest findUniqueOrThrow
   */
  export type MedicalDeviceServiceRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * Filter, which MedicalDeviceServiceRequest to fetch.
     */
    where: MedicalDeviceServiceRequestWhereUniqueInput
  }


  /**
   * MedicalDeviceServiceRequest base type for findFirst actions
   */
  export type MedicalDeviceServiceRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * Filter, which MedicalDeviceServiceRequest to fetch.
     */
    where?: MedicalDeviceServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalDeviceServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicalDeviceServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalDeviceServiceRequests.
     */
    cursor?: MedicalDeviceServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalDeviceServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalDeviceServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalDeviceServiceRequests.
     */
    distinct?: Enumerable<MedicalDeviceServiceRequestScalarFieldEnum>
  }

  /**
   * MedicalDeviceServiceRequest findFirst
   */
  export interface MedicalDeviceServiceRequestFindFirstArgs extends MedicalDeviceServiceRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MedicalDeviceServiceRequest findFirstOrThrow
   */
  export type MedicalDeviceServiceRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * Filter, which MedicalDeviceServiceRequest to fetch.
     */
    where?: MedicalDeviceServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalDeviceServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicalDeviceServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalDeviceServiceRequests.
     */
    cursor?: MedicalDeviceServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalDeviceServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalDeviceServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalDeviceServiceRequests.
     */
    distinct?: Enumerable<MedicalDeviceServiceRequestScalarFieldEnum>
  }


  /**
   * MedicalDeviceServiceRequest findMany
   */
  export type MedicalDeviceServiceRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * Filter, which MedicalDeviceServiceRequests to fetch.
     */
    where?: MedicalDeviceServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalDeviceServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicalDeviceServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalDeviceServiceRequests.
     */
    cursor?: MedicalDeviceServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalDeviceServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalDeviceServiceRequests.
     */
    skip?: number
    distinct?: Enumerable<MedicalDeviceServiceRequestScalarFieldEnum>
  }


  /**
   * MedicalDeviceServiceRequest create
   */
  export type MedicalDeviceServiceRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * The data needed to create a MedicalDeviceServiceRequest.
     */
    data: XOR<MedicalDeviceServiceRequestCreateInput, MedicalDeviceServiceRequestUncheckedCreateInput>
  }


  /**
   * MedicalDeviceServiceRequest createMany
   */
  export type MedicalDeviceServiceRequestCreateManyArgs = {
    /**
     * The data used to create many MedicalDeviceServiceRequests.
     */
    data: Enumerable<MedicalDeviceServiceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MedicalDeviceServiceRequest update
   */
  export type MedicalDeviceServiceRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * The data needed to update a MedicalDeviceServiceRequest.
     */
    data: XOR<MedicalDeviceServiceRequestUpdateInput, MedicalDeviceServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which MedicalDeviceServiceRequest to update.
     */
    where: MedicalDeviceServiceRequestWhereUniqueInput
  }


  /**
   * MedicalDeviceServiceRequest updateMany
   */
  export type MedicalDeviceServiceRequestUpdateManyArgs = {
    /**
     * The data used to update MedicalDeviceServiceRequests.
     */
    data: XOR<MedicalDeviceServiceRequestUpdateManyMutationInput, MedicalDeviceServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MedicalDeviceServiceRequests to update
     */
    where?: MedicalDeviceServiceRequestWhereInput
  }


  /**
   * MedicalDeviceServiceRequest upsert
   */
  export type MedicalDeviceServiceRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * The filter to search for the MedicalDeviceServiceRequest to update in case it exists.
     */
    where: MedicalDeviceServiceRequestWhereUniqueInput
    /**
     * In case the MedicalDeviceServiceRequest found by the `where` argument doesn't exist, create a new MedicalDeviceServiceRequest with this data.
     */
    create: XOR<MedicalDeviceServiceRequestCreateInput, MedicalDeviceServiceRequestUncheckedCreateInput>
    /**
     * In case the MedicalDeviceServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalDeviceServiceRequestUpdateInput, MedicalDeviceServiceRequestUncheckedUpdateInput>
  }


  /**
   * MedicalDeviceServiceRequest delete
   */
  export type MedicalDeviceServiceRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
    /**
     * Filter which MedicalDeviceServiceRequest to delete.
     */
    where: MedicalDeviceServiceRequestWhereUniqueInput
  }


  /**
   * MedicalDeviceServiceRequest deleteMany
   */
  export type MedicalDeviceServiceRequestDeleteManyArgs = {
    /**
     * Filter which MedicalDeviceServiceRequests to delete
     */
    where?: MedicalDeviceServiceRequestWhereInput
  }


  /**
   * MedicalDeviceServiceRequest without action
   */
  export type MedicalDeviceServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the MedicalDeviceServiceRequest
     */
    select?: MedicalDeviceServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalDeviceServiceRequestInclude | null
  }



  /**
   * Model ReligiousServiceRequest
   */


  export type AggregateReligiousServiceRequest = {
    _count: ReligiousServiceRequestCountAggregateOutputType | null
    _avg: ReligiousServiceRequestAvgAggregateOutputType | null
    _sum: ReligiousServiceRequestSumAggregateOutputType | null
    _min: ReligiousServiceRequestMinAggregateOutputType | null
    _max: ReligiousServiceRequestMaxAggregateOutputType | null
  }

  export type ReligiousServiceRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type ReligiousServiceRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type ReligiousServiceRequestMinAggregateOutputType = {
    SRID: number | null
    religionName: string | null
    objectName: string | null
  }

  export type ReligiousServiceRequestMaxAggregateOutputType = {
    SRID: number | null
    religionName: string | null
    objectName: string | null
  }

  export type ReligiousServiceRequestCountAggregateOutputType = {
    SRID: number
    religionName: number
    objectName: number
    _all: number
  }


  export type ReligiousServiceRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type ReligiousServiceRequestSumAggregateInputType = {
    SRID?: true
  }

  export type ReligiousServiceRequestMinAggregateInputType = {
    SRID?: true
    religionName?: true
    objectName?: true
  }

  export type ReligiousServiceRequestMaxAggregateInputType = {
    SRID?: true
    religionName?: true
    objectName?: true
  }

  export type ReligiousServiceRequestCountAggregateInputType = {
    SRID?: true
    religionName?: true
    objectName?: true
    _all?: true
  }

  export type ReligiousServiceRequestAggregateArgs = {
    /**
     * Filter which ReligiousServiceRequest to aggregate.
     */
    where?: ReligiousServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReligiousServiceRequests to fetch.
     */
    orderBy?: Enumerable<ReligiousServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReligiousServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReligiousServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReligiousServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReligiousServiceRequests
    **/
    _count?: true | ReligiousServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReligiousServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReligiousServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReligiousServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReligiousServiceRequestMaxAggregateInputType
  }

  export type GetReligiousServiceRequestAggregateType<T extends ReligiousServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateReligiousServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReligiousServiceRequest[P]>
      : GetScalarType<T[P], AggregateReligiousServiceRequest[P]>
  }




  export type ReligiousServiceRequestGroupByArgs = {
    where?: ReligiousServiceRequestWhereInput
    orderBy?: Enumerable<ReligiousServiceRequestOrderByWithAggregationInput>
    by: ReligiousServiceRequestScalarFieldEnum[]
    having?: ReligiousServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReligiousServiceRequestCountAggregateInputType | true
    _avg?: ReligiousServiceRequestAvgAggregateInputType
    _sum?: ReligiousServiceRequestSumAggregateInputType
    _min?: ReligiousServiceRequestMinAggregateInputType
    _max?: ReligiousServiceRequestMaxAggregateInputType
  }


  export type ReligiousServiceRequestGroupByOutputType = {
    SRID: number
    religionName: string
    objectName: string
    _count: ReligiousServiceRequestCountAggregateOutputType | null
    _avg: ReligiousServiceRequestAvgAggregateOutputType | null
    _sum: ReligiousServiceRequestSumAggregateOutputType | null
    _min: ReligiousServiceRequestMinAggregateOutputType | null
    _max: ReligiousServiceRequestMaxAggregateOutputType | null
  }

  type GetReligiousServiceRequestGroupByPayload<T extends ReligiousServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReligiousServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReligiousServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReligiousServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ReligiousServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ReligiousServiceRequestSelect = {
    SRID?: boolean
    religionName?: boolean
    objectName?: boolean
    ServiceRequest?: boolean | ServiceRequestArgs
  }


  export type ReligiousServiceRequestInclude = {
    ServiceRequest?: boolean | ServiceRequestArgs
  }

  export type ReligiousServiceRequestGetPayload<S extends boolean | null | undefined | ReligiousServiceRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ReligiousServiceRequest :
    S extends undefined ? never :
    S extends { include: any } & (ReligiousServiceRequestArgs | ReligiousServiceRequestFindManyArgs)
    ? ReligiousServiceRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReligiousServiceRequestArgs | ReligiousServiceRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['select'][P]> :  P extends keyof ReligiousServiceRequest ? ReligiousServiceRequest[P] : never
  } 
      : ReligiousServiceRequest


  type ReligiousServiceRequestCountArgs = 
    Omit<ReligiousServiceRequestFindManyArgs, 'select' | 'include'> & {
      select?: ReligiousServiceRequestCountAggregateInputType | true
    }

  export interface ReligiousServiceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ReligiousServiceRequest that matches the filter.
     * @param {ReligiousServiceRequestFindUniqueArgs} args - Arguments to find a ReligiousServiceRequest
     * @example
     * // Get one ReligiousServiceRequest
     * const religiousServiceRequest = await prisma.religiousServiceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReligiousServiceRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReligiousServiceRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ReligiousServiceRequest'> extends True ? Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>> : Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T> | null, null>

    /**
     * Find one ReligiousServiceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReligiousServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a ReligiousServiceRequest
     * @example
     * // Get one ReligiousServiceRequest
     * const religiousServiceRequest = await prisma.religiousServiceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReligiousServiceRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReligiousServiceRequestFindUniqueOrThrowArgs>
    ): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>>

    /**
     * Find the first ReligiousServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestFindFirstArgs} args - Arguments to find a ReligiousServiceRequest
     * @example
     * // Get one ReligiousServiceRequest
     * const religiousServiceRequest = await prisma.religiousServiceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReligiousServiceRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReligiousServiceRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ReligiousServiceRequest'> extends True ? Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>> : Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T> | null, null>

    /**
     * Find the first ReligiousServiceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestFindFirstOrThrowArgs} args - Arguments to find a ReligiousServiceRequest
     * @example
     * // Get one ReligiousServiceRequest
     * const religiousServiceRequest = await prisma.religiousServiceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReligiousServiceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReligiousServiceRequestFindFirstOrThrowArgs>
    ): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>>

    /**
     * Find zero or more ReligiousServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReligiousServiceRequests
     * const religiousServiceRequests = await prisma.religiousServiceRequest.findMany()
     * 
     * // Get first 10 ReligiousServiceRequests
     * const religiousServiceRequests = await prisma.religiousServiceRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const religiousServiceRequestWithSRIDOnly = await prisma.religiousServiceRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends ReligiousServiceRequestFindManyArgs>(
      args?: SelectSubset<T, ReligiousServiceRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<ReligiousServiceRequestGetPayload<T>>>

    /**
     * Create a ReligiousServiceRequest.
     * @param {ReligiousServiceRequestCreateArgs} args - Arguments to create a ReligiousServiceRequest.
     * @example
     * // Create one ReligiousServiceRequest
     * const ReligiousServiceRequest = await prisma.religiousServiceRequest.create({
     *   data: {
     *     // ... data to create a ReligiousServiceRequest
     *   }
     * })
     * 
    **/
    create<T extends ReligiousServiceRequestCreateArgs>(
      args: SelectSubset<T, ReligiousServiceRequestCreateArgs>
    ): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>>

    /**
     * Create many ReligiousServiceRequests.
     *     @param {ReligiousServiceRequestCreateManyArgs} args - Arguments to create many ReligiousServiceRequests.
     *     @example
     *     // Create many ReligiousServiceRequests
     *     const religiousServiceRequest = await prisma.religiousServiceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReligiousServiceRequestCreateManyArgs>(
      args?: SelectSubset<T, ReligiousServiceRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReligiousServiceRequest.
     * @param {ReligiousServiceRequestDeleteArgs} args - Arguments to delete one ReligiousServiceRequest.
     * @example
     * // Delete one ReligiousServiceRequest
     * const ReligiousServiceRequest = await prisma.religiousServiceRequest.delete({
     *   where: {
     *     // ... filter to delete one ReligiousServiceRequest
     *   }
     * })
     * 
    **/
    delete<T extends ReligiousServiceRequestDeleteArgs>(
      args: SelectSubset<T, ReligiousServiceRequestDeleteArgs>
    ): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>>

    /**
     * Update one ReligiousServiceRequest.
     * @param {ReligiousServiceRequestUpdateArgs} args - Arguments to update one ReligiousServiceRequest.
     * @example
     * // Update one ReligiousServiceRequest
     * const religiousServiceRequest = await prisma.religiousServiceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReligiousServiceRequestUpdateArgs>(
      args: SelectSubset<T, ReligiousServiceRequestUpdateArgs>
    ): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>>

    /**
     * Delete zero or more ReligiousServiceRequests.
     * @param {ReligiousServiceRequestDeleteManyArgs} args - Arguments to filter ReligiousServiceRequests to delete.
     * @example
     * // Delete a few ReligiousServiceRequests
     * const { count } = await prisma.religiousServiceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReligiousServiceRequestDeleteManyArgs>(
      args?: SelectSubset<T, ReligiousServiceRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReligiousServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReligiousServiceRequests
     * const religiousServiceRequest = await prisma.religiousServiceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReligiousServiceRequestUpdateManyArgs>(
      args: SelectSubset<T, ReligiousServiceRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReligiousServiceRequest.
     * @param {ReligiousServiceRequestUpsertArgs} args - Arguments to update or create a ReligiousServiceRequest.
     * @example
     * // Update or create a ReligiousServiceRequest
     * const religiousServiceRequest = await prisma.religiousServiceRequest.upsert({
     *   create: {
     *     // ... data to create a ReligiousServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReligiousServiceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ReligiousServiceRequestUpsertArgs>(
      args: SelectSubset<T, ReligiousServiceRequestUpsertArgs>
    ): Prisma__ReligiousServiceRequestClient<ReligiousServiceRequestGetPayload<T>>

    /**
     * Count the number of ReligiousServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestCountArgs} args - Arguments to filter ReligiousServiceRequests to count.
     * @example
     * // Count the number of ReligiousServiceRequests
     * const count = await prisma.religiousServiceRequest.count({
     *   where: {
     *     // ... the filter for the ReligiousServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends ReligiousServiceRequestCountArgs>(
      args?: Subset<T, ReligiousServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReligiousServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReligiousServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReligiousServiceRequestAggregateArgs>(args: Subset<T, ReligiousServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetReligiousServiceRequestAggregateType<T>>

    /**
     * Group by ReligiousServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReligiousServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReligiousServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReligiousServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ReligiousServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReligiousServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReligiousServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ReligiousServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReligiousServiceRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ServiceRequest<T extends ServiceRequestArgs= {}>(args?: Subset<T, ServiceRequestArgs>): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ReligiousServiceRequest base type for findUnique actions
   */
  export type ReligiousServiceRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * Filter, which ReligiousServiceRequest to fetch.
     */
    where: ReligiousServiceRequestWhereUniqueInput
  }

  /**
   * ReligiousServiceRequest findUnique
   */
  export interface ReligiousServiceRequestFindUniqueArgs extends ReligiousServiceRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReligiousServiceRequest findUniqueOrThrow
   */
  export type ReligiousServiceRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * Filter, which ReligiousServiceRequest to fetch.
     */
    where: ReligiousServiceRequestWhereUniqueInput
  }


  /**
   * ReligiousServiceRequest base type for findFirst actions
   */
  export type ReligiousServiceRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * Filter, which ReligiousServiceRequest to fetch.
     */
    where?: ReligiousServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReligiousServiceRequests to fetch.
     */
    orderBy?: Enumerable<ReligiousServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReligiousServiceRequests.
     */
    cursor?: ReligiousServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReligiousServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReligiousServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReligiousServiceRequests.
     */
    distinct?: Enumerable<ReligiousServiceRequestScalarFieldEnum>
  }

  /**
   * ReligiousServiceRequest findFirst
   */
  export interface ReligiousServiceRequestFindFirstArgs extends ReligiousServiceRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReligiousServiceRequest findFirstOrThrow
   */
  export type ReligiousServiceRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * Filter, which ReligiousServiceRequest to fetch.
     */
    where?: ReligiousServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReligiousServiceRequests to fetch.
     */
    orderBy?: Enumerable<ReligiousServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReligiousServiceRequests.
     */
    cursor?: ReligiousServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReligiousServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReligiousServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReligiousServiceRequests.
     */
    distinct?: Enumerable<ReligiousServiceRequestScalarFieldEnum>
  }


  /**
   * ReligiousServiceRequest findMany
   */
  export type ReligiousServiceRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * Filter, which ReligiousServiceRequests to fetch.
     */
    where?: ReligiousServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReligiousServiceRequests to fetch.
     */
    orderBy?: Enumerable<ReligiousServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReligiousServiceRequests.
     */
    cursor?: ReligiousServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReligiousServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReligiousServiceRequests.
     */
    skip?: number
    distinct?: Enumerable<ReligiousServiceRequestScalarFieldEnum>
  }


  /**
   * ReligiousServiceRequest create
   */
  export type ReligiousServiceRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * The data needed to create a ReligiousServiceRequest.
     */
    data: XOR<ReligiousServiceRequestCreateInput, ReligiousServiceRequestUncheckedCreateInput>
  }


  /**
   * ReligiousServiceRequest createMany
   */
  export type ReligiousServiceRequestCreateManyArgs = {
    /**
     * The data used to create many ReligiousServiceRequests.
     */
    data: Enumerable<ReligiousServiceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ReligiousServiceRequest update
   */
  export type ReligiousServiceRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * The data needed to update a ReligiousServiceRequest.
     */
    data: XOR<ReligiousServiceRequestUpdateInput, ReligiousServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which ReligiousServiceRequest to update.
     */
    where: ReligiousServiceRequestWhereUniqueInput
  }


  /**
   * ReligiousServiceRequest updateMany
   */
  export type ReligiousServiceRequestUpdateManyArgs = {
    /**
     * The data used to update ReligiousServiceRequests.
     */
    data: XOR<ReligiousServiceRequestUpdateManyMutationInput, ReligiousServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReligiousServiceRequests to update
     */
    where?: ReligiousServiceRequestWhereInput
  }


  /**
   * ReligiousServiceRequest upsert
   */
  export type ReligiousServiceRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * The filter to search for the ReligiousServiceRequest to update in case it exists.
     */
    where: ReligiousServiceRequestWhereUniqueInput
    /**
     * In case the ReligiousServiceRequest found by the `where` argument doesn't exist, create a new ReligiousServiceRequest with this data.
     */
    create: XOR<ReligiousServiceRequestCreateInput, ReligiousServiceRequestUncheckedCreateInput>
    /**
     * In case the ReligiousServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReligiousServiceRequestUpdateInput, ReligiousServiceRequestUncheckedUpdateInput>
  }


  /**
   * ReligiousServiceRequest delete
   */
  export type ReligiousServiceRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
    /**
     * Filter which ReligiousServiceRequest to delete.
     */
    where: ReligiousServiceRequestWhereUniqueInput
  }


  /**
   * ReligiousServiceRequest deleteMany
   */
  export type ReligiousServiceRequestDeleteManyArgs = {
    /**
     * Filter which ReligiousServiceRequests to delete
     */
    where?: ReligiousServiceRequestWhereInput
  }


  /**
   * ReligiousServiceRequest without action
   */
  export type ReligiousServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the ReligiousServiceRequest
     */
    select?: ReligiousServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReligiousServiceRequestInclude | null
  }



  /**
   * Model GiftServiceRequest
   */


  export type AggregateGiftServiceRequest = {
    _count: GiftServiceRequestCountAggregateOutputType | null
    _avg: GiftServiceRequestAvgAggregateOutputType | null
    _sum: GiftServiceRequestSumAggregateOutputType | null
    _min: GiftServiceRequestMinAggregateOutputType | null
    _max: GiftServiceRequestMaxAggregateOutputType | null
  }

  export type GiftServiceRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type GiftServiceRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type GiftServiceRequestMinAggregateOutputType = {
    SRID: number | null
    senderName: string | null
    receiverName: string | null
    giftType: string | null
    deliveryDate: string | null
  }

  export type GiftServiceRequestMaxAggregateOutputType = {
    SRID: number | null
    senderName: string | null
    receiverName: string | null
    giftType: string | null
    deliveryDate: string | null
  }

  export type GiftServiceRequestCountAggregateOutputType = {
    SRID: number
    senderName: number
    receiverName: number
    giftType: number
    deliveryDate: number
    _all: number
  }


  export type GiftServiceRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type GiftServiceRequestSumAggregateInputType = {
    SRID?: true
  }

  export type GiftServiceRequestMinAggregateInputType = {
    SRID?: true
    senderName?: true
    receiverName?: true
    giftType?: true
    deliveryDate?: true
  }

  export type GiftServiceRequestMaxAggregateInputType = {
    SRID?: true
    senderName?: true
    receiverName?: true
    giftType?: true
    deliveryDate?: true
  }

  export type GiftServiceRequestCountAggregateInputType = {
    SRID?: true
    senderName?: true
    receiverName?: true
    giftType?: true
    deliveryDate?: true
    _all?: true
  }

  export type GiftServiceRequestAggregateArgs = {
    /**
     * Filter which GiftServiceRequest to aggregate.
     */
    where?: GiftServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftServiceRequests to fetch.
     */
    orderBy?: Enumerable<GiftServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiftServiceRequests
    **/
    _count?: true | GiftServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftServiceRequestMaxAggregateInputType
  }

  export type GetGiftServiceRequestAggregateType<T extends GiftServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateGiftServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiftServiceRequest[P]>
      : GetScalarType<T[P], AggregateGiftServiceRequest[P]>
  }




  export type GiftServiceRequestGroupByArgs = {
    where?: GiftServiceRequestWhereInput
    orderBy?: Enumerable<GiftServiceRequestOrderByWithAggregationInput>
    by: GiftServiceRequestScalarFieldEnum[]
    having?: GiftServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftServiceRequestCountAggregateInputType | true
    _avg?: GiftServiceRequestAvgAggregateInputType
    _sum?: GiftServiceRequestSumAggregateInputType
    _min?: GiftServiceRequestMinAggregateInputType
    _max?: GiftServiceRequestMaxAggregateInputType
  }


  export type GiftServiceRequestGroupByOutputType = {
    SRID: number
    senderName: string
    receiverName: string
    giftType: string
    deliveryDate: string
    _count: GiftServiceRequestCountAggregateOutputType | null
    _avg: GiftServiceRequestAvgAggregateOutputType | null
    _sum: GiftServiceRequestSumAggregateOutputType | null
    _min: GiftServiceRequestMinAggregateOutputType | null
    _max: GiftServiceRequestMaxAggregateOutputType | null
  }

  type GetGiftServiceRequestGroupByPayload<T extends GiftServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GiftServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], GiftServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type GiftServiceRequestSelect = {
    SRID?: boolean
    senderName?: boolean
    receiverName?: boolean
    giftType?: boolean
    deliveryDate?: boolean
    ServiceRequest?: boolean | ServiceRequestArgs
  }


  export type GiftServiceRequestInclude = {
    ServiceRequest?: boolean | ServiceRequestArgs
  }

  export type GiftServiceRequestGetPayload<S extends boolean | null | undefined | GiftServiceRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GiftServiceRequest :
    S extends undefined ? never :
    S extends { include: any } & (GiftServiceRequestArgs | GiftServiceRequestFindManyArgs)
    ? GiftServiceRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GiftServiceRequestArgs | GiftServiceRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['select'][P]> :  P extends keyof GiftServiceRequest ? GiftServiceRequest[P] : never
  } 
      : GiftServiceRequest


  type GiftServiceRequestCountArgs = 
    Omit<GiftServiceRequestFindManyArgs, 'select' | 'include'> & {
      select?: GiftServiceRequestCountAggregateInputType | true
    }

  export interface GiftServiceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GiftServiceRequest that matches the filter.
     * @param {GiftServiceRequestFindUniqueArgs} args - Arguments to find a GiftServiceRequest
     * @example
     * // Get one GiftServiceRequest
     * const giftServiceRequest = await prisma.giftServiceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GiftServiceRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GiftServiceRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GiftServiceRequest'> extends True ? Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>> : Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T> | null, null>

    /**
     * Find one GiftServiceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GiftServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a GiftServiceRequest
     * @example
     * // Get one GiftServiceRequest
     * const giftServiceRequest = await prisma.giftServiceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GiftServiceRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GiftServiceRequestFindUniqueOrThrowArgs>
    ): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>>

    /**
     * Find the first GiftServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestFindFirstArgs} args - Arguments to find a GiftServiceRequest
     * @example
     * // Get one GiftServiceRequest
     * const giftServiceRequest = await prisma.giftServiceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GiftServiceRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GiftServiceRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GiftServiceRequest'> extends True ? Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>> : Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T> | null, null>

    /**
     * Find the first GiftServiceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestFindFirstOrThrowArgs} args - Arguments to find a GiftServiceRequest
     * @example
     * // Get one GiftServiceRequest
     * const giftServiceRequest = await prisma.giftServiceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GiftServiceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GiftServiceRequestFindFirstOrThrowArgs>
    ): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>>

    /**
     * Find zero or more GiftServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiftServiceRequests
     * const giftServiceRequests = await prisma.giftServiceRequest.findMany()
     * 
     * // Get first 10 GiftServiceRequests
     * const giftServiceRequests = await prisma.giftServiceRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const giftServiceRequestWithSRIDOnly = await prisma.giftServiceRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends GiftServiceRequestFindManyArgs>(
      args?: SelectSubset<T, GiftServiceRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<GiftServiceRequestGetPayload<T>>>

    /**
     * Create a GiftServiceRequest.
     * @param {GiftServiceRequestCreateArgs} args - Arguments to create a GiftServiceRequest.
     * @example
     * // Create one GiftServiceRequest
     * const GiftServiceRequest = await prisma.giftServiceRequest.create({
     *   data: {
     *     // ... data to create a GiftServiceRequest
     *   }
     * })
     * 
    **/
    create<T extends GiftServiceRequestCreateArgs>(
      args: SelectSubset<T, GiftServiceRequestCreateArgs>
    ): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>>

    /**
     * Create many GiftServiceRequests.
     *     @param {GiftServiceRequestCreateManyArgs} args - Arguments to create many GiftServiceRequests.
     *     @example
     *     // Create many GiftServiceRequests
     *     const giftServiceRequest = await prisma.giftServiceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GiftServiceRequestCreateManyArgs>(
      args?: SelectSubset<T, GiftServiceRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiftServiceRequest.
     * @param {GiftServiceRequestDeleteArgs} args - Arguments to delete one GiftServiceRequest.
     * @example
     * // Delete one GiftServiceRequest
     * const GiftServiceRequest = await prisma.giftServiceRequest.delete({
     *   where: {
     *     // ... filter to delete one GiftServiceRequest
     *   }
     * })
     * 
    **/
    delete<T extends GiftServiceRequestDeleteArgs>(
      args: SelectSubset<T, GiftServiceRequestDeleteArgs>
    ): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>>

    /**
     * Update one GiftServiceRequest.
     * @param {GiftServiceRequestUpdateArgs} args - Arguments to update one GiftServiceRequest.
     * @example
     * // Update one GiftServiceRequest
     * const giftServiceRequest = await prisma.giftServiceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GiftServiceRequestUpdateArgs>(
      args: SelectSubset<T, GiftServiceRequestUpdateArgs>
    ): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>>

    /**
     * Delete zero or more GiftServiceRequests.
     * @param {GiftServiceRequestDeleteManyArgs} args - Arguments to filter GiftServiceRequests to delete.
     * @example
     * // Delete a few GiftServiceRequests
     * const { count } = await prisma.giftServiceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GiftServiceRequestDeleteManyArgs>(
      args?: SelectSubset<T, GiftServiceRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiftServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiftServiceRequests
     * const giftServiceRequest = await prisma.giftServiceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GiftServiceRequestUpdateManyArgs>(
      args: SelectSubset<T, GiftServiceRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiftServiceRequest.
     * @param {GiftServiceRequestUpsertArgs} args - Arguments to update or create a GiftServiceRequest.
     * @example
     * // Update or create a GiftServiceRequest
     * const giftServiceRequest = await prisma.giftServiceRequest.upsert({
     *   create: {
     *     // ... data to create a GiftServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiftServiceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends GiftServiceRequestUpsertArgs>(
      args: SelectSubset<T, GiftServiceRequestUpsertArgs>
    ): Prisma__GiftServiceRequestClient<GiftServiceRequestGetPayload<T>>

    /**
     * Count the number of GiftServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestCountArgs} args - Arguments to filter GiftServiceRequests to count.
     * @example
     * // Count the number of GiftServiceRequests
     * const count = await prisma.giftServiceRequest.count({
     *   where: {
     *     // ... the filter for the GiftServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends GiftServiceRequestCountArgs>(
      args?: Subset<T, GiftServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiftServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiftServiceRequestAggregateArgs>(args: Subset<T, GiftServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetGiftServiceRequestAggregateType<T>>

    /**
     * Group by GiftServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiftServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: GiftServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiftServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GiftServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GiftServiceRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ServiceRequest<T extends ServiceRequestArgs= {}>(args?: Subset<T, ServiceRequestArgs>): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GiftServiceRequest base type for findUnique actions
   */
  export type GiftServiceRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * Filter, which GiftServiceRequest to fetch.
     */
    where: GiftServiceRequestWhereUniqueInput
  }

  /**
   * GiftServiceRequest findUnique
   */
  export interface GiftServiceRequestFindUniqueArgs extends GiftServiceRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GiftServiceRequest findUniqueOrThrow
   */
  export type GiftServiceRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * Filter, which GiftServiceRequest to fetch.
     */
    where: GiftServiceRequestWhereUniqueInput
  }


  /**
   * GiftServiceRequest base type for findFirst actions
   */
  export type GiftServiceRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * Filter, which GiftServiceRequest to fetch.
     */
    where?: GiftServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftServiceRequests to fetch.
     */
    orderBy?: Enumerable<GiftServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftServiceRequests.
     */
    cursor?: GiftServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftServiceRequests.
     */
    distinct?: Enumerable<GiftServiceRequestScalarFieldEnum>
  }

  /**
   * GiftServiceRequest findFirst
   */
  export interface GiftServiceRequestFindFirstArgs extends GiftServiceRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GiftServiceRequest findFirstOrThrow
   */
  export type GiftServiceRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * Filter, which GiftServiceRequest to fetch.
     */
    where?: GiftServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftServiceRequests to fetch.
     */
    orderBy?: Enumerable<GiftServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftServiceRequests.
     */
    cursor?: GiftServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftServiceRequests.
     */
    distinct?: Enumerable<GiftServiceRequestScalarFieldEnum>
  }


  /**
   * GiftServiceRequest findMany
   */
  export type GiftServiceRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * Filter, which GiftServiceRequests to fetch.
     */
    where?: GiftServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftServiceRequests to fetch.
     */
    orderBy?: Enumerable<GiftServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiftServiceRequests.
     */
    cursor?: GiftServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftServiceRequests.
     */
    skip?: number
    distinct?: Enumerable<GiftServiceRequestScalarFieldEnum>
  }


  /**
   * GiftServiceRequest create
   */
  export type GiftServiceRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * The data needed to create a GiftServiceRequest.
     */
    data: XOR<GiftServiceRequestCreateInput, GiftServiceRequestUncheckedCreateInput>
  }


  /**
   * GiftServiceRequest createMany
   */
  export type GiftServiceRequestCreateManyArgs = {
    /**
     * The data used to create many GiftServiceRequests.
     */
    data: Enumerable<GiftServiceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GiftServiceRequest update
   */
  export type GiftServiceRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * The data needed to update a GiftServiceRequest.
     */
    data: XOR<GiftServiceRequestUpdateInput, GiftServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which GiftServiceRequest to update.
     */
    where: GiftServiceRequestWhereUniqueInput
  }


  /**
   * GiftServiceRequest updateMany
   */
  export type GiftServiceRequestUpdateManyArgs = {
    /**
     * The data used to update GiftServiceRequests.
     */
    data: XOR<GiftServiceRequestUpdateManyMutationInput, GiftServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which GiftServiceRequests to update
     */
    where?: GiftServiceRequestWhereInput
  }


  /**
   * GiftServiceRequest upsert
   */
  export type GiftServiceRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * The filter to search for the GiftServiceRequest to update in case it exists.
     */
    where: GiftServiceRequestWhereUniqueInput
    /**
     * In case the GiftServiceRequest found by the `where` argument doesn't exist, create a new GiftServiceRequest with this data.
     */
    create: XOR<GiftServiceRequestCreateInput, GiftServiceRequestUncheckedCreateInput>
    /**
     * In case the GiftServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftServiceRequestUpdateInput, GiftServiceRequestUncheckedUpdateInput>
  }


  /**
   * GiftServiceRequest delete
   */
  export type GiftServiceRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
    /**
     * Filter which GiftServiceRequest to delete.
     */
    where: GiftServiceRequestWhereUniqueInput
  }


  /**
   * GiftServiceRequest deleteMany
   */
  export type GiftServiceRequestDeleteManyArgs = {
    /**
     * Filter which GiftServiceRequests to delete
     */
    where?: GiftServiceRequestWhereInput
  }


  /**
   * GiftServiceRequest without action
   */
  export type GiftServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the GiftServiceRequest
     */
    select?: GiftServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftServiceRequestInclude | null
  }



  /**
   * Model MedicineDeliveryServiceRequest
   */


  export type AggregateMedicineDeliveryServiceRequest = {
    _count: MedicineDeliveryServiceRequestCountAggregateOutputType | null
    _avg: MedicineDeliveryServiceRequestAvgAggregateOutputType | null
    _sum: MedicineDeliveryServiceRequestSumAggregateOutputType | null
    _min: MedicineDeliveryServiceRequestMinAggregateOutputType | null
    _max: MedicineDeliveryServiceRequestMaxAggregateOutputType | null
  }

  export type MedicineDeliveryServiceRequestAvgAggregateOutputType = {
    SRID: number | null
  }

  export type MedicineDeliveryServiceRequestSumAggregateOutputType = {
    SRID: number | null
  }

  export type MedicineDeliveryServiceRequestMinAggregateOutputType = {
    SRID: number | null
    medicineType: string | null
    dosageType: string | null
    dosageAmount: string | null
  }

  export type MedicineDeliveryServiceRequestMaxAggregateOutputType = {
    SRID: number | null
    medicineType: string | null
    dosageType: string | null
    dosageAmount: string | null
  }

  export type MedicineDeliveryServiceRequestCountAggregateOutputType = {
    SRID: number
    medicineType: number
    dosageType: number
    dosageAmount: number
    _all: number
  }


  export type MedicineDeliveryServiceRequestAvgAggregateInputType = {
    SRID?: true
  }

  export type MedicineDeliveryServiceRequestSumAggregateInputType = {
    SRID?: true
  }

  export type MedicineDeliveryServiceRequestMinAggregateInputType = {
    SRID?: true
    medicineType?: true
    dosageType?: true
    dosageAmount?: true
  }

  export type MedicineDeliveryServiceRequestMaxAggregateInputType = {
    SRID?: true
    medicineType?: true
    dosageType?: true
    dosageAmount?: true
  }

  export type MedicineDeliveryServiceRequestCountAggregateInputType = {
    SRID?: true
    medicineType?: true
    dosageType?: true
    dosageAmount?: true
    _all?: true
  }

  export type MedicineDeliveryServiceRequestAggregateArgs = {
    /**
     * Filter which MedicineDeliveryServiceRequest to aggregate.
     */
    where?: MedicineDeliveryServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineDeliveryServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicineDeliveryServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineDeliveryServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineDeliveryServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineDeliveryServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineDeliveryServiceRequests
    **/
    _count?: true | MedicineDeliveryServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineDeliveryServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineDeliveryServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineDeliveryServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineDeliveryServiceRequestMaxAggregateInputType
  }

  export type GetMedicineDeliveryServiceRequestAggregateType<T extends MedicineDeliveryServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineDeliveryServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineDeliveryServiceRequest[P]>
      : GetScalarType<T[P], AggregateMedicineDeliveryServiceRequest[P]>
  }




  export type MedicineDeliveryServiceRequestGroupByArgs = {
    where?: MedicineDeliveryServiceRequestWhereInput
    orderBy?: Enumerable<MedicineDeliveryServiceRequestOrderByWithAggregationInput>
    by: MedicineDeliveryServiceRequestScalarFieldEnum[]
    having?: MedicineDeliveryServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineDeliveryServiceRequestCountAggregateInputType | true
    _avg?: MedicineDeliveryServiceRequestAvgAggregateInputType
    _sum?: MedicineDeliveryServiceRequestSumAggregateInputType
    _min?: MedicineDeliveryServiceRequestMinAggregateInputType
    _max?: MedicineDeliveryServiceRequestMaxAggregateInputType
  }


  export type MedicineDeliveryServiceRequestGroupByOutputType = {
    SRID: number
    medicineType: string
    dosageType: string
    dosageAmount: string
    _count: MedicineDeliveryServiceRequestCountAggregateOutputType | null
    _avg: MedicineDeliveryServiceRequestAvgAggregateOutputType | null
    _sum: MedicineDeliveryServiceRequestSumAggregateOutputType | null
    _min: MedicineDeliveryServiceRequestMinAggregateOutputType | null
    _max: MedicineDeliveryServiceRequestMaxAggregateOutputType | null
  }

  type GetMedicineDeliveryServiceRequestGroupByPayload<T extends MedicineDeliveryServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MedicineDeliveryServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineDeliveryServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineDeliveryServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineDeliveryServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type MedicineDeliveryServiceRequestSelect = {
    SRID?: boolean
    medicineType?: boolean
    dosageType?: boolean
    dosageAmount?: boolean
    ServiceRequest?: boolean | ServiceRequestArgs
  }


  export type MedicineDeliveryServiceRequestInclude = {
    ServiceRequest?: boolean | ServiceRequestArgs
  }

  export type MedicineDeliveryServiceRequestGetPayload<S extends boolean | null | undefined | MedicineDeliveryServiceRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MedicineDeliveryServiceRequest :
    S extends undefined ? never :
    S extends { include: any } & (MedicineDeliveryServiceRequestArgs | MedicineDeliveryServiceRequestFindManyArgs)
    ? MedicineDeliveryServiceRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MedicineDeliveryServiceRequestArgs | MedicineDeliveryServiceRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ServiceRequest' ? ServiceRequestGetPayload<S['select'][P]> :  P extends keyof MedicineDeliveryServiceRequest ? MedicineDeliveryServiceRequest[P] : never
  } 
      : MedicineDeliveryServiceRequest


  type MedicineDeliveryServiceRequestCountArgs = 
    Omit<MedicineDeliveryServiceRequestFindManyArgs, 'select' | 'include'> & {
      select?: MedicineDeliveryServiceRequestCountAggregateInputType | true
    }

  export interface MedicineDeliveryServiceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one MedicineDeliveryServiceRequest that matches the filter.
     * @param {MedicineDeliveryServiceRequestFindUniqueArgs} args - Arguments to find a MedicineDeliveryServiceRequest
     * @example
     * // Get one MedicineDeliveryServiceRequest
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicineDeliveryServiceRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MedicineDeliveryServiceRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MedicineDeliveryServiceRequest'> extends True ? Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>> : Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T> | null, null>

    /**
     * Find one MedicineDeliveryServiceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicineDeliveryServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a MedicineDeliveryServiceRequest
     * @example
     * // Get one MedicineDeliveryServiceRequest
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicineDeliveryServiceRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MedicineDeliveryServiceRequestFindUniqueOrThrowArgs>
    ): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>>

    /**
     * Find the first MedicineDeliveryServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestFindFirstArgs} args - Arguments to find a MedicineDeliveryServiceRequest
     * @example
     * // Get one MedicineDeliveryServiceRequest
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicineDeliveryServiceRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MedicineDeliveryServiceRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MedicineDeliveryServiceRequest'> extends True ? Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>> : Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T> | null, null>

    /**
     * Find the first MedicineDeliveryServiceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestFindFirstOrThrowArgs} args - Arguments to find a MedicineDeliveryServiceRequest
     * @example
     * // Get one MedicineDeliveryServiceRequest
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicineDeliveryServiceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MedicineDeliveryServiceRequestFindFirstOrThrowArgs>
    ): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>>

    /**
     * Find zero or more MedicineDeliveryServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineDeliveryServiceRequests
     * const medicineDeliveryServiceRequests = await prisma.medicineDeliveryServiceRequest.findMany()
     * 
     * // Get first 10 MedicineDeliveryServiceRequests
     * const medicineDeliveryServiceRequests = await prisma.medicineDeliveryServiceRequest.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const medicineDeliveryServiceRequestWithSRIDOnly = await prisma.medicineDeliveryServiceRequest.findMany({ select: { SRID: true } })
     * 
    **/
    findMany<T extends MedicineDeliveryServiceRequestFindManyArgs>(
      args?: SelectSubset<T, MedicineDeliveryServiceRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<MedicineDeliveryServiceRequestGetPayload<T>>>

    /**
     * Create a MedicineDeliveryServiceRequest.
     * @param {MedicineDeliveryServiceRequestCreateArgs} args - Arguments to create a MedicineDeliveryServiceRequest.
     * @example
     * // Create one MedicineDeliveryServiceRequest
     * const MedicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.create({
     *   data: {
     *     // ... data to create a MedicineDeliveryServiceRequest
     *   }
     * })
     * 
    **/
    create<T extends MedicineDeliveryServiceRequestCreateArgs>(
      args: SelectSubset<T, MedicineDeliveryServiceRequestCreateArgs>
    ): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>>

    /**
     * Create many MedicineDeliveryServiceRequests.
     *     @param {MedicineDeliveryServiceRequestCreateManyArgs} args - Arguments to create many MedicineDeliveryServiceRequests.
     *     @example
     *     // Create many MedicineDeliveryServiceRequests
     *     const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicineDeliveryServiceRequestCreateManyArgs>(
      args?: SelectSubset<T, MedicineDeliveryServiceRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicineDeliveryServiceRequest.
     * @param {MedicineDeliveryServiceRequestDeleteArgs} args - Arguments to delete one MedicineDeliveryServiceRequest.
     * @example
     * // Delete one MedicineDeliveryServiceRequest
     * const MedicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.delete({
     *   where: {
     *     // ... filter to delete one MedicineDeliveryServiceRequest
     *   }
     * })
     * 
    **/
    delete<T extends MedicineDeliveryServiceRequestDeleteArgs>(
      args: SelectSubset<T, MedicineDeliveryServiceRequestDeleteArgs>
    ): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>>

    /**
     * Update one MedicineDeliveryServiceRequest.
     * @param {MedicineDeliveryServiceRequestUpdateArgs} args - Arguments to update one MedicineDeliveryServiceRequest.
     * @example
     * // Update one MedicineDeliveryServiceRequest
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicineDeliveryServiceRequestUpdateArgs>(
      args: SelectSubset<T, MedicineDeliveryServiceRequestUpdateArgs>
    ): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>>

    /**
     * Delete zero or more MedicineDeliveryServiceRequests.
     * @param {MedicineDeliveryServiceRequestDeleteManyArgs} args - Arguments to filter MedicineDeliveryServiceRequests to delete.
     * @example
     * // Delete a few MedicineDeliveryServiceRequests
     * const { count } = await prisma.medicineDeliveryServiceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicineDeliveryServiceRequestDeleteManyArgs>(
      args?: SelectSubset<T, MedicineDeliveryServiceRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineDeliveryServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineDeliveryServiceRequests
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicineDeliveryServiceRequestUpdateManyArgs>(
      args: SelectSubset<T, MedicineDeliveryServiceRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicineDeliveryServiceRequest.
     * @param {MedicineDeliveryServiceRequestUpsertArgs} args - Arguments to update or create a MedicineDeliveryServiceRequest.
     * @example
     * // Update or create a MedicineDeliveryServiceRequest
     * const medicineDeliveryServiceRequest = await prisma.medicineDeliveryServiceRequest.upsert({
     *   create: {
     *     // ... data to create a MedicineDeliveryServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineDeliveryServiceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends MedicineDeliveryServiceRequestUpsertArgs>(
      args: SelectSubset<T, MedicineDeliveryServiceRequestUpsertArgs>
    ): Prisma__MedicineDeliveryServiceRequestClient<MedicineDeliveryServiceRequestGetPayload<T>>

    /**
     * Count the number of MedicineDeliveryServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestCountArgs} args - Arguments to filter MedicineDeliveryServiceRequests to count.
     * @example
     * // Count the number of MedicineDeliveryServiceRequests
     * const count = await prisma.medicineDeliveryServiceRequest.count({
     *   where: {
     *     // ... the filter for the MedicineDeliveryServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends MedicineDeliveryServiceRequestCountArgs>(
      args?: Subset<T, MedicineDeliveryServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineDeliveryServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineDeliveryServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineDeliveryServiceRequestAggregateArgs>(args: Subset<T, MedicineDeliveryServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetMedicineDeliveryServiceRequestAggregateType<T>>

    /**
     * Group by MedicineDeliveryServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineDeliveryServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineDeliveryServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineDeliveryServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MedicineDeliveryServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineDeliveryServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineDeliveryServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineDeliveryServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MedicineDeliveryServiceRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ServiceRequest<T extends ServiceRequestArgs= {}>(args?: Subset<T, ServiceRequestArgs>): Prisma__ServiceRequestClient<ServiceRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MedicineDeliveryServiceRequest base type for findUnique actions
   */
  export type MedicineDeliveryServiceRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * Filter, which MedicineDeliveryServiceRequest to fetch.
     */
    where: MedicineDeliveryServiceRequestWhereUniqueInput
  }

  /**
   * MedicineDeliveryServiceRequest findUnique
   */
  export interface MedicineDeliveryServiceRequestFindUniqueArgs extends MedicineDeliveryServiceRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MedicineDeliveryServiceRequest findUniqueOrThrow
   */
  export type MedicineDeliveryServiceRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * Filter, which MedicineDeliveryServiceRequest to fetch.
     */
    where: MedicineDeliveryServiceRequestWhereUniqueInput
  }


  /**
   * MedicineDeliveryServiceRequest base type for findFirst actions
   */
  export type MedicineDeliveryServiceRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * Filter, which MedicineDeliveryServiceRequest to fetch.
     */
    where?: MedicineDeliveryServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineDeliveryServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicineDeliveryServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineDeliveryServiceRequests.
     */
    cursor?: MedicineDeliveryServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineDeliveryServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineDeliveryServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineDeliveryServiceRequests.
     */
    distinct?: Enumerable<MedicineDeliveryServiceRequestScalarFieldEnum>
  }

  /**
   * MedicineDeliveryServiceRequest findFirst
   */
  export interface MedicineDeliveryServiceRequestFindFirstArgs extends MedicineDeliveryServiceRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MedicineDeliveryServiceRequest findFirstOrThrow
   */
  export type MedicineDeliveryServiceRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * Filter, which MedicineDeliveryServiceRequest to fetch.
     */
    where?: MedicineDeliveryServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineDeliveryServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicineDeliveryServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineDeliveryServiceRequests.
     */
    cursor?: MedicineDeliveryServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineDeliveryServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineDeliveryServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineDeliveryServiceRequests.
     */
    distinct?: Enumerable<MedicineDeliveryServiceRequestScalarFieldEnum>
  }


  /**
   * MedicineDeliveryServiceRequest findMany
   */
  export type MedicineDeliveryServiceRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * Filter, which MedicineDeliveryServiceRequests to fetch.
     */
    where?: MedicineDeliveryServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineDeliveryServiceRequests to fetch.
     */
    orderBy?: Enumerable<MedicineDeliveryServiceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineDeliveryServiceRequests.
     */
    cursor?: MedicineDeliveryServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineDeliveryServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineDeliveryServiceRequests.
     */
    skip?: number
    distinct?: Enumerable<MedicineDeliveryServiceRequestScalarFieldEnum>
  }


  /**
   * MedicineDeliveryServiceRequest create
   */
  export type MedicineDeliveryServiceRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * The data needed to create a MedicineDeliveryServiceRequest.
     */
    data: XOR<MedicineDeliveryServiceRequestCreateInput, MedicineDeliveryServiceRequestUncheckedCreateInput>
  }


  /**
   * MedicineDeliveryServiceRequest createMany
   */
  export type MedicineDeliveryServiceRequestCreateManyArgs = {
    /**
     * The data used to create many MedicineDeliveryServiceRequests.
     */
    data: Enumerable<MedicineDeliveryServiceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MedicineDeliveryServiceRequest update
   */
  export type MedicineDeliveryServiceRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * The data needed to update a MedicineDeliveryServiceRequest.
     */
    data: XOR<MedicineDeliveryServiceRequestUpdateInput, MedicineDeliveryServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which MedicineDeliveryServiceRequest to update.
     */
    where: MedicineDeliveryServiceRequestWhereUniqueInput
  }


  /**
   * MedicineDeliveryServiceRequest updateMany
   */
  export type MedicineDeliveryServiceRequestUpdateManyArgs = {
    /**
     * The data used to update MedicineDeliveryServiceRequests.
     */
    data: XOR<MedicineDeliveryServiceRequestUpdateManyMutationInput, MedicineDeliveryServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MedicineDeliveryServiceRequests to update
     */
    where?: MedicineDeliveryServiceRequestWhereInput
  }


  /**
   * MedicineDeliveryServiceRequest upsert
   */
  export type MedicineDeliveryServiceRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * The filter to search for the MedicineDeliveryServiceRequest to update in case it exists.
     */
    where: MedicineDeliveryServiceRequestWhereUniqueInput
    /**
     * In case the MedicineDeliveryServiceRequest found by the `where` argument doesn't exist, create a new MedicineDeliveryServiceRequest with this data.
     */
    create: XOR<MedicineDeliveryServiceRequestCreateInput, MedicineDeliveryServiceRequestUncheckedCreateInput>
    /**
     * In case the MedicineDeliveryServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineDeliveryServiceRequestUpdateInput, MedicineDeliveryServiceRequestUncheckedUpdateInput>
  }


  /**
   * MedicineDeliveryServiceRequest delete
   */
  export type MedicineDeliveryServiceRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
    /**
     * Filter which MedicineDeliveryServiceRequest to delete.
     */
    where: MedicineDeliveryServiceRequestWhereUniqueInput
  }


  /**
   * MedicineDeliveryServiceRequest deleteMany
   */
  export type MedicineDeliveryServiceRequestDeleteManyArgs = {
    /**
     * Filter which MedicineDeliveryServiceRequests to delete
     */
    where?: MedicineDeliveryServiceRequestWhereInput
  }


  /**
   * MedicineDeliveryServiceRequest without action
   */
  export type MedicineDeliveryServiceRequestArgs = {
    /**
     * Select specific fields to fetch from the MedicineDeliveryServiceRequest
     */
    select?: MedicineDeliveryServiceRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicineDeliveryServiceRequestInclude | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EdgeScalarFieldEnum: {
    edgeID: 'edgeID',
    startNodeID: 'startNodeID',
    endNodeID: 'endNodeID'
  };

  export type EdgeScalarFieldEnum = (typeof EdgeScalarFieldEnum)[keyof typeof EdgeScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    nodeID: 'nodeID',
    xcoord: 'xcoord',
    ycoord: 'ycoord',
    floor: 'floor',
    building: 'building',
    nodeType: 'nodeType',
    longName: 'longName',
    shortName: 'shortName'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const ServiceRequestScalarFieldEnum: {
    SRID: 'SRID',
    employeeName: 'employeeName',
    priority: 'priority',
    location: 'location',
    status: 'status',
    serviceType: 'serviceType',
    description: 'description'
  };

  export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum]


  export const FlowerServiceRequestScalarFieldEnum: {
    SRID: 'SRID',
    flowerType: 'flowerType',
    senderName: 'senderName',
    receiverName: 'receiverName',
    deliveryDate: 'deliveryDate'
  };

  export type FlowerServiceRequestScalarFieldEnum = (typeof FlowerServiceRequestScalarFieldEnum)[keyof typeof FlowerServiceRequestScalarFieldEnum]


  export const RoomSchedulingRequestScalarFieldEnum: {
    SRID: 'SRID',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type RoomSchedulingRequestScalarFieldEnum = (typeof RoomSchedulingRequestScalarFieldEnum)[keyof typeof RoomSchedulingRequestScalarFieldEnum]


  export const MedicalDeviceServiceRequestScalarFieldEnum: {
    SRID: 'SRID',
    deviceName: 'deviceName',
    deviceQuantity: 'deviceQuantity'
  };

  export type MedicalDeviceServiceRequestScalarFieldEnum = (typeof MedicalDeviceServiceRequestScalarFieldEnum)[keyof typeof MedicalDeviceServiceRequestScalarFieldEnum]


  export const ReligiousServiceRequestScalarFieldEnum: {
    SRID: 'SRID',
    religionName: 'religionName',
    objectName: 'objectName'
  };

  export type ReligiousServiceRequestScalarFieldEnum = (typeof ReligiousServiceRequestScalarFieldEnum)[keyof typeof ReligiousServiceRequestScalarFieldEnum]


  export const GiftServiceRequestScalarFieldEnum: {
    SRID: 'SRID',
    senderName: 'senderName',
    receiverName: 'receiverName',
    giftType: 'giftType',
    deliveryDate: 'deliveryDate'
  };

  export type GiftServiceRequestScalarFieldEnum = (typeof GiftServiceRequestScalarFieldEnum)[keyof typeof GiftServiceRequestScalarFieldEnum]


  export const MedicineDeliveryServiceRequestScalarFieldEnum: {
    SRID: 'SRID',
    medicineType: 'medicineType',
    dosageType: 'dosageType',
    dosageAmount: 'dosageAmount'
  };

  export type MedicineDeliveryServiceRequestScalarFieldEnum = (typeof MedicineDeliveryServiceRequestScalarFieldEnum)[keyof typeof MedicineDeliveryServiceRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EdgeWhereInput = {
    AND?: Enumerable<EdgeWhereInput>
    OR?: Enumerable<EdgeWhereInput>
    NOT?: Enumerable<EdgeWhereInput>
    edgeID?: StringFilter<"Edge"> | string
    startNodeID?: StringFilter<"Edge"> | string
    endNodeID?: StringFilter<"Edge"> | string
    startNode?: XOR<NodeRelationFilter, NodeWhereInput>
    endNode?: XOR<NodeRelationFilter, NodeWhereInput>
  }

  export type EdgeOrderByWithRelationInput = {
    edgeID?: SortOrder
    startNodeID?: SortOrder
    endNodeID?: SortOrder
    startNode?: NodeOrderByWithRelationInput
    endNode?: NodeOrderByWithRelationInput
  }

  export type EdgeWhereUniqueInput = Prisma.AtLeast<{
    edgeID?: string
    AND?: Enumerable<EdgeWhereInput>
    OR?: Enumerable<EdgeWhereInput>
    NOT?: Enumerable<EdgeWhereInput>
    startNodeID?: StringFilter<"Edge"> | string
    endNodeID?: StringFilter<"Edge"> | string
    startNode?: XOR<NodeRelationFilter, NodeWhereInput>
    endNode?: XOR<NodeRelationFilter, NodeWhereInput>
  }, "edgeID">

  export type EdgeOrderByWithAggregationInput = {
    edgeID?: SortOrder
    startNodeID?: SortOrder
    endNodeID?: SortOrder
    _count?: EdgeCountOrderByAggregateInput
    _max?: EdgeMaxOrderByAggregateInput
    _min?: EdgeMinOrderByAggregateInput
  }

  export type EdgeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EdgeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EdgeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EdgeScalarWhereWithAggregatesInput>
    edgeID?: StringWithAggregatesFilter<"Edge"> | string
    startNodeID?: StringWithAggregatesFilter<"Edge"> | string
    endNodeID?: StringWithAggregatesFilter<"Edge"> | string
  }

  export type NodeWhereInput = {
    AND?: Enumerable<NodeWhereInput>
    OR?: Enumerable<NodeWhereInput>
    NOT?: Enumerable<NodeWhereInput>
    nodeID?: StringFilter<"Node"> | string
    xcoord?: IntFilter<"Node"> | number
    ycoord?: IntFilter<"Node"> | number
    floor?: StringFilter<"Node"> | string
    building?: StringFilter<"Node"> | string
    nodeType?: StringFilter<"Node"> | string
    longName?: StringFilter<"Node"> | string
    shortName?: StringFilter<"Node"> | string
    startEdges?: EdgeListRelationFilter
    endEdges?: EdgeListRelationFilter
  }

  export type NodeOrderByWithRelationInput = {
    nodeID?: SortOrder
    xcoord?: SortOrder
    ycoord?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    nodeType?: SortOrder
    longName?: SortOrder
    shortName?: SortOrder
    startEdges?: EdgeOrderByRelationAggregateInput
    endEdges?: EdgeOrderByRelationAggregateInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    nodeID?: string
    AND?: Enumerable<NodeWhereInput>
    OR?: Enumerable<NodeWhereInput>
    NOT?: Enumerable<NodeWhereInput>
    xcoord?: IntFilter<"Node"> | number
    ycoord?: IntFilter<"Node"> | number
    floor?: StringFilter<"Node"> | string
    building?: StringFilter<"Node"> | string
    nodeType?: StringFilter<"Node"> | string
    longName?: StringFilter<"Node"> | string
    shortName?: StringFilter<"Node"> | string
    startEdges?: EdgeListRelationFilter
    endEdges?: EdgeListRelationFilter
  }, "nodeID">

  export type NodeOrderByWithAggregationInput = {
    nodeID?: SortOrder
    xcoord?: SortOrder
    ycoord?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    nodeType?: SortOrder
    longName?: SortOrder
    shortName?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _avg?: NodeAvgOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
    _sum?: NodeSumOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<NodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NodeScalarWhereWithAggregatesInput>
    nodeID?: StringWithAggregatesFilter<"Node"> | string
    xcoord?: IntWithAggregatesFilter<"Node"> | number
    ycoord?: IntWithAggregatesFilter<"Node"> | number
    floor?: StringWithAggregatesFilter<"Node"> | string
    building?: StringWithAggregatesFilter<"Node"> | string
    nodeType?: StringWithAggregatesFilter<"Node"> | string
    longName?: StringWithAggregatesFilter<"Node"> | string
    shortName?: StringWithAggregatesFilter<"Node"> | string
  }

  export type ServiceRequestWhereInput = {
    AND?: Enumerable<ServiceRequestWhereInput>
    OR?: Enumerable<ServiceRequestWhereInput>
    NOT?: Enumerable<ServiceRequestWhereInput>
    SRID?: IntFilter<"ServiceRequest"> | number
    employeeName?: StringFilter<"ServiceRequest"> | string
    priority?: StringFilter<"ServiceRequest"> | string
    location?: StringFilter<"ServiceRequest"> | string
    status?: StringFilter<"ServiceRequest"> | string
    serviceType?: StringFilter<"ServiceRequest"> | string
    description?: StringFilter<"ServiceRequest"> | string
    FlowerServiceRequest?: XOR<FlowerServiceRequestNullableRelationFilter, FlowerServiceRequestWhereInput> | null
    RoomSchedulingRequest?: XOR<RoomSchedulingRequestNullableRelationFilter, RoomSchedulingRequestWhereInput> | null
    MedicalDeviceServiceRequest?: XOR<MedicalDeviceServiceRequestNullableRelationFilter, MedicalDeviceServiceRequestWhereInput> | null
    GiftServiceRequest?: XOR<GiftServiceRequestNullableRelationFilter, GiftServiceRequestWhereInput> | null
    MedicineDeliveryServiceRequest?: XOR<MedicineDeliveryServiceRequestNullableRelationFilter, MedicineDeliveryServiceRequestWhereInput> | null
    ReligiousServiceRequest?: XOR<ReligiousServiceRequestNullableRelationFilter, ReligiousServiceRequestWhereInput> | null
  }

  export type ServiceRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    employeeName?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    FlowerServiceRequest?: FlowerServiceRequestOrderByWithRelationInput
    RoomSchedulingRequest?: RoomSchedulingRequestOrderByWithRelationInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestOrderByWithRelationInput
    GiftServiceRequest?: GiftServiceRequestOrderByWithRelationInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestOrderByWithRelationInput
    ReligiousServiceRequest?: ReligiousServiceRequestOrderByWithRelationInput
  }

  export type ServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<ServiceRequestWhereInput>
    OR?: Enumerable<ServiceRequestWhereInput>
    NOT?: Enumerable<ServiceRequestWhereInput>
    employeeName?: StringFilter<"ServiceRequest"> | string
    priority?: StringFilter<"ServiceRequest"> | string
    location?: StringFilter<"ServiceRequest"> | string
    status?: StringFilter<"ServiceRequest"> | string
    serviceType?: StringFilter<"ServiceRequest"> | string
    description?: StringFilter<"ServiceRequest"> | string
    FlowerServiceRequest?: XOR<FlowerServiceRequestNullableRelationFilter, FlowerServiceRequestWhereInput> | null
    RoomSchedulingRequest?: XOR<RoomSchedulingRequestNullableRelationFilter, RoomSchedulingRequestWhereInput> | null
    MedicalDeviceServiceRequest?: XOR<MedicalDeviceServiceRequestNullableRelationFilter, MedicalDeviceServiceRequestWhereInput> | null
    GiftServiceRequest?: XOR<GiftServiceRequestNullableRelationFilter, GiftServiceRequestWhereInput> | null
    MedicineDeliveryServiceRequest?: XOR<MedicineDeliveryServiceRequestNullableRelationFilter, MedicineDeliveryServiceRequestWhereInput> | null
    ReligiousServiceRequest?: XOR<ReligiousServiceRequestNullableRelationFilter, ReligiousServiceRequestWhereInput> | null
  }, "SRID">

  export type ServiceRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    employeeName?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    _count?: ServiceRequestCountOrderByAggregateInput
    _avg?: ServiceRequestAvgOrderByAggregateInput
    _max?: ServiceRequestMaxOrderByAggregateInput
    _min?: ServiceRequestMinOrderByAggregateInput
    _sum?: ServiceRequestSumOrderByAggregateInput
  }

  export type ServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServiceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServiceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServiceRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"ServiceRequest"> | number
    employeeName?: StringWithAggregatesFilter<"ServiceRequest"> | string
    priority?: StringWithAggregatesFilter<"ServiceRequest"> | string
    location?: StringWithAggregatesFilter<"ServiceRequest"> | string
    status?: StringWithAggregatesFilter<"ServiceRequest"> | string
    serviceType?: StringWithAggregatesFilter<"ServiceRequest"> | string
    description?: StringWithAggregatesFilter<"ServiceRequest"> | string
  }

  export type FlowerServiceRequestWhereInput = {
    AND?: Enumerable<FlowerServiceRequestWhereInput>
    OR?: Enumerable<FlowerServiceRequestWhereInput>
    NOT?: Enumerable<FlowerServiceRequestWhereInput>
    SRID?: IntFilter<"FlowerServiceRequest"> | number
    flowerType?: StringFilter<"FlowerServiceRequest"> | string
    senderName?: StringFilter<"FlowerServiceRequest"> | string
    receiverName?: StringFilter<"FlowerServiceRequest"> | string
    deliveryDate?: StringFilter<"FlowerServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }

  export type FlowerServiceRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    flowerType?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    deliveryDate?: SortOrder
    ServiceRequest?: ServiceRequestOrderByWithRelationInput
  }

  export type FlowerServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<FlowerServiceRequestWhereInput>
    OR?: Enumerable<FlowerServiceRequestWhereInput>
    NOT?: Enumerable<FlowerServiceRequestWhereInput>
    flowerType?: StringFilter<"FlowerServiceRequest"> | string
    senderName?: StringFilter<"FlowerServiceRequest"> | string
    receiverName?: StringFilter<"FlowerServiceRequest"> | string
    deliveryDate?: StringFilter<"FlowerServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }, "SRID">

  export type FlowerServiceRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    flowerType?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    deliveryDate?: SortOrder
    _count?: FlowerServiceRequestCountOrderByAggregateInput
    _avg?: FlowerServiceRequestAvgOrderByAggregateInput
    _max?: FlowerServiceRequestMaxOrderByAggregateInput
    _min?: FlowerServiceRequestMinOrderByAggregateInput
    _sum?: FlowerServiceRequestSumOrderByAggregateInput
  }

  export type FlowerServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowerServiceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowerServiceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowerServiceRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"FlowerServiceRequest"> | number
    flowerType?: StringWithAggregatesFilter<"FlowerServiceRequest"> | string
    senderName?: StringWithAggregatesFilter<"FlowerServiceRequest"> | string
    receiverName?: StringWithAggregatesFilter<"FlowerServiceRequest"> | string
    deliveryDate?: StringWithAggregatesFilter<"FlowerServiceRequest"> | string
  }

  export type RoomSchedulingRequestWhereInput = {
    AND?: Enumerable<RoomSchedulingRequestWhereInput>
    OR?: Enumerable<RoomSchedulingRequestWhereInput>
    NOT?: Enumerable<RoomSchedulingRequestWhereInput>
    SRID?: IntFilter<"RoomSchedulingRequest"> | number
    startTime?: StringFilter<"RoomSchedulingRequest"> | string
    endTime?: StringFilter<"RoomSchedulingRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }

  export type RoomSchedulingRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    ServiceRequest?: ServiceRequestOrderByWithRelationInput
  }

  export type RoomSchedulingRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<RoomSchedulingRequestWhereInput>
    OR?: Enumerable<RoomSchedulingRequestWhereInput>
    NOT?: Enumerable<RoomSchedulingRequestWhereInput>
    startTime?: StringFilter<"RoomSchedulingRequest"> | string
    endTime?: StringFilter<"RoomSchedulingRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }, "SRID">

  export type RoomSchedulingRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: RoomSchedulingRequestCountOrderByAggregateInput
    _avg?: RoomSchedulingRequestAvgOrderByAggregateInput
    _max?: RoomSchedulingRequestMaxOrderByAggregateInput
    _min?: RoomSchedulingRequestMinOrderByAggregateInput
    _sum?: RoomSchedulingRequestSumOrderByAggregateInput
  }

  export type RoomSchedulingRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomSchedulingRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomSchedulingRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomSchedulingRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"RoomSchedulingRequest"> | number
    startTime?: StringWithAggregatesFilter<"RoomSchedulingRequest"> | string
    endTime?: StringWithAggregatesFilter<"RoomSchedulingRequest"> | string
  }

  export type MedicalDeviceServiceRequestWhereInput = {
    AND?: Enumerable<MedicalDeviceServiceRequestWhereInput>
    OR?: Enumerable<MedicalDeviceServiceRequestWhereInput>
    NOT?: Enumerable<MedicalDeviceServiceRequestWhereInput>
    SRID?: IntFilter<"MedicalDeviceServiceRequest"> | number
    deviceName?: StringFilter<"MedicalDeviceServiceRequest"> | string
    deviceQuantity?: StringFilter<"MedicalDeviceServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }

  export type MedicalDeviceServiceRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    deviceName?: SortOrder
    deviceQuantity?: SortOrder
    ServiceRequest?: ServiceRequestOrderByWithRelationInput
  }

  export type MedicalDeviceServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<MedicalDeviceServiceRequestWhereInput>
    OR?: Enumerable<MedicalDeviceServiceRequestWhereInput>
    NOT?: Enumerable<MedicalDeviceServiceRequestWhereInput>
    deviceName?: StringFilter<"MedicalDeviceServiceRequest"> | string
    deviceQuantity?: StringFilter<"MedicalDeviceServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }, "SRID">

  export type MedicalDeviceServiceRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    deviceName?: SortOrder
    deviceQuantity?: SortOrder
    _count?: MedicalDeviceServiceRequestCountOrderByAggregateInput
    _avg?: MedicalDeviceServiceRequestAvgOrderByAggregateInput
    _max?: MedicalDeviceServiceRequestMaxOrderByAggregateInput
    _min?: MedicalDeviceServiceRequestMinOrderByAggregateInput
    _sum?: MedicalDeviceServiceRequestSumOrderByAggregateInput
  }

  export type MedicalDeviceServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MedicalDeviceServiceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<MedicalDeviceServiceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MedicalDeviceServiceRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"MedicalDeviceServiceRequest"> | number
    deviceName?: StringWithAggregatesFilter<"MedicalDeviceServiceRequest"> | string
    deviceQuantity?: StringWithAggregatesFilter<"MedicalDeviceServiceRequest"> | string
  }

  export type ReligiousServiceRequestWhereInput = {
    AND?: Enumerable<ReligiousServiceRequestWhereInput>
    OR?: Enumerable<ReligiousServiceRequestWhereInput>
    NOT?: Enumerable<ReligiousServiceRequestWhereInput>
    SRID?: IntFilter<"ReligiousServiceRequest"> | number
    religionName?: StringFilter<"ReligiousServiceRequest"> | string
    objectName?: StringFilter<"ReligiousServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }

  export type ReligiousServiceRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    religionName?: SortOrder
    objectName?: SortOrder
    ServiceRequest?: ServiceRequestOrderByWithRelationInput
  }

  export type ReligiousServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<ReligiousServiceRequestWhereInput>
    OR?: Enumerable<ReligiousServiceRequestWhereInput>
    NOT?: Enumerable<ReligiousServiceRequestWhereInput>
    religionName?: StringFilter<"ReligiousServiceRequest"> | string
    objectName?: StringFilter<"ReligiousServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }, "SRID">

  export type ReligiousServiceRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    religionName?: SortOrder
    objectName?: SortOrder
    _count?: ReligiousServiceRequestCountOrderByAggregateInput
    _avg?: ReligiousServiceRequestAvgOrderByAggregateInput
    _max?: ReligiousServiceRequestMaxOrderByAggregateInput
    _min?: ReligiousServiceRequestMinOrderByAggregateInput
    _sum?: ReligiousServiceRequestSumOrderByAggregateInput
  }

  export type ReligiousServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReligiousServiceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReligiousServiceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReligiousServiceRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"ReligiousServiceRequest"> | number
    religionName?: StringWithAggregatesFilter<"ReligiousServiceRequest"> | string
    objectName?: StringWithAggregatesFilter<"ReligiousServiceRequest"> | string
  }

  export type GiftServiceRequestWhereInput = {
    AND?: Enumerable<GiftServiceRequestWhereInput>
    OR?: Enumerable<GiftServiceRequestWhereInput>
    NOT?: Enumerable<GiftServiceRequestWhereInput>
    SRID?: IntFilter<"GiftServiceRequest"> | number
    senderName?: StringFilter<"GiftServiceRequest"> | string
    receiverName?: StringFilter<"GiftServiceRequest"> | string
    giftType?: StringFilter<"GiftServiceRequest"> | string
    deliveryDate?: StringFilter<"GiftServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }

  export type GiftServiceRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    giftType?: SortOrder
    deliveryDate?: SortOrder
    ServiceRequest?: ServiceRequestOrderByWithRelationInput
  }

  export type GiftServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<GiftServiceRequestWhereInput>
    OR?: Enumerable<GiftServiceRequestWhereInput>
    NOT?: Enumerable<GiftServiceRequestWhereInput>
    senderName?: StringFilter<"GiftServiceRequest"> | string
    receiverName?: StringFilter<"GiftServiceRequest"> | string
    giftType?: StringFilter<"GiftServiceRequest"> | string
    deliveryDate?: StringFilter<"GiftServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }, "SRID">

  export type GiftServiceRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    giftType?: SortOrder
    deliveryDate?: SortOrder
    _count?: GiftServiceRequestCountOrderByAggregateInput
    _avg?: GiftServiceRequestAvgOrderByAggregateInput
    _max?: GiftServiceRequestMaxOrderByAggregateInput
    _min?: GiftServiceRequestMinOrderByAggregateInput
    _sum?: GiftServiceRequestSumOrderByAggregateInput
  }

  export type GiftServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GiftServiceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<GiftServiceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GiftServiceRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"GiftServiceRequest"> | number
    senderName?: StringWithAggregatesFilter<"GiftServiceRequest"> | string
    receiverName?: StringWithAggregatesFilter<"GiftServiceRequest"> | string
    giftType?: StringWithAggregatesFilter<"GiftServiceRequest"> | string
    deliveryDate?: StringWithAggregatesFilter<"GiftServiceRequest"> | string
  }

  export type MedicineDeliveryServiceRequestWhereInput = {
    AND?: Enumerable<MedicineDeliveryServiceRequestWhereInput>
    OR?: Enumerable<MedicineDeliveryServiceRequestWhereInput>
    NOT?: Enumerable<MedicineDeliveryServiceRequestWhereInput>
    SRID?: IntFilter<"MedicineDeliveryServiceRequest"> | number
    medicineType?: StringFilter<"MedicineDeliveryServiceRequest"> | string
    dosageType?: StringFilter<"MedicineDeliveryServiceRequest"> | string
    dosageAmount?: StringFilter<"MedicineDeliveryServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }

  export type MedicineDeliveryServiceRequestOrderByWithRelationInput = {
    SRID?: SortOrder
    medicineType?: SortOrder
    dosageType?: SortOrder
    dosageAmount?: SortOrder
    ServiceRequest?: ServiceRequestOrderByWithRelationInput
  }

  export type MedicineDeliveryServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    SRID?: number
    AND?: Enumerable<MedicineDeliveryServiceRequestWhereInput>
    OR?: Enumerable<MedicineDeliveryServiceRequestWhereInput>
    NOT?: Enumerable<MedicineDeliveryServiceRequestWhereInput>
    medicineType?: StringFilter<"MedicineDeliveryServiceRequest"> | string
    dosageType?: StringFilter<"MedicineDeliveryServiceRequest"> | string
    dosageAmount?: StringFilter<"MedicineDeliveryServiceRequest"> | string
    ServiceRequest?: XOR<ServiceRequestRelationFilter, ServiceRequestWhereInput>
  }, "SRID">

  export type MedicineDeliveryServiceRequestOrderByWithAggregationInput = {
    SRID?: SortOrder
    medicineType?: SortOrder
    dosageType?: SortOrder
    dosageAmount?: SortOrder
    _count?: MedicineDeliveryServiceRequestCountOrderByAggregateInput
    _avg?: MedicineDeliveryServiceRequestAvgOrderByAggregateInput
    _max?: MedicineDeliveryServiceRequestMaxOrderByAggregateInput
    _min?: MedicineDeliveryServiceRequestMinOrderByAggregateInput
    _sum?: MedicineDeliveryServiceRequestSumOrderByAggregateInput
  }

  export type MedicineDeliveryServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MedicineDeliveryServiceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<MedicineDeliveryServiceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MedicineDeliveryServiceRequestScalarWhereWithAggregatesInput>
    SRID?: IntWithAggregatesFilter<"MedicineDeliveryServiceRequest"> | number
    medicineType?: StringWithAggregatesFilter<"MedicineDeliveryServiceRequest"> | string
    dosageType?: StringWithAggregatesFilter<"MedicineDeliveryServiceRequest"> | string
    dosageAmount?: StringWithAggregatesFilter<"MedicineDeliveryServiceRequest"> | string
  }

  export type EdgeCreateInput = {
    edgeID: string
    startNode: NodeCreateNestedOneWithoutStartEdgesInput
    endNode: NodeCreateNestedOneWithoutEndEdgesInput
  }

  export type EdgeUncheckedCreateInput = {
    edgeID: string
    startNodeID: string
    endNodeID: string
  }

  export type EdgeUpdateInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    startNode?: NodeUpdateOneRequiredWithoutStartEdgesNestedInput
    endNode?: NodeUpdateOneRequiredWithoutEndEdgesNestedInput
  }

  export type EdgeUncheckedUpdateInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    startNodeID?: StringFieldUpdateOperationsInput | string
    endNodeID?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeCreateManyInput = {
    edgeID: string
    startNodeID: string
    endNodeID: string
  }

  export type EdgeUpdateManyMutationInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeUncheckedUpdateManyInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    startNodeID?: StringFieldUpdateOperationsInput | string
    endNodeID?: StringFieldUpdateOperationsInput | string
  }

  export type NodeCreateInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    startEdges?: EdgeCreateNestedManyWithoutStartNodeInput
    endEdges?: EdgeCreateNestedManyWithoutEndNodeInput
  }

  export type NodeUncheckedCreateInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    startEdges?: EdgeUncheckedCreateNestedManyWithoutStartNodeInput
    endEdges?: EdgeUncheckedCreateNestedManyWithoutEndNodeInput
  }

  export type NodeUpdateInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    startEdges?: EdgeUpdateManyWithoutStartNodeNestedInput
    endEdges?: EdgeUpdateManyWithoutEndNodeNestedInput
  }

  export type NodeUncheckedUpdateInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    startEdges?: EdgeUncheckedUpdateManyWithoutStartNodeNestedInput
    endEdges?: EdgeUncheckedUpdateManyWithoutEndNodeNestedInput
  }

  export type NodeCreateManyInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
  }

  export type NodeUpdateManyMutationInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
  }

  export type NodeUncheckedUpdateManyInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestCreateInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUpdateInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateManyInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
  }

  export type ServiceRequestUpdateManyMutationInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FlowerServiceRequestCreateInput = {
    flowerType: string
    senderName: string
    receiverName: string
    deliveryDate: string
    ServiceRequest: ServiceRequestCreateNestedOneWithoutFlowerServiceRequestInput
  }

  export type FlowerServiceRequestUncheckedCreateInput = {
    SRID: number
    flowerType: string
    senderName: string
    receiverName: string
    deliveryDate: string
  }

  export type FlowerServiceRequestUpdateInput = {
    flowerType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    ServiceRequest?: ServiceRequestUpdateOneRequiredWithoutFlowerServiceRequestNestedInput
  }

  export type FlowerServiceRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    flowerType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type FlowerServiceRequestCreateManyInput = {
    SRID: number
    flowerType: string
    senderName: string
    receiverName: string
    deliveryDate: string
  }

  export type FlowerServiceRequestUpdateManyMutationInput = {
    flowerType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type FlowerServiceRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    flowerType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type RoomSchedulingRequestCreateInput = {
    startTime: string
    endTime: string
    ServiceRequest: ServiceRequestCreateNestedOneWithoutRoomSchedulingRequestInput
  }

  export type RoomSchedulingRequestUncheckedCreateInput = {
    SRID: number
    startTime: string
    endTime: string
  }

  export type RoomSchedulingRequestUpdateInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    ServiceRequest?: ServiceRequestUpdateOneRequiredWithoutRoomSchedulingRequestNestedInput
  }

  export type RoomSchedulingRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type RoomSchedulingRequestCreateManyInput = {
    SRID: number
    startTime: string
    endTime: string
  }

  export type RoomSchedulingRequestUpdateManyMutationInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type RoomSchedulingRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalDeviceServiceRequestCreateInput = {
    deviceName: string
    deviceQuantity: string
    ServiceRequest: ServiceRequestCreateNestedOneWithoutMedicalDeviceServiceRequestInput
  }

  export type MedicalDeviceServiceRequestUncheckedCreateInput = {
    SRID: number
    deviceName: string
    deviceQuantity: string
  }

  export type MedicalDeviceServiceRequestUpdateInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    deviceQuantity?: StringFieldUpdateOperationsInput | string
    ServiceRequest?: ServiceRequestUpdateOneRequiredWithoutMedicalDeviceServiceRequestNestedInput
  }

  export type MedicalDeviceServiceRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    deviceQuantity?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalDeviceServiceRequestCreateManyInput = {
    SRID: number
    deviceName: string
    deviceQuantity: string
  }

  export type MedicalDeviceServiceRequestUpdateManyMutationInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    deviceQuantity?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalDeviceServiceRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    deviceQuantity?: StringFieldUpdateOperationsInput | string
  }

  export type ReligiousServiceRequestCreateInput = {
    religionName: string
    objectName: string
    ServiceRequest: ServiceRequestCreateNestedOneWithoutReligiousServiceRequestInput
  }

  export type ReligiousServiceRequestUncheckedCreateInput = {
    SRID: number
    religionName: string
    objectName: string
  }

  export type ReligiousServiceRequestUpdateInput = {
    religionName?: StringFieldUpdateOperationsInput | string
    objectName?: StringFieldUpdateOperationsInput | string
    ServiceRequest?: ServiceRequestUpdateOneRequiredWithoutReligiousServiceRequestNestedInput
  }

  export type ReligiousServiceRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    religionName?: StringFieldUpdateOperationsInput | string
    objectName?: StringFieldUpdateOperationsInput | string
  }

  export type ReligiousServiceRequestCreateManyInput = {
    SRID: number
    religionName: string
    objectName: string
  }

  export type ReligiousServiceRequestUpdateManyMutationInput = {
    religionName?: StringFieldUpdateOperationsInput | string
    objectName?: StringFieldUpdateOperationsInput | string
  }

  export type ReligiousServiceRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    religionName?: StringFieldUpdateOperationsInput | string
    objectName?: StringFieldUpdateOperationsInput | string
  }

  export type GiftServiceRequestCreateInput = {
    senderName: string
    receiverName: string
    giftType: string
    deliveryDate: string
    ServiceRequest: ServiceRequestCreateNestedOneWithoutGiftServiceRequestInput
  }

  export type GiftServiceRequestUncheckedCreateInput = {
    SRID: number
    senderName: string
    receiverName: string
    giftType: string
    deliveryDate: string
  }

  export type GiftServiceRequestUpdateInput = {
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    giftType?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    ServiceRequest?: ServiceRequestUpdateOneRequiredWithoutGiftServiceRequestNestedInput
  }

  export type GiftServiceRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    giftType?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type GiftServiceRequestCreateManyInput = {
    SRID: number
    senderName: string
    receiverName: string
    giftType: string
    deliveryDate: string
  }

  export type GiftServiceRequestUpdateManyMutationInput = {
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    giftType?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type GiftServiceRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    giftType?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineDeliveryServiceRequestCreateInput = {
    medicineType: string
    dosageType: string
    dosageAmount: string
    ServiceRequest: ServiceRequestCreateNestedOneWithoutMedicineDeliveryServiceRequestInput
  }

  export type MedicineDeliveryServiceRequestUncheckedCreateInput = {
    SRID: number
    medicineType: string
    dosageType: string
    dosageAmount: string
  }

  export type MedicineDeliveryServiceRequestUpdateInput = {
    medicineType?: StringFieldUpdateOperationsInput | string
    dosageType?: StringFieldUpdateOperationsInput | string
    dosageAmount?: StringFieldUpdateOperationsInput | string
    ServiceRequest?: ServiceRequestUpdateOneRequiredWithoutMedicineDeliveryServiceRequestNestedInput
  }

  export type MedicineDeliveryServiceRequestUncheckedUpdateInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    medicineType?: StringFieldUpdateOperationsInput | string
    dosageType?: StringFieldUpdateOperationsInput | string
    dosageAmount?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineDeliveryServiceRequestCreateManyInput = {
    SRID: number
    medicineType: string
    dosageType: string
    dosageAmount: string
  }

  export type MedicineDeliveryServiceRequestUpdateManyMutationInput = {
    medicineType?: StringFieldUpdateOperationsInput | string
    dosageType?: StringFieldUpdateOperationsInput | string
    dosageAmount?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineDeliveryServiceRequestUncheckedUpdateManyInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    medicineType?: StringFieldUpdateOperationsInput | string
    dosageType?: StringFieldUpdateOperationsInput | string
    dosageAmount?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NodeRelationFilter = {
    is?: NodeWhereInput
    isNot?: NodeWhereInput
  }

  export type EdgeCountOrderByAggregateInput = {
    edgeID?: SortOrder
    startNodeID?: SortOrder
    endNodeID?: SortOrder
  }

  export type EdgeMaxOrderByAggregateInput = {
    edgeID?: SortOrder
    startNodeID?: SortOrder
    endNodeID?: SortOrder
  }

  export type EdgeMinOrderByAggregateInput = {
    edgeID?: SortOrder
    startNodeID?: SortOrder
    endNodeID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EdgeListRelationFilter = {
    every?: EdgeWhereInput
    some?: EdgeWhereInput
    none?: EdgeWhereInput
  }

  export type EdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NodeCountOrderByAggregateInput = {
    nodeID?: SortOrder
    xcoord?: SortOrder
    ycoord?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    nodeType?: SortOrder
    longName?: SortOrder
    shortName?: SortOrder
  }

  export type NodeAvgOrderByAggregateInput = {
    xcoord?: SortOrder
    ycoord?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    nodeID?: SortOrder
    xcoord?: SortOrder
    ycoord?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    nodeType?: SortOrder
    longName?: SortOrder
    shortName?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    nodeID?: SortOrder
    xcoord?: SortOrder
    ycoord?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    nodeType?: SortOrder
    longName?: SortOrder
    shortName?: SortOrder
  }

  export type NodeSumOrderByAggregateInput = {
    xcoord?: SortOrder
    ycoord?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FlowerServiceRequestNullableRelationFilter = {
    is?: FlowerServiceRequestWhereInput | null
    isNot?: FlowerServiceRequestWhereInput | null
  }

  export type RoomSchedulingRequestNullableRelationFilter = {
    is?: RoomSchedulingRequestWhereInput | null
    isNot?: RoomSchedulingRequestWhereInput | null
  }

  export type MedicalDeviceServiceRequestNullableRelationFilter = {
    is?: MedicalDeviceServiceRequestWhereInput | null
    isNot?: MedicalDeviceServiceRequestWhereInput | null
  }

  export type GiftServiceRequestNullableRelationFilter = {
    is?: GiftServiceRequestWhereInput | null
    isNot?: GiftServiceRequestWhereInput | null
  }

  export type MedicineDeliveryServiceRequestNullableRelationFilter = {
    is?: MedicineDeliveryServiceRequestWhereInput | null
    isNot?: MedicineDeliveryServiceRequestWhereInput | null
  }

  export type ReligiousServiceRequestNullableRelationFilter = {
    is?: ReligiousServiceRequestWhereInput | null
    isNot?: ReligiousServiceRequestWhereInput | null
  }

  export type ServiceRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    employeeName?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
  }

  export type ServiceRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type ServiceRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    employeeName?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
  }

  export type ServiceRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    employeeName?: SortOrder
    priority?: SortOrder
    location?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
  }

  export type ServiceRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type ServiceRequestRelationFilter = {
    is?: ServiceRequestWhereInput
    isNot?: ServiceRequestWhereInput
  }

  export type FlowerServiceRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    flowerType?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    deliveryDate?: SortOrder
  }

  export type FlowerServiceRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type FlowerServiceRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    flowerType?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    deliveryDate?: SortOrder
  }

  export type FlowerServiceRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    flowerType?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    deliveryDate?: SortOrder
  }

  export type FlowerServiceRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type RoomSchedulingRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type RoomSchedulingRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type RoomSchedulingRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type RoomSchedulingRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type RoomSchedulingRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type MedicalDeviceServiceRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    deviceName?: SortOrder
    deviceQuantity?: SortOrder
  }

  export type MedicalDeviceServiceRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type MedicalDeviceServiceRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    deviceName?: SortOrder
    deviceQuantity?: SortOrder
  }

  export type MedicalDeviceServiceRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    deviceName?: SortOrder
    deviceQuantity?: SortOrder
  }

  export type MedicalDeviceServiceRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type ReligiousServiceRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    religionName?: SortOrder
    objectName?: SortOrder
  }

  export type ReligiousServiceRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type ReligiousServiceRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    religionName?: SortOrder
    objectName?: SortOrder
  }

  export type ReligiousServiceRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    religionName?: SortOrder
    objectName?: SortOrder
  }

  export type ReligiousServiceRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type GiftServiceRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    giftType?: SortOrder
    deliveryDate?: SortOrder
  }

  export type GiftServiceRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type GiftServiceRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    giftType?: SortOrder
    deliveryDate?: SortOrder
  }

  export type GiftServiceRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    senderName?: SortOrder
    receiverName?: SortOrder
    giftType?: SortOrder
    deliveryDate?: SortOrder
  }

  export type GiftServiceRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type MedicineDeliveryServiceRequestCountOrderByAggregateInput = {
    SRID?: SortOrder
    medicineType?: SortOrder
    dosageType?: SortOrder
    dosageAmount?: SortOrder
  }

  export type MedicineDeliveryServiceRequestAvgOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type MedicineDeliveryServiceRequestMaxOrderByAggregateInput = {
    SRID?: SortOrder
    medicineType?: SortOrder
    dosageType?: SortOrder
    dosageAmount?: SortOrder
  }

  export type MedicineDeliveryServiceRequestMinOrderByAggregateInput = {
    SRID?: SortOrder
    medicineType?: SortOrder
    dosageType?: SortOrder
    dosageAmount?: SortOrder
  }

  export type MedicineDeliveryServiceRequestSumOrderByAggregateInput = {
    SRID?: SortOrder
  }

  export type NodeCreateNestedOneWithoutStartEdgesInput = {
    create?: XOR<NodeCreateWithoutStartEdgesInput, NodeUncheckedCreateWithoutStartEdgesInput>
    connectOrCreate?: NodeCreateOrConnectWithoutStartEdgesInput
    connect?: NodeWhereUniqueInput
  }

  export type NodeCreateNestedOneWithoutEndEdgesInput = {
    create?: XOR<NodeCreateWithoutEndEdgesInput, NodeUncheckedCreateWithoutEndEdgesInput>
    connectOrCreate?: NodeCreateOrConnectWithoutEndEdgesInput
    connect?: NodeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NodeUpdateOneRequiredWithoutStartEdgesNestedInput = {
    create?: XOR<NodeCreateWithoutStartEdgesInput, NodeUncheckedCreateWithoutStartEdgesInput>
    connectOrCreate?: NodeCreateOrConnectWithoutStartEdgesInput
    upsert?: NodeUpsertWithoutStartEdgesInput
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutStartEdgesInput, NodeUpdateWithoutStartEdgesInput>, NodeUncheckedUpdateWithoutStartEdgesInput>
  }

  export type NodeUpdateOneRequiredWithoutEndEdgesNestedInput = {
    create?: XOR<NodeCreateWithoutEndEdgesInput, NodeUncheckedCreateWithoutEndEdgesInput>
    connectOrCreate?: NodeCreateOrConnectWithoutEndEdgesInput
    upsert?: NodeUpsertWithoutEndEdgesInput
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutEndEdgesInput, NodeUpdateWithoutEndEdgesInput>, NodeUncheckedUpdateWithoutEndEdgesInput>
  }

  export type EdgeCreateNestedManyWithoutStartNodeInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutStartNodeInput>, Enumerable<EdgeUncheckedCreateWithoutStartNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutStartNodeInput>
    createMany?: EdgeCreateManyStartNodeInputEnvelope
    connect?: Enumerable<EdgeWhereUniqueInput>
  }

  export type EdgeCreateNestedManyWithoutEndNodeInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutEndNodeInput>, Enumerable<EdgeUncheckedCreateWithoutEndNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutEndNodeInput>
    createMany?: EdgeCreateManyEndNodeInputEnvelope
    connect?: Enumerable<EdgeWhereUniqueInput>
  }

  export type EdgeUncheckedCreateNestedManyWithoutStartNodeInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutStartNodeInput>, Enumerable<EdgeUncheckedCreateWithoutStartNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutStartNodeInput>
    createMany?: EdgeCreateManyStartNodeInputEnvelope
    connect?: Enumerable<EdgeWhereUniqueInput>
  }

  export type EdgeUncheckedCreateNestedManyWithoutEndNodeInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutEndNodeInput>, Enumerable<EdgeUncheckedCreateWithoutEndNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutEndNodeInput>
    createMany?: EdgeCreateManyEndNodeInputEnvelope
    connect?: Enumerable<EdgeWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EdgeUpdateManyWithoutStartNodeNestedInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutStartNodeInput>, Enumerable<EdgeUncheckedCreateWithoutStartNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutStartNodeInput>
    upsert?: Enumerable<EdgeUpsertWithWhereUniqueWithoutStartNodeInput>
    createMany?: EdgeCreateManyStartNodeInputEnvelope
    set?: Enumerable<EdgeWhereUniqueInput>
    disconnect?: Enumerable<EdgeWhereUniqueInput>
    delete?: Enumerable<EdgeWhereUniqueInput>
    connect?: Enumerable<EdgeWhereUniqueInput>
    update?: Enumerable<EdgeUpdateWithWhereUniqueWithoutStartNodeInput>
    updateMany?: Enumerable<EdgeUpdateManyWithWhereWithoutStartNodeInput>
    deleteMany?: Enumerable<EdgeScalarWhereInput>
  }

  export type EdgeUpdateManyWithoutEndNodeNestedInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutEndNodeInput>, Enumerable<EdgeUncheckedCreateWithoutEndNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutEndNodeInput>
    upsert?: Enumerable<EdgeUpsertWithWhereUniqueWithoutEndNodeInput>
    createMany?: EdgeCreateManyEndNodeInputEnvelope
    set?: Enumerable<EdgeWhereUniqueInput>
    disconnect?: Enumerable<EdgeWhereUniqueInput>
    delete?: Enumerable<EdgeWhereUniqueInput>
    connect?: Enumerable<EdgeWhereUniqueInput>
    update?: Enumerable<EdgeUpdateWithWhereUniqueWithoutEndNodeInput>
    updateMany?: Enumerable<EdgeUpdateManyWithWhereWithoutEndNodeInput>
    deleteMany?: Enumerable<EdgeScalarWhereInput>
  }

  export type EdgeUncheckedUpdateManyWithoutStartNodeNestedInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutStartNodeInput>, Enumerable<EdgeUncheckedCreateWithoutStartNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutStartNodeInput>
    upsert?: Enumerable<EdgeUpsertWithWhereUniqueWithoutStartNodeInput>
    createMany?: EdgeCreateManyStartNodeInputEnvelope
    set?: Enumerable<EdgeWhereUniqueInput>
    disconnect?: Enumerable<EdgeWhereUniqueInput>
    delete?: Enumerable<EdgeWhereUniqueInput>
    connect?: Enumerable<EdgeWhereUniqueInput>
    update?: Enumerable<EdgeUpdateWithWhereUniqueWithoutStartNodeInput>
    updateMany?: Enumerable<EdgeUpdateManyWithWhereWithoutStartNodeInput>
    deleteMany?: Enumerable<EdgeScalarWhereInput>
  }

  export type EdgeUncheckedUpdateManyWithoutEndNodeNestedInput = {
    create?: XOR<Enumerable<EdgeCreateWithoutEndNodeInput>, Enumerable<EdgeUncheckedCreateWithoutEndNodeInput>>
    connectOrCreate?: Enumerable<EdgeCreateOrConnectWithoutEndNodeInput>
    upsert?: Enumerable<EdgeUpsertWithWhereUniqueWithoutEndNodeInput>
    createMany?: EdgeCreateManyEndNodeInputEnvelope
    set?: Enumerable<EdgeWhereUniqueInput>
    disconnect?: Enumerable<EdgeWhereUniqueInput>
    delete?: Enumerable<EdgeWhereUniqueInput>
    connect?: Enumerable<EdgeWhereUniqueInput>
    update?: Enumerable<EdgeUpdateWithWhereUniqueWithoutEndNodeInput>
    updateMany?: Enumerable<EdgeUpdateManyWithWhereWithoutEndNodeInput>
    deleteMany?: Enumerable<EdgeScalarWhereInput>
  }

  export type FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<FlowerServiceRequestCreateWithoutServiceRequestInput, FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: FlowerServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: FlowerServiceRequestWhereUniqueInput
  }

  export type RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<RoomSchedulingRequestCreateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: RoomSchedulingRequestCreateOrConnectWithoutServiceRequestInput
    connect?: RoomSchedulingRequestWhereUniqueInput
  }

  export type MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<MedicalDeviceServiceRequestCreateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicalDeviceServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: MedicalDeviceServiceRequestWhereUniqueInput
  }

  export type GiftServiceRequestCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<GiftServiceRequestCreateWithoutServiceRequestInput, GiftServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: GiftServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: GiftServiceRequestWhereUniqueInput
  }

  export type MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicineDeliveryServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: MedicineDeliveryServiceRequestWhereUniqueInput
  }

  export type ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<ReligiousServiceRequestCreateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: ReligiousServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: ReligiousServiceRequestWhereUniqueInput
  }

  export type FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<FlowerServiceRequestCreateWithoutServiceRequestInput, FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: FlowerServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: FlowerServiceRequestWhereUniqueInput
  }

  export type RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<RoomSchedulingRequestCreateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: RoomSchedulingRequestCreateOrConnectWithoutServiceRequestInput
    connect?: RoomSchedulingRequestWhereUniqueInput
  }

  export type MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<MedicalDeviceServiceRequestCreateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicalDeviceServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: MedicalDeviceServiceRequestWhereUniqueInput
  }

  export type GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<GiftServiceRequestCreateWithoutServiceRequestInput, GiftServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: GiftServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: GiftServiceRequestWhereUniqueInput
  }

  export type MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicineDeliveryServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: MedicineDeliveryServiceRequestWhereUniqueInput
  }

  export type ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput = {
    create?: XOR<ReligiousServiceRequestCreateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: ReligiousServiceRequestCreateOrConnectWithoutServiceRequestInput
    connect?: ReligiousServiceRequestWhereUniqueInput
  }

  export type FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<FlowerServiceRequestCreateWithoutServiceRequestInput, FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: FlowerServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: FlowerServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: FlowerServiceRequestWhereInput | boolean
    delete?: FlowerServiceRequestWhereInput | boolean
    connect?: FlowerServiceRequestWhereUniqueInput
    update?: XOR<XOR<FlowerServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, FlowerServiceRequestUpdateWithoutServiceRequestInput>, FlowerServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<RoomSchedulingRequestCreateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: RoomSchedulingRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: RoomSchedulingRequestUpsertWithoutServiceRequestInput
    disconnect?: RoomSchedulingRequestWhereInput | boolean
    delete?: RoomSchedulingRequestWhereInput | boolean
    connect?: RoomSchedulingRequestWhereUniqueInput
    update?: XOR<XOR<RoomSchedulingRequestUpdateToOneWithWhereWithoutServiceRequestInput, RoomSchedulingRequestUpdateWithoutServiceRequestInput>, RoomSchedulingRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<MedicalDeviceServiceRequestCreateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicalDeviceServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: MedicalDeviceServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: MedicalDeviceServiceRequestWhereInput | boolean
    delete?: MedicalDeviceServiceRequestWhereInput | boolean
    connect?: MedicalDeviceServiceRequestWhereUniqueInput
    update?: XOR<XOR<MedicalDeviceServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, MedicalDeviceServiceRequestUpdateWithoutServiceRequestInput>, MedicalDeviceServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<GiftServiceRequestCreateWithoutServiceRequestInput, GiftServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: GiftServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: GiftServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: GiftServiceRequestWhereInput | boolean
    delete?: GiftServiceRequestWhereInput | boolean
    connect?: GiftServiceRequestWhereUniqueInput
    update?: XOR<XOR<GiftServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, GiftServiceRequestUpdateWithoutServiceRequestInput>, GiftServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicineDeliveryServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: MedicineDeliveryServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: MedicineDeliveryServiceRequestWhereInput | boolean
    delete?: MedicineDeliveryServiceRequestWhereInput | boolean
    connect?: MedicineDeliveryServiceRequestWhereUniqueInput
    update?: XOR<XOR<MedicineDeliveryServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, MedicineDeliveryServiceRequestUpdateWithoutServiceRequestInput>, MedicineDeliveryServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<ReligiousServiceRequestCreateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: ReligiousServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: ReligiousServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: ReligiousServiceRequestWhereInput | boolean
    delete?: ReligiousServiceRequestWhereInput | boolean
    connect?: ReligiousServiceRequestWhereUniqueInput
    update?: XOR<XOR<ReligiousServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, ReligiousServiceRequestUpdateWithoutServiceRequestInput>, ReligiousServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<FlowerServiceRequestCreateWithoutServiceRequestInput, FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: FlowerServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: FlowerServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: FlowerServiceRequestWhereInput | boolean
    delete?: FlowerServiceRequestWhereInput | boolean
    connect?: FlowerServiceRequestWhereUniqueInput
    update?: XOR<XOR<FlowerServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, FlowerServiceRequestUpdateWithoutServiceRequestInput>, FlowerServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<RoomSchedulingRequestCreateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: RoomSchedulingRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: RoomSchedulingRequestUpsertWithoutServiceRequestInput
    disconnect?: RoomSchedulingRequestWhereInput | boolean
    delete?: RoomSchedulingRequestWhereInput | boolean
    connect?: RoomSchedulingRequestWhereUniqueInput
    update?: XOR<XOR<RoomSchedulingRequestUpdateToOneWithWhereWithoutServiceRequestInput, RoomSchedulingRequestUpdateWithoutServiceRequestInput>, RoomSchedulingRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<MedicalDeviceServiceRequestCreateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicalDeviceServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: MedicalDeviceServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: MedicalDeviceServiceRequestWhereInput | boolean
    delete?: MedicalDeviceServiceRequestWhereInput | boolean
    connect?: MedicalDeviceServiceRequestWhereUniqueInput
    update?: XOR<XOR<MedicalDeviceServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, MedicalDeviceServiceRequestUpdateWithoutServiceRequestInput>, MedicalDeviceServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<GiftServiceRequestCreateWithoutServiceRequestInput, GiftServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: GiftServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: GiftServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: GiftServiceRequestWhereInput | boolean
    delete?: GiftServiceRequestWhereInput | boolean
    connect?: GiftServiceRequestWhereUniqueInput
    update?: XOR<XOR<GiftServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, GiftServiceRequestUpdateWithoutServiceRequestInput>, GiftServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: MedicineDeliveryServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: MedicineDeliveryServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: MedicineDeliveryServiceRequestWhereInput | boolean
    delete?: MedicineDeliveryServiceRequestWhereInput | boolean
    connect?: MedicineDeliveryServiceRequestWhereUniqueInput
    update?: XOR<XOR<MedicineDeliveryServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, MedicineDeliveryServiceRequestUpdateWithoutServiceRequestInput>, MedicineDeliveryServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput = {
    create?: XOR<ReligiousServiceRequestCreateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput>
    connectOrCreate?: ReligiousServiceRequestCreateOrConnectWithoutServiceRequestInput
    upsert?: ReligiousServiceRequestUpsertWithoutServiceRequestInput
    disconnect?: ReligiousServiceRequestWhereInput | boolean
    delete?: ReligiousServiceRequestWhereInput | boolean
    connect?: ReligiousServiceRequestWhereUniqueInput
    update?: XOR<XOR<ReligiousServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput, ReligiousServiceRequestUpdateWithoutServiceRequestInput>, ReligiousServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutFlowerServiceRequestInput = {
    create?: XOR<ServiceRequestCreateWithoutFlowerServiceRequestInput, ServiceRequestUncheckedCreateWithoutFlowerServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutFlowerServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutFlowerServiceRequestNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutFlowerServiceRequestInput, ServiceRequestUncheckedCreateWithoutFlowerServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutFlowerServiceRequestInput
    upsert?: ServiceRequestUpsertWithoutFlowerServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutFlowerServiceRequestInput, ServiceRequestUpdateWithoutFlowerServiceRequestInput>, ServiceRequestUncheckedUpdateWithoutFlowerServiceRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutRoomSchedulingRequestInput = {
    create?: XOR<ServiceRequestCreateWithoutRoomSchedulingRequestInput, ServiceRequestUncheckedCreateWithoutRoomSchedulingRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutRoomSchedulingRequestInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutRoomSchedulingRequestNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutRoomSchedulingRequestInput, ServiceRequestUncheckedCreateWithoutRoomSchedulingRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutRoomSchedulingRequestInput
    upsert?: ServiceRequestUpsertWithoutRoomSchedulingRequestInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutRoomSchedulingRequestInput, ServiceRequestUpdateWithoutRoomSchedulingRequestInput>, ServiceRequestUncheckedUpdateWithoutRoomSchedulingRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutMedicalDeviceServiceRequestInput = {
    create?: XOR<ServiceRequestCreateWithoutMedicalDeviceServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicalDeviceServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutMedicalDeviceServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutMedicalDeviceServiceRequestNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutMedicalDeviceServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicalDeviceServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutMedicalDeviceServiceRequestInput
    upsert?: ServiceRequestUpsertWithoutMedicalDeviceServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutMedicalDeviceServiceRequestInput, ServiceRequestUpdateWithoutMedicalDeviceServiceRequestInput>, ServiceRequestUncheckedUpdateWithoutMedicalDeviceServiceRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutReligiousServiceRequestInput = {
    create?: XOR<ServiceRequestCreateWithoutReligiousServiceRequestInput, ServiceRequestUncheckedCreateWithoutReligiousServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutReligiousServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutReligiousServiceRequestNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutReligiousServiceRequestInput, ServiceRequestUncheckedCreateWithoutReligiousServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutReligiousServiceRequestInput
    upsert?: ServiceRequestUpsertWithoutReligiousServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutReligiousServiceRequestInput, ServiceRequestUpdateWithoutReligiousServiceRequestInput>, ServiceRequestUncheckedUpdateWithoutReligiousServiceRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutGiftServiceRequestInput = {
    create?: XOR<ServiceRequestCreateWithoutGiftServiceRequestInput, ServiceRequestUncheckedCreateWithoutGiftServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutGiftServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutGiftServiceRequestNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutGiftServiceRequestInput, ServiceRequestUncheckedCreateWithoutGiftServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutGiftServiceRequestInput
    upsert?: ServiceRequestUpsertWithoutGiftServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutGiftServiceRequestInput, ServiceRequestUpdateWithoutGiftServiceRequestInput>, ServiceRequestUncheckedUpdateWithoutGiftServiceRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutMedicineDeliveryServiceRequestInput = {
    create?: XOR<ServiceRequestCreateWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicineDeliveryServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutMedicineDeliveryServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutMedicineDeliveryServiceRequestNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicineDeliveryServiceRequestInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutMedicineDeliveryServiceRequestInput
    upsert?: ServiceRequestUpsertWithoutMedicineDeliveryServiceRequestInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUpdateWithoutMedicineDeliveryServiceRequestInput>, ServiceRequestUncheckedUpdateWithoutMedicineDeliveryServiceRequestInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NodeCreateWithoutStartEdgesInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    endEdges?: EdgeCreateNestedManyWithoutEndNodeInput
  }

  export type NodeUncheckedCreateWithoutStartEdgesInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    endEdges?: EdgeUncheckedCreateNestedManyWithoutEndNodeInput
  }

  export type NodeCreateOrConnectWithoutStartEdgesInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutStartEdgesInput, NodeUncheckedCreateWithoutStartEdgesInput>
  }

  export type NodeCreateWithoutEndEdgesInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    startEdges?: EdgeCreateNestedManyWithoutStartNodeInput
  }

  export type NodeUncheckedCreateWithoutEndEdgesInput = {
    nodeID: string
    xcoord: number
    ycoord: number
    floor: string
    building: string
    nodeType: string
    longName: string
    shortName: string
    startEdges?: EdgeUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NodeCreateOrConnectWithoutEndEdgesInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutEndEdgesInput, NodeUncheckedCreateWithoutEndEdgesInput>
  }

  export type NodeUpsertWithoutStartEdgesInput = {
    update: XOR<NodeUpdateWithoutStartEdgesInput, NodeUncheckedUpdateWithoutStartEdgesInput>
    create: XOR<NodeCreateWithoutStartEdgesInput, NodeUncheckedCreateWithoutStartEdgesInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutStartEdgesInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutStartEdgesInput, NodeUncheckedUpdateWithoutStartEdgesInput>
  }

  export type NodeUpdateWithoutStartEdgesInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    endEdges?: EdgeUpdateManyWithoutEndNodeNestedInput
  }

  export type NodeUncheckedUpdateWithoutStartEdgesInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    endEdges?: EdgeUncheckedUpdateManyWithoutEndNodeNestedInput
  }

  export type NodeUpsertWithoutEndEdgesInput = {
    update: XOR<NodeUpdateWithoutEndEdgesInput, NodeUncheckedUpdateWithoutEndEdgesInput>
    create: XOR<NodeCreateWithoutEndEdgesInput, NodeUncheckedCreateWithoutEndEdgesInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutEndEdgesInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutEndEdgesInput, NodeUncheckedUpdateWithoutEndEdgesInput>
  }

  export type NodeUpdateWithoutEndEdgesInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    startEdges?: EdgeUpdateManyWithoutStartNodeNestedInput
  }

  export type NodeUncheckedUpdateWithoutEndEdgesInput = {
    nodeID?: StringFieldUpdateOperationsInput | string
    xcoord?: IntFieldUpdateOperationsInput | number
    ycoord?: IntFieldUpdateOperationsInput | number
    floor?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    longName?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    startEdges?: EdgeUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type EdgeCreateWithoutStartNodeInput = {
    edgeID: string
    endNode: NodeCreateNestedOneWithoutEndEdgesInput
  }

  export type EdgeUncheckedCreateWithoutStartNodeInput = {
    edgeID: string
    endNodeID: string
  }

  export type EdgeCreateOrConnectWithoutStartNodeInput = {
    where: EdgeWhereUniqueInput
    create: XOR<EdgeCreateWithoutStartNodeInput, EdgeUncheckedCreateWithoutStartNodeInput>
  }

  export type EdgeCreateManyStartNodeInputEnvelope = {
    data: Enumerable<EdgeCreateManyStartNodeInput>
    skipDuplicates?: boolean
  }

  export type EdgeCreateWithoutEndNodeInput = {
    edgeID: string
    startNode: NodeCreateNestedOneWithoutStartEdgesInput
  }

  export type EdgeUncheckedCreateWithoutEndNodeInput = {
    edgeID: string
    startNodeID: string
  }

  export type EdgeCreateOrConnectWithoutEndNodeInput = {
    where: EdgeWhereUniqueInput
    create: XOR<EdgeCreateWithoutEndNodeInput, EdgeUncheckedCreateWithoutEndNodeInput>
  }

  export type EdgeCreateManyEndNodeInputEnvelope = {
    data: Enumerable<EdgeCreateManyEndNodeInput>
    skipDuplicates?: boolean
  }

  export type EdgeUpsertWithWhereUniqueWithoutStartNodeInput = {
    where: EdgeWhereUniqueInput
    update: XOR<EdgeUpdateWithoutStartNodeInput, EdgeUncheckedUpdateWithoutStartNodeInput>
    create: XOR<EdgeCreateWithoutStartNodeInput, EdgeUncheckedCreateWithoutStartNodeInput>
  }

  export type EdgeUpdateWithWhereUniqueWithoutStartNodeInput = {
    where: EdgeWhereUniqueInput
    data: XOR<EdgeUpdateWithoutStartNodeInput, EdgeUncheckedUpdateWithoutStartNodeInput>
  }

  export type EdgeUpdateManyWithWhereWithoutStartNodeInput = {
    where: EdgeScalarWhereInput
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyWithoutStartNodeInput>
  }

  export type EdgeScalarWhereInput = {
    AND?: Enumerable<EdgeScalarWhereInput>
    OR?: Enumerable<EdgeScalarWhereInput>
    NOT?: Enumerable<EdgeScalarWhereInput>
    edgeID?: StringFilter<"Edge"> | string
    startNodeID?: StringFilter<"Edge"> | string
    endNodeID?: StringFilter<"Edge"> | string
  }

  export type EdgeUpsertWithWhereUniqueWithoutEndNodeInput = {
    where: EdgeWhereUniqueInput
    update: XOR<EdgeUpdateWithoutEndNodeInput, EdgeUncheckedUpdateWithoutEndNodeInput>
    create: XOR<EdgeCreateWithoutEndNodeInput, EdgeUncheckedCreateWithoutEndNodeInput>
  }

  export type EdgeUpdateWithWhereUniqueWithoutEndNodeInput = {
    where: EdgeWhereUniqueInput
    data: XOR<EdgeUpdateWithoutEndNodeInput, EdgeUncheckedUpdateWithoutEndNodeInput>
  }

  export type EdgeUpdateManyWithWhereWithoutEndNodeInput = {
    where: EdgeScalarWhereInput
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyWithoutEndNodeInput>
  }

  export type FlowerServiceRequestCreateWithoutServiceRequestInput = {
    flowerType: string
    senderName: string
    receiverName: string
    deliveryDate: string
  }

  export type FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput = {
    flowerType: string
    senderName: string
    receiverName: string
    deliveryDate: string
  }

  export type FlowerServiceRequestCreateOrConnectWithoutServiceRequestInput = {
    where: FlowerServiceRequestWhereUniqueInput
    create: XOR<FlowerServiceRequestCreateWithoutServiceRequestInput, FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput>
  }

  export type RoomSchedulingRequestCreateWithoutServiceRequestInput = {
    startTime: string
    endTime: string
  }

  export type RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput = {
    startTime: string
    endTime: string
  }

  export type RoomSchedulingRequestCreateOrConnectWithoutServiceRequestInput = {
    where: RoomSchedulingRequestWhereUniqueInput
    create: XOR<RoomSchedulingRequestCreateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput>
  }

  export type MedicalDeviceServiceRequestCreateWithoutServiceRequestInput = {
    deviceName: string
    deviceQuantity: string
  }

  export type MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput = {
    deviceName: string
    deviceQuantity: string
  }

  export type MedicalDeviceServiceRequestCreateOrConnectWithoutServiceRequestInput = {
    where: MedicalDeviceServiceRequestWhereUniqueInput
    create: XOR<MedicalDeviceServiceRequestCreateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput>
  }

  export type GiftServiceRequestCreateWithoutServiceRequestInput = {
    senderName: string
    receiverName: string
    giftType: string
    deliveryDate: string
  }

  export type GiftServiceRequestUncheckedCreateWithoutServiceRequestInput = {
    senderName: string
    receiverName: string
    giftType: string
    deliveryDate: string
  }

  export type GiftServiceRequestCreateOrConnectWithoutServiceRequestInput = {
    where: GiftServiceRequestWhereUniqueInput
    create: XOR<GiftServiceRequestCreateWithoutServiceRequestInput, GiftServiceRequestUncheckedCreateWithoutServiceRequestInput>
  }

  export type MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput = {
    medicineType: string
    dosageType: string
    dosageAmount: string
  }

  export type MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput = {
    medicineType: string
    dosageType: string
    dosageAmount: string
  }

  export type MedicineDeliveryServiceRequestCreateOrConnectWithoutServiceRequestInput = {
    where: MedicineDeliveryServiceRequestWhereUniqueInput
    create: XOR<MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput>
  }

  export type ReligiousServiceRequestCreateWithoutServiceRequestInput = {
    religionName: string
    objectName: string
  }

  export type ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput = {
    religionName: string
    objectName: string
  }

  export type ReligiousServiceRequestCreateOrConnectWithoutServiceRequestInput = {
    where: ReligiousServiceRequestWhereUniqueInput
    create: XOR<ReligiousServiceRequestCreateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput>
  }

  export type FlowerServiceRequestUpsertWithoutServiceRequestInput = {
    update: XOR<FlowerServiceRequestUpdateWithoutServiceRequestInput, FlowerServiceRequestUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<FlowerServiceRequestCreateWithoutServiceRequestInput, FlowerServiceRequestUncheckedCreateWithoutServiceRequestInput>
    where?: FlowerServiceRequestWhereInput
  }

  export type FlowerServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput = {
    where?: FlowerServiceRequestWhereInput
    data: XOR<FlowerServiceRequestUpdateWithoutServiceRequestInput, FlowerServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type FlowerServiceRequestUpdateWithoutServiceRequestInput = {
    flowerType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type FlowerServiceRequestUncheckedUpdateWithoutServiceRequestInput = {
    flowerType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type RoomSchedulingRequestUpsertWithoutServiceRequestInput = {
    update: XOR<RoomSchedulingRequestUpdateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<RoomSchedulingRequestCreateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedCreateWithoutServiceRequestInput>
    where?: RoomSchedulingRequestWhereInput
  }

  export type RoomSchedulingRequestUpdateToOneWithWhereWithoutServiceRequestInput = {
    where?: RoomSchedulingRequestWhereInput
    data: XOR<RoomSchedulingRequestUpdateWithoutServiceRequestInput, RoomSchedulingRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type RoomSchedulingRequestUpdateWithoutServiceRequestInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type RoomSchedulingRequestUncheckedUpdateWithoutServiceRequestInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalDeviceServiceRequestUpsertWithoutServiceRequestInput = {
    update: XOR<MedicalDeviceServiceRequestUpdateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<MedicalDeviceServiceRequestCreateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedCreateWithoutServiceRequestInput>
    where?: MedicalDeviceServiceRequestWhereInput
  }

  export type MedicalDeviceServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput = {
    where?: MedicalDeviceServiceRequestWhereInput
    data: XOR<MedicalDeviceServiceRequestUpdateWithoutServiceRequestInput, MedicalDeviceServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type MedicalDeviceServiceRequestUpdateWithoutServiceRequestInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    deviceQuantity?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalDeviceServiceRequestUncheckedUpdateWithoutServiceRequestInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    deviceQuantity?: StringFieldUpdateOperationsInput | string
  }

  export type GiftServiceRequestUpsertWithoutServiceRequestInput = {
    update: XOR<GiftServiceRequestUpdateWithoutServiceRequestInput, GiftServiceRequestUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<GiftServiceRequestCreateWithoutServiceRequestInput, GiftServiceRequestUncheckedCreateWithoutServiceRequestInput>
    where?: GiftServiceRequestWhereInput
  }

  export type GiftServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput = {
    where?: GiftServiceRequestWhereInput
    data: XOR<GiftServiceRequestUpdateWithoutServiceRequestInput, GiftServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type GiftServiceRequestUpdateWithoutServiceRequestInput = {
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    giftType?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type GiftServiceRequestUncheckedUpdateWithoutServiceRequestInput = {
    senderName?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    giftType?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineDeliveryServiceRequestUpsertWithoutServiceRequestInput = {
    update: XOR<MedicineDeliveryServiceRequestUpdateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<MedicineDeliveryServiceRequestCreateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedCreateWithoutServiceRequestInput>
    where?: MedicineDeliveryServiceRequestWhereInput
  }

  export type MedicineDeliveryServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput = {
    where?: MedicineDeliveryServiceRequestWhereInput
    data: XOR<MedicineDeliveryServiceRequestUpdateWithoutServiceRequestInput, MedicineDeliveryServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type MedicineDeliveryServiceRequestUpdateWithoutServiceRequestInput = {
    medicineType?: StringFieldUpdateOperationsInput | string
    dosageType?: StringFieldUpdateOperationsInput | string
    dosageAmount?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineDeliveryServiceRequestUncheckedUpdateWithoutServiceRequestInput = {
    medicineType?: StringFieldUpdateOperationsInput | string
    dosageType?: StringFieldUpdateOperationsInput | string
    dosageAmount?: StringFieldUpdateOperationsInput | string
  }

  export type ReligiousServiceRequestUpsertWithoutServiceRequestInput = {
    update: XOR<ReligiousServiceRequestUpdateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<ReligiousServiceRequestCreateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedCreateWithoutServiceRequestInput>
    where?: ReligiousServiceRequestWhereInput
  }

  export type ReligiousServiceRequestUpdateToOneWithWhereWithoutServiceRequestInput = {
    where?: ReligiousServiceRequestWhereInput
    data: XOR<ReligiousServiceRequestUpdateWithoutServiceRequestInput, ReligiousServiceRequestUncheckedUpdateWithoutServiceRequestInput>
  }

  export type ReligiousServiceRequestUpdateWithoutServiceRequestInput = {
    religionName?: StringFieldUpdateOperationsInput | string
    objectName?: StringFieldUpdateOperationsInput | string
  }

  export type ReligiousServiceRequestUncheckedUpdateWithoutServiceRequestInput = {
    religionName?: StringFieldUpdateOperationsInput | string
    objectName?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestCreateWithoutFlowerServiceRequestInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    RoomSchedulingRequest?: RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutFlowerServiceRequestInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutFlowerServiceRequestInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutFlowerServiceRequestInput, ServiceRequestUncheckedCreateWithoutFlowerServiceRequestInput>
  }

  export type ServiceRequestUpsertWithoutFlowerServiceRequestInput = {
    update: XOR<ServiceRequestUpdateWithoutFlowerServiceRequestInput, ServiceRequestUncheckedUpdateWithoutFlowerServiceRequestInput>
    create: XOR<ServiceRequestCreateWithoutFlowerServiceRequestInput, ServiceRequestUncheckedCreateWithoutFlowerServiceRequestInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutFlowerServiceRequestInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutFlowerServiceRequestInput, ServiceRequestUncheckedUpdateWithoutFlowerServiceRequestInput>
  }

  export type ServiceRequestUpdateWithoutFlowerServiceRequestInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    RoomSchedulingRequest?: RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutFlowerServiceRequestInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateWithoutRoomSchedulingRequestInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutRoomSchedulingRequestInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutRoomSchedulingRequestInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutRoomSchedulingRequestInput, ServiceRequestUncheckedCreateWithoutRoomSchedulingRequestInput>
  }

  export type ServiceRequestUpsertWithoutRoomSchedulingRequestInput = {
    update: XOR<ServiceRequestUpdateWithoutRoomSchedulingRequestInput, ServiceRequestUncheckedUpdateWithoutRoomSchedulingRequestInput>
    create: XOR<ServiceRequestCreateWithoutRoomSchedulingRequestInput, ServiceRequestUncheckedCreateWithoutRoomSchedulingRequestInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutRoomSchedulingRequestInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutRoomSchedulingRequestInput, ServiceRequestUncheckedUpdateWithoutRoomSchedulingRequestInput>
  }

  export type ServiceRequestUpdateWithoutRoomSchedulingRequestInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutRoomSchedulingRequestInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateWithoutMedicalDeviceServiceRequestInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutMedicalDeviceServiceRequestInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutMedicalDeviceServiceRequestInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutMedicalDeviceServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicalDeviceServiceRequestInput>
  }

  export type ServiceRequestUpsertWithoutMedicalDeviceServiceRequestInput = {
    update: XOR<ServiceRequestUpdateWithoutMedicalDeviceServiceRequestInput, ServiceRequestUncheckedUpdateWithoutMedicalDeviceServiceRequestInput>
    create: XOR<ServiceRequestCreateWithoutMedicalDeviceServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicalDeviceServiceRequestInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutMedicalDeviceServiceRequestInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutMedicalDeviceServiceRequestInput, ServiceRequestUncheckedUpdateWithoutMedicalDeviceServiceRequestInput>
  }

  export type ServiceRequestUpdateWithoutMedicalDeviceServiceRequestInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutMedicalDeviceServiceRequestInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateWithoutReligiousServiceRequestInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutReligiousServiceRequestInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutReligiousServiceRequestInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutReligiousServiceRequestInput, ServiceRequestUncheckedCreateWithoutReligiousServiceRequestInput>
  }

  export type ServiceRequestUpsertWithoutReligiousServiceRequestInput = {
    update: XOR<ServiceRequestUpdateWithoutReligiousServiceRequestInput, ServiceRequestUncheckedUpdateWithoutReligiousServiceRequestInput>
    create: XOR<ServiceRequestCreateWithoutReligiousServiceRequestInput, ServiceRequestUncheckedCreateWithoutReligiousServiceRequestInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutReligiousServiceRequestInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutReligiousServiceRequestInput, ServiceRequestUncheckedUpdateWithoutReligiousServiceRequestInput>
  }

  export type ServiceRequestUpdateWithoutReligiousServiceRequestInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutReligiousServiceRequestInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateWithoutGiftServiceRequestInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutGiftServiceRequestInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutGiftServiceRequestInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutGiftServiceRequestInput, ServiceRequestUncheckedCreateWithoutGiftServiceRequestInput>
  }

  export type ServiceRequestUpsertWithoutGiftServiceRequestInput = {
    update: XOR<ServiceRequestUpdateWithoutGiftServiceRequestInput, ServiceRequestUncheckedUpdateWithoutGiftServiceRequestInput>
    create: XOR<ServiceRequestCreateWithoutGiftServiceRequestInput, ServiceRequestUncheckedCreateWithoutGiftServiceRequestInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutGiftServiceRequestInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutGiftServiceRequestInput, ServiceRequestUncheckedUpdateWithoutGiftServiceRequestInput>
  }

  export type ServiceRequestUpdateWithoutGiftServiceRequestInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutGiftServiceRequestInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicineDeliveryServiceRequest?: MedicineDeliveryServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateWithoutMedicineDeliveryServiceRequestInput = {
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutMedicineDeliveryServiceRequestInput = {
    SRID?: number
    employeeName: string
    priority: string
    location: string
    status: string
    serviceType: string
    description: string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    GiftServiceRequest?: GiftServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedCreateNestedOneWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutMedicineDeliveryServiceRequestInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicineDeliveryServiceRequestInput>
  }

  export type ServiceRequestUpsertWithoutMedicineDeliveryServiceRequestInput = {
    update: XOR<ServiceRequestUpdateWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUncheckedUpdateWithoutMedicineDeliveryServiceRequestInput>
    create: XOR<ServiceRequestCreateWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUncheckedCreateWithoutMedicineDeliveryServiceRequestInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutMedicineDeliveryServiceRequestInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutMedicineDeliveryServiceRequestInput, ServiceRequestUncheckedUpdateWithoutMedicineDeliveryServiceRequestInput>
  }

  export type ServiceRequestUpdateWithoutMedicineDeliveryServiceRequestInput = {
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUpdateOneWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutMedicineDeliveryServiceRequestInput = {
    SRID?: IntFieldUpdateOperationsInput | number
    employeeName?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    FlowerServiceRequest?: FlowerServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    RoomSchedulingRequest?: RoomSchedulingRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    MedicalDeviceServiceRequest?: MedicalDeviceServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    GiftServiceRequest?: GiftServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
    ReligiousServiceRequest?: ReligiousServiceRequestUncheckedUpdateOneWithoutServiceRequestNestedInput
  }

  export type EdgeCreateManyStartNodeInput = {
    edgeID: string
    endNodeID: string
  }

  export type EdgeCreateManyEndNodeInput = {
    edgeID: string
    startNodeID: string
  }

  export type EdgeUpdateWithoutStartNodeInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    endNode?: NodeUpdateOneRequiredWithoutEndEdgesNestedInput
  }

  export type EdgeUncheckedUpdateWithoutStartNodeInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    endNodeID?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeUncheckedUpdateManyWithoutStartNodeInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    endNodeID?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeUpdateWithoutEndNodeInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    startNode?: NodeUpdateOneRequiredWithoutStartEdgesNestedInput
  }

  export type EdgeUncheckedUpdateWithoutEndNodeInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    startNodeID?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeUncheckedUpdateManyWithoutEndNodeInput = {
    edgeID?: StringFieldUpdateOperationsInput | string
    startNodeID?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}