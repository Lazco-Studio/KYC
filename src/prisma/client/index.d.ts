
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Applicant
 * 
 */
export type Applicant = $Result.DefaultSelection<Prisma.$ApplicantPayload>
/**
 * Model KycSession
 * 
 */
export type KycSession = $Result.DefaultSelection<Prisma.$KycSessionPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Decision
 * 
 */
export type Decision = $Result.DefaultSelection<Prisma.$DecisionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model OutboundWebhookLog
 * 
 */
export type OutboundWebhookLog = $Result.DefaultSelection<Prisma.$OutboundWebhookLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Residency: {
  TW: 'TW',
  OTHER: 'OTHER'
};

export type Residency = (typeof Residency)[keyof typeof Residency]


export const KycStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  NEEDS_MORE_INFO: 'NEEDS_MORE_INFO',
  EXPIRED: 'EXPIRED'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]


export const DocType: {
  TW_ID_FRONT: 'TW_ID_FRONT',
  TW_ID_BACK: 'TW_ID_BACK',
  TW_SECOND_NHI: 'TW_SECOND_NHI',
  TW_SECOND_DL: 'TW_SECOND_DL',
  TW_SECOND_RC: 'TW_SECOND_RC',
  TW_SECOND_PASSPORT: 'TW_SECOND_PASSPORT',
  OTHER_PASSPORT: 'OTHER_PASSPORT'
};

export type DocType = (typeof DocType)[keyof typeof DocType]


export const Severity: {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  SECURITY: 'SECURITY'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const ActorType: {
  SYSTEM: 'SYSTEM',
  USER: 'USER',
  ADMIN: 'ADMIN',
  WHMCS: 'WHMCS',
  CRON: 'CRON'
};

export type ActorType = (typeof ActorType)[keyof typeof ActorType]

}

export type Residency = $Enums.Residency

export const Residency: typeof $Enums.Residency

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

export type DocType = $Enums.DocType

export const DocType: typeof $Enums.DocType

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type ActorType = $Enums.ActorType

export const ActorType: typeof $Enums.ActorType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applicants
 * const applicants = await prisma.applicant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.applicant`: Exposes CRUD operations for the **Applicant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicant.findMany()
    * ```
    */
  get applicant(): Prisma.ApplicantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kycSession`: Exposes CRUD operations for the **KycSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycSessions
    * const kycSessions = await prisma.kycSession.findMany()
    * ```
    */
  get kycSession(): Prisma.KycSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decision`: Exposes CRUD operations for the **Decision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decisions
    * const decisions = await prisma.decision.findMany()
    * ```
    */
  get decision(): Prisma.DecisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outboundWebhookLog`: Exposes CRUD operations for the **OutboundWebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutboundWebhookLogs
    * const outboundWebhookLogs = await prisma.outboundWebhookLog.findMany()
    * ```
    */
  get outboundWebhookLog(): Prisma.OutboundWebhookLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Applicant: 'Applicant',
    KycSession: 'KycSession',
    Document: 'Document',
    Decision: 'Decision',
    AuditLog: 'AuditLog',
    OutboundWebhookLog: 'OutboundWebhookLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "applicant" | "kycSession" | "document" | "decision" | "auditLog" | "outboundWebhookLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Applicant: {
        payload: Prisma.$ApplicantPayload<ExtArgs>
        fields: Prisma.ApplicantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findFirst: {
            args: Prisma.ApplicantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findMany: {
            args: Prisma.ApplicantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          create: {
            args: Prisma.ApplicantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          createMany: {
            args: Prisma.ApplicantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          delete: {
            args: Prisma.ApplicantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          update: {
            args: Prisma.ApplicantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          deleteMany: {
            args: Prisma.ApplicantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          upsert: {
            args: Prisma.ApplicantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicant>
          }
          groupBy: {
            args: Prisma.ApplicantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicantCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number
          }
        }
      }
      KycSession: {
        payload: Prisma.$KycSessionPayload<ExtArgs>
        fields: Prisma.KycSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          findFirst: {
            args: Prisma.KycSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          findMany: {
            args: Prisma.KycSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>[]
          }
          create: {
            args: Prisma.KycSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          createMany: {
            args: Prisma.KycSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KycSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>[]
          }
          delete: {
            args: Prisma.KycSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          update: {
            args: Prisma.KycSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          deleteMany: {
            args: Prisma.KycSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KycSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KycSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>[]
          }
          upsert: {
            args: Prisma.KycSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycSessionPayload>
          }
          aggregate: {
            args: Prisma.KycSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKycSession>
          }
          groupBy: {
            args: Prisma.KycSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<KycSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycSessionCountArgs<ExtArgs>
            result: $Utils.Optional<KycSessionCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Decision: {
        payload: Prisma.$DecisionPayload<ExtArgs>
        fields: Prisma.DecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findFirst: {
            args: Prisma.DecisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findMany: {
            args: Prisma.DecisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          create: {
            args: Prisma.DecisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          createMany: {
            args: Prisma.DecisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          delete: {
            args: Prisma.DecisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          update: {
            args: Prisma.DecisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          deleteMany: {
            args: Prisma.DecisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DecisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          upsert: {
            args: Prisma.DecisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          aggregate: {
            args: Prisma.DecisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecision>
          }
          groupBy: {
            args: Prisma.DecisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionCountArgs<ExtArgs>
            result: $Utils.Optional<DecisionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      OutboundWebhookLog: {
        payload: Prisma.$OutboundWebhookLogPayload<ExtArgs>
        fields: Prisma.OutboundWebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboundWebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboundWebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>
          }
          findFirst: {
            args: Prisma.OutboundWebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboundWebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>
          }
          findMany: {
            args: Prisma.OutboundWebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>[]
          }
          create: {
            args: Prisma.OutboundWebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>
          }
          createMany: {
            args: Prisma.OutboundWebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutboundWebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>[]
          }
          delete: {
            args: Prisma.OutboundWebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>
          }
          update: {
            args: Prisma.OutboundWebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.OutboundWebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboundWebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutboundWebhookLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>[]
          }
          upsert: {
            args: Prisma.OutboundWebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundWebhookLogPayload>
          }
          aggregate: {
            args: Prisma.OutboundWebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutboundWebhookLog>
          }
          groupBy: {
            args: Prisma.OutboundWebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboundWebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboundWebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<OutboundWebhookLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    applicant?: ApplicantOmit
    kycSession?: KycSessionOmit
    document?: DocumentOmit
    decision?: DecisionOmit
    auditLog?: AuditLogOmit
    outboundWebhookLog?: OutboundWebhookLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApplicantCountOutputType
   */

  export type ApplicantCountOutputType = {
    sessions: number
  }

  export type ApplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | ApplicantCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantCountOutputType
     */
    select?: ApplicantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycSessionWhereInput
  }


  /**
   * Count Type KycSessionCountOutputType
   */

  export type KycSessionCountOutputType = {
    documents: number
    decisions: number
    auditLogs: number
  }

  export type KycSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | KycSessionCountOutputTypeCountDocumentsArgs
    decisions?: boolean | KycSessionCountOutputTypeCountDecisionsArgs
    auditLogs?: boolean | KycSessionCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * KycSessionCountOutputType without action
   */
  export type KycSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSessionCountOutputType
     */
    select?: KycSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KycSessionCountOutputType without action
   */
  export type KycSessionCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * KycSessionCountOutputType without action
   */
  export type KycSessionCountOutputTypeCountDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
  }

  /**
   * KycSessionCountOutputType without action
   */
  export type KycSessionCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null
    _avg: ApplicantAvgAggregateOutputType | null
    _sum: ApplicantSumAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  export type ApplicantAvgAggregateOutputType = {
    whmcsClientId: number | null
  }

  export type ApplicantSumAggregateOutputType = {
    whmcsClientId: number | null
  }

  export type ApplicantMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    whmcsClientId: number | null
    email: string | null
    residency: $Enums.Residency | null
    latestSessionId: string | null
  }

  export type ApplicantMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    whmcsClientId: number | null
    email: string | null
    residency: $Enums.Residency | null
    latestSessionId: string | null
  }

  export type ApplicantCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    whmcsClientId: number
    email: number
    residency: number
    latestSessionId: number
    _all: number
  }


  export type ApplicantAvgAggregateInputType = {
    whmcsClientId?: true
  }

  export type ApplicantSumAggregateInputType = {
    whmcsClientId?: true
  }

  export type ApplicantMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    whmcsClientId?: true
    email?: true
    residency?: true
    latestSessionId?: true
  }

  export type ApplicantMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    whmcsClientId?: true
    email?: true
    residency?: true
    latestSessionId?: true
  }

  export type ApplicantCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    whmcsClientId?: true
    email?: true
    residency?: true
    latestSessionId?: true
    _all?: true
  }

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applicants
    **/
    _count?: true | ApplicantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantMaxAggregateInputType
  }

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>
  }




  export type ApplicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantWhereInput
    orderBy?: ApplicantOrderByWithAggregationInput | ApplicantOrderByWithAggregationInput[]
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum
    having?: ApplicantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantCountAggregateInputType | true
    _avg?: ApplicantAvgAggregateInputType
    _sum?: ApplicantSumAggregateInputType
    _min?: ApplicantMinAggregateInputType
    _max?: ApplicantMaxAggregateInputType
  }

  export type ApplicantGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    whmcsClientId: number
    email: string
    residency: $Enums.Residency | null
    latestSessionId: string | null
    _count: ApplicantCountAggregateOutputType | null
    _avg: ApplicantAvgAggregateOutputType | null
    _sum: ApplicantSumAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
        }
      >
    >


  export type ApplicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whmcsClientId?: boolean
    email?: boolean
    residency?: boolean
    latestSessionId?: boolean
    latestSession?: boolean | Applicant$latestSessionArgs<ExtArgs>
    sessions?: boolean | Applicant$sessionsArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whmcsClientId?: boolean
    email?: boolean
    residency?: boolean
    latestSessionId?: boolean
    latestSession?: boolean | Applicant$latestSessionArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whmcsClientId?: boolean
    email?: boolean
    residency?: boolean
    latestSessionId?: boolean
    latestSession?: boolean | Applicant$latestSessionArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whmcsClientId?: boolean
    email?: boolean
    residency?: boolean
    latestSessionId?: boolean
  }

  export type ApplicantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "whmcsClientId" | "email" | "residency" | "latestSessionId", ExtArgs["result"]["applicant"]>
  export type ApplicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    latestSession?: boolean | Applicant$latestSessionArgs<ExtArgs>
    sessions?: boolean | Applicant$sessionsArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    latestSession?: boolean | Applicant$latestSessionArgs<ExtArgs>
  }
  export type ApplicantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    latestSession?: boolean | Applicant$latestSessionArgs<ExtArgs>
  }

  export type $ApplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applicant"
    objects: {
      latestSession: Prisma.$KycSessionPayload<ExtArgs> | null
      sessions: Prisma.$KycSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      whmcsClientId: number
      email: string
      residency: $Enums.Residency | null
      latestSessionId: string | null
    }, ExtArgs["result"]["applicant"]>
    composites: {}
  }

  type ApplicantGetPayload<S extends boolean | null | undefined | ApplicantDefaultArgs> = $Result.GetResult<Prisma.$ApplicantPayload, S>

  type ApplicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantCountAggregateInputType | true
    }

  export interface ApplicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applicant'], meta: { name: 'Applicant' } }
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(args: SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(args?: SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicantFindManyArgs>(args?: SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     * 
     */
    create<T extends ApplicantCreateArgs>(args: SelectSubset<T, ApplicantCreateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicantCreateManyArgs>(args?: SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicantCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     * 
     */
    delete<T extends ApplicantDeleteArgs>(args: SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicantUpdateArgs>(args: SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(args?: SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicantUpdateManyArgs>(args: SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {ApplicantUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicantUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(args: SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends ApplicantCountArgs>(
      args?: Subset<T, ApplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicantAggregateArgs>(args: Subset<T, ApplicantAggregateArgs>): Prisma.PrismaPromise<GetApplicantAggregateType<T>>

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
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
      T extends ApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applicant model
   */
  readonly fields: ApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    latestSession<T extends Applicant$latestSessionArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$latestSessionArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Applicant$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applicant model
   */
  interface ApplicantFieldRefs {
    readonly id: FieldRef<"Applicant", 'String'>
    readonly createdAt: FieldRef<"Applicant", 'DateTime'>
    readonly updatedAt: FieldRef<"Applicant", 'DateTime'>
    readonly whmcsClientId: FieldRef<"Applicant", 'Int'>
    readonly email: FieldRef<"Applicant", 'String'>
    readonly residency: FieldRef<"Applicant", 'Residency'>
    readonly latestSessionId: FieldRef<"Applicant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Applicant findUnique
   */
  export type ApplicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findUniqueOrThrow
   */
  export type ApplicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findFirst
   */
  export type ApplicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findFirstOrThrow
   */
  export type ApplicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findMany
   */
  export type ApplicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant create
   */
  export type ApplicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to create a Applicant.
     */
    data: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
  }

  /**
   * Applicant createMany
   */
  export type ApplicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicant createManyAndReturn
   */
  export type ApplicantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applicant update
   */
  export type ApplicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to update a Applicant.
     */
    data: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
    /**
     * Choose, which Applicant to update.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant updateMany
   */
  export type ApplicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicant updateManyAndReturn
   */
  export type ApplicantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applicant upsert
   */
  export type ApplicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: ApplicantWhereUniqueInput
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
  }

  /**
   * Applicant delete
   */
  export type ApplicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter which Applicant to delete.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant deleteMany
   */
  export type ApplicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number
  }

  /**
   * Applicant.latestSession
   */
  export type Applicant$latestSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    where?: KycSessionWhereInput
  }

  /**
   * Applicant.sessions
   */
  export type Applicant$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    where?: KycSessionWhereInput
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    cursor?: KycSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * Applicant without action
   */
  export type ApplicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
  }


  /**
   * Model KycSession
   */

  export type AggregateKycSession = {
    _count: KycSessionCountAggregateOutputType | null
    _min: KycSessionMinAggregateOutputType | null
    _max: KycSessionMaxAggregateOutputType | null
  }

  export type KycSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    applicantId: string | null
    tokenSalt: string | null
    tokenHash: string | null
    expiresAt: Date | null
    consumedAt: Date | null
    status: $Enums.KycStatus | null
    residency: $Enums.Residency | null
  }

  export type KycSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    applicantId: string | null
    tokenSalt: string | null
    tokenHash: string | null
    expiresAt: Date | null
    consumedAt: Date | null
    status: $Enums.KycStatus | null
    residency: $Enums.Residency | null
  }

  export type KycSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    applicantId: number
    tokenSalt: number
    tokenHash: number
    expiresAt: number
    consumedAt: number
    status: number
    residency: number
    _all: number
  }


  export type KycSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    applicantId?: true
    tokenSalt?: true
    tokenHash?: true
    expiresAt?: true
    consumedAt?: true
    status?: true
    residency?: true
  }

  export type KycSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    applicantId?: true
    tokenSalt?: true
    tokenHash?: true
    expiresAt?: true
    consumedAt?: true
    status?: true
    residency?: true
  }

  export type KycSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    applicantId?: true
    tokenSalt?: true
    tokenHash?: true
    expiresAt?: true
    consumedAt?: true
    status?: true
    residency?: true
    _all?: true
  }

  export type KycSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycSession to aggregate.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycSessions
    **/
    _count?: true | KycSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycSessionMaxAggregateInputType
  }

  export type GetKycSessionAggregateType<T extends KycSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateKycSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycSession[P]>
      : GetScalarType<T[P], AggregateKycSession[P]>
  }




  export type KycSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycSessionWhereInput
    orderBy?: KycSessionOrderByWithAggregationInput | KycSessionOrderByWithAggregationInput[]
    by: KycSessionScalarFieldEnum[] | KycSessionScalarFieldEnum
    having?: KycSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycSessionCountAggregateInputType | true
    _min?: KycSessionMinAggregateInputType
    _max?: KycSessionMaxAggregateInputType
  }

  export type KycSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date
    consumedAt: Date | null
    status: $Enums.KycStatus
    residency: $Enums.Residency | null
    _count: KycSessionCountAggregateOutputType | null
    _min: KycSessionMinAggregateOutputType | null
    _max: KycSessionMaxAggregateOutputType | null
  }

  type GetKycSessionGroupByPayload<T extends KycSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycSessionGroupByOutputType[P]>
            : GetScalarType<T[P], KycSessionGroupByOutputType[P]>
        }
      >
    >


  export type KycSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicantId?: boolean
    tokenSalt?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    status?: boolean
    residency?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    documents?: boolean | KycSession$documentsArgs<ExtArgs>
    decisions?: boolean | KycSession$decisionsArgs<ExtArgs>
    auditLogs?: boolean | KycSession$auditLogsArgs<ExtArgs>
    latestFor?: boolean | KycSession$latestForArgs<ExtArgs>
    _count?: boolean | KycSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycSession"]>

  export type KycSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicantId?: boolean
    tokenSalt?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    status?: boolean
    residency?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycSession"]>

  export type KycSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicantId?: boolean
    tokenSalt?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    status?: boolean
    residency?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycSession"]>

  export type KycSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicantId?: boolean
    tokenSalt?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    status?: boolean
    residency?: boolean
  }

  export type KycSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "applicantId" | "tokenSalt" | "tokenHash" | "expiresAt" | "consumedAt" | "status" | "residency", ExtArgs["result"]["kycSession"]>
  export type KycSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    documents?: boolean | KycSession$documentsArgs<ExtArgs>
    decisions?: boolean | KycSession$decisionsArgs<ExtArgs>
    auditLogs?: boolean | KycSession$auditLogsArgs<ExtArgs>
    latestFor?: boolean | KycSession$latestForArgs<ExtArgs>
    _count?: boolean | KycSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KycSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type KycSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $KycSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycSession"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      decisions: Prisma.$DecisionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      latestFor: Prisma.$ApplicantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      applicantId: string
      tokenSalt: string
      tokenHash: string
      expiresAt: Date
      consumedAt: Date | null
      status: $Enums.KycStatus
      residency: $Enums.Residency | null
    }, ExtArgs["result"]["kycSession"]>
    composites: {}
  }

  type KycSessionGetPayload<S extends boolean | null | undefined | KycSessionDefaultArgs> = $Result.GetResult<Prisma.$KycSessionPayload, S>

  type KycSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KycSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KycSessionCountAggregateInputType | true
    }

  export interface KycSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycSession'], meta: { name: 'KycSession' } }
    /**
     * Find zero or one KycSession that matches the filter.
     * @param {KycSessionFindUniqueArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KycSessionFindUniqueArgs>(args: SelectSubset<T, KycSessionFindUniqueArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KycSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KycSessionFindUniqueOrThrowArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KycSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, KycSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionFindFirstArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KycSessionFindFirstArgs>(args?: SelectSubset<T, KycSessionFindFirstArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionFindFirstOrThrowArgs} args - Arguments to find a KycSession
     * @example
     * // Get one KycSession
     * const kycSession = await prisma.kycSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KycSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, KycSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KycSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycSessions
     * const kycSessions = await prisma.kycSession.findMany()
     * 
     * // Get first 10 KycSessions
     * const kycSessions = await prisma.kycSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycSessionWithIdOnly = await prisma.kycSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KycSessionFindManyArgs>(args?: SelectSubset<T, KycSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KycSession.
     * @param {KycSessionCreateArgs} args - Arguments to create a KycSession.
     * @example
     * // Create one KycSession
     * const KycSession = await prisma.kycSession.create({
     *   data: {
     *     // ... data to create a KycSession
     *   }
     * })
     * 
     */
    create<T extends KycSessionCreateArgs>(args: SelectSubset<T, KycSessionCreateArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KycSessions.
     * @param {KycSessionCreateManyArgs} args - Arguments to create many KycSessions.
     * @example
     * // Create many KycSessions
     * const kycSession = await prisma.kycSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KycSessionCreateManyArgs>(args?: SelectSubset<T, KycSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KycSessions and returns the data saved in the database.
     * @param {KycSessionCreateManyAndReturnArgs} args - Arguments to create many KycSessions.
     * @example
     * // Create many KycSessions
     * const kycSession = await prisma.kycSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KycSessions and only return the `id`
     * const kycSessionWithIdOnly = await prisma.kycSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KycSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, KycSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KycSession.
     * @param {KycSessionDeleteArgs} args - Arguments to delete one KycSession.
     * @example
     * // Delete one KycSession
     * const KycSession = await prisma.kycSession.delete({
     *   where: {
     *     // ... filter to delete one KycSession
     *   }
     * })
     * 
     */
    delete<T extends KycSessionDeleteArgs>(args: SelectSubset<T, KycSessionDeleteArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KycSession.
     * @param {KycSessionUpdateArgs} args - Arguments to update one KycSession.
     * @example
     * // Update one KycSession
     * const kycSession = await prisma.kycSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KycSessionUpdateArgs>(args: SelectSubset<T, KycSessionUpdateArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KycSessions.
     * @param {KycSessionDeleteManyArgs} args - Arguments to filter KycSessions to delete.
     * @example
     * // Delete a few KycSessions
     * const { count } = await prisma.kycSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KycSessionDeleteManyArgs>(args?: SelectSubset<T, KycSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycSessions
     * const kycSession = await prisma.kycSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KycSessionUpdateManyArgs>(args: SelectSubset<T, KycSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycSessions and returns the data updated in the database.
     * @param {KycSessionUpdateManyAndReturnArgs} args - Arguments to update many KycSessions.
     * @example
     * // Update many KycSessions
     * const kycSession = await prisma.kycSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KycSessions and only return the `id`
     * const kycSessionWithIdOnly = await prisma.kycSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KycSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, KycSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KycSession.
     * @param {KycSessionUpsertArgs} args - Arguments to update or create a KycSession.
     * @example
     * // Update or create a KycSession
     * const kycSession = await prisma.kycSession.upsert({
     *   create: {
     *     // ... data to create a KycSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycSession we want to update
     *   }
     * })
     */
    upsert<T extends KycSessionUpsertArgs>(args: SelectSubset<T, KycSessionUpsertArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KycSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionCountArgs} args - Arguments to filter KycSessions to count.
     * @example
     * // Count the number of KycSessions
     * const count = await prisma.kycSession.count({
     *   where: {
     *     // ... the filter for the KycSessions we want to count
     *   }
     * })
    **/
    count<T extends KycSessionCountArgs>(
      args?: Subset<T, KycSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KycSessionAggregateArgs>(args: Subset<T, KycSessionAggregateArgs>): Prisma.PrismaPromise<GetKycSessionAggregateType<T>>

    /**
     * Group by KycSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycSessionGroupByArgs} args - Group by arguments.
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
      T extends KycSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycSessionGroupByArgs['orderBy'] }
        : { orderBy?: KycSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, KycSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycSession model
   */
  readonly fields: KycSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends KycSession$documentsArgs<ExtArgs> = {}>(args?: Subset<T, KycSession$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decisions<T extends KycSession$decisionsArgs<ExtArgs> = {}>(args?: Subset<T, KycSession$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends KycSession$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, KycSession$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    latestFor<T extends KycSession$latestForArgs<ExtArgs> = {}>(args?: Subset<T, KycSession$latestForArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KycSession model
   */
  interface KycSessionFieldRefs {
    readonly id: FieldRef<"KycSession", 'String'>
    readonly createdAt: FieldRef<"KycSession", 'DateTime'>
    readonly updatedAt: FieldRef<"KycSession", 'DateTime'>
    readonly applicantId: FieldRef<"KycSession", 'String'>
    readonly tokenSalt: FieldRef<"KycSession", 'String'>
    readonly tokenHash: FieldRef<"KycSession", 'String'>
    readonly expiresAt: FieldRef<"KycSession", 'DateTime'>
    readonly consumedAt: FieldRef<"KycSession", 'DateTime'>
    readonly status: FieldRef<"KycSession", 'KycStatus'>
    readonly residency: FieldRef<"KycSession", 'Residency'>
  }
    

  // Custom InputTypes
  /**
   * KycSession findUnique
   */
  export type KycSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession findUniqueOrThrow
   */
  export type KycSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession findFirst
   */
  export type KycSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycSessions.
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycSessions.
     */
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * KycSession findFirstOrThrow
   */
  export type KycSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSession to fetch.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycSessions.
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycSessions.
     */
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * KycSession findMany
   */
  export type KycSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter, which KycSessions to fetch.
     */
    where?: KycSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycSessions to fetch.
     */
    orderBy?: KycSessionOrderByWithRelationInput | KycSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycSessions.
     */
    cursor?: KycSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycSessions.
     */
    skip?: number
    distinct?: KycSessionScalarFieldEnum | KycSessionScalarFieldEnum[]
  }

  /**
   * KycSession create
   */
  export type KycSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a KycSession.
     */
    data: XOR<KycSessionCreateInput, KycSessionUncheckedCreateInput>
  }

  /**
   * KycSession createMany
   */
  export type KycSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycSessions.
     */
    data: KycSessionCreateManyInput | KycSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KycSession createManyAndReturn
   */
  export type KycSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * The data used to create many KycSessions.
     */
    data: KycSessionCreateManyInput | KycSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycSession update
   */
  export type KycSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a KycSession.
     */
    data: XOR<KycSessionUpdateInput, KycSessionUncheckedUpdateInput>
    /**
     * Choose, which KycSession to update.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession updateMany
   */
  export type KycSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycSessions.
     */
    data: XOR<KycSessionUpdateManyMutationInput, KycSessionUncheckedUpdateManyInput>
    /**
     * Filter which KycSessions to update
     */
    where?: KycSessionWhereInput
    /**
     * Limit how many KycSessions to update.
     */
    limit?: number
  }

  /**
   * KycSession updateManyAndReturn
   */
  export type KycSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * The data used to update KycSessions.
     */
    data: XOR<KycSessionUpdateManyMutationInput, KycSessionUncheckedUpdateManyInput>
    /**
     * Filter which KycSessions to update
     */
    where?: KycSessionWhereInput
    /**
     * Limit how many KycSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycSession upsert
   */
  export type KycSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the KycSession to update in case it exists.
     */
    where: KycSessionWhereUniqueInput
    /**
     * In case the KycSession found by the `where` argument doesn't exist, create a new KycSession with this data.
     */
    create: XOR<KycSessionCreateInput, KycSessionUncheckedCreateInput>
    /**
     * In case the KycSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycSessionUpdateInput, KycSessionUncheckedUpdateInput>
  }

  /**
   * KycSession delete
   */
  export type KycSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    /**
     * Filter which KycSession to delete.
     */
    where: KycSessionWhereUniqueInput
  }

  /**
   * KycSession deleteMany
   */
  export type KycSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycSessions to delete
     */
    where?: KycSessionWhereInput
    /**
     * Limit how many KycSessions to delete.
     */
    limit?: number
  }

  /**
   * KycSession.documents
   */
  export type KycSession$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * KycSession.decisions
   */
  export type KycSession$decisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    cursor?: DecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * KycSession.auditLogs
   */
  export type KycSession$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * KycSession.latestFor
   */
  export type KycSession$latestForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    where?: ApplicantWhereInput
  }

  /**
   * KycSession without action
   */
  export type KycSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    bytes: number | null
  }

  export type DocumentSumAggregateOutputType = {
    bytes: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    uploadedAt: Date | null
    sessionId: string | null
    type: $Enums.DocType | null
    objectKey: string | null
    mime: string | null
    bytes: number | null
    sha256: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    uploadedAt: Date | null
    sessionId: string | null
    type: $Enums.DocType | null
    objectKey: string | null
    mime: string | null
    bytes: number | null
    sha256: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    uploadedAt: number
    sessionId: number
    type: number
    objectKey: number
    mime: number
    bytes: number
    sha256: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    bytes?: true
  }

  export type DocumentSumAggregateInputType = {
    bytes?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    uploadedAt?: true
    sessionId?: true
    type?: true
    objectKey?: true
    mime?: true
    bytes?: true
    sha256?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    uploadedAt?: true
    sessionId?: true
    type?: true
    objectKey?: true
    mime?: true
    bytes?: true
    sha256?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    uploadedAt?: true
    sessionId?: true
    type?: true
    objectKey?: true
    mime?: true
    bytes?: true
    sha256?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    uploadedAt: Date
    sessionId: string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadedAt?: boolean
    sessionId?: boolean
    type?: boolean
    objectKey?: boolean
    mime?: boolean
    bytes?: boolean
    sha256?: boolean
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadedAt?: boolean
    sessionId?: boolean
    type?: boolean
    objectKey?: boolean
    mime?: boolean
    bytes?: boolean
    sha256?: boolean
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadedAt?: boolean
    sessionId?: boolean
    type?: boolean
    objectKey?: boolean
    mime?: boolean
    bytes?: boolean
    sha256?: boolean
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    uploadedAt?: boolean
    sessionId?: boolean
    type?: boolean
    objectKey?: boolean
    mime?: boolean
    bytes?: boolean
    sha256?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uploadedAt" | "sessionId" | "type" | "objectKey" | "mime" | "bytes" | "sha256", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      session: Prisma.$KycSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uploadedAt: Date
      sessionId: string
      type: $Enums.DocType
      objectKey: string
      mime: string
      bytes: number
      sha256: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends KycSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KycSessionDefaultArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    readonly sessionId: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocType'>
    readonly objectKey: FieldRef<"Document", 'String'>
    readonly mime: FieldRef<"Document", 'String'>
    readonly bytes: FieldRef<"Document", 'Int'>
    readonly sha256: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Decision
   */

  export type AggregateDecision = {
    _count: DecisionCountAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  export type DecisionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    sessionId: string | null
    status: $Enums.KycStatus | null
    reason: string | null
    decidedBy: string | null
  }

  export type DecisionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    sessionId: string | null
    status: $Enums.KycStatus | null
    reason: string | null
    decidedBy: string | null
  }

  export type DecisionCountAggregateOutputType = {
    id: number
    createdAt: number
    sessionId: number
    status: number
    reason: number
    decidedBy: number
    _all: number
  }


  export type DecisionMinAggregateInputType = {
    id?: true
    createdAt?: true
    sessionId?: true
    status?: true
    reason?: true
    decidedBy?: true
  }

  export type DecisionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    sessionId?: true
    status?: true
    reason?: true
    decidedBy?: true
  }

  export type DecisionCountAggregateInputType = {
    id?: true
    createdAt?: true
    sessionId?: true
    status?: true
    reason?: true
    decidedBy?: true
    _all?: true
  }

  export type DecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decision to aggregate.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decisions
    **/
    _count?: true | DecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionMaxAggregateInputType
  }

  export type GetDecisionAggregateType<T extends DecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecision[P]>
      : GetScalarType<T[P], AggregateDecision[P]>
  }




  export type DecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithAggregationInput | DecisionOrderByWithAggregationInput[]
    by: DecisionScalarFieldEnum[] | DecisionScalarFieldEnum
    having?: DecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionCountAggregateInputType | true
    _min?: DecisionMinAggregateInputType
    _max?: DecisionMaxAggregateInputType
  }

  export type DecisionGroupByOutputType = {
    id: string
    createdAt: Date
    sessionId: string
    status: $Enums.KycStatus
    reason: string | null
    decidedBy: string
    _count: DecisionCountAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  type GetDecisionGroupByPayload<T extends DecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionGroupByOutputType[P]>
        }
      >
    >


  export type DecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    sessionId?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    sessionId?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    sessionId?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    sessionId?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
  }

  export type DecisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "sessionId" | "status" | "reason" | "decidedBy", ExtArgs["result"]["decision"]>
  export type DecisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }
  export type DecisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }
  export type DecisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | KycSessionDefaultArgs<ExtArgs>
  }

  export type $DecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Decision"
    objects: {
      session: Prisma.$KycSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      sessionId: string
      status: $Enums.KycStatus
      reason: string | null
      decidedBy: string
    }, ExtArgs["result"]["decision"]>
    composites: {}
  }

  type DecisionGetPayload<S extends boolean | null | undefined | DecisionDefaultArgs> = $Result.GetResult<Prisma.$DecisionPayload, S>

  type DecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecisionCountAggregateInputType | true
    }

  export interface DecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Decision'], meta: { name: 'Decision' } }
    /**
     * Find zero or one Decision that matches the filter.
     * @param {DecisionFindUniqueArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecisionFindUniqueArgs>(args: SelectSubset<T, DecisionFindUniqueArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Decision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecisionFindUniqueOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecisionFindFirstArgs>(args?: SelectSubset<T, DecisionFindFirstArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decisions
     * const decisions = await prisma.decision.findMany()
     * 
     * // Get first 10 Decisions
     * const decisions = await prisma.decision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decisionWithIdOnly = await prisma.decision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecisionFindManyArgs>(args?: SelectSubset<T, DecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Decision.
     * @param {DecisionCreateArgs} args - Arguments to create a Decision.
     * @example
     * // Create one Decision
     * const Decision = await prisma.decision.create({
     *   data: {
     *     // ... data to create a Decision
     *   }
     * })
     * 
     */
    create<T extends DecisionCreateArgs>(args: SelectSubset<T, DecisionCreateArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decisions.
     * @param {DecisionCreateManyArgs} args - Arguments to create many Decisions.
     * @example
     * // Create many Decisions
     * const decision = await prisma.decision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecisionCreateManyArgs>(args?: SelectSubset<T, DecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decisions and returns the data saved in the database.
     * @param {DecisionCreateManyAndReturnArgs} args - Arguments to create many Decisions.
     * @example
     * // Create many Decisions
     * const decision = await prisma.decision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decisions and only return the `id`
     * const decisionWithIdOnly = await prisma.decision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecisionCreateManyAndReturnArgs>(args?: SelectSubset<T, DecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Decision.
     * @param {DecisionDeleteArgs} args - Arguments to delete one Decision.
     * @example
     * // Delete one Decision
     * const Decision = await prisma.decision.delete({
     *   where: {
     *     // ... filter to delete one Decision
     *   }
     * })
     * 
     */
    delete<T extends DecisionDeleteArgs>(args: SelectSubset<T, DecisionDeleteArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Decision.
     * @param {DecisionUpdateArgs} args - Arguments to update one Decision.
     * @example
     * // Update one Decision
     * const decision = await prisma.decision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecisionUpdateArgs>(args: SelectSubset<T, DecisionUpdateArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decisions.
     * @param {DecisionDeleteManyArgs} args - Arguments to filter Decisions to delete.
     * @example
     * // Delete a few Decisions
     * const { count } = await prisma.decision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecisionDeleteManyArgs>(args?: SelectSubset<T, DecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecisionUpdateManyArgs>(args: SelectSubset<T, DecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions and returns the data updated in the database.
     * @param {DecisionUpdateManyAndReturnArgs} args - Arguments to update many Decisions.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decisions and only return the `id`
     * const decisionWithIdOnly = await prisma.decision.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DecisionUpdateManyAndReturnArgs>(args: SelectSubset<T, DecisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Decision.
     * @param {DecisionUpsertArgs} args - Arguments to update or create a Decision.
     * @example
     * // Update or create a Decision
     * const decision = await prisma.decision.upsert({
     *   create: {
     *     // ... data to create a Decision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decision we want to update
     *   }
     * })
     */
    upsert<T extends DecisionUpsertArgs>(args: SelectSubset<T, DecisionUpsertArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionCountArgs} args - Arguments to filter Decisions to count.
     * @example
     * // Count the number of Decisions
     * const count = await prisma.decision.count({
     *   where: {
     *     // ... the filter for the Decisions we want to count
     *   }
     * })
    **/
    count<T extends DecisionCountArgs>(
      args?: Subset<T, DecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DecisionAggregateArgs>(args: Subset<T, DecisionAggregateArgs>): Prisma.PrismaPromise<GetDecisionAggregateType<T>>

    /**
     * Group by Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionGroupByArgs} args - Group by arguments.
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
      T extends DecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionGroupByArgs['orderBy'] }
        : { orderBy?: DecisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Decision model
   */
  readonly fields: DecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Decision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends KycSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KycSessionDefaultArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Decision model
   */
  interface DecisionFieldRefs {
    readonly id: FieldRef<"Decision", 'String'>
    readonly createdAt: FieldRef<"Decision", 'DateTime'>
    readonly sessionId: FieldRef<"Decision", 'String'>
    readonly status: FieldRef<"Decision", 'KycStatus'>
    readonly reason: FieldRef<"Decision", 'String'>
    readonly decidedBy: FieldRef<"Decision", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Decision findUnique
   */
  export type DecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision findUniqueOrThrow
   */
  export type DecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision findFirst
   */
  export type DecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision findFirstOrThrow
   */
  export type DecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision findMany
   */
  export type DecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decisions to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision create
   */
  export type DecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Decision.
     */
    data: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
  }

  /**
   * Decision createMany
   */
  export type DecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Decision createManyAndReturn
   */
  export type DecisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decision update
   */
  export type DecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Decision.
     */
    data: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
    /**
     * Choose, which Decision to update.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision updateMany
   */
  export type DecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to update.
     */
    limit?: number
  }

  /**
   * Decision updateManyAndReturn
   */
  export type DecisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decision upsert
   */
  export type DecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Decision to update in case it exists.
     */
    where: DecisionWhereUniqueInput
    /**
     * In case the Decision found by the `where` argument doesn't exist, create a new Decision with this data.
     */
    create: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
    /**
     * In case the Decision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
  }

  /**
   * Decision delete
   */
  export type DecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter which Decision to delete.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision deleteMany
   */
  export type DecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decisions to delete
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to delete.
     */
    limit?: number
  }

  /**
   * Decision without action
   */
  export type DecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    whmcsClientId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    whmcsClientId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    event: string | null
    severity: $Enums.Severity | null
    message: string | null
    correlationId: string | null
    ip: string | null
    ua: string | null
    actorType: $Enums.ActorType | null
    actorId: string | null
    whmcsClientId: number | null
    applicantId: string | null
    sessionId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    event: string | null
    severity: $Enums.Severity | null
    message: string | null
    correlationId: string | null
    ip: string | null
    ua: string | null
    actorType: $Enums.ActorType | null
    actorId: string | null
    whmcsClientId: number | null
    applicantId: string | null
    sessionId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    createdAt: number
    event: number
    severity: number
    message: number
    data: number
    correlationId: number
    ip: number
    ua: number
    actorType: number
    actorId: number
    whmcsClientId: number
    applicantId: number
    sessionId: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    whmcsClientId?: true
  }

  export type AuditLogSumAggregateInputType = {
    whmcsClientId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    event?: true
    severity?: true
    message?: true
    correlationId?: true
    ip?: true
    ua?: true
    actorType?: true
    actorId?: true
    whmcsClientId?: true
    applicantId?: true
    sessionId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    event?: true
    severity?: true
    message?: true
    correlationId?: true
    ip?: true
    ua?: true
    actorType?: true
    actorId?: true
    whmcsClientId?: true
    applicantId?: true
    sessionId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    event?: true
    severity?: true
    message?: true
    data?: true
    correlationId?: true
    ip?: true
    ua?: true
    actorType?: true
    actorId?: true
    whmcsClientId?: true
    applicantId?: true
    sessionId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    createdAt: Date
    event: string
    severity: $Enums.Severity
    message: string | null
    data: JsonValue | null
    correlationId: string | null
    ip: string | null
    ua: string | null
    actorType: $Enums.ActorType
    actorId: string | null
    whmcsClientId: number | null
    applicantId: string | null
    sessionId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    event?: boolean
    severity?: boolean
    message?: boolean
    data?: boolean
    correlationId?: boolean
    ip?: boolean
    ua?: boolean
    actorType?: boolean
    actorId?: boolean
    whmcsClientId?: boolean
    applicantId?: boolean
    sessionId?: boolean
    session?: boolean | AuditLog$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    event?: boolean
    severity?: boolean
    message?: boolean
    data?: boolean
    correlationId?: boolean
    ip?: boolean
    ua?: boolean
    actorType?: boolean
    actorId?: boolean
    whmcsClientId?: boolean
    applicantId?: boolean
    sessionId?: boolean
    session?: boolean | AuditLog$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    event?: boolean
    severity?: boolean
    message?: boolean
    data?: boolean
    correlationId?: boolean
    ip?: boolean
    ua?: boolean
    actorType?: boolean
    actorId?: boolean
    whmcsClientId?: boolean
    applicantId?: boolean
    sessionId?: boolean
    session?: boolean | AuditLog$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    event?: boolean
    severity?: boolean
    message?: boolean
    data?: boolean
    correlationId?: boolean
    ip?: boolean
    ua?: boolean
    actorType?: boolean
    actorId?: boolean
    whmcsClientId?: boolean
    applicantId?: boolean
    sessionId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "event" | "severity" | "message" | "data" | "correlationId" | "ip" | "ua" | "actorType" | "actorId" | "whmcsClientId" | "applicantId" | "sessionId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditLog$sessionArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditLog$sessionArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditLog$sessionArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      session: Prisma.$KycSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      event: string
      severity: $Enums.Severity
      message: string | null
      data: Prisma.JsonValue | null
      correlationId: string | null
      ip: string | null
      ua: string | null
      actorType: $Enums.ActorType
      actorId: string | null
      whmcsClientId: number | null
      applicantId: string | null
      sessionId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends AuditLog$sessionArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$sessionArgs<ExtArgs>>): Prisma__KycSessionClient<$Result.GetResult<Prisma.$KycSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly event: FieldRef<"AuditLog", 'String'>
    readonly severity: FieldRef<"AuditLog", 'Severity'>
    readonly message: FieldRef<"AuditLog", 'String'>
    readonly data: FieldRef<"AuditLog", 'Json'>
    readonly correlationId: FieldRef<"AuditLog", 'String'>
    readonly ip: FieldRef<"AuditLog", 'String'>
    readonly ua: FieldRef<"AuditLog", 'String'>
    readonly actorType: FieldRef<"AuditLog", 'ActorType'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly whmcsClientId: FieldRef<"AuditLog", 'Int'>
    readonly applicantId: FieldRef<"AuditLog", 'String'>
    readonly sessionId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.session
   */
  export type AuditLog$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycSession
     */
    select?: KycSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycSession
     */
    omit?: KycSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycSessionInclude<ExtArgs> | null
    where?: KycSessionWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model OutboundWebhookLog
   */

  export type AggregateOutboundWebhookLog = {
    _count: OutboundWebhookLogCountAggregateOutputType | null
    _avg: OutboundWebhookLogAvgAggregateOutputType | null
    _sum: OutboundWebhookLogSumAggregateOutputType | null
    _min: OutboundWebhookLogMinAggregateOutputType | null
    _max: OutboundWebhookLogMaxAggregateOutputType | null
  }

  export type OutboundWebhookLogAvgAggregateOutputType = {
    statusCode: number | null
    attempt: number | null
    maxAttempts: number | null
  }

  export type OutboundWebhookLogSumAggregateOutputType = {
    statusCode: number | null
    attempt: number | null
    maxAttempts: number | null
  }

  export type OutboundWebhookLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    kind: string | null
    targetUrl: string | null
    event: string | null
    statusCode: number | null
    responseBody: string | null
    error: string | null
    attempt: number | null
    maxAttempts: number | null
    nextAttemptAt: Date | null
  }

  export type OutboundWebhookLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    kind: string | null
    targetUrl: string | null
    event: string | null
    statusCode: number | null
    responseBody: string | null
    error: string | null
    attempt: number | null
    maxAttempts: number | null
    nextAttemptAt: Date | null
  }

  export type OutboundWebhookLogCountAggregateOutputType = {
    id: number
    createdAt: number
    kind: number
    targetUrl: number
    event: number
    payload: number
    statusCode: number
    responseBody: number
    error: number
    attempt: number
    maxAttempts: number
    nextAttemptAt: number
    _all: number
  }


  export type OutboundWebhookLogAvgAggregateInputType = {
    statusCode?: true
    attempt?: true
    maxAttempts?: true
  }

  export type OutboundWebhookLogSumAggregateInputType = {
    statusCode?: true
    attempt?: true
    maxAttempts?: true
  }

  export type OutboundWebhookLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    kind?: true
    targetUrl?: true
    event?: true
    statusCode?: true
    responseBody?: true
    error?: true
    attempt?: true
    maxAttempts?: true
    nextAttemptAt?: true
  }

  export type OutboundWebhookLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    kind?: true
    targetUrl?: true
    event?: true
    statusCode?: true
    responseBody?: true
    error?: true
    attempt?: true
    maxAttempts?: true
    nextAttemptAt?: true
  }

  export type OutboundWebhookLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    kind?: true
    targetUrl?: true
    event?: true
    payload?: true
    statusCode?: true
    responseBody?: true
    error?: true
    attempt?: true
    maxAttempts?: true
    nextAttemptAt?: true
    _all?: true
  }

  export type OutboundWebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboundWebhookLog to aggregate.
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundWebhookLogs to fetch.
     */
    orderBy?: OutboundWebhookLogOrderByWithRelationInput | OutboundWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboundWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutboundWebhookLogs
    **/
    _count?: true | OutboundWebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboundWebhookLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboundWebhookLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboundWebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboundWebhookLogMaxAggregateInputType
  }

  export type GetOutboundWebhookLogAggregateType<T extends OutboundWebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOutboundWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutboundWebhookLog[P]>
      : GetScalarType<T[P], AggregateOutboundWebhookLog[P]>
  }




  export type OutboundWebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboundWebhookLogWhereInput
    orderBy?: OutboundWebhookLogOrderByWithAggregationInput | OutboundWebhookLogOrderByWithAggregationInput[]
    by: OutboundWebhookLogScalarFieldEnum[] | OutboundWebhookLogScalarFieldEnum
    having?: OutboundWebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboundWebhookLogCountAggregateInputType | true
    _avg?: OutboundWebhookLogAvgAggregateInputType
    _sum?: OutboundWebhookLogSumAggregateInputType
    _min?: OutboundWebhookLogMinAggregateInputType
    _max?: OutboundWebhookLogMaxAggregateInputType
  }

  export type OutboundWebhookLogGroupByOutputType = {
    id: string
    createdAt: Date
    kind: string
    targetUrl: string
    event: string
    payload: JsonValue
    statusCode: number | null
    responseBody: string | null
    error: string | null
    attempt: number
    maxAttempts: number
    nextAttemptAt: Date | null
    _count: OutboundWebhookLogCountAggregateOutputType | null
    _avg: OutboundWebhookLogAvgAggregateOutputType | null
    _sum: OutboundWebhookLogSumAggregateOutputType | null
    _min: OutboundWebhookLogMinAggregateOutputType | null
    _max: OutboundWebhookLogMaxAggregateOutputType | null
  }

  type GetOutboundWebhookLogGroupByPayload<T extends OutboundWebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboundWebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboundWebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboundWebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], OutboundWebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type OutboundWebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    kind?: boolean
    targetUrl?: boolean
    event?: boolean
    payload?: boolean
    statusCode?: boolean
    responseBody?: boolean
    error?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
  }, ExtArgs["result"]["outboundWebhookLog"]>

  export type OutboundWebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    kind?: boolean
    targetUrl?: boolean
    event?: boolean
    payload?: boolean
    statusCode?: boolean
    responseBody?: boolean
    error?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
  }, ExtArgs["result"]["outboundWebhookLog"]>

  export type OutboundWebhookLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    kind?: boolean
    targetUrl?: boolean
    event?: boolean
    payload?: boolean
    statusCode?: boolean
    responseBody?: boolean
    error?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
  }, ExtArgs["result"]["outboundWebhookLog"]>

  export type OutboundWebhookLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    kind?: boolean
    targetUrl?: boolean
    event?: boolean
    payload?: boolean
    statusCode?: boolean
    responseBody?: boolean
    error?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
  }

  export type OutboundWebhookLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "kind" | "targetUrl" | "event" | "payload" | "statusCode" | "responseBody" | "error" | "attempt" | "maxAttempts" | "nextAttemptAt", ExtArgs["result"]["outboundWebhookLog"]>

  export type $OutboundWebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutboundWebhookLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      kind: string
      targetUrl: string
      event: string
      payload: Prisma.JsonValue
      statusCode: number | null
      responseBody: string | null
      error: string | null
      attempt: number
      maxAttempts: number
      nextAttemptAt: Date | null
    }, ExtArgs["result"]["outboundWebhookLog"]>
    composites: {}
  }

  type OutboundWebhookLogGetPayload<S extends boolean | null | undefined | OutboundWebhookLogDefaultArgs> = $Result.GetResult<Prisma.$OutboundWebhookLogPayload, S>

  type OutboundWebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboundWebhookLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboundWebhookLogCountAggregateInputType | true
    }

  export interface OutboundWebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutboundWebhookLog'], meta: { name: 'OutboundWebhookLog' } }
    /**
     * Find zero or one OutboundWebhookLog that matches the filter.
     * @param {OutboundWebhookLogFindUniqueArgs} args - Arguments to find a OutboundWebhookLog
     * @example
     * // Get one OutboundWebhookLog
     * const outboundWebhookLog = await prisma.outboundWebhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboundWebhookLogFindUniqueArgs>(args: SelectSubset<T, OutboundWebhookLogFindUniqueArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutboundWebhookLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboundWebhookLogFindUniqueOrThrowArgs} args - Arguments to find a OutboundWebhookLog
     * @example
     * // Get one OutboundWebhookLog
     * const outboundWebhookLog = await prisma.outboundWebhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboundWebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboundWebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboundWebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogFindFirstArgs} args - Arguments to find a OutboundWebhookLog
     * @example
     * // Get one OutboundWebhookLog
     * const outboundWebhookLog = await prisma.outboundWebhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboundWebhookLogFindFirstArgs>(args?: SelectSubset<T, OutboundWebhookLogFindFirstArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboundWebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogFindFirstOrThrowArgs} args - Arguments to find a OutboundWebhookLog
     * @example
     * // Get one OutboundWebhookLog
     * const outboundWebhookLog = await prisma.outboundWebhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboundWebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboundWebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutboundWebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutboundWebhookLogs
     * const outboundWebhookLogs = await prisma.outboundWebhookLog.findMany()
     * 
     * // Get first 10 OutboundWebhookLogs
     * const outboundWebhookLogs = await prisma.outboundWebhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outboundWebhookLogWithIdOnly = await prisma.outboundWebhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutboundWebhookLogFindManyArgs>(args?: SelectSubset<T, OutboundWebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutboundWebhookLog.
     * @param {OutboundWebhookLogCreateArgs} args - Arguments to create a OutboundWebhookLog.
     * @example
     * // Create one OutboundWebhookLog
     * const OutboundWebhookLog = await prisma.outboundWebhookLog.create({
     *   data: {
     *     // ... data to create a OutboundWebhookLog
     *   }
     * })
     * 
     */
    create<T extends OutboundWebhookLogCreateArgs>(args: SelectSubset<T, OutboundWebhookLogCreateArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutboundWebhookLogs.
     * @param {OutboundWebhookLogCreateManyArgs} args - Arguments to create many OutboundWebhookLogs.
     * @example
     * // Create many OutboundWebhookLogs
     * const outboundWebhookLog = await prisma.outboundWebhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboundWebhookLogCreateManyArgs>(args?: SelectSubset<T, OutboundWebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutboundWebhookLogs and returns the data saved in the database.
     * @param {OutboundWebhookLogCreateManyAndReturnArgs} args - Arguments to create many OutboundWebhookLogs.
     * @example
     * // Create many OutboundWebhookLogs
     * const outboundWebhookLog = await prisma.outboundWebhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutboundWebhookLogs and only return the `id`
     * const outboundWebhookLogWithIdOnly = await prisma.outboundWebhookLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutboundWebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OutboundWebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutboundWebhookLog.
     * @param {OutboundWebhookLogDeleteArgs} args - Arguments to delete one OutboundWebhookLog.
     * @example
     * // Delete one OutboundWebhookLog
     * const OutboundWebhookLog = await prisma.outboundWebhookLog.delete({
     *   where: {
     *     // ... filter to delete one OutboundWebhookLog
     *   }
     * })
     * 
     */
    delete<T extends OutboundWebhookLogDeleteArgs>(args: SelectSubset<T, OutboundWebhookLogDeleteArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutboundWebhookLog.
     * @param {OutboundWebhookLogUpdateArgs} args - Arguments to update one OutboundWebhookLog.
     * @example
     * // Update one OutboundWebhookLog
     * const outboundWebhookLog = await prisma.outboundWebhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboundWebhookLogUpdateArgs>(args: SelectSubset<T, OutboundWebhookLogUpdateArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutboundWebhookLogs.
     * @param {OutboundWebhookLogDeleteManyArgs} args - Arguments to filter OutboundWebhookLogs to delete.
     * @example
     * // Delete a few OutboundWebhookLogs
     * const { count } = await prisma.outboundWebhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboundWebhookLogDeleteManyArgs>(args?: SelectSubset<T, OutboundWebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboundWebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutboundWebhookLogs
     * const outboundWebhookLog = await prisma.outboundWebhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboundWebhookLogUpdateManyArgs>(args: SelectSubset<T, OutboundWebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboundWebhookLogs and returns the data updated in the database.
     * @param {OutboundWebhookLogUpdateManyAndReturnArgs} args - Arguments to update many OutboundWebhookLogs.
     * @example
     * // Update many OutboundWebhookLogs
     * const outboundWebhookLog = await prisma.outboundWebhookLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutboundWebhookLogs and only return the `id`
     * const outboundWebhookLogWithIdOnly = await prisma.outboundWebhookLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutboundWebhookLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OutboundWebhookLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutboundWebhookLog.
     * @param {OutboundWebhookLogUpsertArgs} args - Arguments to update or create a OutboundWebhookLog.
     * @example
     * // Update or create a OutboundWebhookLog
     * const outboundWebhookLog = await prisma.outboundWebhookLog.upsert({
     *   create: {
     *     // ... data to create a OutboundWebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutboundWebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends OutboundWebhookLogUpsertArgs>(args: SelectSubset<T, OutboundWebhookLogUpsertArgs<ExtArgs>>): Prisma__OutboundWebhookLogClient<$Result.GetResult<Prisma.$OutboundWebhookLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutboundWebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogCountArgs} args - Arguments to filter OutboundWebhookLogs to count.
     * @example
     * // Count the number of OutboundWebhookLogs
     * const count = await prisma.outboundWebhookLog.count({
     *   where: {
     *     // ... the filter for the OutboundWebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends OutboundWebhookLogCountArgs>(
      args?: Subset<T, OutboundWebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboundWebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutboundWebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutboundWebhookLogAggregateArgs>(args: Subset<T, OutboundWebhookLogAggregateArgs>): Prisma.PrismaPromise<GetOutboundWebhookLogAggregateType<T>>

    /**
     * Group by OutboundWebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundWebhookLogGroupByArgs} args - Group by arguments.
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
      T extends OutboundWebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboundWebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: OutboundWebhookLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OutboundWebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboundWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutboundWebhookLog model
   */
  readonly fields: OutboundWebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutboundWebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboundWebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutboundWebhookLog model
   */
  interface OutboundWebhookLogFieldRefs {
    readonly id: FieldRef<"OutboundWebhookLog", 'String'>
    readonly createdAt: FieldRef<"OutboundWebhookLog", 'DateTime'>
    readonly kind: FieldRef<"OutboundWebhookLog", 'String'>
    readonly targetUrl: FieldRef<"OutboundWebhookLog", 'String'>
    readonly event: FieldRef<"OutboundWebhookLog", 'String'>
    readonly payload: FieldRef<"OutboundWebhookLog", 'Json'>
    readonly statusCode: FieldRef<"OutboundWebhookLog", 'Int'>
    readonly responseBody: FieldRef<"OutboundWebhookLog", 'String'>
    readonly error: FieldRef<"OutboundWebhookLog", 'String'>
    readonly attempt: FieldRef<"OutboundWebhookLog", 'Int'>
    readonly maxAttempts: FieldRef<"OutboundWebhookLog", 'Int'>
    readonly nextAttemptAt: FieldRef<"OutboundWebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutboundWebhookLog findUnique
   */
  export type OutboundWebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which OutboundWebhookLog to fetch.
     */
    where: OutboundWebhookLogWhereUniqueInput
  }

  /**
   * OutboundWebhookLog findUniqueOrThrow
   */
  export type OutboundWebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which OutboundWebhookLog to fetch.
     */
    where: OutboundWebhookLogWhereUniqueInput
  }

  /**
   * OutboundWebhookLog findFirst
   */
  export type OutboundWebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which OutboundWebhookLog to fetch.
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundWebhookLogs to fetch.
     */
    orderBy?: OutboundWebhookLogOrderByWithRelationInput | OutboundWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboundWebhookLogs.
     */
    cursor?: OutboundWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboundWebhookLogs.
     */
    distinct?: OutboundWebhookLogScalarFieldEnum | OutboundWebhookLogScalarFieldEnum[]
  }

  /**
   * OutboundWebhookLog findFirstOrThrow
   */
  export type OutboundWebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which OutboundWebhookLog to fetch.
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundWebhookLogs to fetch.
     */
    orderBy?: OutboundWebhookLogOrderByWithRelationInput | OutboundWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboundWebhookLogs.
     */
    cursor?: OutboundWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboundWebhookLogs.
     */
    distinct?: OutboundWebhookLogScalarFieldEnum | OutboundWebhookLogScalarFieldEnum[]
  }

  /**
   * OutboundWebhookLog findMany
   */
  export type OutboundWebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which OutboundWebhookLogs to fetch.
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundWebhookLogs to fetch.
     */
    orderBy?: OutboundWebhookLogOrderByWithRelationInput | OutboundWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutboundWebhookLogs.
     */
    cursor?: OutboundWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundWebhookLogs.
     */
    skip?: number
    distinct?: OutboundWebhookLogScalarFieldEnum | OutboundWebhookLogScalarFieldEnum[]
  }

  /**
   * OutboundWebhookLog create
   */
  export type OutboundWebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * The data needed to create a OutboundWebhookLog.
     */
    data: XOR<OutboundWebhookLogCreateInput, OutboundWebhookLogUncheckedCreateInput>
  }

  /**
   * OutboundWebhookLog createMany
   */
  export type OutboundWebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutboundWebhookLogs.
     */
    data: OutboundWebhookLogCreateManyInput | OutboundWebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutboundWebhookLog createManyAndReturn
   */
  export type OutboundWebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * The data used to create many OutboundWebhookLogs.
     */
    data: OutboundWebhookLogCreateManyInput | OutboundWebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutboundWebhookLog update
   */
  export type OutboundWebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * The data needed to update a OutboundWebhookLog.
     */
    data: XOR<OutboundWebhookLogUpdateInput, OutboundWebhookLogUncheckedUpdateInput>
    /**
     * Choose, which OutboundWebhookLog to update.
     */
    where: OutboundWebhookLogWhereUniqueInput
  }

  /**
   * OutboundWebhookLog updateMany
   */
  export type OutboundWebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutboundWebhookLogs.
     */
    data: XOR<OutboundWebhookLogUpdateManyMutationInput, OutboundWebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which OutboundWebhookLogs to update
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * Limit how many OutboundWebhookLogs to update.
     */
    limit?: number
  }

  /**
   * OutboundWebhookLog updateManyAndReturn
   */
  export type OutboundWebhookLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * The data used to update OutboundWebhookLogs.
     */
    data: XOR<OutboundWebhookLogUpdateManyMutationInput, OutboundWebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which OutboundWebhookLogs to update
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * Limit how many OutboundWebhookLogs to update.
     */
    limit?: number
  }

  /**
   * OutboundWebhookLog upsert
   */
  export type OutboundWebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * The filter to search for the OutboundWebhookLog to update in case it exists.
     */
    where: OutboundWebhookLogWhereUniqueInput
    /**
     * In case the OutboundWebhookLog found by the `where` argument doesn't exist, create a new OutboundWebhookLog with this data.
     */
    create: XOR<OutboundWebhookLogCreateInput, OutboundWebhookLogUncheckedCreateInput>
    /**
     * In case the OutboundWebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboundWebhookLogUpdateInput, OutboundWebhookLogUncheckedUpdateInput>
  }

  /**
   * OutboundWebhookLog delete
   */
  export type OutboundWebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
    /**
     * Filter which OutboundWebhookLog to delete.
     */
    where: OutboundWebhookLogWhereUniqueInput
  }

  /**
   * OutboundWebhookLog deleteMany
   */
  export type OutboundWebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboundWebhookLogs to delete
     */
    where?: OutboundWebhookLogWhereInput
    /**
     * Limit how many OutboundWebhookLogs to delete.
     */
    limit?: number
  }

  /**
   * OutboundWebhookLog without action
   */
  export type OutboundWebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundWebhookLog
     */
    select?: OutboundWebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundWebhookLog
     */
    omit?: OutboundWebhookLogOmit<ExtArgs> | null
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


  export const ApplicantScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    whmcsClientId: 'whmcsClientId',
    email: 'email',
    residency: 'residency',
    latestSessionId: 'latestSessionId'
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum]


  export const KycSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    applicantId: 'applicantId',
    tokenSalt: 'tokenSalt',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    consumedAt: 'consumedAt',
    status: 'status',
    residency: 'residency'
  };

  export type KycSessionScalarFieldEnum = (typeof KycSessionScalarFieldEnum)[keyof typeof KycSessionScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    uploadedAt: 'uploadedAt',
    sessionId: 'sessionId',
    type: 'type',
    objectKey: 'objectKey',
    mime: 'mime',
    bytes: 'bytes',
    sha256: 'sha256'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DecisionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    sessionId: 'sessionId',
    status: 'status',
    reason: 'reason',
    decidedBy: 'decidedBy'
  };

  export type DecisionScalarFieldEnum = (typeof DecisionScalarFieldEnum)[keyof typeof DecisionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    event: 'event',
    severity: 'severity',
    message: 'message',
    data: 'data',
    correlationId: 'correlationId',
    ip: 'ip',
    ua: 'ua',
    actorType: 'actorType',
    actorId: 'actorId',
    whmcsClientId: 'whmcsClientId',
    applicantId: 'applicantId',
    sessionId: 'sessionId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const OutboundWebhookLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    kind: 'kind',
    targetUrl: 'targetUrl',
    event: 'event',
    payload: 'payload',
    statusCode: 'statusCode',
    responseBody: 'responseBody',
    error: 'error',
    attempt: 'attempt',
    maxAttempts: 'maxAttempts',
    nextAttemptAt: 'nextAttemptAt'
  };

  export type OutboundWebhookLogScalarFieldEnum = (typeof OutboundWebhookLogScalarFieldEnum)[keyof typeof OutboundWebhookLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Residency'
   */
  export type EnumResidencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Residency'>
    


  /**
   * Reference to a field of type 'Residency[]'
   */
  export type ListEnumResidencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Residency[]'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'KycStatus[]'
   */
  export type ListEnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus[]'>
    


  /**
   * Reference to a field of type 'DocType'
   */
  export type EnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType'>
    


  /**
   * Reference to a field of type 'DocType[]'
   */
  export type ListEnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ActorType'
   */
  export type EnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType'>
    


  /**
   * Reference to a field of type 'ActorType[]'
   */
  export type ListEnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType[]'>
    


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


  export type ApplicantWhereInput = {
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    id?: StringFilter<"Applicant"> | string
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeFilter<"Applicant"> | Date | string
    whmcsClientId?: IntFilter<"Applicant"> | number
    email?: StringFilter<"Applicant"> | string
    residency?: EnumResidencyNullableFilter<"Applicant"> | $Enums.Residency | null
    latestSessionId?: StringNullableFilter<"Applicant"> | string | null
    latestSession?: XOR<KycSessionNullableScalarRelationFilter, KycSessionWhereInput> | null
    sessions?: KycSessionListRelationFilter
  }

  export type ApplicantOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whmcsClientId?: SortOrder
    email?: SortOrder
    residency?: SortOrderInput | SortOrder
    latestSessionId?: SortOrderInput | SortOrder
    latestSession?: KycSessionOrderByWithRelationInput
    sessions?: KycSessionOrderByRelationAggregateInput
  }

  export type ApplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    whmcsClientId?: number
    latestSessionId?: string
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeFilter<"Applicant"> | Date | string
    email?: StringFilter<"Applicant"> | string
    residency?: EnumResidencyNullableFilter<"Applicant"> | $Enums.Residency | null
    latestSession?: XOR<KycSessionNullableScalarRelationFilter, KycSessionWhereInput> | null
    sessions?: KycSessionListRelationFilter
  }, "id" | "whmcsClientId" | "latestSessionId">

  export type ApplicantOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whmcsClientId?: SortOrder
    email?: SortOrder
    residency?: SortOrderInput | SortOrder
    latestSessionId?: SortOrderInput | SortOrder
    _count?: ApplicantCountOrderByAggregateInput
    _avg?: ApplicantAvgOrderByAggregateInput
    _max?: ApplicantMaxOrderByAggregateInput
    _min?: ApplicantMinOrderByAggregateInput
    _sum?: ApplicantSumOrderByAggregateInput
  }

  export type ApplicantScalarWhereWithAggregatesInput = {
    AND?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    OR?: ApplicantScalarWhereWithAggregatesInput[]
    NOT?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Applicant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
    whmcsClientId?: IntWithAggregatesFilter<"Applicant"> | number
    email?: StringWithAggregatesFilter<"Applicant"> | string
    residency?: EnumResidencyNullableWithAggregatesFilter<"Applicant"> | $Enums.Residency | null
    latestSessionId?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
  }

  export type KycSessionWhereInput = {
    AND?: KycSessionWhereInput | KycSessionWhereInput[]
    OR?: KycSessionWhereInput[]
    NOT?: KycSessionWhereInput | KycSessionWhereInput[]
    id?: StringFilter<"KycSession"> | string
    createdAt?: DateTimeFilter<"KycSession"> | Date | string
    updatedAt?: DateTimeFilter<"KycSession"> | Date | string
    applicantId?: StringFilter<"KycSession"> | string
    tokenSalt?: StringFilter<"KycSession"> | string
    tokenHash?: StringFilter<"KycSession"> | string
    expiresAt?: DateTimeFilter<"KycSession"> | Date | string
    consumedAt?: DateTimeNullableFilter<"KycSession"> | Date | string | null
    status?: EnumKycStatusFilter<"KycSession"> | $Enums.KycStatus
    residency?: EnumResidencyNullableFilter<"KycSession"> | $Enums.Residency | null
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    documents?: DocumentListRelationFilter
    decisions?: DecisionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    latestFor?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
  }

  export type KycSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicantId?: SortOrder
    tokenSalt?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    residency?: SortOrderInput | SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    decisions?: DecisionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    latestFor?: ApplicantOrderByWithRelationInput
  }

  export type KycSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KycSessionWhereInput | KycSessionWhereInput[]
    OR?: KycSessionWhereInput[]
    NOT?: KycSessionWhereInput | KycSessionWhereInput[]
    createdAt?: DateTimeFilter<"KycSession"> | Date | string
    updatedAt?: DateTimeFilter<"KycSession"> | Date | string
    applicantId?: StringFilter<"KycSession"> | string
    tokenSalt?: StringFilter<"KycSession"> | string
    tokenHash?: StringFilter<"KycSession"> | string
    expiresAt?: DateTimeFilter<"KycSession"> | Date | string
    consumedAt?: DateTimeNullableFilter<"KycSession"> | Date | string | null
    status?: EnumKycStatusFilter<"KycSession"> | $Enums.KycStatus
    residency?: EnumResidencyNullableFilter<"KycSession"> | $Enums.Residency | null
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    documents?: DocumentListRelationFilter
    decisions?: DecisionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    latestFor?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
  }, "id">

  export type KycSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicantId?: SortOrder
    tokenSalt?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    residency?: SortOrderInput | SortOrder
    _count?: KycSessionCountOrderByAggregateInput
    _max?: KycSessionMaxOrderByAggregateInput
    _min?: KycSessionMinOrderByAggregateInput
  }

  export type KycSessionScalarWhereWithAggregatesInput = {
    AND?: KycSessionScalarWhereWithAggregatesInput | KycSessionScalarWhereWithAggregatesInput[]
    OR?: KycSessionScalarWhereWithAggregatesInput[]
    NOT?: KycSessionScalarWhereWithAggregatesInput | KycSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KycSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KycSession"> | Date | string
    applicantId?: StringWithAggregatesFilter<"KycSession"> | string
    tokenSalt?: StringWithAggregatesFilter<"KycSession"> | string
    tokenHash?: StringWithAggregatesFilter<"KycSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"KycSession"> | Date | string
    consumedAt?: DateTimeNullableWithAggregatesFilter<"KycSession"> | Date | string | null
    status?: EnumKycStatusWithAggregatesFilter<"KycSession"> | $Enums.KycStatus
    residency?: EnumResidencyNullableWithAggregatesFilter<"KycSession"> | $Enums.Residency | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    sessionId?: StringFilter<"Document"> | string
    type?: EnumDocTypeFilter<"Document"> | $Enums.DocType
    objectKey?: StringFilter<"Document"> | string
    mime?: StringFilter<"Document"> | string
    bytes?: IntFilter<"Document"> | number
    sha256?: StringFilter<"Document"> | string
    session?: XOR<KycSessionScalarRelationFilter, KycSessionWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    uploadedAt?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    objectKey?: SortOrder
    mime?: SortOrder
    bytes?: SortOrder
    sha256?: SortOrder
    session?: KycSessionOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    sessionId?: StringFilter<"Document"> | string
    type?: EnumDocTypeFilter<"Document"> | $Enums.DocType
    objectKey?: StringFilter<"Document"> | string
    mime?: StringFilter<"Document"> | string
    bytes?: IntFilter<"Document"> | number
    sha256?: StringFilter<"Document"> | string
    session?: XOR<KycSessionScalarRelationFilter, KycSessionWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    uploadedAt?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    objectKey?: SortOrder
    mime?: SortOrder
    bytes?: SortOrder
    sha256?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    sessionId?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocTypeWithAggregatesFilter<"Document"> | $Enums.DocType
    objectKey?: StringWithAggregatesFilter<"Document"> | string
    mime?: StringWithAggregatesFilter<"Document"> | string
    bytes?: IntWithAggregatesFilter<"Document"> | number
    sha256?: StringWithAggregatesFilter<"Document"> | string
  }

  export type DecisionWhereInput = {
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    id?: StringFilter<"Decision"> | string
    createdAt?: DateTimeFilter<"Decision"> | Date | string
    sessionId?: StringFilter<"Decision"> | string
    status?: EnumKycStatusFilter<"Decision"> | $Enums.KycStatus
    reason?: StringNullableFilter<"Decision"> | string | null
    decidedBy?: StringFilter<"Decision"> | string
    session?: XOR<KycSessionScalarRelationFilter, KycSessionWhereInput>
  }

  export type DecisionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    decidedBy?: SortOrder
    session?: KycSessionOrderByWithRelationInput
  }

  export type DecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    createdAt?: DateTimeFilter<"Decision"> | Date | string
    sessionId?: StringFilter<"Decision"> | string
    status?: EnumKycStatusFilter<"Decision"> | $Enums.KycStatus
    reason?: StringNullableFilter<"Decision"> | string | null
    decidedBy?: StringFilter<"Decision"> | string
    session?: XOR<KycSessionScalarRelationFilter, KycSessionWhereInput>
  }, "id">

  export type DecisionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    decidedBy?: SortOrder
    _count?: DecisionCountOrderByAggregateInput
    _max?: DecisionMaxOrderByAggregateInput
    _min?: DecisionMinOrderByAggregateInput
  }

  export type DecisionScalarWhereWithAggregatesInput = {
    AND?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    OR?: DecisionScalarWhereWithAggregatesInput[]
    NOT?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Decision"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Decision"> | Date | string
    sessionId?: StringWithAggregatesFilter<"Decision"> | string
    status?: EnumKycStatusWithAggregatesFilter<"Decision"> | $Enums.KycStatus
    reason?: StringNullableWithAggregatesFilter<"Decision"> | string | null
    decidedBy?: StringWithAggregatesFilter<"Decision"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    event?: StringFilter<"AuditLog"> | string
    severity?: EnumSeverityFilter<"AuditLog"> | $Enums.Severity
    message?: StringNullableFilter<"AuditLog"> | string | null
    data?: JsonNullableFilter<"AuditLog">
    correlationId?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    ua?: StringNullableFilter<"AuditLog"> | string | null
    actorType?: EnumActorTypeFilter<"AuditLog"> | $Enums.ActorType
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    whmcsClientId?: IntNullableFilter<"AuditLog"> | number | null
    applicantId?: StringNullableFilter<"AuditLog"> | string | null
    sessionId?: StringNullableFilter<"AuditLog"> | string | null
    session?: XOR<KycSessionNullableScalarRelationFilter, KycSessionWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    severity?: SortOrder
    message?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    ua?: SortOrderInput | SortOrder
    actorType?: SortOrder
    actorId?: SortOrderInput | SortOrder
    whmcsClientId?: SortOrderInput | SortOrder
    applicantId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    session?: KycSessionOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    event?: StringFilter<"AuditLog"> | string
    severity?: EnumSeverityFilter<"AuditLog"> | $Enums.Severity
    message?: StringNullableFilter<"AuditLog"> | string | null
    data?: JsonNullableFilter<"AuditLog">
    correlationId?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    ua?: StringNullableFilter<"AuditLog"> | string | null
    actorType?: EnumActorTypeFilter<"AuditLog"> | $Enums.ActorType
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    whmcsClientId?: IntNullableFilter<"AuditLog"> | number | null
    applicantId?: StringNullableFilter<"AuditLog"> | string | null
    sessionId?: StringNullableFilter<"AuditLog"> | string | null
    session?: XOR<KycSessionNullableScalarRelationFilter, KycSessionWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    severity?: SortOrder
    message?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    ua?: SortOrderInput | SortOrder
    actorType?: SortOrder
    actorId?: SortOrderInput | SortOrder
    whmcsClientId?: SortOrderInput | SortOrder
    applicantId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    event?: StringWithAggregatesFilter<"AuditLog"> | string
    severity?: EnumSeverityWithAggregatesFilter<"AuditLog"> | $Enums.Severity
    message?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    data?: JsonNullableWithAggregatesFilter<"AuditLog">
    correlationId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ip?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ua?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorType?: EnumActorTypeWithAggregatesFilter<"AuditLog"> | $Enums.ActorType
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    whmcsClientId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    applicantId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type OutboundWebhookLogWhereInput = {
    AND?: OutboundWebhookLogWhereInput | OutboundWebhookLogWhereInput[]
    OR?: OutboundWebhookLogWhereInput[]
    NOT?: OutboundWebhookLogWhereInput | OutboundWebhookLogWhereInput[]
    id?: StringFilter<"OutboundWebhookLog"> | string
    createdAt?: DateTimeFilter<"OutboundWebhookLog"> | Date | string
    kind?: StringFilter<"OutboundWebhookLog"> | string
    targetUrl?: StringFilter<"OutboundWebhookLog"> | string
    event?: StringFilter<"OutboundWebhookLog"> | string
    payload?: JsonFilter<"OutboundWebhookLog">
    statusCode?: IntNullableFilter<"OutboundWebhookLog"> | number | null
    responseBody?: StringNullableFilter<"OutboundWebhookLog"> | string | null
    error?: StringNullableFilter<"OutboundWebhookLog"> | string | null
    attempt?: IntFilter<"OutboundWebhookLog"> | number
    maxAttempts?: IntFilter<"OutboundWebhookLog"> | number
    nextAttemptAt?: DateTimeNullableFilter<"OutboundWebhookLog"> | Date | string | null
  }

  export type OutboundWebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    targetUrl?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrderInput | SortOrder
  }

  export type OutboundWebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutboundWebhookLogWhereInput | OutboundWebhookLogWhereInput[]
    OR?: OutboundWebhookLogWhereInput[]
    NOT?: OutboundWebhookLogWhereInput | OutboundWebhookLogWhereInput[]
    createdAt?: DateTimeFilter<"OutboundWebhookLog"> | Date | string
    kind?: StringFilter<"OutboundWebhookLog"> | string
    targetUrl?: StringFilter<"OutboundWebhookLog"> | string
    event?: StringFilter<"OutboundWebhookLog"> | string
    payload?: JsonFilter<"OutboundWebhookLog">
    statusCode?: IntNullableFilter<"OutboundWebhookLog"> | number | null
    responseBody?: StringNullableFilter<"OutboundWebhookLog"> | string | null
    error?: StringNullableFilter<"OutboundWebhookLog"> | string | null
    attempt?: IntFilter<"OutboundWebhookLog"> | number
    maxAttempts?: IntFilter<"OutboundWebhookLog"> | number
    nextAttemptAt?: DateTimeNullableFilter<"OutboundWebhookLog"> | Date | string | null
  }, "id">

  export type OutboundWebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    targetUrl?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrderInput | SortOrder
    _count?: OutboundWebhookLogCountOrderByAggregateInput
    _avg?: OutboundWebhookLogAvgOrderByAggregateInput
    _max?: OutboundWebhookLogMaxOrderByAggregateInput
    _min?: OutboundWebhookLogMinOrderByAggregateInput
    _sum?: OutboundWebhookLogSumOrderByAggregateInput
  }

  export type OutboundWebhookLogScalarWhereWithAggregatesInput = {
    AND?: OutboundWebhookLogScalarWhereWithAggregatesInput | OutboundWebhookLogScalarWhereWithAggregatesInput[]
    OR?: OutboundWebhookLogScalarWhereWithAggregatesInput[]
    NOT?: OutboundWebhookLogScalarWhereWithAggregatesInput | OutboundWebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutboundWebhookLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OutboundWebhookLog"> | Date | string
    kind?: StringWithAggregatesFilter<"OutboundWebhookLog"> | string
    targetUrl?: StringWithAggregatesFilter<"OutboundWebhookLog"> | string
    event?: StringWithAggregatesFilter<"OutboundWebhookLog"> | string
    payload?: JsonWithAggregatesFilter<"OutboundWebhookLog">
    statusCode?: IntNullableWithAggregatesFilter<"OutboundWebhookLog"> | number | null
    responseBody?: StringNullableWithAggregatesFilter<"OutboundWebhookLog"> | string | null
    error?: StringNullableWithAggregatesFilter<"OutboundWebhookLog"> | string | null
    attempt?: IntWithAggregatesFilter<"OutboundWebhookLog"> | number
    maxAttempts?: IntWithAggregatesFilter<"OutboundWebhookLog"> | number
    nextAttemptAt?: DateTimeNullableWithAggregatesFilter<"OutboundWebhookLog"> | Date | string | null
  }

  export type ApplicantCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    latestSession?: KycSessionCreateNestedOneWithoutLatestForInput
    sessions?: KycSessionCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    latestSessionId?: string | null
    sessions?: KycSessionUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    latestSession?: KycSessionUpdateOneWithoutLatestForNestedInput
    sessions?: KycSessionUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    latestSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: KycSessionUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    latestSessionId?: string | null
  }

  export type ApplicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
  }

  export type ApplicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    latestSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KycSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    applicant: ApplicantCreateNestedOneWithoutSessionsInput
    documents?: DocumentCreateNestedManyWithoutSessionInput
    decisions?: DecisionCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    documents?: DocumentUncheckedCreateNestedManyWithoutSessionInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantUncheckedCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    applicant?: ApplicantUpdateOneRequiredWithoutSessionsNestedInput
    documents?: DocumentUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicantId?: StringFieldUpdateOperationsInput | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    documents?: DocumentUncheckedUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUncheckedUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
  }

  export type KycSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
  }

  export type KycSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicantId?: StringFieldUpdateOperationsInput | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
  }

  export type DocumentCreateInput = {
    id?: string
    uploadedAt?: Date | string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
    session: KycSessionCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    uploadedAt?: Date | string
    sessionId: string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
    session?: KycSessionUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    uploadedAt?: Date | string
    sessionId: string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionCreateInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.KycStatus
    reason?: string | null
    decidedBy: string
    session: KycSessionCreateNestedOneWithoutDecisionsInput
  }

  export type DecisionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    sessionId: string
    status: $Enums.KycStatus
    reason?: string | null
    decidedBy: string
  }

  export type DecisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
    session?: KycSessionUpdateOneRequiredWithoutDecisionsNestedInput
  }

  export type DecisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    sessionId: string
    status: $Enums.KycStatus
    reason?: string | null
    decidedBy: string
  }

  export type DecisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    createdAt?: Date | string
    event: string
    severity?: $Enums.Severity
    message?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    ip?: string | null
    ua?: string | null
    actorType?: $Enums.ActorType
    actorId?: string | null
    whmcsClientId?: number | null
    applicantId?: string | null
    session?: KycSessionCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    event: string
    severity?: $Enums.Severity
    message?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    ip?: string | null
    ua?: string | null
    actorType?: $Enums.ActorType
    actorId?: string | null
    whmcsClientId?: number | null
    applicantId?: string | null
    sessionId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    session?: KycSessionUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    event: string
    severity?: $Enums.Severity
    message?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    ip?: string | null
    ua?: string | null
    actorType?: $Enums.ActorType
    actorId?: string | null
    whmcsClientId?: number | null
    applicantId?: string | null
    sessionId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutboundWebhookLogCreateInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    targetUrl: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    responseBody?: string | null
    error?: string | null
    attempt?: number
    maxAttempts?: number
    nextAttemptAt?: Date | string | null
  }

  export type OutboundWebhookLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    targetUrl: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    responseBody?: string | null
    error?: string | null
    attempt?: number
    maxAttempts?: number
    nextAttemptAt?: Date | string | null
  }

  export type OutboundWebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboundWebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboundWebhookLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    targetUrl: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    responseBody?: string | null
    error?: string | null
    attempt?: number
    maxAttempts?: number
    nextAttemptAt?: Date | string | null
  }

  export type OutboundWebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutboundWebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumResidencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Residency | EnumResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidencyNullableFilter<$PrismaModel> | $Enums.Residency | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type KycSessionNullableScalarRelationFilter = {
    is?: KycSessionWhereInput | null
    isNot?: KycSessionWhereInput | null
  }

  export type KycSessionListRelationFilter = {
    every?: KycSessionWhereInput
    some?: KycSessionWhereInput
    none?: KycSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KycSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicantCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whmcsClientId?: SortOrder
    email?: SortOrder
    residency?: SortOrder
    latestSessionId?: SortOrder
  }

  export type ApplicantAvgOrderByAggregateInput = {
    whmcsClientId?: SortOrder
  }

  export type ApplicantMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whmcsClientId?: SortOrder
    email?: SortOrder
    residency?: SortOrder
    latestSessionId?: SortOrder
  }

  export type ApplicantMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whmcsClientId?: SortOrder
    email?: SortOrder
    residency?: SortOrder
    latestSessionId?: SortOrder
  }

  export type ApplicantSumOrderByAggregateInput = {
    whmcsClientId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumResidencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Residency | EnumResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Residency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumResidencyNullableFilter<$PrismaModel>
    _max?: NestedEnumResidencyNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type ApplicantScalarRelationFilter = {
    is?: ApplicantWhereInput
    isNot?: ApplicantWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type DecisionListRelationFilter = {
    every?: DecisionWhereInput
    some?: DecisionWhereInput
    none?: DecisionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type ApplicantNullableScalarRelationFilter = {
    is?: ApplicantWhereInput | null
    isNot?: ApplicantWhereInput | null
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DecisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KycSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicantId?: SortOrder
    tokenSalt?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    status?: SortOrder
    residency?: SortOrder
  }

  export type KycSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicantId?: SortOrder
    tokenSalt?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    status?: SortOrder
    residency?: SortOrder
  }

  export type KycSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicantId?: SortOrder
    tokenSalt?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    status?: SortOrder
    residency?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type EnumDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeFilter<$PrismaModel> | $Enums.DocType
  }

  export type KycSessionScalarRelationFilter = {
    is?: KycSessionWhereInput
    isNot?: KycSessionWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    uploadedAt?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    objectKey?: SortOrder
    mime?: SortOrder
    bytes?: SortOrder
    sha256?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    bytes?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    uploadedAt?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    objectKey?: SortOrder
    mime?: SortOrder
    bytes?: SortOrder
    sha256?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    uploadedAt?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    objectKey?: SortOrder
    mime?: SortOrder
    bytes?: SortOrder
    sha256?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    bytes?: SortOrder
  }

  export type EnumDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocTypeFilter<$PrismaModel>
  }

  export type DecisionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    decidedBy?: SortOrder
  }

  export type DecisionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    decidedBy?: SortOrder
  }

  export type DecisionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    decidedBy?: SortOrder
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    data?: SortOrder
    correlationId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrder
    whmcsClientId?: SortOrder
    applicantId?: SortOrder
    sessionId?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    whmcsClientId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    correlationId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrder
    whmcsClientId?: SortOrder
    applicantId?: SortOrder
    sessionId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    event?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    correlationId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrder
    whmcsClientId?: SortOrder
    applicantId?: SortOrder
    sessionId?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    whmcsClientId?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActorTypeFilter<$PrismaModel>
    _max?: NestedEnumActorTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OutboundWebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    targetUrl?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    statusCode?: SortOrder
    responseBody?: SortOrder
    error?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
  }

  export type OutboundWebhookLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
  }

  export type OutboundWebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    targetUrl?: SortOrder
    event?: SortOrder
    statusCode?: SortOrder
    responseBody?: SortOrder
    error?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
  }

  export type OutboundWebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    targetUrl?: SortOrder
    event?: SortOrder
    statusCode?: SortOrder
    responseBody?: SortOrder
    error?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
  }

  export type OutboundWebhookLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type KycSessionCreateNestedOneWithoutLatestForInput = {
    create?: XOR<KycSessionCreateWithoutLatestForInput, KycSessionUncheckedCreateWithoutLatestForInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutLatestForInput
    connect?: KycSessionWhereUniqueInput
  }

  export type KycSessionCreateNestedManyWithoutApplicantInput = {
    create?: XOR<KycSessionCreateWithoutApplicantInput, KycSessionUncheckedCreateWithoutApplicantInput> | KycSessionCreateWithoutApplicantInput[] | KycSessionUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutApplicantInput | KycSessionCreateOrConnectWithoutApplicantInput[]
    createMany?: KycSessionCreateManyApplicantInputEnvelope
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
  }

  export type KycSessionUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<KycSessionCreateWithoutApplicantInput, KycSessionUncheckedCreateWithoutApplicantInput> | KycSessionCreateWithoutApplicantInput[] | KycSessionUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutApplicantInput | KycSessionCreateOrConnectWithoutApplicantInput[]
    createMany?: KycSessionCreateManyApplicantInputEnvelope
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumResidencyFieldUpdateOperationsInput = {
    set?: $Enums.Residency | null
  }

  export type KycSessionUpdateOneWithoutLatestForNestedInput = {
    create?: XOR<KycSessionCreateWithoutLatestForInput, KycSessionUncheckedCreateWithoutLatestForInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutLatestForInput
    upsert?: KycSessionUpsertWithoutLatestForInput
    disconnect?: KycSessionWhereInput | boolean
    delete?: KycSessionWhereInput | boolean
    connect?: KycSessionWhereUniqueInput
    update?: XOR<XOR<KycSessionUpdateToOneWithWhereWithoutLatestForInput, KycSessionUpdateWithoutLatestForInput>, KycSessionUncheckedUpdateWithoutLatestForInput>
  }

  export type KycSessionUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<KycSessionCreateWithoutApplicantInput, KycSessionUncheckedCreateWithoutApplicantInput> | KycSessionCreateWithoutApplicantInput[] | KycSessionUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutApplicantInput | KycSessionCreateOrConnectWithoutApplicantInput[]
    upsert?: KycSessionUpsertWithWhereUniqueWithoutApplicantInput | KycSessionUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: KycSessionCreateManyApplicantInputEnvelope
    set?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    disconnect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    delete?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    update?: KycSessionUpdateWithWhereUniqueWithoutApplicantInput | KycSessionUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: KycSessionUpdateManyWithWhereWithoutApplicantInput | KycSessionUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type KycSessionUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<KycSessionCreateWithoutApplicantInput, KycSessionUncheckedCreateWithoutApplicantInput> | KycSessionCreateWithoutApplicantInput[] | KycSessionUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: KycSessionCreateOrConnectWithoutApplicantInput | KycSessionCreateOrConnectWithoutApplicantInput[]
    upsert?: KycSessionUpsertWithWhereUniqueWithoutApplicantInput | KycSessionUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: KycSessionCreateManyApplicantInputEnvelope
    set?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    disconnect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    delete?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    connect?: KycSessionWhereUniqueInput | KycSessionWhereUniqueInput[]
    update?: KycSessionUpdateWithWhereUniqueWithoutApplicantInput | KycSessionUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: KycSessionUpdateManyWithWhereWithoutApplicantInput | KycSessionUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
  }

  export type ApplicantCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ApplicantCreateWithoutSessionsInput, ApplicantUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutSessionsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutSessionInput = {
    create?: XOR<DocumentCreateWithoutSessionInput, DocumentUncheckedCreateWithoutSessionInput> | DocumentCreateWithoutSessionInput[] | DocumentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSessionInput | DocumentCreateOrConnectWithoutSessionInput[]
    createMany?: DocumentCreateManySessionInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DecisionCreateNestedManyWithoutSessionInput = {
    create?: XOR<DecisionCreateWithoutSessionInput, DecisionUncheckedCreateWithoutSessionInput> | DecisionCreateWithoutSessionInput[] | DecisionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutSessionInput | DecisionCreateOrConnectWithoutSessionInput[]
    createMany?: DecisionCreateManySessionInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutSessionInput = {
    create?: XOR<AuditLogCreateWithoutSessionInput, AuditLogUncheckedCreateWithoutSessionInput> | AuditLogCreateWithoutSessionInput[] | AuditLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSessionInput | AuditLogCreateOrConnectWithoutSessionInput[]
    createMany?: AuditLogCreateManySessionInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApplicantCreateNestedOneWithoutLatestSessionInput = {
    create?: XOR<ApplicantCreateWithoutLatestSessionInput, ApplicantUncheckedCreateWithoutLatestSessionInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutLatestSessionInput
    connect?: ApplicantWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<DocumentCreateWithoutSessionInput, DocumentUncheckedCreateWithoutSessionInput> | DocumentCreateWithoutSessionInput[] | DocumentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSessionInput | DocumentCreateOrConnectWithoutSessionInput[]
    createMany?: DocumentCreateManySessionInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DecisionUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<DecisionCreateWithoutSessionInput, DecisionUncheckedCreateWithoutSessionInput> | DecisionCreateWithoutSessionInput[] | DecisionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutSessionInput | DecisionCreateOrConnectWithoutSessionInput[]
    createMany?: DecisionCreateManySessionInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AuditLogCreateWithoutSessionInput, AuditLogUncheckedCreateWithoutSessionInput> | AuditLogCreateWithoutSessionInput[] | AuditLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSessionInput | AuditLogCreateOrConnectWithoutSessionInput[]
    createMany?: AuditLogCreateManySessionInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApplicantUncheckedCreateNestedOneWithoutLatestSessionInput = {
    create?: XOR<ApplicantCreateWithoutLatestSessionInput, ApplicantUncheckedCreateWithoutLatestSessionInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutLatestSessionInput
    connect?: ApplicantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type ApplicantUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<ApplicantCreateWithoutSessionsInput, ApplicantUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutSessionsInput
    upsert?: ApplicantUpsertWithoutSessionsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutSessionsInput, ApplicantUpdateWithoutSessionsInput>, ApplicantUncheckedUpdateWithoutSessionsInput>
  }

  export type DocumentUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DocumentCreateWithoutSessionInput, DocumentUncheckedCreateWithoutSessionInput> | DocumentCreateWithoutSessionInput[] | DocumentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSessionInput | DocumentCreateOrConnectWithoutSessionInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutSessionInput | DocumentUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DocumentCreateManySessionInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutSessionInput | DocumentUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutSessionInput | DocumentUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DecisionUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DecisionCreateWithoutSessionInput, DecisionUncheckedCreateWithoutSessionInput> | DecisionCreateWithoutSessionInput[] | DecisionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutSessionInput | DecisionCreateOrConnectWithoutSessionInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutSessionInput | DecisionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DecisionCreateManySessionInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutSessionInput | DecisionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutSessionInput | DecisionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AuditLogCreateWithoutSessionInput, AuditLogUncheckedCreateWithoutSessionInput> | AuditLogCreateWithoutSessionInput[] | AuditLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSessionInput | AuditLogCreateOrConnectWithoutSessionInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutSessionInput | AuditLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AuditLogCreateManySessionInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutSessionInput | AuditLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutSessionInput | AuditLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApplicantUpdateOneWithoutLatestSessionNestedInput = {
    create?: XOR<ApplicantCreateWithoutLatestSessionInput, ApplicantUncheckedCreateWithoutLatestSessionInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutLatestSessionInput
    upsert?: ApplicantUpsertWithoutLatestSessionInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutLatestSessionInput, ApplicantUpdateWithoutLatestSessionInput>, ApplicantUncheckedUpdateWithoutLatestSessionInput>
  }

  export type DocumentUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DocumentCreateWithoutSessionInput, DocumentUncheckedCreateWithoutSessionInput> | DocumentCreateWithoutSessionInput[] | DocumentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSessionInput | DocumentCreateOrConnectWithoutSessionInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutSessionInput | DocumentUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DocumentCreateManySessionInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutSessionInput | DocumentUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutSessionInput | DocumentUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DecisionUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DecisionCreateWithoutSessionInput, DecisionUncheckedCreateWithoutSessionInput> | DecisionCreateWithoutSessionInput[] | DecisionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutSessionInput | DecisionCreateOrConnectWithoutSessionInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutSessionInput | DecisionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DecisionCreateManySessionInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutSessionInput | DecisionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutSessionInput | DecisionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AuditLogCreateWithoutSessionInput, AuditLogUncheckedCreateWithoutSessionInput> | AuditLogCreateWithoutSessionInput[] | AuditLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSessionInput | AuditLogCreateOrConnectWithoutSessionInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutSessionInput | AuditLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AuditLogCreateManySessionInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutSessionInput | AuditLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutSessionInput | AuditLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApplicantUncheckedUpdateOneWithoutLatestSessionNestedInput = {
    create?: XOR<ApplicantCreateWithoutLatestSessionInput, ApplicantUncheckedCreateWithoutLatestSessionInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutLatestSessionInput
    upsert?: ApplicantUpsertWithoutLatestSessionInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutLatestSessionInput, ApplicantUpdateWithoutLatestSessionInput>, ApplicantUncheckedUpdateWithoutLatestSessionInput>
  }

  export type KycSessionCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<KycSessionCreateWithoutDocumentsInput, KycSessionUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutDocumentsInput
    connect?: KycSessionWhereUniqueInput
  }

  export type EnumDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocType
  }

  export type KycSessionUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<KycSessionCreateWithoutDocumentsInput, KycSessionUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutDocumentsInput
    upsert?: KycSessionUpsertWithoutDocumentsInput
    connect?: KycSessionWhereUniqueInput
    update?: XOR<XOR<KycSessionUpdateToOneWithWhereWithoutDocumentsInput, KycSessionUpdateWithoutDocumentsInput>, KycSessionUncheckedUpdateWithoutDocumentsInput>
  }

  export type KycSessionCreateNestedOneWithoutDecisionsInput = {
    create?: XOR<KycSessionCreateWithoutDecisionsInput, KycSessionUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutDecisionsInput
    connect?: KycSessionWhereUniqueInput
  }

  export type KycSessionUpdateOneRequiredWithoutDecisionsNestedInput = {
    create?: XOR<KycSessionCreateWithoutDecisionsInput, KycSessionUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutDecisionsInput
    upsert?: KycSessionUpsertWithoutDecisionsInput
    connect?: KycSessionWhereUniqueInput
    update?: XOR<XOR<KycSessionUpdateToOneWithWhereWithoutDecisionsInput, KycSessionUpdateWithoutDecisionsInput>, KycSessionUncheckedUpdateWithoutDecisionsInput>
  }

  export type KycSessionCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<KycSessionCreateWithoutAuditLogsInput, KycSessionUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutAuditLogsInput
    connect?: KycSessionWhereUniqueInput
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type EnumActorTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActorType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KycSessionUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<KycSessionCreateWithoutAuditLogsInput, KycSessionUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: KycSessionCreateOrConnectWithoutAuditLogsInput
    upsert?: KycSessionUpsertWithoutAuditLogsInput
    disconnect?: KycSessionWhereInput | boolean
    delete?: KycSessionWhereInput | boolean
    connect?: KycSessionWhereUniqueInput
    update?: XOR<XOR<KycSessionUpdateToOneWithWhereWithoutAuditLogsInput, KycSessionUpdateWithoutAuditLogsInput>, KycSessionUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumResidencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Residency | EnumResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidencyNullableFilter<$PrismaModel> | $Enums.Residency | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumResidencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Residency | EnumResidencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Residency[] | ListEnumResidencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumResidencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Residency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumResidencyNullableFilter<$PrismaModel>
    _max?: NestedEnumResidencyNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type NestedEnumDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeFilter<$PrismaModel> | $Enums.DocType
  }

  export type NestedEnumDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocTypeFilter<$PrismaModel>
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActorTypeFilter<$PrismaModel>
    _max?: NestedEnumActorTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type KycSessionCreateWithoutLatestForInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    applicant: ApplicantCreateNestedOneWithoutSessionsInput
    documents?: DocumentCreateNestedManyWithoutSessionInput
    decisions?: DecisionCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogCreateNestedManyWithoutSessionInput
  }

  export type KycSessionUncheckedCreateWithoutLatestForInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    documents?: DocumentUncheckedCreateNestedManyWithoutSessionInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type KycSessionCreateOrConnectWithoutLatestForInput = {
    where: KycSessionWhereUniqueInput
    create: XOR<KycSessionCreateWithoutLatestForInput, KycSessionUncheckedCreateWithoutLatestForInput>
  }

  export type KycSessionCreateWithoutApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    documents?: DocumentCreateNestedManyWithoutSessionInput
    decisions?: DecisionCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionUncheckedCreateWithoutApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    documents?: DocumentUncheckedCreateNestedManyWithoutSessionInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantUncheckedCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionCreateOrConnectWithoutApplicantInput = {
    where: KycSessionWhereUniqueInput
    create: XOR<KycSessionCreateWithoutApplicantInput, KycSessionUncheckedCreateWithoutApplicantInput>
  }

  export type KycSessionCreateManyApplicantInputEnvelope = {
    data: KycSessionCreateManyApplicantInput | KycSessionCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type KycSessionUpsertWithoutLatestForInput = {
    update: XOR<KycSessionUpdateWithoutLatestForInput, KycSessionUncheckedUpdateWithoutLatestForInput>
    create: XOR<KycSessionCreateWithoutLatestForInput, KycSessionUncheckedCreateWithoutLatestForInput>
    where?: KycSessionWhereInput
  }

  export type KycSessionUpdateToOneWithWhereWithoutLatestForInput = {
    where?: KycSessionWhereInput
    data: XOR<KycSessionUpdateWithoutLatestForInput, KycSessionUncheckedUpdateWithoutLatestForInput>
  }

  export type KycSessionUpdateWithoutLatestForInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    applicant?: ApplicantUpdateOneRequiredWithoutSessionsNestedInput
    documents?: DocumentUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSessionNestedInput
  }

  export type KycSessionUncheckedUpdateWithoutLatestForInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicantId?: StringFieldUpdateOperationsInput | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    documents?: DocumentUncheckedUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type KycSessionUpsertWithWhereUniqueWithoutApplicantInput = {
    where: KycSessionWhereUniqueInput
    update: XOR<KycSessionUpdateWithoutApplicantInput, KycSessionUncheckedUpdateWithoutApplicantInput>
    create: XOR<KycSessionCreateWithoutApplicantInput, KycSessionUncheckedCreateWithoutApplicantInput>
  }

  export type KycSessionUpdateWithWhereUniqueWithoutApplicantInput = {
    where: KycSessionWhereUniqueInput
    data: XOR<KycSessionUpdateWithoutApplicantInput, KycSessionUncheckedUpdateWithoutApplicantInput>
  }

  export type KycSessionUpdateManyWithWhereWithoutApplicantInput = {
    where: KycSessionScalarWhereInput
    data: XOR<KycSessionUpdateManyMutationInput, KycSessionUncheckedUpdateManyWithoutApplicantInput>
  }

  export type KycSessionScalarWhereInput = {
    AND?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
    OR?: KycSessionScalarWhereInput[]
    NOT?: KycSessionScalarWhereInput | KycSessionScalarWhereInput[]
    id?: StringFilter<"KycSession"> | string
    createdAt?: DateTimeFilter<"KycSession"> | Date | string
    updatedAt?: DateTimeFilter<"KycSession"> | Date | string
    applicantId?: StringFilter<"KycSession"> | string
    tokenSalt?: StringFilter<"KycSession"> | string
    tokenHash?: StringFilter<"KycSession"> | string
    expiresAt?: DateTimeFilter<"KycSession"> | Date | string
    consumedAt?: DateTimeNullableFilter<"KycSession"> | Date | string | null
    status?: EnumKycStatusFilter<"KycSession"> | $Enums.KycStatus
    residency?: EnumResidencyNullableFilter<"KycSession"> | $Enums.Residency | null
  }

  export type ApplicantCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    latestSession?: KycSessionCreateNestedOneWithoutLatestForInput
  }

  export type ApplicantUncheckedCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    latestSessionId?: string | null
  }

  export type ApplicantCreateOrConnectWithoutSessionsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutSessionsInput, ApplicantUncheckedCreateWithoutSessionsInput>
  }

  export type DocumentCreateWithoutSessionInput = {
    id?: string
    uploadedAt?: Date | string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
  }

  export type DocumentUncheckedCreateWithoutSessionInput = {
    id?: string
    uploadedAt?: Date | string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
  }

  export type DocumentCreateOrConnectWithoutSessionInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutSessionInput, DocumentUncheckedCreateWithoutSessionInput>
  }

  export type DocumentCreateManySessionInputEnvelope = {
    data: DocumentCreateManySessionInput | DocumentCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type DecisionCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.KycStatus
    reason?: string | null
    decidedBy: string
  }

  export type DecisionUncheckedCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.KycStatus
    reason?: string | null
    decidedBy: string
  }

  export type DecisionCreateOrConnectWithoutSessionInput = {
    where: DecisionWhereUniqueInput
    create: XOR<DecisionCreateWithoutSessionInput, DecisionUncheckedCreateWithoutSessionInput>
  }

  export type DecisionCreateManySessionInputEnvelope = {
    data: DecisionCreateManySessionInput | DecisionCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    event: string
    severity?: $Enums.Severity
    message?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    ip?: string | null
    ua?: string | null
    actorType?: $Enums.ActorType
    actorId?: string | null
    whmcsClientId?: number | null
    applicantId?: string | null
  }

  export type AuditLogUncheckedCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    event: string
    severity?: $Enums.Severity
    message?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    ip?: string | null
    ua?: string | null
    actorType?: $Enums.ActorType
    actorId?: string | null
    whmcsClientId?: number | null
    applicantId?: string | null
  }

  export type AuditLogCreateOrConnectWithoutSessionInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutSessionInput, AuditLogUncheckedCreateWithoutSessionInput>
  }

  export type AuditLogCreateManySessionInputEnvelope = {
    data: AuditLogCreateManySessionInput | AuditLogCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ApplicantCreateWithoutLatestSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    sessions?: KycSessionCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutLatestSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whmcsClientId: number
    email: string
    residency?: $Enums.Residency | null
    sessions?: KycSessionUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutLatestSessionInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutLatestSessionInput, ApplicantUncheckedCreateWithoutLatestSessionInput>
  }

  export type ApplicantUpsertWithoutSessionsInput = {
    update: XOR<ApplicantUpdateWithoutSessionsInput, ApplicantUncheckedUpdateWithoutSessionsInput>
    create: XOR<ApplicantCreateWithoutSessionsInput, ApplicantUncheckedCreateWithoutSessionsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutSessionsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutSessionsInput, ApplicantUncheckedUpdateWithoutSessionsInput>
  }

  export type ApplicantUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    latestSession?: KycSessionUpdateOneWithoutLatestForNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    latestSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUpsertWithWhereUniqueWithoutSessionInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutSessionInput, DocumentUncheckedUpdateWithoutSessionInput>
    create: XOR<DocumentCreateWithoutSessionInput, DocumentUncheckedCreateWithoutSessionInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutSessionInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutSessionInput, DocumentUncheckedUpdateWithoutSessionInput>
  }

  export type DocumentUpdateManyWithWhereWithoutSessionInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutSessionInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    sessionId?: StringFilter<"Document"> | string
    type?: EnumDocTypeFilter<"Document"> | $Enums.DocType
    objectKey?: StringFilter<"Document"> | string
    mime?: StringFilter<"Document"> | string
    bytes?: IntFilter<"Document"> | number
    sha256?: StringFilter<"Document"> | string
  }

  export type DecisionUpsertWithWhereUniqueWithoutSessionInput = {
    where: DecisionWhereUniqueInput
    update: XOR<DecisionUpdateWithoutSessionInput, DecisionUncheckedUpdateWithoutSessionInput>
    create: XOR<DecisionCreateWithoutSessionInput, DecisionUncheckedCreateWithoutSessionInput>
  }

  export type DecisionUpdateWithWhereUniqueWithoutSessionInput = {
    where: DecisionWhereUniqueInput
    data: XOR<DecisionUpdateWithoutSessionInput, DecisionUncheckedUpdateWithoutSessionInput>
  }

  export type DecisionUpdateManyWithWhereWithoutSessionInput = {
    where: DecisionScalarWhereInput
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyWithoutSessionInput>
  }

  export type DecisionScalarWhereInput = {
    AND?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    OR?: DecisionScalarWhereInput[]
    NOT?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    id?: StringFilter<"Decision"> | string
    createdAt?: DateTimeFilter<"Decision"> | Date | string
    sessionId?: StringFilter<"Decision"> | string
    status?: EnumKycStatusFilter<"Decision"> | $Enums.KycStatus
    reason?: StringNullableFilter<"Decision"> | string | null
    decidedBy?: StringFilter<"Decision"> | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutSessionInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutSessionInput, AuditLogUncheckedUpdateWithoutSessionInput>
    create: XOR<AuditLogCreateWithoutSessionInput, AuditLogUncheckedCreateWithoutSessionInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutSessionInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutSessionInput, AuditLogUncheckedUpdateWithoutSessionInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutSessionInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutSessionInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    event?: StringFilter<"AuditLog"> | string
    severity?: EnumSeverityFilter<"AuditLog"> | $Enums.Severity
    message?: StringNullableFilter<"AuditLog"> | string | null
    data?: JsonNullableFilter<"AuditLog">
    correlationId?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    ua?: StringNullableFilter<"AuditLog"> | string | null
    actorType?: EnumActorTypeFilter<"AuditLog"> | $Enums.ActorType
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    whmcsClientId?: IntNullableFilter<"AuditLog"> | number | null
    applicantId?: StringNullableFilter<"AuditLog"> | string | null
    sessionId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type ApplicantUpsertWithoutLatestSessionInput = {
    update: XOR<ApplicantUpdateWithoutLatestSessionInput, ApplicantUncheckedUpdateWithoutLatestSessionInput>
    create: XOR<ApplicantCreateWithoutLatestSessionInput, ApplicantUncheckedCreateWithoutLatestSessionInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutLatestSessionInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutLatestSessionInput, ApplicantUncheckedUpdateWithoutLatestSessionInput>
  }

  export type ApplicantUpdateWithoutLatestSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    sessions?: KycSessionUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutLatestSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whmcsClientId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    sessions?: KycSessionUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type KycSessionCreateWithoutDocumentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    applicant: ApplicantCreateNestedOneWithoutSessionsInput
    decisions?: DecisionCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionUncheckedCreateWithoutDocumentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    decisions?: DecisionUncheckedCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantUncheckedCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionCreateOrConnectWithoutDocumentsInput = {
    where: KycSessionWhereUniqueInput
    create: XOR<KycSessionCreateWithoutDocumentsInput, KycSessionUncheckedCreateWithoutDocumentsInput>
  }

  export type KycSessionUpsertWithoutDocumentsInput = {
    update: XOR<KycSessionUpdateWithoutDocumentsInput, KycSessionUncheckedUpdateWithoutDocumentsInput>
    create: XOR<KycSessionCreateWithoutDocumentsInput, KycSessionUncheckedCreateWithoutDocumentsInput>
    where?: KycSessionWhereInput
  }

  export type KycSessionUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: KycSessionWhereInput
    data: XOR<KycSessionUpdateWithoutDocumentsInput, KycSessionUncheckedUpdateWithoutDocumentsInput>
  }

  export type KycSessionUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    applicant?: ApplicantUpdateOneRequiredWithoutSessionsNestedInput
    decisions?: DecisionUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicantId?: StringFieldUpdateOperationsInput | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    decisions?: DecisionUncheckedUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUncheckedUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionCreateWithoutDecisionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    applicant: ApplicantCreateNestedOneWithoutSessionsInput
    documents?: DocumentCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionUncheckedCreateWithoutDecisionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    documents?: DocumentUncheckedCreateNestedManyWithoutSessionInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantUncheckedCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionCreateOrConnectWithoutDecisionsInput = {
    where: KycSessionWhereUniqueInput
    create: XOR<KycSessionCreateWithoutDecisionsInput, KycSessionUncheckedCreateWithoutDecisionsInput>
  }

  export type KycSessionUpsertWithoutDecisionsInput = {
    update: XOR<KycSessionUpdateWithoutDecisionsInput, KycSessionUncheckedUpdateWithoutDecisionsInput>
    create: XOR<KycSessionCreateWithoutDecisionsInput, KycSessionUncheckedCreateWithoutDecisionsInput>
    where?: KycSessionWhereInput
  }

  export type KycSessionUpdateToOneWithWhereWithoutDecisionsInput = {
    where?: KycSessionWhereInput
    data: XOR<KycSessionUpdateWithoutDecisionsInput, KycSessionUncheckedUpdateWithoutDecisionsInput>
  }

  export type KycSessionUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    applicant?: ApplicantUpdateOneRequiredWithoutSessionsNestedInput
    documents?: DocumentUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionUncheckedUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicantId?: StringFieldUpdateOperationsInput | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    documents?: DocumentUncheckedUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUncheckedUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionCreateWithoutAuditLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    applicant: ApplicantCreateNestedOneWithoutSessionsInput
    documents?: DocumentCreateNestedManyWithoutSessionInput
    decisions?: DecisionCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicantId: string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
    documents?: DocumentUncheckedCreateNestedManyWithoutSessionInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutSessionInput
    latestFor?: ApplicantUncheckedCreateNestedOneWithoutLatestSessionInput
  }

  export type KycSessionCreateOrConnectWithoutAuditLogsInput = {
    where: KycSessionWhereUniqueInput
    create: XOR<KycSessionCreateWithoutAuditLogsInput, KycSessionUncheckedCreateWithoutAuditLogsInput>
  }

  export type KycSessionUpsertWithoutAuditLogsInput = {
    update: XOR<KycSessionUpdateWithoutAuditLogsInput, KycSessionUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<KycSessionCreateWithoutAuditLogsInput, KycSessionUncheckedCreateWithoutAuditLogsInput>
    where?: KycSessionWhereInput
  }

  export type KycSessionUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: KycSessionWhereInput
    data: XOR<KycSessionUpdateWithoutAuditLogsInput, KycSessionUncheckedUpdateWithoutAuditLogsInput>
  }

  export type KycSessionUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    applicant?: ApplicantUpdateOneRequiredWithoutSessionsNestedInput
    documents?: DocumentUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicantId?: StringFieldUpdateOperationsInput | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    documents?: DocumentUncheckedUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUncheckedUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionCreateManyApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenSalt: string
    tokenHash: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    status?: $Enums.KycStatus
    residency?: $Enums.Residency | null
  }

  export type KycSessionUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    documents?: DocumentUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
    documents?: DocumentUncheckedUpdateManyWithoutSessionNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutSessionNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSessionNestedInput
    latestFor?: ApplicantUncheckedUpdateOneWithoutLatestSessionNestedInput
  }

  export type KycSessionUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenSalt?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    residency?: NullableEnumResidencyFieldUpdateOperationsInput | $Enums.Residency | null
  }

  export type DocumentCreateManySessionInput = {
    id?: string
    uploadedAt?: Date | string
    type: $Enums.DocType
    objectKey: string
    mime: string
    bytes: number
    sha256: string
  }

  export type DecisionCreateManySessionInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.KycStatus
    reason?: string | null
    decidedBy: string
  }

  export type AuditLogCreateManySessionInput = {
    id?: string
    createdAt?: Date | string
    event: string
    severity?: $Enums.Severity
    message?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    ip?: string | null
    ua?: string | null
    actorType?: $Enums.ActorType
    actorId?: string | null
    whmcsClientId?: number | null
    applicantId?: string | null
  }

  export type DocumentUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    objectKey?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    bytes?: IntFieldUpdateOperationsInput | number
    sha256?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    whmcsClientId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
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