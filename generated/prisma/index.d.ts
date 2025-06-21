
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductOption
 * 
 */
export type ProductOption = $Result.DefaultSelection<Prisma.$ProductOptionPayload>
/**
 * Model ProductVariantOption
 * 
 */
export type ProductVariantOption = $Result.DefaultSelection<Prisma.$ProductVariantOptionPayload>
/**
 * Model ProductOptionValue
 * 
 */
export type ProductOptionValue = $Result.DefaultSelection<Prisma.$ProductOptionValuePayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model HomepageWidget
 * 
 */
export type HomepageWidget = $Result.DefaultSelection<Prisma.$HomepageWidgetPayload>
/**
 * Model WidgetItem
 * 
 */
export type WidgetItem = $Result.DefaultSelection<Prisma.$WidgetItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WidgetType: {
  HERO_BANNER: 'HERO_BANNER',
  PRODUCT_CAROUSEL: 'PRODUCT_CAROUSEL',
  CATEGORY_GRID: 'CATEGORY_GRID',
  CUSTOM_SECTION: 'CUSTOM_SECTION'
};

export type WidgetType = (typeof WidgetType)[keyof typeof WidgetType]


export const WidgetItemType: {
  PRODUCT: 'PRODUCT',
  CATEGORY: 'CATEGORY',
  BANNER: 'BANNER'
};

export type WidgetItemType = (typeof WidgetItemType)[keyof typeof WidgetItemType]

}

export type WidgetType = $Enums.WidgetType

export const WidgetType: typeof $Enums.WidgetType

export type WidgetItemType = $Enums.WidgetItemType

export const WidgetItemType: typeof $Enums.WidgetItemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productOption`: Exposes CRUD operations for the **ProductOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOptions
    * const productOptions = await prisma.productOption.findMany()
    * ```
    */
  get productOption(): Prisma.ProductOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariantOption`: Exposes CRUD operations for the **ProductVariantOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariantOptions
    * const productVariantOptions = await prisma.productVariantOption.findMany()
    * ```
    */
  get productVariantOption(): Prisma.ProductVariantOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productOptionValue`: Exposes CRUD operations for the **ProductOptionValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOptionValues
    * const productOptionValues = await prisma.productOptionValue.findMany()
    * ```
    */
  get productOptionValue(): Prisma.ProductOptionValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homepageWidget`: Exposes CRUD operations for the **HomepageWidget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomepageWidgets
    * const homepageWidgets = await prisma.homepageWidget.findMany()
    * ```
    */
  get homepageWidget(): Prisma.HomepageWidgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.widgetItem`: Exposes CRUD operations for the **WidgetItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WidgetItems
    * const widgetItems = await prisma.widgetItem.findMany()
    * ```
    */
  get widgetItem(): Prisma.WidgetItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Product: 'Product',
    ProductOption: 'ProductOption',
    ProductVariantOption: 'ProductVariantOption',
    ProductOptionValue: 'ProductOptionValue',
    ProductVariant: 'ProductVariant',
    Category: 'Category',
    Review: 'Review',
    User: 'User',
    Image: 'Image',
    Banner: 'Banner',
    HomepageWidget: 'HomepageWidget',
    WidgetItem: 'WidgetItem'
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
      modelProps: "product" | "productOption" | "productVariantOption" | "productOptionValue" | "productVariant" | "category" | "review" | "user" | "image" | "banner" | "homepageWidget" | "widgetItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductOption: {
        payload: Prisma.$ProductOptionPayload<ExtArgs>
        fields: Prisma.ProductOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          findFirst: {
            args: Prisma.ProductOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          findMany: {
            args: Prisma.ProductOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>[]
          }
          create: {
            args: Prisma.ProductOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          createMany: {
            args: Prisma.ProductOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>[]
          }
          delete: {
            args: Prisma.ProductOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          update: {
            args: Prisma.ProductOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          deleteMany: {
            args: Prisma.ProductOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>[]
          }
          upsert: {
            args: Prisma.ProductOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          aggregate: {
            args: Prisma.ProductOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductOption>
          }
          groupBy: {
            args: Prisma.ProductOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductOptionCountAggregateOutputType> | number
          }
        }
      }
      ProductVariantOption: {
        payload: Prisma.$ProductVariantOptionPayload<ExtArgs>
        fields: Prisma.ProductVariantOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>
          }
          findMany: {
            args: Prisma.ProductVariantOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>[]
          }
          create: {
            args: Prisma.ProductVariantOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>
          }
          createMany: {
            args: Prisma.ProductVariantOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>
          }
          update: {
            args: Prisma.ProductVariantOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantOptionPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariantOption>
          }
          groupBy: {
            args: Prisma.ProductVariantOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantOptionCountAggregateOutputType> | number
          }
        }
      }
      ProductOptionValue: {
        payload: Prisma.$ProductOptionValuePayload<ExtArgs>
        fields: Prisma.ProductOptionValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOptionValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOptionValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>
          }
          findFirst: {
            args: Prisma.ProductOptionValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOptionValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>
          }
          findMany: {
            args: Prisma.ProductOptionValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>[]
          }
          create: {
            args: Prisma.ProductOptionValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>
          }
          createMany: {
            args: Prisma.ProductOptionValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductOptionValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>[]
          }
          delete: {
            args: Prisma.ProductOptionValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>
          }
          update: {
            args: Prisma.ProductOptionValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>
          }
          deleteMany: {
            args: Prisma.ProductOptionValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOptionValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductOptionValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>[]
          }
          upsert: {
            args: Prisma.ProductOptionValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOptionValuePayload>
          }
          aggregate: {
            args: Prisma.ProductOptionValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductOptionValue>
          }
          groupBy: {
            args: Prisma.ProductOptionValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductOptionValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOptionValueCountArgs<ExtArgs>
            result: $Utils.Optional<ProductOptionValueCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      HomepageWidget: {
        payload: Prisma.$HomepageWidgetPayload<ExtArgs>
        fields: Prisma.HomepageWidgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomepageWidgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomepageWidgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>
          }
          findFirst: {
            args: Prisma.HomepageWidgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomepageWidgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>
          }
          findMany: {
            args: Prisma.HomepageWidgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>[]
          }
          create: {
            args: Prisma.HomepageWidgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>
          }
          createMany: {
            args: Prisma.HomepageWidgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomepageWidgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>[]
          }
          delete: {
            args: Prisma.HomepageWidgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>
          }
          update: {
            args: Prisma.HomepageWidgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>
          }
          deleteMany: {
            args: Prisma.HomepageWidgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomepageWidgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomepageWidgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>[]
          }
          upsert: {
            args: Prisma.HomepageWidgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageWidgetPayload>
          }
          aggregate: {
            args: Prisma.HomepageWidgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomepageWidget>
          }
          groupBy: {
            args: Prisma.HomepageWidgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomepageWidgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomepageWidgetCountArgs<ExtArgs>
            result: $Utils.Optional<HomepageWidgetCountAggregateOutputType> | number
          }
        }
      }
      WidgetItem: {
        payload: Prisma.$WidgetItemPayload<ExtArgs>
        fields: Prisma.WidgetItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WidgetItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WidgetItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>
          }
          findFirst: {
            args: Prisma.WidgetItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WidgetItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>
          }
          findMany: {
            args: Prisma.WidgetItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>[]
          }
          create: {
            args: Prisma.WidgetItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>
          }
          createMany: {
            args: Prisma.WidgetItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WidgetItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>[]
          }
          delete: {
            args: Prisma.WidgetItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>
          }
          update: {
            args: Prisma.WidgetItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>
          }
          deleteMany: {
            args: Prisma.WidgetItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WidgetItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WidgetItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>[]
          }
          upsert: {
            args: Prisma.WidgetItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetItemPayload>
          }
          aggregate: {
            args: Prisma.WidgetItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWidgetItem>
          }
          groupBy: {
            args: Prisma.WidgetItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WidgetItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WidgetItemCountArgs<ExtArgs>
            result: $Utils.Optional<WidgetItemCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    product?: ProductOmit
    productOption?: ProductOptionOmit
    productVariantOption?: ProductVariantOptionOmit
    productOptionValue?: ProductOptionValueOmit
    productVariant?: ProductVariantOmit
    category?: CategoryOmit
    review?: ReviewOmit
    user?: UserOmit
    image?: ImageOmit
    banner?: BannerOmit
    homepageWidget?: HomepageWidgetOmit
    widgetItem?: WidgetItemOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productImages: number
    options: number
    variants: number
    reviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productImages?: boolean | ProductCountOutputTypeCountProductImagesArgs
    options?: boolean | ProductCountOutputTypeCountOptionsArgs
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ProductOptionCountOutputType
   */

  export type ProductOptionCountOutputType = {
    values: number
  }

  export type ProductOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | ProductOptionCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * ProductOptionCountOutputType without action
   */
  export type ProductOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionCountOutputType
     */
    select?: ProductOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductOptionCountOutputType without action
   */
  export type ProductOptionCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionValueWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    options: number
    images: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | ProductVariantCountOutputTypeCountOptionsArgs
    images?: boolean | ProductVariantCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantOptionWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategories: number
    products: number
    images: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryCountOutputTypeCountSubcategoriesArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    images?: boolean | CategoryCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type BannerCountOutputType
   */

  export type BannerCountOutputType = {
    images: number
  }

  export type BannerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | BannerCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * BannerCountOutputType without action
   */
  export type BannerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerCountOutputType
     */
    select?: BannerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BannerCountOutputType without action
   */
  export type BannerCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type HomepageWidgetCountOutputType
   */

  export type HomepageWidgetCountOutputType = {
    widgetItems: number
  }

  export type HomepageWidgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widgetItems?: boolean | HomepageWidgetCountOutputTypeCountWidgetItemsArgs
  }

  // Custom InputTypes
  /**
   * HomepageWidgetCountOutputType without action
   */
  export type HomepageWidgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidgetCountOutputType
     */
    select?: HomepageWidgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomepageWidgetCountOutputType without action
   */
  export type HomepageWidgetCountOutputTypeCountWidgetItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    salesCount: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    salesCount: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    brand: string | null
    title: string | null
    description: string | null
    price: number | null
    productInformation: string | null
    isNew: boolean | null
    isTrending: boolean | null
    salesCount: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    title: string | null
    description: string | null
    price: number | null
    productInformation: string | null
    isNew: boolean | null
    isTrending: boolean | null
    salesCount: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    brand: number
    title: number
    description: number
    price: number
    productInformation: number
    isNew: number
    isTrending: number
    salesCount: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    salesCount?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    salesCount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    brand?: true
    title?: true
    description?: true
    price?: true
    productInformation?: true
    isNew?: true
    isTrending?: true
    salesCount?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    brand?: true
    title?: true
    description?: true
    price?: true
    productInformation?: true
    isNew?: true
    isTrending?: true
    salesCount?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    brand?: true
    title?: true
    description?: true
    price?: true
    productInformation?: true
    isNew?: true
    isTrending?: true
    salesCount?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew: boolean
    isTrending: boolean
    salesCount: number
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    productInformation?: boolean
    isNew?: boolean
    isTrending?: boolean
    salesCount?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productImages?: boolean | Product$productImagesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    options?: boolean | Product$optionsArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    productInformation?: boolean
    isNew?: boolean
    isTrending?: boolean
    salesCount?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    productInformation?: boolean
    isNew?: boolean
    isTrending?: boolean
    salesCount?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    brand?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    productInformation?: boolean
    isNew?: boolean
    isTrending?: boolean
    salesCount?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "title" | "description" | "price" | "productInformation" | "isNew" | "isTrending" | "salesCount" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productImages?: boolean | Product$productImagesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    options?: boolean | Product$optionsArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      productImages: Prisma.$ImagePayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      options: Prisma.$ProductOptionPayload<ExtArgs>[]
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      title: string
      description: string
      price: number
      productInformation: string
      isNew: boolean
      isTrending: boolean
      salesCount: number
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productImages<T extends Product$productImagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$productImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Product$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly productInformation: FieldRef<"Product", 'String'>
    readonly isNew: FieldRef<"Product", 'Boolean'>
    readonly isTrending: FieldRef<"Product", 'Boolean'>
    readonly salesCount: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.productImages
   */
  export type Product$productImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Product.options
   */
  export type Product$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    where?: ProductOptionWhereInput
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    cursor?: ProductOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductOption
   */

  export type AggregateProductOption = {
    _count: ProductOptionCountAggregateOutputType | null
    _min: ProductOptionMinAggregateOutputType | null
    _max: ProductOptionMaxAggregateOutputType | null
  }

  export type ProductOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    productId: string | null
  }

  export type ProductOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    productId: string | null
  }

  export type ProductOptionCountAggregateOutputType = {
    id: number
    name: number
    productId: number
    _all: number
  }


  export type ProductOptionMinAggregateInputType = {
    id?: true
    name?: true
    productId?: true
  }

  export type ProductOptionMaxAggregateInputType = {
    id?: true
    name?: true
    productId?: true
  }

  export type ProductOptionCountAggregateInputType = {
    id?: true
    name?: true
    productId?: true
    _all?: true
  }

  export type ProductOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOption to aggregate.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOptions
    **/
    _count?: true | ProductOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOptionMaxAggregateInputType
  }

  export type GetProductOptionAggregateType<T extends ProductOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOption[P]>
      : GetScalarType<T[P], AggregateProductOption[P]>
  }




  export type ProductOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionWhereInput
    orderBy?: ProductOptionOrderByWithAggregationInput | ProductOptionOrderByWithAggregationInput[]
    by: ProductOptionScalarFieldEnum[] | ProductOptionScalarFieldEnum
    having?: ProductOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOptionCountAggregateInputType | true
    _min?: ProductOptionMinAggregateInputType
    _max?: ProductOptionMaxAggregateInputType
  }

  export type ProductOptionGroupByOutputType = {
    id: string
    name: string
    productId: string
    _count: ProductOptionCountAggregateOutputType | null
    _min: ProductOptionMinAggregateOutputType | null
    _max: ProductOptionMaxAggregateOutputType | null
  }

  type GetProductOptionGroupByPayload<T extends ProductOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    values?: boolean | ProductOption$valuesArgs<ExtArgs>
    _count?: boolean | ProductOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOption"]>

  export type ProductOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOption"]>

  export type ProductOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOption"]>

  export type ProductOptionSelectScalar = {
    id?: boolean
    name?: boolean
    productId?: boolean
  }

  export type ProductOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "productId", ExtArgs["result"]["productOption"]>
  export type ProductOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    values?: boolean | ProductOption$valuesArgs<ExtArgs>
    _count?: boolean | ProductOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOption"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      values: Prisma.$ProductOptionValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      productId: string
    }, ExtArgs["result"]["productOption"]>
    composites: {}
  }

  type ProductOptionGetPayload<S extends boolean | null | undefined | ProductOptionDefaultArgs> = $Result.GetResult<Prisma.$ProductOptionPayload, S>

  type ProductOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductOptionCountAggregateInputType | true
    }

  export interface ProductOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOption'], meta: { name: 'ProductOption' } }
    /**
     * Find zero or one ProductOption that matches the filter.
     * @param {ProductOptionFindUniqueArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductOptionFindUniqueArgs>(args: SelectSubset<T, ProductOptionFindUniqueArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductOptionFindUniqueOrThrowArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindFirstArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductOptionFindFirstArgs>(args?: SelectSubset<T, ProductOptionFindFirstArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindFirstOrThrowArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOptions
     * const productOptions = await prisma.productOption.findMany()
     * 
     * // Get first 10 ProductOptions
     * const productOptions = await prisma.productOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOptionWithIdOnly = await prisma.productOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductOptionFindManyArgs>(args?: SelectSubset<T, ProductOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductOption.
     * @param {ProductOptionCreateArgs} args - Arguments to create a ProductOption.
     * @example
     * // Create one ProductOption
     * const ProductOption = await prisma.productOption.create({
     *   data: {
     *     // ... data to create a ProductOption
     *   }
     * })
     * 
     */
    create<T extends ProductOptionCreateArgs>(args: SelectSubset<T, ProductOptionCreateArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductOptions.
     * @param {ProductOptionCreateManyArgs} args - Arguments to create many ProductOptions.
     * @example
     * // Create many ProductOptions
     * const productOption = await prisma.productOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductOptionCreateManyArgs>(args?: SelectSubset<T, ProductOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductOptions and returns the data saved in the database.
     * @param {ProductOptionCreateManyAndReturnArgs} args - Arguments to create many ProductOptions.
     * @example
     * // Create many ProductOptions
     * const productOption = await prisma.productOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductOptions and only return the `id`
     * const productOptionWithIdOnly = await prisma.productOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductOption.
     * @param {ProductOptionDeleteArgs} args - Arguments to delete one ProductOption.
     * @example
     * // Delete one ProductOption
     * const ProductOption = await prisma.productOption.delete({
     *   where: {
     *     // ... filter to delete one ProductOption
     *   }
     * })
     * 
     */
    delete<T extends ProductOptionDeleteArgs>(args: SelectSubset<T, ProductOptionDeleteArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductOption.
     * @param {ProductOptionUpdateArgs} args - Arguments to update one ProductOption.
     * @example
     * // Update one ProductOption
     * const productOption = await prisma.productOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductOptionUpdateArgs>(args: SelectSubset<T, ProductOptionUpdateArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductOptions.
     * @param {ProductOptionDeleteManyArgs} args - Arguments to filter ProductOptions to delete.
     * @example
     * // Delete a few ProductOptions
     * const { count } = await prisma.productOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductOptionDeleteManyArgs>(args?: SelectSubset<T, ProductOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOptions
     * const productOption = await prisma.productOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductOptionUpdateManyArgs>(args: SelectSubset<T, ProductOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOptions and returns the data updated in the database.
     * @param {ProductOptionUpdateManyAndReturnArgs} args - Arguments to update many ProductOptions.
     * @example
     * // Update many ProductOptions
     * const productOption = await prisma.productOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductOptions and only return the `id`
     * const productOptionWithIdOnly = await prisma.productOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductOption.
     * @param {ProductOptionUpsertArgs} args - Arguments to update or create a ProductOption.
     * @example
     * // Update or create a ProductOption
     * const productOption = await prisma.productOption.upsert({
     *   create: {
     *     // ... data to create a ProductOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOption we want to update
     *   }
     * })
     */
    upsert<T extends ProductOptionUpsertArgs>(args: SelectSubset<T, ProductOptionUpsertArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionCountArgs} args - Arguments to filter ProductOptions to count.
     * @example
     * // Count the number of ProductOptions
     * const count = await prisma.productOption.count({
     *   where: {
     *     // ... the filter for the ProductOptions we want to count
     *   }
     * })
    **/
    count<T extends ProductOptionCountArgs>(
      args?: Subset<T, ProductOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOptionAggregateArgs>(args: Subset<T, ProductOptionAggregateArgs>): Prisma.PrismaPromise<GetProductOptionAggregateType<T>>

    /**
     * Group by ProductOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionGroupByArgs} args - Group by arguments.
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
      T extends ProductOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOption model
   */
  readonly fields: ProductOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends ProductOption$valuesArgs<ExtArgs> = {}>(args?: Subset<T, ProductOption$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductOption model
   */
  interface ProductOptionFieldRefs {
    readonly id: FieldRef<"ProductOption", 'String'>
    readonly name: FieldRef<"ProductOption", 'String'>
    readonly productId: FieldRef<"ProductOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductOption findUnique
   */
  export type ProductOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where: ProductOptionWhereUniqueInput
  }

  /**
   * ProductOption findUniqueOrThrow
   */
  export type ProductOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where: ProductOptionWhereUniqueInput
  }

  /**
   * ProductOption findFirst
   */
  export type ProductOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptions.
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptions.
     */
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }

  /**
   * ProductOption findFirstOrThrow
   */
  export type ProductOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptions.
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptions.
     */
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }

  /**
   * ProductOption findMany
   */
  export type ProductOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptions to fetch.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOptions.
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }

  /**
   * ProductOption create
   */
  export type ProductOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOption.
     */
    data: XOR<ProductOptionCreateInput, ProductOptionUncheckedCreateInput>
  }

  /**
   * ProductOption createMany
   */
  export type ProductOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOptions.
     */
    data: ProductOptionCreateManyInput | ProductOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductOption createManyAndReturn
   */
  export type ProductOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductOptions.
     */
    data: ProductOptionCreateManyInput | ProductOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductOption update
   */
  export type ProductOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOption.
     */
    data: XOR<ProductOptionUpdateInput, ProductOptionUncheckedUpdateInput>
    /**
     * Choose, which ProductOption to update.
     */
    where: ProductOptionWhereUniqueInput
  }

  /**
   * ProductOption updateMany
   */
  export type ProductOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOptions.
     */
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductOptions to update
     */
    where?: ProductOptionWhereInput
    /**
     * Limit how many ProductOptions to update.
     */
    limit?: number
  }

  /**
   * ProductOption updateManyAndReturn
   */
  export type ProductOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * The data used to update ProductOptions.
     */
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductOptions to update
     */
    where?: ProductOptionWhereInput
    /**
     * Limit how many ProductOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductOption upsert
   */
  export type ProductOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOption to update in case it exists.
     */
    where: ProductOptionWhereUniqueInput
    /**
     * In case the ProductOption found by the `where` argument doesn't exist, create a new ProductOption with this data.
     */
    create: XOR<ProductOptionCreateInput, ProductOptionUncheckedCreateInput>
    /**
     * In case the ProductOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOptionUpdateInput, ProductOptionUncheckedUpdateInput>
  }

  /**
   * ProductOption delete
   */
  export type ProductOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter which ProductOption to delete.
     */
    where: ProductOptionWhereUniqueInput
  }

  /**
   * ProductOption deleteMany
   */
  export type ProductOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOptions to delete
     */
    where?: ProductOptionWhereInput
    /**
     * Limit how many ProductOptions to delete.
     */
    limit?: number
  }

  /**
   * ProductOption.values
   */
  export type ProductOption$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    where?: ProductOptionValueWhereInput
    orderBy?: ProductOptionValueOrderByWithRelationInput | ProductOptionValueOrderByWithRelationInput[]
    cursor?: ProductOptionValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOptionValueScalarFieldEnum | ProductOptionValueScalarFieldEnum[]
  }

  /**
   * ProductOption without action
   */
  export type ProductOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOption
     */
    omit?: ProductOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariantOption
   */

  export type AggregateProductVariantOption = {
    _count: ProductVariantOptionCountAggregateOutputType | null
    _min: ProductVariantOptionMinAggregateOutputType | null
    _max: ProductVariantOptionMaxAggregateOutputType | null
  }

  export type ProductVariantOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    productVariantId: string | null
  }

  export type ProductVariantOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    productVariantId: string | null
  }

  export type ProductVariantOptionCountAggregateOutputType = {
    id: number
    name: number
    value: number
    productVariantId: number
    _all: number
  }


  export type ProductVariantOptionMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    productVariantId?: true
  }

  export type ProductVariantOptionMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    productVariantId?: true
  }

  export type ProductVariantOptionCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    productVariantId?: true
    _all?: true
  }

  export type ProductVariantOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariantOption to aggregate.
     */
    where?: ProductVariantOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantOptions to fetch.
     */
    orderBy?: ProductVariantOptionOrderByWithRelationInput | ProductVariantOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariantOptions
    **/
    _count?: true | ProductVariantOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantOptionMaxAggregateInputType
  }

  export type GetProductVariantOptionAggregateType<T extends ProductVariantOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariantOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariantOption[P]>
      : GetScalarType<T[P], AggregateProductVariantOption[P]>
  }




  export type ProductVariantOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantOptionWhereInput
    orderBy?: ProductVariantOptionOrderByWithAggregationInput | ProductVariantOptionOrderByWithAggregationInput[]
    by: ProductVariantOptionScalarFieldEnum[] | ProductVariantOptionScalarFieldEnum
    having?: ProductVariantOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantOptionCountAggregateInputType | true
    _min?: ProductVariantOptionMinAggregateInputType
    _max?: ProductVariantOptionMaxAggregateInputType
  }

  export type ProductVariantOptionGroupByOutputType = {
    id: string
    name: string
    value: string
    productVariantId: string
    _count: ProductVariantOptionCountAggregateOutputType | null
    _min: ProductVariantOptionMinAggregateOutputType | null
    _max: ProductVariantOptionMaxAggregateOutputType | null
  }

  type GetProductVariantOptionGroupByPayload<T extends ProductVariantOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    productVariantId?: boolean
    product?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantOption"]>

  export type ProductVariantOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    productVariantId?: boolean
    product?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantOption"]>

  export type ProductVariantOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    productVariantId?: boolean
    product?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantOption"]>

  export type ProductVariantOptionSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    productVariantId?: boolean
  }

  export type ProductVariantOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "productVariantId", ExtArgs["result"]["productVariantOption"]>
  export type ProductVariantOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type ProductVariantOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type ProductVariantOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $ProductVariantOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariantOption"
    objects: {
      product: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: string
      productVariantId: string
    }, ExtArgs["result"]["productVariantOption"]>
    composites: {}
  }

  type ProductVariantOptionGetPayload<S extends boolean | null | undefined | ProductVariantOptionDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantOptionPayload, S>

  type ProductVariantOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantOptionCountAggregateInputType | true
    }

  export interface ProductVariantOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariantOption'], meta: { name: 'ProductVariantOption' } }
    /**
     * Find zero or one ProductVariantOption that matches the filter.
     * @param {ProductVariantOptionFindUniqueArgs} args - Arguments to find a ProductVariantOption
     * @example
     * // Get one ProductVariantOption
     * const productVariantOption = await prisma.productVariantOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantOptionFindUniqueArgs>(args: SelectSubset<T, ProductVariantOptionFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariantOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantOptionFindUniqueOrThrowArgs} args - Arguments to find a ProductVariantOption
     * @example
     * // Get one ProductVariantOption
     * const productVariantOption = await prisma.productVariantOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariantOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionFindFirstArgs} args - Arguments to find a ProductVariantOption
     * @example
     * // Get one ProductVariantOption
     * const productVariantOption = await prisma.productVariantOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantOptionFindFirstArgs>(args?: SelectSubset<T, ProductVariantOptionFindFirstArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariantOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionFindFirstOrThrowArgs} args - Arguments to find a ProductVariantOption
     * @example
     * // Get one ProductVariantOption
     * const productVariantOption = await prisma.productVariantOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariantOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariantOptions
     * const productVariantOptions = await prisma.productVariantOption.findMany()
     * 
     * // Get first 10 ProductVariantOptions
     * const productVariantOptions = await prisma.productVariantOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantOptionWithIdOnly = await prisma.productVariantOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantOptionFindManyArgs>(args?: SelectSubset<T, ProductVariantOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariantOption.
     * @param {ProductVariantOptionCreateArgs} args - Arguments to create a ProductVariantOption.
     * @example
     * // Create one ProductVariantOption
     * const ProductVariantOption = await prisma.productVariantOption.create({
     *   data: {
     *     // ... data to create a ProductVariantOption
     *   }
     * })
     * 
     */
    create<T extends ProductVariantOptionCreateArgs>(args: SelectSubset<T, ProductVariantOptionCreateArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariantOptions.
     * @param {ProductVariantOptionCreateManyArgs} args - Arguments to create many ProductVariantOptions.
     * @example
     * // Create many ProductVariantOptions
     * const productVariantOption = await prisma.productVariantOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantOptionCreateManyArgs>(args?: SelectSubset<T, ProductVariantOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariantOptions and returns the data saved in the database.
     * @param {ProductVariantOptionCreateManyAndReturnArgs} args - Arguments to create many ProductVariantOptions.
     * @example
     * // Create many ProductVariantOptions
     * const productVariantOption = await prisma.productVariantOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariantOptions and only return the `id`
     * const productVariantOptionWithIdOnly = await prisma.productVariantOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariantOption.
     * @param {ProductVariantOptionDeleteArgs} args - Arguments to delete one ProductVariantOption.
     * @example
     * // Delete one ProductVariantOption
     * const ProductVariantOption = await prisma.productVariantOption.delete({
     *   where: {
     *     // ... filter to delete one ProductVariantOption
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantOptionDeleteArgs>(args: SelectSubset<T, ProductVariantOptionDeleteArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariantOption.
     * @param {ProductVariantOptionUpdateArgs} args - Arguments to update one ProductVariantOption.
     * @example
     * // Update one ProductVariantOption
     * const productVariantOption = await prisma.productVariantOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantOptionUpdateArgs>(args: SelectSubset<T, ProductVariantOptionUpdateArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariantOptions.
     * @param {ProductVariantOptionDeleteManyArgs} args - Arguments to filter ProductVariantOptions to delete.
     * @example
     * // Delete a few ProductVariantOptions
     * const { count } = await prisma.productVariantOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantOptionDeleteManyArgs>(args?: SelectSubset<T, ProductVariantOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariantOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariantOptions
     * const productVariantOption = await prisma.productVariantOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantOptionUpdateManyArgs>(args: SelectSubset<T, ProductVariantOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariantOptions and returns the data updated in the database.
     * @param {ProductVariantOptionUpdateManyAndReturnArgs} args - Arguments to update many ProductVariantOptions.
     * @example
     * // Update many ProductVariantOptions
     * const productVariantOption = await prisma.productVariantOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariantOptions and only return the `id`
     * const productVariantOptionWithIdOnly = await prisma.productVariantOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariantOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariantOption.
     * @param {ProductVariantOptionUpsertArgs} args - Arguments to update or create a ProductVariantOption.
     * @example
     * // Update or create a ProductVariantOption
     * const productVariantOption = await prisma.productVariantOption.upsert({
     *   create: {
     *     // ... data to create a ProductVariantOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariantOption we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantOptionUpsertArgs>(args: SelectSubset<T, ProductVariantOptionUpsertArgs<ExtArgs>>): Prisma__ProductVariantOptionClient<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariantOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionCountArgs} args - Arguments to filter ProductVariantOptions to count.
     * @example
     * // Count the number of ProductVariantOptions
     * const count = await prisma.productVariantOption.count({
     *   where: {
     *     // ... the filter for the ProductVariantOptions we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantOptionCountArgs>(
      args?: Subset<T, ProductVariantOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariantOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantOptionAggregateArgs>(args: Subset<T, ProductVariantOptionAggregateArgs>): Prisma.PrismaPromise<GetProductVariantOptionAggregateType<T>>

    /**
     * Group by ProductVariantOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantOptionGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariantOption model
   */
  readonly fields: ProductVariantOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariantOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductVariantOption model
   */
  interface ProductVariantOptionFieldRefs {
    readonly id: FieldRef<"ProductVariantOption", 'String'>
    readonly name: FieldRef<"ProductVariantOption", 'String'>
    readonly value: FieldRef<"ProductVariantOption", 'String'>
    readonly productVariantId: FieldRef<"ProductVariantOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariantOption findUnique
   */
  export type ProductVariantOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantOption to fetch.
     */
    where: ProductVariantOptionWhereUniqueInput
  }

  /**
   * ProductVariantOption findUniqueOrThrow
   */
  export type ProductVariantOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantOption to fetch.
     */
    where: ProductVariantOptionWhereUniqueInput
  }

  /**
   * ProductVariantOption findFirst
   */
  export type ProductVariantOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantOption to fetch.
     */
    where?: ProductVariantOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantOptions to fetch.
     */
    orderBy?: ProductVariantOptionOrderByWithRelationInput | ProductVariantOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariantOptions.
     */
    cursor?: ProductVariantOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariantOptions.
     */
    distinct?: ProductVariantOptionScalarFieldEnum | ProductVariantOptionScalarFieldEnum[]
  }

  /**
   * ProductVariantOption findFirstOrThrow
   */
  export type ProductVariantOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantOption to fetch.
     */
    where?: ProductVariantOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantOptions to fetch.
     */
    orderBy?: ProductVariantOptionOrderByWithRelationInput | ProductVariantOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariantOptions.
     */
    cursor?: ProductVariantOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariantOptions.
     */
    distinct?: ProductVariantOptionScalarFieldEnum | ProductVariantOptionScalarFieldEnum[]
  }

  /**
   * ProductVariantOption findMany
   */
  export type ProductVariantOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantOptions to fetch.
     */
    where?: ProductVariantOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantOptions to fetch.
     */
    orderBy?: ProductVariantOptionOrderByWithRelationInput | ProductVariantOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariantOptions.
     */
    cursor?: ProductVariantOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantOptions.
     */
    skip?: number
    distinct?: ProductVariantOptionScalarFieldEnum | ProductVariantOptionScalarFieldEnum[]
  }

  /**
   * ProductVariantOption create
   */
  export type ProductVariantOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariantOption.
     */
    data: XOR<ProductVariantOptionCreateInput, ProductVariantOptionUncheckedCreateInput>
  }

  /**
   * ProductVariantOption createMany
   */
  export type ProductVariantOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariantOptions.
     */
    data: ProductVariantOptionCreateManyInput | ProductVariantOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariantOption createManyAndReturn
   */
  export type ProductVariantOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariantOptions.
     */
    data: ProductVariantOptionCreateManyInput | ProductVariantOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariantOption update
   */
  export type ProductVariantOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariantOption.
     */
    data: XOR<ProductVariantOptionUpdateInput, ProductVariantOptionUncheckedUpdateInput>
    /**
     * Choose, which ProductVariantOption to update.
     */
    where: ProductVariantOptionWhereUniqueInput
  }

  /**
   * ProductVariantOption updateMany
   */
  export type ProductVariantOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariantOptions.
     */
    data: XOR<ProductVariantOptionUpdateManyMutationInput, ProductVariantOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariantOptions to update
     */
    where?: ProductVariantOptionWhereInput
    /**
     * Limit how many ProductVariantOptions to update.
     */
    limit?: number
  }

  /**
   * ProductVariantOption updateManyAndReturn
   */
  export type ProductVariantOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariantOptions.
     */
    data: XOR<ProductVariantOptionUpdateManyMutationInput, ProductVariantOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariantOptions to update
     */
    where?: ProductVariantOptionWhereInput
    /**
     * Limit how many ProductVariantOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariantOption upsert
   */
  export type ProductVariantOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariantOption to update in case it exists.
     */
    where: ProductVariantOptionWhereUniqueInput
    /**
     * In case the ProductVariantOption found by the `where` argument doesn't exist, create a new ProductVariantOption with this data.
     */
    create: XOR<ProductVariantOptionCreateInput, ProductVariantOptionUncheckedCreateInput>
    /**
     * In case the ProductVariantOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantOptionUpdateInput, ProductVariantOptionUncheckedUpdateInput>
  }

  /**
   * ProductVariantOption delete
   */
  export type ProductVariantOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    /**
     * Filter which ProductVariantOption to delete.
     */
    where: ProductVariantOptionWhereUniqueInput
  }

  /**
   * ProductVariantOption deleteMany
   */
  export type ProductVariantOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariantOptions to delete
     */
    where?: ProductVariantOptionWhereInput
    /**
     * Limit how many ProductVariantOptions to delete.
     */
    limit?: number
  }

  /**
   * ProductVariantOption without action
   */
  export type ProductVariantOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
  }


  /**
   * Model ProductOptionValue
   */

  export type AggregateProductOptionValue = {
    _count: ProductOptionValueCountAggregateOutputType | null
    _min: ProductOptionValueMinAggregateOutputType | null
    _max: ProductOptionValueMaxAggregateOutputType | null
  }

  export type ProductOptionValueMinAggregateOutputType = {
    id: string | null
    value: string | null
    optionId: string | null
  }

  export type ProductOptionValueMaxAggregateOutputType = {
    id: string | null
    value: string | null
    optionId: string | null
  }

  export type ProductOptionValueCountAggregateOutputType = {
    id: number
    value: number
    optionId: number
    _all: number
  }


  export type ProductOptionValueMinAggregateInputType = {
    id?: true
    value?: true
    optionId?: true
  }

  export type ProductOptionValueMaxAggregateInputType = {
    id?: true
    value?: true
    optionId?: true
  }

  export type ProductOptionValueCountAggregateInputType = {
    id?: true
    value?: true
    optionId?: true
    _all?: true
  }

  export type ProductOptionValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOptionValue to aggregate.
     */
    where?: ProductOptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptionValues to fetch.
     */
    orderBy?: ProductOptionValueOrderByWithRelationInput | ProductOptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptionValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOptionValues
    **/
    _count?: true | ProductOptionValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOptionValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOptionValueMaxAggregateInputType
  }

  export type GetProductOptionValueAggregateType<T extends ProductOptionValueAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOptionValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOptionValue[P]>
      : GetScalarType<T[P], AggregateProductOptionValue[P]>
  }




  export type ProductOptionValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionValueWhereInput
    orderBy?: ProductOptionValueOrderByWithAggregationInput | ProductOptionValueOrderByWithAggregationInput[]
    by: ProductOptionValueScalarFieldEnum[] | ProductOptionValueScalarFieldEnum
    having?: ProductOptionValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOptionValueCountAggregateInputType | true
    _min?: ProductOptionValueMinAggregateInputType
    _max?: ProductOptionValueMaxAggregateInputType
  }

  export type ProductOptionValueGroupByOutputType = {
    id: string
    value: string
    optionId: string
    _count: ProductOptionValueCountAggregateOutputType | null
    _min: ProductOptionValueMinAggregateOutputType | null
    _max: ProductOptionValueMaxAggregateOutputType | null
  }

  type GetProductOptionValueGroupByPayload<T extends ProductOptionValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOptionValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOptionValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOptionValueGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOptionValueGroupByOutputType[P]>
        }
      >
    >


  export type ProductOptionValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    optionId?: boolean
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOptionValue"]>

  export type ProductOptionValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    optionId?: boolean
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOptionValue"]>

  export type ProductOptionValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    optionId?: boolean
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOptionValue"]>

  export type ProductOptionValueSelectScalar = {
    id?: boolean
    value?: boolean
    optionId?: boolean
  }

  export type ProductOptionValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "optionId", ExtArgs["result"]["productOptionValue"]>
  export type ProductOptionValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
  }
  export type ProductOptionValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
  }
  export type ProductOptionValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
  }

  export type $ProductOptionValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOptionValue"
    objects: {
      option: Prisma.$ProductOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      optionId: string
    }, ExtArgs["result"]["productOptionValue"]>
    composites: {}
  }

  type ProductOptionValueGetPayload<S extends boolean | null | undefined | ProductOptionValueDefaultArgs> = $Result.GetResult<Prisma.$ProductOptionValuePayload, S>

  type ProductOptionValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductOptionValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductOptionValueCountAggregateInputType | true
    }

  export interface ProductOptionValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOptionValue'], meta: { name: 'ProductOptionValue' } }
    /**
     * Find zero or one ProductOptionValue that matches the filter.
     * @param {ProductOptionValueFindUniqueArgs} args - Arguments to find a ProductOptionValue
     * @example
     * // Get one ProductOptionValue
     * const productOptionValue = await prisma.productOptionValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductOptionValueFindUniqueArgs>(args: SelectSubset<T, ProductOptionValueFindUniqueArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductOptionValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductOptionValueFindUniqueOrThrowArgs} args - Arguments to find a ProductOptionValue
     * @example
     * // Get one ProductOptionValue
     * const productOptionValue = await prisma.productOptionValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductOptionValueFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductOptionValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductOptionValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueFindFirstArgs} args - Arguments to find a ProductOptionValue
     * @example
     * // Get one ProductOptionValue
     * const productOptionValue = await prisma.productOptionValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductOptionValueFindFirstArgs>(args?: SelectSubset<T, ProductOptionValueFindFirstArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductOptionValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueFindFirstOrThrowArgs} args - Arguments to find a ProductOptionValue
     * @example
     * // Get one ProductOptionValue
     * const productOptionValue = await prisma.productOptionValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductOptionValueFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductOptionValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductOptionValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOptionValues
     * const productOptionValues = await prisma.productOptionValue.findMany()
     * 
     * // Get first 10 ProductOptionValues
     * const productOptionValues = await prisma.productOptionValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOptionValueWithIdOnly = await prisma.productOptionValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductOptionValueFindManyArgs>(args?: SelectSubset<T, ProductOptionValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductOptionValue.
     * @param {ProductOptionValueCreateArgs} args - Arguments to create a ProductOptionValue.
     * @example
     * // Create one ProductOptionValue
     * const ProductOptionValue = await prisma.productOptionValue.create({
     *   data: {
     *     // ... data to create a ProductOptionValue
     *   }
     * })
     * 
     */
    create<T extends ProductOptionValueCreateArgs>(args: SelectSubset<T, ProductOptionValueCreateArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductOptionValues.
     * @param {ProductOptionValueCreateManyArgs} args - Arguments to create many ProductOptionValues.
     * @example
     * // Create many ProductOptionValues
     * const productOptionValue = await prisma.productOptionValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductOptionValueCreateManyArgs>(args?: SelectSubset<T, ProductOptionValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductOptionValues and returns the data saved in the database.
     * @param {ProductOptionValueCreateManyAndReturnArgs} args - Arguments to create many ProductOptionValues.
     * @example
     * // Create many ProductOptionValues
     * const productOptionValue = await prisma.productOptionValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductOptionValues and only return the `id`
     * const productOptionValueWithIdOnly = await prisma.productOptionValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductOptionValueCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductOptionValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductOptionValue.
     * @param {ProductOptionValueDeleteArgs} args - Arguments to delete one ProductOptionValue.
     * @example
     * // Delete one ProductOptionValue
     * const ProductOptionValue = await prisma.productOptionValue.delete({
     *   where: {
     *     // ... filter to delete one ProductOptionValue
     *   }
     * })
     * 
     */
    delete<T extends ProductOptionValueDeleteArgs>(args: SelectSubset<T, ProductOptionValueDeleteArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductOptionValue.
     * @param {ProductOptionValueUpdateArgs} args - Arguments to update one ProductOptionValue.
     * @example
     * // Update one ProductOptionValue
     * const productOptionValue = await prisma.productOptionValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductOptionValueUpdateArgs>(args: SelectSubset<T, ProductOptionValueUpdateArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductOptionValues.
     * @param {ProductOptionValueDeleteManyArgs} args - Arguments to filter ProductOptionValues to delete.
     * @example
     * // Delete a few ProductOptionValues
     * const { count } = await prisma.productOptionValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductOptionValueDeleteManyArgs>(args?: SelectSubset<T, ProductOptionValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOptionValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOptionValues
     * const productOptionValue = await prisma.productOptionValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductOptionValueUpdateManyArgs>(args: SelectSubset<T, ProductOptionValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOptionValues and returns the data updated in the database.
     * @param {ProductOptionValueUpdateManyAndReturnArgs} args - Arguments to update many ProductOptionValues.
     * @example
     * // Update many ProductOptionValues
     * const productOptionValue = await prisma.productOptionValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductOptionValues and only return the `id`
     * const productOptionValueWithIdOnly = await prisma.productOptionValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductOptionValueUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductOptionValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductOptionValue.
     * @param {ProductOptionValueUpsertArgs} args - Arguments to update or create a ProductOptionValue.
     * @example
     * // Update or create a ProductOptionValue
     * const productOptionValue = await prisma.productOptionValue.upsert({
     *   create: {
     *     // ... data to create a ProductOptionValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOptionValue we want to update
     *   }
     * })
     */
    upsert<T extends ProductOptionValueUpsertArgs>(args: SelectSubset<T, ProductOptionValueUpsertArgs<ExtArgs>>): Prisma__ProductOptionValueClient<$Result.GetResult<Prisma.$ProductOptionValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductOptionValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueCountArgs} args - Arguments to filter ProductOptionValues to count.
     * @example
     * // Count the number of ProductOptionValues
     * const count = await prisma.productOptionValue.count({
     *   where: {
     *     // ... the filter for the ProductOptionValues we want to count
     *   }
     * })
    **/
    count<T extends ProductOptionValueCountArgs>(
      args?: Subset<T, ProductOptionValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOptionValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOptionValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOptionValueAggregateArgs>(args: Subset<T, ProductOptionValueAggregateArgs>): Prisma.PrismaPromise<GetProductOptionValueAggregateType<T>>

    /**
     * Group by ProductOptionValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionValueGroupByArgs} args - Group by arguments.
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
      T extends ProductOptionValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOptionValueGroupByArgs['orderBy'] }
        : { orderBy?: ProductOptionValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductOptionValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOptionValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOptionValue model
   */
  readonly fields: ProductOptionValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOptionValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOptionValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    option<T extends ProductOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductOptionDefaultArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductOptionValue model
   */
  interface ProductOptionValueFieldRefs {
    readonly id: FieldRef<"ProductOptionValue", 'String'>
    readonly value: FieldRef<"ProductOptionValue", 'String'>
    readonly optionId: FieldRef<"ProductOptionValue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductOptionValue findUnique
   */
  export type ProductOptionValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptionValue to fetch.
     */
    where: ProductOptionValueWhereUniqueInput
  }

  /**
   * ProductOptionValue findUniqueOrThrow
   */
  export type ProductOptionValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptionValue to fetch.
     */
    where: ProductOptionValueWhereUniqueInput
  }

  /**
   * ProductOptionValue findFirst
   */
  export type ProductOptionValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptionValue to fetch.
     */
    where?: ProductOptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptionValues to fetch.
     */
    orderBy?: ProductOptionValueOrderByWithRelationInput | ProductOptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptionValues.
     */
    cursor?: ProductOptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptionValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptionValues.
     */
    distinct?: ProductOptionValueScalarFieldEnum | ProductOptionValueScalarFieldEnum[]
  }

  /**
   * ProductOptionValue findFirstOrThrow
   */
  export type ProductOptionValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptionValue to fetch.
     */
    where?: ProductOptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptionValues to fetch.
     */
    orderBy?: ProductOptionValueOrderByWithRelationInput | ProductOptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptionValues.
     */
    cursor?: ProductOptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptionValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptionValues.
     */
    distinct?: ProductOptionValueScalarFieldEnum | ProductOptionValueScalarFieldEnum[]
  }

  /**
   * ProductOptionValue findMany
   */
  export type ProductOptionValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptionValues to fetch.
     */
    where?: ProductOptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptionValues to fetch.
     */
    orderBy?: ProductOptionValueOrderByWithRelationInput | ProductOptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOptionValues.
     */
    cursor?: ProductOptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptionValues.
     */
    skip?: number
    distinct?: ProductOptionValueScalarFieldEnum | ProductOptionValueScalarFieldEnum[]
  }

  /**
   * ProductOptionValue create
   */
  export type ProductOptionValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOptionValue.
     */
    data: XOR<ProductOptionValueCreateInput, ProductOptionValueUncheckedCreateInput>
  }

  /**
   * ProductOptionValue createMany
   */
  export type ProductOptionValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOptionValues.
     */
    data: ProductOptionValueCreateManyInput | ProductOptionValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductOptionValue createManyAndReturn
   */
  export type ProductOptionValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * The data used to create many ProductOptionValues.
     */
    data: ProductOptionValueCreateManyInput | ProductOptionValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductOptionValue update
   */
  export type ProductOptionValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOptionValue.
     */
    data: XOR<ProductOptionValueUpdateInput, ProductOptionValueUncheckedUpdateInput>
    /**
     * Choose, which ProductOptionValue to update.
     */
    where: ProductOptionValueWhereUniqueInput
  }

  /**
   * ProductOptionValue updateMany
   */
  export type ProductOptionValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOptionValues.
     */
    data: XOR<ProductOptionValueUpdateManyMutationInput, ProductOptionValueUncheckedUpdateManyInput>
    /**
     * Filter which ProductOptionValues to update
     */
    where?: ProductOptionValueWhereInput
    /**
     * Limit how many ProductOptionValues to update.
     */
    limit?: number
  }

  /**
   * ProductOptionValue updateManyAndReturn
   */
  export type ProductOptionValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * The data used to update ProductOptionValues.
     */
    data: XOR<ProductOptionValueUpdateManyMutationInput, ProductOptionValueUncheckedUpdateManyInput>
    /**
     * Filter which ProductOptionValues to update
     */
    where?: ProductOptionValueWhereInput
    /**
     * Limit how many ProductOptionValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductOptionValue upsert
   */
  export type ProductOptionValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOptionValue to update in case it exists.
     */
    where: ProductOptionValueWhereUniqueInput
    /**
     * In case the ProductOptionValue found by the `where` argument doesn't exist, create a new ProductOptionValue with this data.
     */
    create: XOR<ProductOptionValueCreateInput, ProductOptionValueUncheckedCreateInput>
    /**
     * In case the ProductOptionValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOptionValueUpdateInput, ProductOptionValueUncheckedUpdateInput>
  }

  /**
   * ProductOptionValue delete
   */
  export type ProductOptionValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
    /**
     * Filter which ProductOptionValue to delete.
     */
    where: ProductOptionValueWhereUniqueInput
  }

  /**
   * ProductOptionValue deleteMany
   */
  export type ProductOptionValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOptionValues to delete
     */
    where?: ProductOptionValueWhereInput
    /**
     * Limit how many ProductOptionValues to delete.
     */
    limit?: number
  }

  /**
   * ProductOptionValue without action
   */
  export type ProductOptionValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionValue
     */
    select?: ProductOptionValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOptionValue
     */
    omit?: ProductOptionValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOptionValueInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    productId: string | null
    sku: string | null
    price: number | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    sku: string | null
    price: number | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    sku: number
    price: number
    stock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductVariantSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    productId: string
    sku: string
    price: number
    stock: number
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    options?: boolean | ProductVariant$optionsArgs<ExtArgs>
    images?: boolean | ProductVariant$imagesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "sku" | "price" | "stock" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    options?: boolean | ProductVariant$optionsArgs<ExtArgs>
    images?: boolean | ProductVariant$imagesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      options: Prisma.$ProductVariantOptionPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      sku: string
      price: number
      stock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends ProductVariant$optionsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends ProductVariant$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly productId: FieldRef<"ProductVariant", 'String'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly price: FieldRef<"ProductVariant", 'Float'>
    readonly stock: FieldRef<"ProductVariant", 'Int'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.options
   */
  export type ProductVariant$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantOption
     */
    select?: ProductVariantOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariantOption
     */
    omit?: ProductVariantOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantOptionInclude<ExtArgs> | null
    where?: ProductVariantOptionWhereInput
    orderBy?: ProductVariantOptionOrderByWithRelationInput | ProductVariantOptionOrderByWithRelationInput[]
    cursor?: ProductVariantOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantOptionScalarFieldEnum | ProductVariantOptionScalarFieldEnum[]
  }

  /**
   * ProductVariant.images
   */
  export type ProductVariant$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    title: string
    slug: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    images?: boolean | Category$imagesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    images?: boolean | Category$imagesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      subcategories: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends Category$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Category$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Category$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly title: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.subcategories
   */
  export type Category$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.images
   */
  export type Category$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    title: string | null
    comment: string | null
    productId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    title: string | null
    comment: string | null
    productId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    title: number
    comment: number
    productId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    title?: true
    comment?: true
    productId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    title?: true
    comment?: true
    productId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    title?: true
    comment?: true
    productId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    title: string | null
    comment: string | null
    productId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    productId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    productId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    productId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    productId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "title" | "comment" | "productId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      title: string | null
      comment: string | null
      productId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly productId: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    altText: string | null
    productId: string | null
    categoryId: string | null
    bannerId: string | null
    productVariantId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    altText: string | null
    productId: string | null
    categoryId: string | null
    bannerId: string | null
    productVariantId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    altText: number
    productId: number
    categoryId: number
    bannerId: number
    productVariantId: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    productId?: true
    categoryId?: true
    bannerId?: true
    productVariantId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    productId?: true
    categoryId?: true
    bannerId?: true
    productVariantId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    productId?: true
    categoryId?: true
    bannerId?: true
    productVariantId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    altText: string | null
    productId: string | null
    categoryId: string | null
    bannerId: string | null
    productVariantId: string | null
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    productId?: boolean
    categoryId?: boolean
    bannerId?: boolean
    productVariantId?: boolean
    product?: boolean | Image$productArgs<ExtArgs>
    category?: boolean | Image$categoryArgs<ExtArgs>
    banner?: boolean | Image$bannerArgs<ExtArgs>
    productVariant?: boolean | Image$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    productId?: boolean
    categoryId?: boolean
    bannerId?: boolean
    productVariantId?: boolean
    product?: boolean | Image$productArgs<ExtArgs>
    category?: boolean | Image$categoryArgs<ExtArgs>
    banner?: boolean | Image$bannerArgs<ExtArgs>
    productVariant?: boolean | Image$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    productId?: boolean
    categoryId?: boolean
    bannerId?: boolean
    productVariantId?: boolean
    product?: boolean | Image$productArgs<ExtArgs>
    category?: boolean | Image$categoryArgs<ExtArgs>
    banner?: boolean | Image$bannerArgs<ExtArgs>
    productVariant?: boolean | Image$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    altText?: boolean
    productId?: boolean
    categoryId?: boolean
    bannerId?: boolean
    productVariantId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "altText" | "productId" | "categoryId" | "bannerId" | "productVariantId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Image$productArgs<ExtArgs>
    category?: boolean | Image$categoryArgs<ExtArgs>
    banner?: boolean | Image$bannerArgs<ExtArgs>
    productVariant?: boolean | Image$productVariantArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Image$productArgs<ExtArgs>
    category?: boolean | Image$categoryArgs<ExtArgs>
    banner?: boolean | Image$bannerArgs<ExtArgs>
    productVariant?: boolean | Image$productVariantArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Image$productArgs<ExtArgs>
    category?: boolean | Image$categoryArgs<ExtArgs>
    banner?: boolean | Image$bannerArgs<ExtArgs>
    productVariant?: boolean | Image$productVariantArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
      banner: Prisma.$BannerPayload<ExtArgs> | null
      productVariant: Prisma.$ProductVariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      altText: string | null
      productId: string | null
      categoryId: string | null
      bannerId: string | null
      productVariantId: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Image$productArgs<ExtArgs> = {}>(args?: Subset<T, Image$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Image$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Image$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    banner<T extends Image$bannerArgs<ExtArgs> = {}>(args?: Subset<T, Image$bannerArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productVariant<T extends Image$productVariantArgs<ExtArgs> = {}>(args?: Subset<T, Image$productVariantArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly altText: FieldRef<"Image", 'String'>
    readonly productId: FieldRef<"Image", 'String'>
    readonly categoryId: FieldRef<"Image", 'String'>
    readonly bannerId: FieldRef<"Image", 'String'>
    readonly productVariantId: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.product
   */
  export type Image$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Image.category
   */
  export type Image$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Image.banner
   */
  export type Image$bannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
  }

  /**
   * Image.productVariant
   */
  export type Image$productVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    description: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    title: string
    description: string
    link: string
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Banner$imagesArgs<ExtArgs>
    _count?: boolean | BannerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>
  export type BannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Banner$imagesArgs<ExtArgs>
    _count?: boolean | BannerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Banner$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Banner$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly description: FieldRef<"Banner", 'String'>
    readonly link: FieldRef<"Banner", 'String'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner.images
   */
  export type Banner$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
  }


  /**
   * Model HomepageWidget
   */

  export type AggregateHomepageWidget = {
    _count: HomepageWidgetCountAggregateOutputType | null
    _avg: HomepageWidgetAvgAggregateOutputType | null
    _sum: HomepageWidgetSumAggregateOutputType | null
    _min: HomepageWidgetMinAggregateOutputType | null
    _max: HomepageWidgetMaxAggregateOutputType | null
  }

  export type HomepageWidgetAvgAggregateOutputType = {
    order: number | null
  }

  export type HomepageWidgetSumAggregateOutputType = {
    order: number | null
  }

  export type HomepageWidgetMinAggregateOutputType = {
    id: string | null
    type: $Enums.WidgetType | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomepageWidgetMaxAggregateOutputType = {
    id: string | null
    type: $Enums.WidgetType | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomepageWidgetCountAggregateOutputType = {
    id: number
    type: number
    title: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomepageWidgetAvgAggregateInputType = {
    order?: true
  }

  export type HomepageWidgetSumAggregateInputType = {
    order?: true
  }

  export type HomepageWidgetMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomepageWidgetMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomepageWidgetCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomepageWidgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomepageWidget to aggregate.
     */
    where?: HomepageWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageWidgets to fetch.
     */
    orderBy?: HomepageWidgetOrderByWithRelationInput | HomepageWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomepageWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageWidgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomepageWidgets
    **/
    _count?: true | HomepageWidgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomepageWidgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomepageWidgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomepageWidgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomepageWidgetMaxAggregateInputType
  }

  export type GetHomepageWidgetAggregateType<T extends HomepageWidgetAggregateArgs> = {
        [P in keyof T & keyof AggregateHomepageWidget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomepageWidget[P]>
      : GetScalarType<T[P], AggregateHomepageWidget[P]>
  }




  export type HomepageWidgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomepageWidgetWhereInput
    orderBy?: HomepageWidgetOrderByWithAggregationInput | HomepageWidgetOrderByWithAggregationInput[]
    by: HomepageWidgetScalarFieldEnum[] | HomepageWidgetScalarFieldEnum
    having?: HomepageWidgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomepageWidgetCountAggregateInputType | true
    _avg?: HomepageWidgetAvgAggregateInputType
    _sum?: HomepageWidgetSumAggregateInputType
    _min?: HomepageWidgetMinAggregateInputType
    _max?: HomepageWidgetMaxAggregateInputType
  }

  export type HomepageWidgetGroupByOutputType = {
    id: string
    type: $Enums.WidgetType
    title: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: HomepageWidgetCountAggregateOutputType | null
    _avg: HomepageWidgetAvgAggregateOutputType | null
    _sum: HomepageWidgetSumAggregateOutputType | null
    _min: HomepageWidgetMinAggregateOutputType | null
    _max: HomepageWidgetMaxAggregateOutputType | null
  }

  type GetHomepageWidgetGroupByPayload<T extends HomepageWidgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomepageWidgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomepageWidgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomepageWidgetGroupByOutputType[P]>
            : GetScalarType<T[P], HomepageWidgetGroupByOutputType[P]>
        }
      >
    >


  export type HomepageWidgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widgetItems?: boolean | HomepageWidget$widgetItemsArgs<ExtArgs>
    _count?: boolean | HomepageWidgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homepageWidget"]>

  export type HomepageWidgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homepageWidget"]>

  export type HomepageWidgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homepageWidget"]>

  export type HomepageWidgetSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomepageWidgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["homepageWidget"]>
  export type HomepageWidgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widgetItems?: boolean | HomepageWidget$widgetItemsArgs<ExtArgs>
    _count?: boolean | HomepageWidgetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HomepageWidgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HomepageWidgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HomepageWidgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomepageWidget"
    objects: {
      widgetItems: Prisma.$WidgetItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.WidgetType
      title: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homepageWidget"]>
    composites: {}
  }

  type HomepageWidgetGetPayload<S extends boolean | null | undefined | HomepageWidgetDefaultArgs> = $Result.GetResult<Prisma.$HomepageWidgetPayload, S>

  type HomepageWidgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomepageWidgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomepageWidgetCountAggregateInputType | true
    }

  export interface HomepageWidgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomepageWidget'], meta: { name: 'HomepageWidget' } }
    /**
     * Find zero or one HomepageWidget that matches the filter.
     * @param {HomepageWidgetFindUniqueArgs} args - Arguments to find a HomepageWidget
     * @example
     * // Get one HomepageWidget
     * const homepageWidget = await prisma.homepageWidget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomepageWidgetFindUniqueArgs>(args: SelectSubset<T, HomepageWidgetFindUniqueArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomepageWidget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomepageWidgetFindUniqueOrThrowArgs} args - Arguments to find a HomepageWidget
     * @example
     * // Get one HomepageWidget
     * const homepageWidget = await prisma.homepageWidget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomepageWidgetFindUniqueOrThrowArgs>(args: SelectSubset<T, HomepageWidgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomepageWidget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetFindFirstArgs} args - Arguments to find a HomepageWidget
     * @example
     * // Get one HomepageWidget
     * const homepageWidget = await prisma.homepageWidget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomepageWidgetFindFirstArgs>(args?: SelectSubset<T, HomepageWidgetFindFirstArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomepageWidget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetFindFirstOrThrowArgs} args - Arguments to find a HomepageWidget
     * @example
     * // Get one HomepageWidget
     * const homepageWidget = await prisma.homepageWidget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomepageWidgetFindFirstOrThrowArgs>(args?: SelectSubset<T, HomepageWidgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomepageWidgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomepageWidgets
     * const homepageWidgets = await prisma.homepageWidget.findMany()
     * 
     * // Get first 10 HomepageWidgets
     * const homepageWidgets = await prisma.homepageWidget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homepageWidgetWithIdOnly = await prisma.homepageWidget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomepageWidgetFindManyArgs>(args?: SelectSubset<T, HomepageWidgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomepageWidget.
     * @param {HomepageWidgetCreateArgs} args - Arguments to create a HomepageWidget.
     * @example
     * // Create one HomepageWidget
     * const HomepageWidget = await prisma.homepageWidget.create({
     *   data: {
     *     // ... data to create a HomepageWidget
     *   }
     * })
     * 
     */
    create<T extends HomepageWidgetCreateArgs>(args: SelectSubset<T, HomepageWidgetCreateArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomepageWidgets.
     * @param {HomepageWidgetCreateManyArgs} args - Arguments to create many HomepageWidgets.
     * @example
     * // Create many HomepageWidgets
     * const homepageWidget = await prisma.homepageWidget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomepageWidgetCreateManyArgs>(args?: SelectSubset<T, HomepageWidgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomepageWidgets and returns the data saved in the database.
     * @param {HomepageWidgetCreateManyAndReturnArgs} args - Arguments to create many HomepageWidgets.
     * @example
     * // Create many HomepageWidgets
     * const homepageWidget = await prisma.homepageWidget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomepageWidgets and only return the `id`
     * const homepageWidgetWithIdOnly = await prisma.homepageWidget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomepageWidgetCreateManyAndReturnArgs>(args?: SelectSubset<T, HomepageWidgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomepageWidget.
     * @param {HomepageWidgetDeleteArgs} args - Arguments to delete one HomepageWidget.
     * @example
     * // Delete one HomepageWidget
     * const HomepageWidget = await prisma.homepageWidget.delete({
     *   where: {
     *     // ... filter to delete one HomepageWidget
     *   }
     * })
     * 
     */
    delete<T extends HomepageWidgetDeleteArgs>(args: SelectSubset<T, HomepageWidgetDeleteArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomepageWidget.
     * @param {HomepageWidgetUpdateArgs} args - Arguments to update one HomepageWidget.
     * @example
     * // Update one HomepageWidget
     * const homepageWidget = await prisma.homepageWidget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomepageWidgetUpdateArgs>(args: SelectSubset<T, HomepageWidgetUpdateArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomepageWidgets.
     * @param {HomepageWidgetDeleteManyArgs} args - Arguments to filter HomepageWidgets to delete.
     * @example
     * // Delete a few HomepageWidgets
     * const { count } = await prisma.homepageWidget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomepageWidgetDeleteManyArgs>(args?: SelectSubset<T, HomepageWidgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomepageWidgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomepageWidgets
     * const homepageWidget = await prisma.homepageWidget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomepageWidgetUpdateManyArgs>(args: SelectSubset<T, HomepageWidgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomepageWidgets and returns the data updated in the database.
     * @param {HomepageWidgetUpdateManyAndReturnArgs} args - Arguments to update many HomepageWidgets.
     * @example
     * // Update many HomepageWidgets
     * const homepageWidget = await prisma.homepageWidget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomepageWidgets and only return the `id`
     * const homepageWidgetWithIdOnly = await prisma.homepageWidget.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomepageWidgetUpdateManyAndReturnArgs>(args: SelectSubset<T, HomepageWidgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomepageWidget.
     * @param {HomepageWidgetUpsertArgs} args - Arguments to update or create a HomepageWidget.
     * @example
     * // Update or create a HomepageWidget
     * const homepageWidget = await prisma.homepageWidget.upsert({
     *   create: {
     *     // ... data to create a HomepageWidget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomepageWidget we want to update
     *   }
     * })
     */
    upsert<T extends HomepageWidgetUpsertArgs>(args: SelectSubset<T, HomepageWidgetUpsertArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomepageWidgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetCountArgs} args - Arguments to filter HomepageWidgets to count.
     * @example
     * // Count the number of HomepageWidgets
     * const count = await prisma.homepageWidget.count({
     *   where: {
     *     // ... the filter for the HomepageWidgets we want to count
     *   }
     * })
    **/
    count<T extends HomepageWidgetCountArgs>(
      args?: Subset<T, HomepageWidgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomepageWidgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomepageWidget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomepageWidgetAggregateArgs>(args: Subset<T, HomepageWidgetAggregateArgs>): Prisma.PrismaPromise<GetHomepageWidgetAggregateType<T>>

    /**
     * Group by HomepageWidget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageWidgetGroupByArgs} args - Group by arguments.
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
      T extends HomepageWidgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomepageWidgetGroupByArgs['orderBy'] }
        : { orderBy?: HomepageWidgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomepageWidgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomepageWidgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomepageWidget model
   */
  readonly fields: HomepageWidgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomepageWidget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomepageWidgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    widgetItems<T extends HomepageWidget$widgetItemsArgs<ExtArgs> = {}>(args?: Subset<T, HomepageWidget$widgetItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HomepageWidget model
   */
  interface HomepageWidgetFieldRefs {
    readonly id: FieldRef<"HomepageWidget", 'String'>
    readonly type: FieldRef<"HomepageWidget", 'WidgetType'>
    readonly title: FieldRef<"HomepageWidget", 'String'>
    readonly order: FieldRef<"HomepageWidget", 'Int'>
    readonly createdAt: FieldRef<"HomepageWidget", 'DateTime'>
    readonly updatedAt: FieldRef<"HomepageWidget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomepageWidget findUnique
   */
  export type HomepageWidgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * Filter, which HomepageWidget to fetch.
     */
    where: HomepageWidgetWhereUniqueInput
  }

  /**
   * HomepageWidget findUniqueOrThrow
   */
  export type HomepageWidgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * Filter, which HomepageWidget to fetch.
     */
    where: HomepageWidgetWhereUniqueInput
  }

  /**
   * HomepageWidget findFirst
   */
  export type HomepageWidgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * Filter, which HomepageWidget to fetch.
     */
    where?: HomepageWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageWidgets to fetch.
     */
    orderBy?: HomepageWidgetOrderByWithRelationInput | HomepageWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomepageWidgets.
     */
    cursor?: HomepageWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageWidgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomepageWidgets.
     */
    distinct?: HomepageWidgetScalarFieldEnum | HomepageWidgetScalarFieldEnum[]
  }

  /**
   * HomepageWidget findFirstOrThrow
   */
  export type HomepageWidgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * Filter, which HomepageWidget to fetch.
     */
    where?: HomepageWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageWidgets to fetch.
     */
    orderBy?: HomepageWidgetOrderByWithRelationInput | HomepageWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomepageWidgets.
     */
    cursor?: HomepageWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageWidgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomepageWidgets.
     */
    distinct?: HomepageWidgetScalarFieldEnum | HomepageWidgetScalarFieldEnum[]
  }

  /**
   * HomepageWidget findMany
   */
  export type HomepageWidgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * Filter, which HomepageWidgets to fetch.
     */
    where?: HomepageWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageWidgets to fetch.
     */
    orderBy?: HomepageWidgetOrderByWithRelationInput | HomepageWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomepageWidgets.
     */
    cursor?: HomepageWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageWidgets.
     */
    skip?: number
    distinct?: HomepageWidgetScalarFieldEnum | HomepageWidgetScalarFieldEnum[]
  }

  /**
   * HomepageWidget create
   */
  export type HomepageWidgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * The data needed to create a HomepageWidget.
     */
    data: XOR<HomepageWidgetCreateInput, HomepageWidgetUncheckedCreateInput>
  }

  /**
   * HomepageWidget createMany
   */
  export type HomepageWidgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomepageWidgets.
     */
    data: HomepageWidgetCreateManyInput | HomepageWidgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomepageWidget createManyAndReturn
   */
  export type HomepageWidgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * The data used to create many HomepageWidgets.
     */
    data: HomepageWidgetCreateManyInput | HomepageWidgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomepageWidget update
   */
  export type HomepageWidgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * The data needed to update a HomepageWidget.
     */
    data: XOR<HomepageWidgetUpdateInput, HomepageWidgetUncheckedUpdateInput>
    /**
     * Choose, which HomepageWidget to update.
     */
    where: HomepageWidgetWhereUniqueInput
  }

  /**
   * HomepageWidget updateMany
   */
  export type HomepageWidgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomepageWidgets.
     */
    data: XOR<HomepageWidgetUpdateManyMutationInput, HomepageWidgetUncheckedUpdateManyInput>
    /**
     * Filter which HomepageWidgets to update
     */
    where?: HomepageWidgetWhereInput
    /**
     * Limit how many HomepageWidgets to update.
     */
    limit?: number
  }

  /**
   * HomepageWidget updateManyAndReturn
   */
  export type HomepageWidgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * The data used to update HomepageWidgets.
     */
    data: XOR<HomepageWidgetUpdateManyMutationInput, HomepageWidgetUncheckedUpdateManyInput>
    /**
     * Filter which HomepageWidgets to update
     */
    where?: HomepageWidgetWhereInput
    /**
     * Limit how many HomepageWidgets to update.
     */
    limit?: number
  }

  /**
   * HomepageWidget upsert
   */
  export type HomepageWidgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * The filter to search for the HomepageWidget to update in case it exists.
     */
    where: HomepageWidgetWhereUniqueInput
    /**
     * In case the HomepageWidget found by the `where` argument doesn't exist, create a new HomepageWidget with this data.
     */
    create: XOR<HomepageWidgetCreateInput, HomepageWidgetUncheckedCreateInput>
    /**
     * In case the HomepageWidget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomepageWidgetUpdateInput, HomepageWidgetUncheckedUpdateInput>
  }

  /**
   * HomepageWidget delete
   */
  export type HomepageWidgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
    /**
     * Filter which HomepageWidget to delete.
     */
    where: HomepageWidgetWhereUniqueInput
  }

  /**
   * HomepageWidget deleteMany
   */
  export type HomepageWidgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomepageWidgets to delete
     */
    where?: HomepageWidgetWhereInput
    /**
     * Limit how many HomepageWidgets to delete.
     */
    limit?: number
  }

  /**
   * HomepageWidget.widgetItems
   */
  export type HomepageWidget$widgetItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    where?: WidgetItemWhereInput
    orderBy?: WidgetItemOrderByWithRelationInput | WidgetItemOrderByWithRelationInput[]
    cursor?: WidgetItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WidgetItemScalarFieldEnum | WidgetItemScalarFieldEnum[]
  }

  /**
   * HomepageWidget without action
   */
  export type HomepageWidgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageWidget
     */
    select?: HomepageWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageWidget
     */
    omit?: HomepageWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageWidgetInclude<ExtArgs> | null
  }


  /**
   * Model WidgetItem
   */

  export type AggregateWidgetItem = {
    _count: WidgetItemCountAggregateOutputType | null
    _avg: WidgetItemAvgAggregateOutputType | null
    _sum: WidgetItemSumAggregateOutputType | null
    _min: WidgetItemMinAggregateOutputType | null
    _max: WidgetItemMaxAggregateOutputType | null
  }

  export type WidgetItemAvgAggregateOutputType = {
    order: number | null
  }

  export type WidgetItemSumAggregateOutputType = {
    order: number | null
  }

  export type WidgetItemMinAggregateOutputType = {
    id: string | null
    widgetId: string | null
    type: $Enums.WidgetItemType | null
    itemId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WidgetItemMaxAggregateOutputType = {
    id: string | null
    widgetId: string | null
    type: $Enums.WidgetItemType | null
    itemId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WidgetItemCountAggregateOutputType = {
    id: number
    widgetId: number
    type: number
    itemId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WidgetItemAvgAggregateInputType = {
    order?: true
  }

  export type WidgetItemSumAggregateInputType = {
    order?: true
  }

  export type WidgetItemMinAggregateInputType = {
    id?: true
    widgetId?: true
    type?: true
    itemId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WidgetItemMaxAggregateInputType = {
    id?: true
    widgetId?: true
    type?: true
    itemId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WidgetItemCountAggregateInputType = {
    id?: true
    widgetId?: true
    type?: true
    itemId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WidgetItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WidgetItem to aggregate.
     */
    where?: WidgetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetItems to fetch.
     */
    orderBy?: WidgetItemOrderByWithRelationInput | WidgetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WidgetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WidgetItems
    **/
    _count?: true | WidgetItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WidgetItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WidgetItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WidgetItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WidgetItemMaxAggregateInputType
  }

  export type GetWidgetItemAggregateType<T extends WidgetItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWidgetItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWidgetItem[P]>
      : GetScalarType<T[P], AggregateWidgetItem[P]>
  }




  export type WidgetItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetItemWhereInput
    orderBy?: WidgetItemOrderByWithAggregationInput | WidgetItemOrderByWithAggregationInput[]
    by: WidgetItemScalarFieldEnum[] | WidgetItemScalarFieldEnum
    having?: WidgetItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WidgetItemCountAggregateInputType | true
    _avg?: WidgetItemAvgAggregateInputType
    _sum?: WidgetItemSumAggregateInputType
    _min?: WidgetItemMinAggregateInputType
    _max?: WidgetItemMaxAggregateInputType
  }

  export type WidgetItemGroupByOutputType = {
    id: string
    widgetId: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: WidgetItemCountAggregateOutputType | null
    _avg: WidgetItemAvgAggregateOutputType | null
    _sum: WidgetItemSumAggregateOutputType | null
    _min: WidgetItemMinAggregateOutputType | null
    _max: WidgetItemMaxAggregateOutputType | null
  }

  type GetWidgetItemGroupByPayload<T extends WidgetItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WidgetItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WidgetItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WidgetItemGroupByOutputType[P]>
            : GetScalarType<T[P], WidgetItemGroupByOutputType[P]>
        }
      >
    >


  export type WidgetItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    widgetId?: boolean
    type?: boolean
    itemId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget?: boolean | HomepageWidgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetItem"]>

  export type WidgetItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    widgetId?: boolean
    type?: boolean
    itemId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget?: boolean | HomepageWidgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetItem"]>

  export type WidgetItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    widgetId?: boolean
    type?: boolean
    itemId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget?: boolean | HomepageWidgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetItem"]>

  export type WidgetItemSelectScalar = {
    id?: boolean
    widgetId?: boolean
    type?: boolean
    itemId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WidgetItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "widgetId" | "type" | "itemId" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["widgetItem"]>
  export type WidgetItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widget?: boolean | HomepageWidgetDefaultArgs<ExtArgs>
  }
  export type WidgetItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widget?: boolean | HomepageWidgetDefaultArgs<ExtArgs>
  }
  export type WidgetItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widget?: boolean | HomepageWidgetDefaultArgs<ExtArgs>
  }

  export type $WidgetItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WidgetItem"
    objects: {
      widget: Prisma.$HomepageWidgetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      widgetId: string
      type: $Enums.WidgetItemType
      itemId: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["widgetItem"]>
    composites: {}
  }

  type WidgetItemGetPayload<S extends boolean | null | undefined | WidgetItemDefaultArgs> = $Result.GetResult<Prisma.$WidgetItemPayload, S>

  type WidgetItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WidgetItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WidgetItemCountAggregateInputType | true
    }

  export interface WidgetItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WidgetItem'], meta: { name: 'WidgetItem' } }
    /**
     * Find zero or one WidgetItem that matches the filter.
     * @param {WidgetItemFindUniqueArgs} args - Arguments to find a WidgetItem
     * @example
     * // Get one WidgetItem
     * const widgetItem = await prisma.widgetItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WidgetItemFindUniqueArgs>(args: SelectSubset<T, WidgetItemFindUniqueArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WidgetItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WidgetItemFindUniqueOrThrowArgs} args - Arguments to find a WidgetItem
     * @example
     * // Get one WidgetItem
     * const widgetItem = await prisma.widgetItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WidgetItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WidgetItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WidgetItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemFindFirstArgs} args - Arguments to find a WidgetItem
     * @example
     * // Get one WidgetItem
     * const widgetItem = await prisma.widgetItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WidgetItemFindFirstArgs>(args?: SelectSubset<T, WidgetItemFindFirstArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WidgetItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemFindFirstOrThrowArgs} args - Arguments to find a WidgetItem
     * @example
     * // Get one WidgetItem
     * const widgetItem = await prisma.widgetItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WidgetItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WidgetItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WidgetItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WidgetItems
     * const widgetItems = await prisma.widgetItem.findMany()
     * 
     * // Get first 10 WidgetItems
     * const widgetItems = await prisma.widgetItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const widgetItemWithIdOnly = await prisma.widgetItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WidgetItemFindManyArgs>(args?: SelectSubset<T, WidgetItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WidgetItem.
     * @param {WidgetItemCreateArgs} args - Arguments to create a WidgetItem.
     * @example
     * // Create one WidgetItem
     * const WidgetItem = await prisma.widgetItem.create({
     *   data: {
     *     // ... data to create a WidgetItem
     *   }
     * })
     * 
     */
    create<T extends WidgetItemCreateArgs>(args: SelectSubset<T, WidgetItemCreateArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WidgetItems.
     * @param {WidgetItemCreateManyArgs} args - Arguments to create many WidgetItems.
     * @example
     * // Create many WidgetItems
     * const widgetItem = await prisma.widgetItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WidgetItemCreateManyArgs>(args?: SelectSubset<T, WidgetItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WidgetItems and returns the data saved in the database.
     * @param {WidgetItemCreateManyAndReturnArgs} args - Arguments to create many WidgetItems.
     * @example
     * // Create many WidgetItems
     * const widgetItem = await prisma.widgetItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WidgetItems and only return the `id`
     * const widgetItemWithIdOnly = await prisma.widgetItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WidgetItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WidgetItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WidgetItem.
     * @param {WidgetItemDeleteArgs} args - Arguments to delete one WidgetItem.
     * @example
     * // Delete one WidgetItem
     * const WidgetItem = await prisma.widgetItem.delete({
     *   where: {
     *     // ... filter to delete one WidgetItem
     *   }
     * })
     * 
     */
    delete<T extends WidgetItemDeleteArgs>(args: SelectSubset<T, WidgetItemDeleteArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WidgetItem.
     * @param {WidgetItemUpdateArgs} args - Arguments to update one WidgetItem.
     * @example
     * // Update one WidgetItem
     * const widgetItem = await prisma.widgetItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WidgetItemUpdateArgs>(args: SelectSubset<T, WidgetItemUpdateArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WidgetItems.
     * @param {WidgetItemDeleteManyArgs} args - Arguments to filter WidgetItems to delete.
     * @example
     * // Delete a few WidgetItems
     * const { count } = await prisma.widgetItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WidgetItemDeleteManyArgs>(args?: SelectSubset<T, WidgetItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WidgetItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WidgetItems
     * const widgetItem = await prisma.widgetItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WidgetItemUpdateManyArgs>(args: SelectSubset<T, WidgetItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WidgetItems and returns the data updated in the database.
     * @param {WidgetItemUpdateManyAndReturnArgs} args - Arguments to update many WidgetItems.
     * @example
     * // Update many WidgetItems
     * const widgetItem = await prisma.widgetItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WidgetItems and only return the `id`
     * const widgetItemWithIdOnly = await prisma.widgetItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends WidgetItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WidgetItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WidgetItem.
     * @param {WidgetItemUpsertArgs} args - Arguments to update or create a WidgetItem.
     * @example
     * // Update or create a WidgetItem
     * const widgetItem = await prisma.widgetItem.upsert({
     *   create: {
     *     // ... data to create a WidgetItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WidgetItem we want to update
     *   }
     * })
     */
    upsert<T extends WidgetItemUpsertArgs>(args: SelectSubset<T, WidgetItemUpsertArgs<ExtArgs>>): Prisma__WidgetItemClient<$Result.GetResult<Prisma.$WidgetItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WidgetItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemCountArgs} args - Arguments to filter WidgetItems to count.
     * @example
     * // Count the number of WidgetItems
     * const count = await prisma.widgetItem.count({
     *   where: {
     *     // ... the filter for the WidgetItems we want to count
     *   }
     * })
    **/
    count<T extends WidgetItemCountArgs>(
      args?: Subset<T, WidgetItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WidgetItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WidgetItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WidgetItemAggregateArgs>(args: Subset<T, WidgetItemAggregateArgs>): Prisma.PrismaPromise<GetWidgetItemAggregateType<T>>

    /**
     * Group by WidgetItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetItemGroupByArgs} args - Group by arguments.
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
      T extends WidgetItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WidgetItemGroupByArgs['orderBy'] }
        : { orderBy?: WidgetItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WidgetItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WidgetItem model
   */
  readonly fields: WidgetItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WidgetItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WidgetItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    widget<T extends HomepageWidgetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HomepageWidgetDefaultArgs<ExtArgs>>): Prisma__HomepageWidgetClient<$Result.GetResult<Prisma.$HomepageWidgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WidgetItem model
   */
  interface WidgetItemFieldRefs {
    readonly id: FieldRef<"WidgetItem", 'String'>
    readonly widgetId: FieldRef<"WidgetItem", 'String'>
    readonly type: FieldRef<"WidgetItem", 'WidgetItemType'>
    readonly itemId: FieldRef<"WidgetItem", 'String'>
    readonly order: FieldRef<"WidgetItem", 'Int'>
    readonly createdAt: FieldRef<"WidgetItem", 'DateTime'>
    readonly updatedAt: FieldRef<"WidgetItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WidgetItem findUnique
   */
  export type WidgetItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * Filter, which WidgetItem to fetch.
     */
    where: WidgetItemWhereUniqueInput
  }

  /**
   * WidgetItem findUniqueOrThrow
   */
  export type WidgetItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * Filter, which WidgetItem to fetch.
     */
    where: WidgetItemWhereUniqueInput
  }

  /**
   * WidgetItem findFirst
   */
  export type WidgetItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * Filter, which WidgetItem to fetch.
     */
    where?: WidgetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetItems to fetch.
     */
    orderBy?: WidgetItemOrderByWithRelationInput | WidgetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WidgetItems.
     */
    cursor?: WidgetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WidgetItems.
     */
    distinct?: WidgetItemScalarFieldEnum | WidgetItemScalarFieldEnum[]
  }

  /**
   * WidgetItem findFirstOrThrow
   */
  export type WidgetItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * Filter, which WidgetItem to fetch.
     */
    where?: WidgetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetItems to fetch.
     */
    orderBy?: WidgetItemOrderByWithRelationInput | WidgetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WidgetItems.
     */
    cursor?: WidgetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WidgetItems.
     */
    distinct?: WidgetItemScalarFieldEnum | WidgetItemScalarFieldEnum[]
  }

  /**
   * WidgetItem findMany
   */
  export type WidgetItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * Filter, which WidgetItems to fetch.
     */
    where?: WidgetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetItems to fetch.
     */
    orderBy?: WidgetItemOrderByWithRelationInput | WidgetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WidgetItems.
     */
    cursor?: WidgetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetItems.
     */
    skip?: number
    distinct?: WidgetItemScalarFieldEnum | WidgetItemScalarFieldEnum[]
  }

  /**
   * WidgetItem create
   */
  export type WidgetItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WidgetItem.
     */
    data: XOR<WidgetItemCreateInput, WidgetItemUncheckedCreateInput>
  }

  /**
   * WidgetItem createMany
   */
  export type WidgetItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WidgetItems.
     */
    data: WidgetItemCreateManyInput | WidgetItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WidgetItem createManyAndReturn
   */
  export type WidgetItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * The data used to create many WidgetItems.
     */
    data: WidgetItemCreateManyInput | WidgetItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WidgetItem update
   */
  export type WidgetItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WidgetItem.
     */
    data: XOR<WidgetItemUpdateInput, WidgetItemUncheckedUpdateInput>
    /**
     * Choose, which WidgetItem to update.
     */
    where: WidgetItemWhereUniqueInput
  }

  /**
   * WidgetItem updateMany
   */
  export type WidgetItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WidgetItems.
     */
    data: XOR<WidgetItemUpdateManyMutationInput, WidgetItemUncheckedUpdateManyInput>
    /**
     * Filter which WidgetItems to update
     */
    where?: WidgetItemWhereInput
    /**
     * Limit how many WidgetItems to update.
     */
    limit?: number
  }

  /**
   * WidgetItem updateManyAndReturn
   */
  export type WidgetItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * The data used to update WidgetItems.
     */
    data: XOR<WidgetItemUpdateManyMutationInput, WidgetItemUncheckedUpdateManyInput>
    /**
     * Filter which WidgetItems to update
     */
    where?: WidgetItemWhereInput
    /**
     * Limit how many WidgetItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WidgetItem upsert
   */
  export type WidgetItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WidgetItem to update in case it exists.
     */
    where: WidgetItemWhereUniqueInput
    /**
     * In case the WidgetItem found by the `where` argument doesn't exist, create a new WidgetItem with this data.
     */
    create: XOR<WidgetItemCreateInput, WidgetItemUncheckedCreateInput>
    /**
     * In case the WidgetItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WidgetItemUpdateInput, WidgetItemUncheckedUpdateInput>
  }

  /**
   * WidgetItem delete
   */
  export type WidgetItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
    /**
     * Filter which WidgetItem to delete.
     */
    where: WidgetItemWhereUniqueInput
  }

  /**
   * WidgetItem deleteMany
   */
  export type WidgetItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WidgetItems to delete
     */
    where?: WidgetItemWhereInput
    /**
     * Limit how many WidgetItems to delete.
     */
    limit?: number
  }

  /**
   * WidgetItem without action
   */
  export type WidgetItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetItem
     */
    select?: WidgetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetItem
     */
    omit?: WidgetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetItemInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    title: 'title',
    description: 'description',
    price: 'price',
    productInformation: 'productInformation',
    isNew: 'isNew',
    isTrending: 'isTrending',
    salesCount: 'salesCount',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    productId: 'productId'
  };

  export type ProductOptionScalarFieldEnum = (typeof ProductOptionScalarFieldEnum)[keyof typeof ProductOptionScalarFieldEnum]


  export const ProductVariantOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    productVariantId: 'productVariantId'
  };

  export type ProductVariantOptionScalarFieldEnum = (typeof ProductVariantOptionScalarFieldEnum)[keyof typeof ProductVariantOptionScalarFieldEnum]


  export const ProductOptionValueScalarFieldEnum: {
    id: 'id',
    value: 'value',
    optionId: 'optionId'
  };

  export type ProductOptionValueScalarFieldEnum = (typeof ProductOptionValueScalarFieldEnum)[keyof typeof ProductOptionValueScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    price: 'price',
    stock: 'stock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    title: 'title',
    comment: 'comment',
    productId: 'productId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    altText: 'altText',
    productId: 'productId',
    categoryId: 'categoryId',
    bannerId: 'bannerId',
    productVariantId: 'productVariantId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const HomepageWidgetScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomepageWidgetScalarFieldEnum = (typeof HomepageWidgetScalarFieldEnum)[keyof typeof HomepageWidgetScalarFieldEnum]


  export const WidgetItemScalarFieldEnum: {
    id: 'id',
    widgetId: 'widgetId',
    type: 'type',
    itemId: 'itemId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WidgetItemScalarFieldEnum = (typeof WidgetItemScalarFieldEnum)[keyof typeof WidgetItemScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WidgetType'
   */
  export type EnumWidgetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WidgetType'>
    


  /**
   * Reference to a field of type 'WidgetType[]'
   */
  export type ListEnumWidgetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WidgetType[]'>
    


  /**
   * Reference to a field of type 'WidgetItemType'
   */
  export type EnumWidgetItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WidgetItemType'>
    


  /**
   * Reference to a field of type 'WidgetItemType[]'
   */
  export type ListEnumWidgetItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WidgetItemType[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    productInformation?: StringFilter<"Product"> | string
    isNew?: BoolFilter<"Product"> | boolean
    isTrending?: BoolFilter<"Product"> | boolean
    salesCount?: IntFilter<"Product"> | number
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    productImages?: ImageListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    options?: ProductOptionListRelationFilter
    variants?: ProductVariantListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productInformation?: SortOrder
    isNew?: SortOrder
    isTrending?: SortOrder
    salesCount?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productImages?: ImageOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    options?: ProductOptionOrderByRelationAggregateInput
    variants?: ProductVariantOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    brand?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    productInformation?: StringFilter<"Product"> | string
    isNew?: BoolFilter<"Product"> | boolean
    isTrending?: BoolFilter<"Product"> | boolean
    salesCount?: IntFilter<"Product"> | number
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    productImages?: ImageListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    options?: ProductOptionListRelationFilter
    variants?: ProductVariantListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productInformation?: SortOrder
    isNew?: SortOrder
    isTrending?: SortOrder
    salesCount?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    productInformation?: StringWithAggregatesFilter<"Product"> | string
    isNew?: BoolWithAggregatesFilter<"Product"> | boolean
    isTrending?: BoolWithAggregatesFilter<"Product"> | boolean
    salesCount?: IntWithAggregatesFilter<"Product"> | number
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductOptionWhereInput = {
    AND?: ProductOptionWhereInput | ProductOptionWhereInput[]
    OR?: ProductOptionWhereInput[]
    NOT?: ProductOptionWhereInput | ProductOptionWhereInput[]
    id?: StringFilter<"ProductOption"> | string
    name?: StringFilter<"ProductOption"> | string
    productId?: StringFilter<"ProductOption"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    values?: ProductOptionValueListRelationFilter
  }

  export type ProductOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    values?: ProductOptionValueOrderByRelationAggregateInput
  }

  export type ProductOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductOptionWhereInput | ProductOptionWhereInput[]
    OR?: ProductOptionWhereInput[]
    NOT?: ProductOptionWhereInput | ProductOptionWhereInput[]
    name?: StringFilter<"ProductOption"> | string
    productId?: StringFilter<"ProductOption"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    values?: ProductOptionValueListRelationFilter
  }, "id">

  export type ProductOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    _count?: ProductOptionCountOrderByAggregateInput
    _max?: ProductOptionMaxOrderByAggregateInput
    _min?: ProductOptionMinOrderByAggregateInput
  }

  export type ProductOptionScalarWhereWithAggregatesInput = {
    AND?: ProductOptionScalarWhereWithAggregatesInput | ProductOptionScalarWhereWithAggregatesInput[]
    OR?: ProductOptionScalarWhereWithAggregatesInput[]
    NOT?: ProductOptionScalarWhereWithAggregatesInput | ProductOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductOption"> | string
    name?: StringWithAggregatesFilter<"ProductOption"> | string
    productId?: StringWithAggregatesFilter<"ProductOption"> | string
  }

  export type ProductVariantOptionWhereInput = {
    AND?: ProductVariantOptionWhereInput | ProductVariantOptionWhereInput[]
    OR?: ProductVariantOptionWhereInput[]
    NOT?: ProductVariantOptionWhereInput | ProductVariantOptionWhereInput[]
    id?: StringFilter<"ProductVariantOption"> | string
    name?: StringFilter<"ProductVariantOption"> | string
    value?: StringFilter<"ProductVariantOption"> | string
    productVariantId?: StringFilter<"ProductVariantOption"> | string
    product?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }

  export type ProductVariantOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    productVariantId?: SortOrder
    product?: ProductVariantOrderByWithRelationInput
  }

  export type ProductVariantOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantOptionWhereInput | ProductVariantOptionWhereInput[]
    OR?: ProductVariantOptionWhereInput[]
    NOT?: ProductVariantOptionWhereInput | ProductVariantOptionWhereInput[]
    name?: StringFilter<"ProductVariantOption"> | string
    value?: StringFilter<"ProductVariantOption"> | string
    productVariantId?: StringFilter<"ProductVariantOption"> | string
    product?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }, "id">

  export type ProductVariantOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    productVariantId?: SortOrder
    _count?: ProductVariantOptionCountOrderByAggregateInput
    _max?: ProductVariantOptionMaxOrderByAggregateInput
    _min?: ProductVariantOptionMinOrderByAggregateInput
  }

  export type ProductVariantOptionScalarWhereWithAggregatesInput = {
    AND?: ProductVariantOptionScalarWhereWithAggregatesInput | ProductVariantOptionScalarWhereWithAggregatesInput[]
    OR?: ProductVariantOptionScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantOptionScalarWhereWithAggregatesInput | ProductVariantOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariantOption"> | string
    name?: StringWithAggregatesFilter<"ProductVariantOption"> | string
    value?: StringWithAggregatesFilter<"ProductVariantOption"> | string
    productVariantId?: StringWithAggregatesFilter<"ProductVariantOption"> | string
  }

  export type ProductOptionValueWhereInput = {
    AND?: ProductOptionValueWhereInput | ProductOptionValueWhereInput[]
    OR?: ProductOptionValueWhereInput[]
    NOT?: ProductOptionValueWhereInput | ProductOptionValueWhereInput[]
    id?: StringFilter<"ProductOptionValue"> | string
    value?: StringFilter<"ProductOptionValue"> | string
    optionId?: StringFilter<"ProductOptionValue"> | string
    option?: XOR<ProductOptionScalarRelationFilter, ProductOptionWhereInput>
  }

  export type ProductOptionValueOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    optionId?: SortOrder
    option?: ProductOptionOrderByWithRelationInput
  }

  export type ProductOptionValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductOptionValueWhereInput | ProductOptionValueWhereInput[]
    OR?: ProductOptionValueWhereInput[]
    NOT?: ProductOptionValueWhereInput | ProductOptionValueWhereInput[]
    value?: StringFilter<"ProductOptionValue"> | string
    optionId?: StringFilter<"ProductOptionValue"> | string
    option?: XOR<ProductOptionScalarRelationFilter, ProductOptionWhereInput>
  }, "id">

  export type ProductOptionValueOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    optionId?: SortOrder
    _count?: ProductOptionValueCountOrderByAggregateInput
    _max?: ProductOptionValueMaxOrderByAggregateInput
    _min?: ProductOptionValueMinOrderByAggregateInput
  }

  export type ProductOptionValueScalarWhereWithAggregatesInput = {
    AND?: ProductOptionValueScalarWhereWithAggregatesInput | ProductOptionValueScalarWhereWithAggregatesInput[]
    OR?: ProductOptionValueScalarWhereWithAggregatesInput[]
    NOT?: ProductOptionValueScalarWhereWithAggregatesInput | ProductOptionValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductOptionValue"> | string
    value?: StringWithAggregatesFilter<"ProductOptionValue"> | string
    optionId?: StringWithAggregatesFilter<"ProductOptionValue"> | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    sku?: StringFilter<"ProductVariant"> | string
    price?: FloatFilter<"ProductVariant"> | number
    stock?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    options?: ProductVariantOptionListRelationFilter
    images?: ImageListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    options?: ProductVariantOptionOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: StringFilter<"ProductVariant"> | string
    price?: FloatFilter<"ProductVariant"> | number
    stock?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    options?: ProductVariantOptionListRelationFilter
    images?: ImageListRelationFilter
  }, "id" | "sku">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariant"> | string
    productId?: StringWithAggregatesFilter<"ProductVariant"> | string
    sku?: StringWithAggregatesFilter<"ProductVariant"> | string
    price?: FloatWithAggregatesFilter<"ProductVariant"> | number
    stock?: IntWithAggregatesFilter<"ProductVariant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    title?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subcategories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    images?: ImageListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    subcategories?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    title?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subcategories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    images?: ImageListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    title?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringNullableFilter<"Review"> | string | null
    productId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    productId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringNullableFilter<"Review"> | string | null
    productId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    productId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    title?: StringNullableWithAggregatesFilter<"Review"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    productId?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    altText?: StringNullableFilter<"Image"> | string | null
    productId?: StringNullableFilter<"Image"> | string | null
    categoryId?: StringNullableFilter<"Image"> | string | null
    bannerId?: StringNullableFilter<"Image"> | string | null
    productVariantId?: StringNullableFilter<"Image"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    banner?: XOR<BannerNullableScalarRelationFilter, BannerWhereInput> | null
    productVariant?: XOR<ProductVariantNullableScalarRelationFilter, ProductVariantWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    bannerId?: SortOrderInput | SortOrder
    productVariantId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    banner?: BannerOrderByWithRelationInput
    productVariant?: ProductVariantOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    altText?: StringNullableFilter<"Image"> | string | null
    productId?: StringNullableFilter<"Image"> | string | null
    categoryId?: StringNullableFilter<"Image"> | string | null
    bannerId?: StringNullableFilter<"Image"> | string | null
    productVariantId?: StringNullableFilter<"Image"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    banner?: XOR<BannerNullableScalarRelationFilter, BannerWhereInput> | null
    productVariant?: XOR<ProductVariantNullableScalarRelationFilter, ProductVariantWhereInput> | null
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    bannerId?: SortOrderInput | SortOrder
    productVariantId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    altText?: StringNullableWithAggregatesFilter<"Image"> | string | null
    productId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    bannerId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    productVariantId?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    title?: StringFilter<"Banner"> | string
    description?: StringFilter<"Banner"> | string
    link?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    images?: ImageListRelationFilter
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringFilter<"Banner"> | string
    description?: StringFilter<"Banner"> | string
    link?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    images?: ImageListRelationFilter
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    title?: StringWithAggregatesFilter<"Banner"> | string
    description?: StringWithAggregatesFilter<"Banner"> | string
    link?: StringWithAggregatesFilter<"Banner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type HomepageWidgetWhereInput = {
    AND?: HomepageWidgetWhereInput | HomepageWidgetWhereInput[]
    OR?: HomepageWidgetWhereInput[]
    NOT?: HomepageWidgetWhereInput | HomepageWidgetWhereInput[]
    id?: StringFilter<"HomepageWidget"> | string
    type?: EnumWidgetTypeFilter<"HomepageWidget"> | $Enums.WidgetType
    title?: StringNullableFilter<"HomepageWidget"> | string | null
    order?: IntFilter<"HomepageWidget"> | number
    createdAt?: DateTimeFilter<"HomepageWidget"> | Date | string
    updatedAt?: DateTimeFilter<"HomepageWidget"> | Date | string
    widgetItems?: WidgetItemListRelationFilter
  }

  export type HomepageWidgetOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    widgetItems?: WidgetItemOrderByRelationAggregateInput
  }

  export type HomepageWidgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomepageWidgetWhereInput | HomepageWidgetWhereInput[]
    OR?: HomepageWidgetWhereInput[]
    NOT?: HomepageWidgetWhereInput | HomepageWidgetWhereInput[]
    type?: EnumWidgetTypeFilter<"HomepageWidget"> | $Enums.WidgetType
    title?: StringNullableFilter<"HomepageWidget"> | string | null
    order?: IntFilter<"HomepageWidget"> | number
    createdAt?: DateTimeFilter<"HomepageWidget"> | Date | string
    updatedAt?: DateTimeFilter<"HomepageWidget"> | Date | string
    widgetItems?: WidgetItemListRelationFilter
  }, "id">

  export type HomepageWidgetOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomepageWidgetCountOrderByAggregateInput
    _avg?: HomepageWidgetAvgOrderByAggregateInput
    _max?: HomepageWidgetMaxOrderByAggregateInput
    _min?: HomepageWidgetMinOrderByAggregateInput
    _sum?: HomepageWidgetSumOrderByAggregateInput
  }

  export type HomepageWidgetScalarWhereWithAggregatesInput = {
    AND?: HomepageWidgetScalarWhereWithAggregatesInput | HomepageWidgetScalarWhereWithAggregatesInput[]
    OR?: HomepageWidgetScalarWhereWithAggregatesInput[]
    NOT?: HomepageWidgetScalarWhereWithAggregatesInput | HomepageWidgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HomepageWidget"> | string
    type?: EnumWidgetTypeWithAggregatesFilter<"HomepageWidget"> | $Enums.WidgetType
    title?: StringNullableWithAggregatesFilter<"HomepageWidget"> | string | null
    order?: IntWithAggregatesFilter<"HomepageWidget"> | number
    createdAt?: DateTimeWithAggregatesFilter<"HomepageWidget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomepageWidget"> | Date | string
  }

  export type WidgetItemWhereInput = {
    AND?: WidgetItemWhereInput | WidgetItemWhereInput[]
    OR?: WidgetItemWhereInput[]
    NOT?: WidgetItemWhereInput | WidgetItemWhereInput[]
    id?: StringFilter<"WidgetItem"> | string
    widgetId?: StringFilter<"WidgetItem"> | string
    type?: EnumWidgetItemTypeFilter<"WidgetItem"> | $Enums.WidgetItemType
    itemId?: StringFilter<"WidgetItem"> | string
    order?: IntFilter<"WidgetItem"> | number
    createdAt?: DateTimeFilter<"WidgetItem"> | Date | string
    updatedAt?: DateTimeFilter<"WidgetItem"> | Date | string
    widget?: XOR<HomepageWidgetScalarRelationFilter, HomepageWidgetWhereInput>
  }

  export type WidgetItemOrderByWithRelationInput = {
    id?: SortOrder
    widgetId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    widget?: HomepageWidgetOrderByWithRelationInput
  }

  export type WidgetItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WidgetItemWhereInput | WidgetItemWhereInput[]
    OR?: WidgetItemWhereInput[]
    NOT?: WidgetItemWhereInput | WidgetItemWhereInput[]
    widgetId?: StringFilter<"WidgetItem"> | string
    type?: EnumWidgetItemTypeFilter<"WidgetItem"> | $Enums.WidgetItemType
    itemId?: StringFilter<"WidgetItem"> | string
    order?: IntFilter<"WidgetItem"> | number
    createdAt?: DateTimeFilter<"WidgetItem"> | Date | string
    updatedAt?: DateTimeFilter<"WidgetItem"> | Date | string
    widget?: XOR<HomepageWidgetScalarRelationFilter, HomepageWidgetWhereInput>
  }, "id">

  export type WidgetItemOrderByWithAggregationInput = {
    id?: SortOrder
    widgetId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WidgetItemCountOrderByAggregateInput
    _avg?: WidgetItemAvgOrderByAggregateInput
    _max?: WidgetItemMaxOrderByAggregateInput
    _min?: WidgetItemMinOrderByAggregateInput
    _sum?: WidgetItemSumOrderByAggregateInput
  }

  export type WidgetItemScalarWhereWithAggregatesInput = {
    AND?: WidgetItemScalarWhereWithAggregatesInput | WidgetItemScalarWhereWithAggregatesInput[]
    OR?: WidgetItemScalarWhereWithAggregatesInput[]
    NOT?: WidgetItemScalarWhereWithAggregatesInput | WidgetItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WidgetItem"> | string
    widgetId?: StringWithAggregatesFilter<"WidgetItem"> | string
    type?: EnumWidgetItemTypeWithAggregatesFilter<"WidgetItem"> | $Enums.WidgetItemType
    itemId?: StringWithAggregatesFilter<"WidgetItem"> | string
    order?: IntWithAggregatesFilter<"WidgetItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WidgetItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WidgetItem"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductsInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOptionCreateInput = {
    id?: string
    name: string
    product: ProductCreateNestedOneWithoutOptionsInput
    values?: ProductOptionValueCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUncheckedCreateInput = {
    id?: string
    name: string
    productId: string
    values?: ProductOptionValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutOptionsNestedInput
    values?: ProductOptionValueUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    values?: ProductOptionValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionCreateManyInput = {
    id?: string
    name: string
    productId: string
  }

  export type ProductOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantOptionCreateInput = {
    id?: string
    name: string
    value: string
    product: ProductVariantCreateNestedOneWithoutOptionsInput
  }

  export type ProductVariantOptionUncheckedCreateInput = {
    id?: string
    name: string
    value: string
    productVariantId: string
  }

  export type ProductVariantOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    product?: ProductVariantUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type ProductVariantOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantOptionCreateManyInput = {
    id?: string
    name: string
    value: string
    productVariantId: string
  }

  export type ProductVariantOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionValueCreateInput = {
    id?: string
    value: string
    option: ProductOptionCreateNestedOneWithoutValuesInput
  }

  export type ProductOptionValueUncheckedCreateInput = {
    id?: string
    value: string
    optionId: string
  }

  export type ProductOptionValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    option?: ProductOptionUpdateOneRequiredWithoutValuesNestedInput
  }

  export type ProductOptionValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionValueCreateManyInput = {
    id?: string
    value: string
    optionId: string
  }

  export type ProductOptionValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantCreateInput = {
    id?: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    options?: ProductVariantOptionCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    productId: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: ProductVariantOptionUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    options?: ProductVariantOptionUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: ProductVariantOptionUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    productId: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    images?: ImageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    images?: ImageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    images?: ImageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    images?: ImageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    title: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    productId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    productId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    altText?: string | null
    product?: ProductCreateNestedOneWithoutProductImagesInput
    category?: CategoryCreateNestedOneWithoutImagesInput
    banner?: BannerCreateNestedOneWithoutImagesInput
    productVariant?: ProductVariantCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    categoryId?: string | null
    bannerId?: string | null
    productVariantId?: string | null
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductImagesNestedInput
    category?: CategoryUpdateOneWithoutImagesNestedInput
    banner?: BannerUpdateOneWithoutImagesNestedInput
    productVariant?: ProductVariantUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    categoryId?: string | null
    bannerId?: string | null
    productVariantId?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerCreateInput = {
    id?: string
    title: string
    description: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutBannerInput
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutBannerInput
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutBannerNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutBannerNestedInput
  }

  export type BannerCreateManyInput = {
    id?: string
    title: string
    description: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomepageWidgetCreateInput = {
    id?: string
    type: $Enums.WidgetType
    title?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    widgetItems?: WidgetItemCreateNestedManyWithoutWidgetInput
  }

  export type HomepageWidgetUncheckedCreateInput = {
    id?: string
    type: $Enums.WidgetType
    title?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    widgetItems?: WidgetItemUncheckedCreateNestedManyWithoutWidgetInput
  }

  export type HomepageWidgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetTypeFieldUpdateOperationsInput | $Enums.WidgetType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgetItems?: WidgetItemUpdateManyWithoutWidgetNestedInput
  }

  export type HomepageWidgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetTypeFieldUpdateOperationsInput | $Enums.WidgetType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgetItems?: WidgetItemUncheckedUpdateManyWithoutWidgetNestedInput
  }

  export type HomepageWidgetCreateManyInput = {
    id?: string
    type: $Enums.WidgetType
    title?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomepageWidgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetTypeFieldUpdateOperationsInput | $Enums.WidgetType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomepageWidgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetTypeFieldUpdateOperationsInput | $Enums.WidgetType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetItemCreateInput = {
    id?: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    widget: HomepageWidgetCreateNestedOneWithoutWidgetItemsInput
  }

  export type WidgetItemUncheckedCreateInput = {
    id?: string
    widgetId: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widget?: HomepageWidgetUpdateOneRequiredWithoutWidgetItemsNestedInput
  }

  export type WidgetItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    widgetId?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetItemCreateManyInput = {
    id?: string
    widgetId: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    widgetId?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductOptionListRelationFilter = {
    every?: ProductOptionWhereInput
    some?: ProductOptionWhereInput
    none?: ProductOptionWhereInput
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productInformation?: SortOrder
    isNew?: SortOrder
    isTrending?: SortOrder
    salesCount?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    salesCount?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productInformation?: SortOrder
    isNew?: SortOrder
    isTrending?: SortOrder
    salesCount?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    productInformation?: SortOrder
    isNew?: SortOrder
    isTrending?: SortOrder
    salesCount?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    salesCount?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductOptionValueListRelationFilter = {
    every?: ProductOptionValueWhereInput
    some?: ProductOptionValueWhereInput
    none?: ProductOptionValueWhereInput
  }

  export type ProductOptionValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
  }

  export type ProductOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
  }

  export type ProductOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantScalarRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type ProductVariantOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    productVariantId?: SortOrder
  }

  export type ProductVariantOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    productVariantId?: SortOrder
  }

  export type ProductVariantOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    productVariantId?: SortOrder
  }

  export type ProductOptionScalarRelationFilter = {
    is?: ProductOptionWhereInput
    isNot?: ProductOptionWhereInput
  }

  export type ProductOptionValueCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    optionId?: SortOrder
  }

  export type ProductOptionValueMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    optionId?: SortOrder
  }

  export type ProductOptionValueMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    optionId?: SortOrder
  }

  export type ProductVariantOptionListRelationFilter = {
    every?: ProductVariantOptionWhereInput
    some?: ProductVariantOptionWhereInput
    none?: ProductVariantOptionWhereInput
  }

  export type ProductVariantOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
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

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type BannerNullableScalarRelationFilter = {
    is?: BannerWhereInput | null
    isNot?: BannerWhereInput | null
  }

  export type ProductVariantNullableScalarRelationFilter = {
    is?: ProductVariantWhereInput | null
    isNot?: ProductVariantWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    bannerId?: SortOrder
    productVariantId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    bannerId?: SortOrder
    productVariantId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    bannerId?: SortOrder
    productVariantId?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWidgetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetType | EnumWidgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetTypeFilter<$PrismaModel> | $Enums.WidgetType
  }

  export type WidgetItemListRelationFilter = {
    every?: WidgetItemWhereInput
    some?: WidgetItemWhereInput
    none?: WidgetItemWhereInput
  }

  export type WidgetItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomepageWidgetCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomepageWidgetAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type HomepageWidgetMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomepageWidgetMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomepageWidgetSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumWidgetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetType | EnumWidgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetTypeWithAggregatesFilter<$PrismaModel> | $Enums.WidgetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWidgetTypeFilter<$PrismaModel>
    _max?: NestedEnumWidgetTypeFilter<$PrismaModel>
  }

  export type EnumWidgetItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetItemType | EnumWidgetItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetItemTypeFilter<$PrismaModel> | $Enums.WidgetItemType
  }

  export type HomepageWidgetScalarRelationFilter = {
    is?: HomepageWidgetWhereInput
    isNot?: HomepageWidgetWhereInput
  }

  export type WidgetItemCountOrderByAggregateInput = {
    id?: SortOrder
    widgetId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WidgetItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type WidgetItemMaxOrderByAggregateInput = {
    id?: SortOrder
    widgetId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WidgetItemMinOrderByAggregateInput = {
    id?: SortOrder
    widgetId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WidgetItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumWidgetItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetItemType | EnumWidgetItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.WidgetItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWidgetItemTypeFilter<$PrismaModel>
    _max?: NestedEnumWidgetItemTypeFilter<$PrismaModel>
  }

  export type ImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductOptionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProductOptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductOptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductOptionUpsertWithWhereUniqueWithoutProductInput | ProductOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    set?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    disconnect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    delete?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    update?: ProductOptionUpdateWithWhereUniqueWithoutProductInput | ProductOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOptionUpdateManyWithWhereWithoutProductInput | ProductOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProductOptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductOptionUpsertWithWhereUniqueWithoutProductInput | ProductOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    set?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    disconnect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    delete?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    update?: ProductOptionUpdateWithWhereUniqueWithoutProductInput | ProductOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOptionUpdateManyWithWhereWithoutProductInput | ProductOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOptionsInput = {
    create?: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductOptionValueCreateNestedManyWithoutOptionInput = {
    create?: XOR<ProductOptionValueCreateWithoutOptionInput, ProductOptionValueUncheckedCreateWithoutOptionInput> | ProductOptionValueCreateWithoutOptionInput[] | ProductOptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionValueCreateOrConnectWithoutOptionInput | ProductOptionValueCreateOrConnectWithoutOptionInput[]
    createMany?: ProductOptionValueCreateManyOptionInputEnvelope
    connect?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
  }

  export type ProductOptionValueUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<ProductOptionValueCreateWithoutOptionInput, ProductOptionValueUncheckedCreateWithoutOptionInput> | ProductOptionValueCreateWithoutOptionInput[] | ProductOptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionValueCreateOrConnectWithoutOptionInput | ProductOptionValueCreateOrConnectWithoutOptionInput[]
    createMany?: ProductOptionValueCreateManyOptionInputEnvelope
    connect?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOptionsInput
    upsert?: ProductUpsertWithoutOptionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOptionsInput, ProductUpdateWithoutOptionsInput>, ProductUncheckedUpdateWithoutOptionsInput>
  }

  export type ProductOptionValueUpdateManyWithoutOptionNestedInput = {
    create?: XOR<ProductOptionValueCreateWithoutOptionInput, ProductOptionValueUncheckedCreateWithoutOptionInput> | ProductOptionValueCreateWithoutOptionInput[] | ProductOptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionValueCreateOrConnectWithoutOptionInput | ProductOptionValueCreateOrConnectWithoutOptionInput[]
    upsert?: ProductOptionValueUpsertWithWhereUniqueWithoutOptionInput | ProductOptionValueUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: ProductOptionValueCreateManyOptionInputEnvelope
    set?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    disconnect?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    delete?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    connect?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    update?: ProductOptionValueUpdateWithWhereUniqueWithoutOptionInput | ProductOptionValueUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: ProductOptionValueUpdateManyWithWhereWithoutOptionInput | ProductOptionValueUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: ProductOptionValueScalarWhereInput | ProductOptionValueScalarWhereInput[]
  }

  export type ProductOptionValueUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<ProductOptionValueCreateWithoutOptionInput, ProductOptionValueUncheckedCreateWithoutOptionInput> | ProductOptionValueCreateWithoutOptionInput[] | ProductOptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionValueCreateOrConnectWithoutOptionInput | ProductOptionValueCreateOrConnectWithoutOptionInput[]
    upsert?: ProductOptionValueUpsertWithWhereUniqueWithoutOptionInput | ProductOptionValueUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: ProductOptionValueCreateManyOptionInputEnvelope
    set?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    disconnect?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    delete?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    connect?: ProductOptionValueWhereUniqueInput | ProductOptionValueWhereUniqueInput[]
    update?: ProductOptionValueUpdateWithWhereUniqueWithoutOptionInput | ProductOptionValueUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: ProductOptionValueUpdateManyWithWhereWithoutOptionInput | ProductOptionValueUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: ProductOptionValueScalarWhereInput | ProductOptionValueScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutOptionsInput = {
    create?: XOR<ProductVariantCreateWithoutOptionsInput, ProductVariantUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOptionsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutOptionsInput, ProductVariantUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOptionsInput
    upsert?: ProductVariantUpsertWithoutOptionsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutOptionsInput, ProductVariantUpdateWithoutOptionsInput>, ProductVariantUncheckedUpdateWithoutOptionsInput>
  }

  export type ProductOptionCreateNestedOneWithoutValuesInput = {
    create?: XOR<ProductOptionCreateWithoutValuesInput, ProductOptionUncheckedCreateWithoutValuesInput>
    connectOrCreate?: ProductOptionCreateOrConnectWithoutValuesInput
    connect?: ProductOptionWhereUniqueInput
  }

  export type ProductOptionUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<ProductOptionCreateWithoutValuesInput, ProductOptionUncheckedCreateWithoutValuesInput>
    connectOrCreate?: ProductOptionCreateOrConnectWithoutValuesInput
    upsert?: ProductOptionUpsertWithoutValuesInput
    connect?: ProductOptionWhereUniqueInput
    update?: XOR<XOR<ProductOptionUpdateToOneWithWhereWithoutValuesInput, ProductOptionUpdateWithoutValuesInput>, ProductOptionUncheckedUpdateWithoutValuesInput>
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductVariantOptionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantOptionCreateWithoutProductInput, ProductVariantOptionUncheckedCreateWithoutProductInput> | ProductVariantOptionCreateWithoutProductInput[] | ProductVariantOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantOptionCreateOrConnectWithoutProductInput | ProductVariantOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantOptionCreateManyProductInputEnvelope
    connect?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<ImageCreateWithoutProductVariantInput, ImageUncheckedCreateWithoutProductVariantInput> | ImageCreateWithoutProductVariantInput[] | ImageUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductVariantInput | ImageCreateOrConnectWithoutProductVariantInput[]
    createMany?: ImageCreateManyProductVariantInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProductVariantOptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantOptionCreateWithoutProductInput, ProductVariantOptionUncheckedCreateWithoutProductInput> | ProductVariantOptionCreateWithoutProductInput[] | ProductVariantOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantOptionCreateOrConnectWithoutProductInput | ProductVariantOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantOptionCreateManyProductInputEnvelope
    connect?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<ImageCreateWithoutProductVariantInput, ImageUncheckedCreateWithoutProductVariantInput> | ImageCreateWithoutProductVariantInput[] | ImageUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductVariantInput | ImageCreateOrConnectWithoutProductVariantInput[]
    createMany?: ImageCreateManyProductVariantInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductVariantOptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantOptionCreateWithoutProductInput, ProductVariantOptionUncheckedCreateWithoutProductInput> | ProductVariantOptionCreateWithoutProductInput[] | ProductVariantOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantOptionCreateOrConnectWithoutProductInput | ProductVariantOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantOptionUpsertWithWhereUniqueWithoutProductInput | ProductVariantOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantOptionCreateManyProductInputEnvelope
    set?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    disconnect?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    delete?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    connect?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    update?: ProductVariantOptionUpdateWithWhereUniqueWithoutProductInput | ProductVariantOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantOptionUpdateManyWithWhereWithoutProductInput | ProductVariantOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantOptionScalarWhereInput | ProductVariantOptionScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<ImageCreateWithoutProductVariantInput, ImageUncheckedCreateWithoutProductVariantInput> | ImageCreateWithoutProductVariantInput[] | ImageUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductVariantInput | ImageCreateOrConnectWithoutProductVariantInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductVariantInput | ImageUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: ImageCreateManyProductVariantInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductVariantInput | ImageUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductVariantInput | ImageUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProductVariantOptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantOptionCreateWithoutProductInput, ProductVariantOptionUncheckedCreateWithoutProductInput> | ProductVariantOptionCreateWithoutProductInput[] | ProductVariantOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantOptionCreateOrConnectWithoutProductInput | ProductVariantOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantOptionUpsertWithWhereUniqueWithoutProductInput | ProductVariantOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantOptionCreateManyProductInputEnvelope
    set?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    disconnect?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    delete?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    connect?: ProductVariantOptionWhereUniqueInput | ProductVariantOptionWhereUniqueInput[]
    update?: ProductVariantOptionUpdateWithWhereUniqueWithoutProductInput | ProductVariantOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantOptionUpdateManyWithWhereWithoutProductInput | ProductVariantOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantOptionScalarWhereInput | ProductVariantOptionScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<ImageCreateWithoutProductVariantInput, ImageUncheckedCreateWithoutProductVariantInput> | ImageCreateWithoutProductVariantInput[] | ImageUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductVariantInput | ImageCreateOrConnectWithoutProductVariantInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductVariantInput | ImageUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: ImageCreateManyProductVariantInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductVariantInput | ImageUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductVariantInput | ImageUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput> | ImageCreateWithoutCategoryInput[] | ImageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCategoryInput | ImageCreateOrConnectWithoutCategoryInput[]
    createMany?: ImageCreateManyCategoryInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput> | ImageCreateWithoutCategoryInput[] | ImageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCategoryInput | ImageCreateOrConnectWithoutCategoryInput[]
    createMany?: ImageCreateManyCategoryInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutSubcategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: CategoryUpsertWithoutSubcategoriesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcategoriesInput, CategoryUpdateWithoutSubcategoriesInput>, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput> | ImageCreateWithoutCategoryInput[] | ImageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCategoryInput | ImageCreateOrConnectWithoutCategoryInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCategoryInput | ImageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ImageCreateManyCategoryInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCategoryInput | ImageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCategoryInput | ImageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput> | ImageCreateWithoutCategoryInput[] | ImageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCategoryInput | ImageCreateOrConnectWithoutCategoryInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCategoryInput | ImageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ImageCreateManyCategoryInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCategoryInput | ImageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCategoryInput | ImageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductImagesInput = {
    create?: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutImagesInput = {
    create?: XOR<CategoryCreateWithoutImagesInput, CategoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutImagesInput
    connect?: CategoryWhereUniqueInput
  }

  export type BannerCreateNestedOneWithoutImagesInput = {
    create?: XOR<BannerCreateWithoutImagesInput, BannerUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BannerCreateOrConnectWithoutImagesInput
    connect?: BannerWhereUniqueInput
  }

  export type ProductVariantCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutImagesInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductUpdateOneWithoutProductImagesNestedInput = {
    create?: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput
    upsert?: ProductUpsertWithoutProductImagesInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductImagesInput, ProductUpdateWithoutProductImagesInput>, ProductUncheckedUpdateWithoutProductImagesInput>
  }

  export type CategoryUpdateOneWithoutImagesNestedInput = {
    create?: XOR<CategoryCreateWithoutImagesInput, CategoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutImagesInput
    upsert?: CategoryUpsertWithoutImagesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutImagesInput, CategoryUpdateWithoutImagesInput>, CategoryUncheckedUpdateWithoutImagesInput>
  }

  export type BannerUpdateOneWithoutImagesNestedInput = {
    create?: XOR<BannerCreateWithoutImagesInput, BannerUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BannerCreateOrConnectWithoutImagesInput
    upsert?: BannerUpsertWithoutImagesInput
    disconnect?: BannerWhereInput | boolean
    delete?: BannerWhereInput | boolean
    connect?: BannerWhereUniqueInput
    update?: XOR<XOR<BannerUpdateToOneWithWhereWithoutImagesInput, BannerUpdateWithoutImagesInput>, BannerUncheckedUpdateWithoutImagesInput>
  }

  export type ProductVariantUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutImagesInput
    upsert?: ProductVariantUpsertWithoutImagesInput
    disconnect?: ProductVariantWhereInput | boolean
    delete?: ProductVariantWhereInput | boolean
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutImagesInput, ProductVariantUpdateWithoutImagesInput>, ProductVariantUncheckedUpdateWithoutImagesInput>
  }

  export type ImageCreateNestedManyWithoutBannerInput = {
    create?: XOR<ImageCreateWithoutBannerInput, ImageUncheckedCreateWithoutBannerInput> | ImageCreateWithoutBannerInput[] | ImageUncheckedCreateWithoutBannerInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBannerInput | ImageCreateOrConnectWithoutBannerInput[]
    createMany?: ImageCreateManyBannerInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutBannerInput = {
    create?: XOR<ImageCreateWithoutBannerInput, ImageUncheckedCreateWithoutBannerInput> | ImageCreateWithoutBannerInput[] | ImageUncheckedCreateWithoutBannerInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBannerInput | ImageCreateOrConnectWithoutBannerInput[]
    createMany?: ImageCreateManyBannerInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutBannerNestedInput = {
    create?: XOR<ImageCreateWithoutBannerInput, ImageUncheckedCreateWithoutBannerInput> | ImageCreateWithoutBannerInput[] | ImageUncheckedCreateWithoutBannerInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBannerInput | ImageCreateOrConnectWithoutBannerInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutBannerInput | ImageUpsertWithWhereUniqueWithoutBannerInput[]
    createMany?: ImageCreateManyBannerInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutBannerInput | ImageUpdateWithWhereUniqueWithoutBannerInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutBannerInput | ImageUpdateManyWithWhereWithoutBannerInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutBannerNestedInput = {
    create?: XOR<ImageCreateWithoutBannerInput, ImageUncheckedCreateWithoutBannerInput> | ImageCreateWithoutBannerInput[] | ImageUncheckedCreateWithoutBannerInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBannerInput | ImageCreateOrConnectWithoutBannerInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutBannerInput | ImageUpsertWithWhereUniqueWithoutBannerInput[]
    createMany?: ImageCreateManyBannerInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutBannerInput | ImageUpdateWithWhereUniqueWithoutBannerInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutBannerInput | ImageUpdateManyWithWhereWithoutBannerInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type WidgetItemCreateNestedManyWithoutWidgetInput = {
    create?: XOR<WidgetItemCreateWithoutWidgetInput, WidgetItemUncheckedCreateWithoutWidgetInput> | WidgetItemCreateWithoutWidgetInput[] | WidgetItemUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: WidgetItemCreateOrConnectWithoutWidgetInput | WidgetItemCreateOrConnectWithoutWidgetInput[]
    createMany?: WidgetItemCreateManyWidgetInputEnvelope
    connect?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
  }

  export type WidgetItemUncheckedCreateNestedManyWithoutWidgetInput = {
    create?: XOR<WidgetItemCreateWithoutWidgetInput, WidgetItemUncheckedCreateWithoutWidgetInput> | WidgetItemCreateWithoutWidgetInput[] | WidgetItemUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: WidgetItemCreateOrConnectWithoutWidgetInput | WidgetItemCreateOrConnectWithoutWidgetInput[]
    createMany?: WidgetItemCreateManyWidgetInputEnvelope
    connect?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
  }

  export type EnumWidgetTypeFieldUpdateOperationsInput = {
    set?: $Enums.WidgetType
  }

  export type WidgetItemUpdateManyWithoutWidgetNestedInput = {
    create?: XOR<WidgetItemCreateWithoutWidgetInput, WidgetItemUncheckedCreateWithoutWidgetInput> | WidgetItemCreateWithoutWidgetInput[] | WidgetItemUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: WidgetItemCreateOrConnectWithoutWidgetInput | WidgetItemCreateOrConnectWithoutWidgetInput[]
    upsert?: WidgetItemUpsertWithWhereUniqueWithoutWidgetInput | WidgetItemUpsertWithWhereUniqueWithoutWidgetInput[]
    createMany?: WidgetItemCreateManyWidgetInputEnvelope
    set?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    disconnect?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    delete?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    connect?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    update?: WidgetItemUpdateWithWhereUniqueWithoutWidgetInput | WidgetItemUpdateWithWhereUniqueWithoutWidgetInput[]
    updateMany?: WidgetItemUpdateManyWithWhereWithoutWidgetInput | WidgetItemUpdateManyWithWhereWithoutWidgetInput[]
    deleteMany?: WidgetItemScalarWhereInput | WidgetItemScalarWhereInput[]
  }

  export type WidgetItemUncheckedUpdateManyWithoutWidgetNestedInput = {
    create?: XOR<WidgetItemCreateWithoutWidgetInput, WidgetItemUncheckedCreateWithoutWidgetInput> | WidgetItemCreateWithoutWidgetInput[] | WidgetItemUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: WidgetItemCreateOrConnectWithoutWidgetInput | WidgetItemCreateOrConnectWithoutWidgetInput[]
    upsert?: WidgetItemUpsertWithWhereUniqueWithoutWidgetInput | WidgetItemUpsertWithWhereUniqueWithoutWidgetInput[]
    createMany?: WidgetItemCreateManyWidgetInputEnvelope
    set?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    disconnect?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    delete?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    connect?: WidgetItemWhereUniqueInput | WidgetItemWhereUniqueInput[]
    update?: WidgetItemUpdateWithWhereUniqueWithoutWidgetInput | WidgetItemUpdateWithWhereUniqueWithoutWidgetInput[]
    updateMany?: WidgetItemUpdateManyWithWhereWithoutWidgetInput | WidgetItemUpdateManyWithWhereWithoutWidgetInput[]
    deleteMany?: WidgetItemScalarWhereInput | WidgetItemScalarWhereInput[]
  }

  export type HomepageWidgetCreateNestedOneWithoutWidgetItemsInput = {
    create?: XOR<HomepageWidgetCreateWithoutWidgetItemsInput, HomepageWidgetUncheckedCreateWithoutWidgetItemsInput>
    connectOrCreate?: HomepageWidgetCreateOrConnectWithoutWidgetItemsInput
    connect?: HomepageWidgetWhereUniqueInput
  }

  export type EnumWidgetItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.WidgetItemType
  }

  export type HomepageWidgetUpdateOneRequiredWithoutWidgetItemsNestedInput = {
    create?: XOR<HomepageWidgetCreateWithoutWidgetItemsInput, HomepageWidgetUncheckedCreateWithoutWidgetItemsInput>
    connectOrCreate?: HomepageWidgetCreateOrConnectWithoutWidgetItemsInput
    upsert?: HomepageWidgetUpsertWithoutWidgetItemsInput
    connect?: HomepageWidgetWhereUniqueInput
    update?: XOR<XOR<HomepageWidgetUpdateToOneWithWhereWithoutWidgetItemsInput, HomepageWidgetUpdateWithoutWidgetItemsInput>, HomepageWidgetUncheckedUpdateWithoutWidgetItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumWidgetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetType | EnumWidgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetTypeFilter<$PrismaModel> | $Enums.WidgetType
  }

  export type NestedEnumWidgetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetType | EnumWidgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetType[] | ListEnumWidgetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetTypeWithAggregatesFilter<$PrismaModel> | $Enums.WidgetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWidgetTypeFilter<$PrismaModel>
    _max?: NestedEnumWidgetTypeFilter<$PrismaModel>
  }

  export type NestedEnumWidgetItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetItemType | EnumWidgetItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetItemTypeFilter<$PrismaModel> | $Enums.WidgetItemType
  }

  export type NestedEnumWidgetItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WidgetItemType | EnumWidgetItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WidgetItemType[] | ListEnumWidgetItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWidgetItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.WidgetItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWidgetItemTypeFilter<$PrismaModel>
    _max?: NestedEnumWidgetItemTypeFilter<$PrismaModel>
  }

  export type ImageCreateWithoutProductInput = {
    id?: string
    url: string
    altText?: string | null
    category?: CategoryCreateNestedOneWithoutImagesInput
    banner?: BannerCreateNestedOneWithoutImagesInput
    productVariant?: ProductVariantCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    altText?: string | null
    categoryId?: string | null
    bannerId?: string | null
    productVariantId?: string | null
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: CategoryCreateNestedManyWithoutParentInput
    images?: ImageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    title: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    images?: ImageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductOptionCreateWithoutProductInput = {
    id?: string
    name: string
    values?: ProductOptionValueCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    values?: ProductOptionValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionCreateOrConnectWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    create: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductOptionCreateManyProductInputEnvelope = {
    data: ProductOptionCreateManyProductInput | ProductOptionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantCreateWithoutProductInput = {
    id?: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: ProductVariantOptionCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: ProductVariantOptionUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProductInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    altText?: StringNullableFilter<"Image"> | string | null
    productId?: StringNullableFilter<"Image"> | string | null
    categoryId?: StringNullableFilter<"Image"> | string | null
    bannerId?: StringNullableFilter<"Image"> | string | null
    productVariantId?: StringNullableFilter<"Image"> | string | null
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
    images?: ImageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    images?: ImageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductOptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    update: XOR<ProductOptionUpdateWithoutProductInput, ProductOptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductOptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    data: XOR<ProductOptionUpdateWithoutProductInput, ProductOptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductOptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductOptionScalarWhereInput
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductOptionScalarWhereInput = {
    AND?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
    OR?: ProductOptionScalarWhereInput[]
    NOT?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
    id?: StringFilter<"ProductOption"> | string
    name?: StringFilter<"ProductOption"> | string
    productId?: StringFilter<"ProductOption"> | string
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    sku?: StringFilter<"ProductVariant"> | string
    price?: FloatFilter<"ProductVariant"> | number
    stock?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringNullableFilter<"Review"> | string | null
    productId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ProductCreateWithoutOptionsInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOptionsInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOptionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
  }

  export type ProductOptionValueCreateWithoutOptionInput = {
    id?: string
    value: string
  }

  export type ProductOptionValueUncheckedCreateWithoutOptionInput = {
    id?: string
    value: string
  }

  export type ProductOptionValueCreateOrConnectWithoutOptionInput = {
    where: ProductOptionValueWhereUniqueInput
    create: XOR<ProductOptionValueCreateWithoutOptionInput, ProductOptionValueUncheckedCreateWithoutOptionInput>
  }

  export type ProductOptionValueCreateManyOptionInputEnvelope = {
    data: ProductOptionValueCreateManyOptionInput | ProductOptionValueCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutOptionsInput = {
    update: XOR<ProductUpdateWithoutOptionsInput, ProductUncheckedUpdateWithoutOptionsInput>
    create: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOptionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOptionsInput, ProductUncheckedUpdateWithoutOptionsInput>
  }

  export type ProductUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductOptionValueUpsertWithWhereUniqueWithoutOptionInput = {
    where: ProductOptionValueWhereUniqueInput
    update: XOR<ProductOptionValueUpdateWithoutOptionInput, ProductOptionValueUncheckedUpdateWithoutOptionInput>
    create: XOR<ProductOptionValueCreateWithoutOptionInput, ProductOptionValueUncheckedCreateWithoutOptionInput>
  }

  export type ProductOptionValueUpdateWithWhereUniqueWithoutOptionInput = {
    where: ProductOptionValueWhereUniqueInput
    data: XOR<ProductOptionValueUpdateWithoutOptionInput, ProductOptionValueUncheckedUpdateWithoutOptionInput>
  }

  export type ProductOptionValueUpdateManyWithWhereWithoutOptionInput = {
    where: ProductOptionValueScalarWhereInput
    data: XOR<ProductOptionValueUpdateManyMutationInput, ProductOptionValueUncheckedUpdateManyWithoutOptionInput>
  }

  export type ProductOptionValueScalarWhereInput = {
    AND?: ProductOptionValueScalarWhereInput | ProductOptionValueScalarWhereInput[]
    OR?: ProductOptionValueScalarWhereInput[]
    NOT?: ProductOptionValueScalarWhereInput | ProductOptionValueScalarWhereInput[]
    id?: StringFilter<"ProductOptionValue"> | string
    value?: StringFilter<"ProductOptionValue"> | string
    optionId?: StringFilter<"ProductOptionValue"> | string
  }

  export type ProductVariantCreateWithoutOptionsInput = {
    id?: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    images?: ImageCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutOptionsInput = {
    id?: string
    productId: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutOptionsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutOptionsInput, ProductVariantUncheckedCreateWithoutOptionsInput>
  }

  export type ProductVariantUpsertWithoutOptionsInput = {
    update: XOR<ProductVariantUpdateWithoutOptionsInput, ProductVariantUncheckedUpdateWithoutOptionsInput>
    create: XOR<ProductVariantCreateWithoutOptionsInput, ProductVariantUncheckedCreateWithoutOptionsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutOptionsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutOptionsInput, ProductVariantUncheckedUpdateWithoutOptionsInput>
  }

  export type ProductVariantUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: ImageUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductOptionCreateWithoutValuesInput = {
    id?: string
    name: string
    product: ProductCreateNestedOneWithoutOptionsInput
  }

  export type ProductOptionUncheckedCreateWithoutValuesInput = {
    id?: string
    name: string
    productId: string
  }

  export type ProductOptionCreateOrConnectWithoutValuesInput = {
    where: ProductOptionWhereUniqueInput
    create: XOR<ProductOptionCreateWithoutValuesInput, ProductOptionUncheckedCreateWithoutValuesInput>
  }

  export type ProductOptionUpsertWithoutValuesInput = {
    update: XOR<ProductOptionUpdateWithoutValuesInput, ProductOptionUncheckedUpdateWithoutValuesInput>
    create: XOR<ProductOptionCreateWithoutValuesInput, ProductOptionUncheckedCreateWithoutValuesInput>
    where?: ProductOptionWhereInput
  }

  export type ProductOptionUpdateToOneWithWhereWithoutValuesInput = {
    where?: ProductOptionWhereInput
    data: XOR<ProductOptionUpdateWithoutValuesInput, ProductOptionUncheckedUpdateWithoutValuesInput>
  }

  export type ProductOptionUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type ProductOptionUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutVariantsInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductsInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type ProductVariantOptionCreateWithoutProductInput = {
    id?: string
    name: string
    value: string
  }

  export type ProductVariantOptionUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    value: string
  }

  export type ProductVariantOptionCreateOrConnectWithoutProductInput = {
    where: ProductVariantOptionWhereUniqueInput
    create: XOR<ProductVariantOptionCreateWithoutProductInput, ProductVariantOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantOptionCreateManyProductInputEnvelope = {
    data: ProductVariantOptionCreateManyProductInput | ProductVariantOptionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutProductVariantInput = {
    id?: string
    url: string
    altText?: string | null
    product?: ProductCreateNestedOneWithoutProductImagesInput
    category?: CategoryCreateNestedOneWithoutImagesInput
    banner?: BannerCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutProductVariantInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    categoryId?: string | null
    bannerId?: string | null
  }

  export type ImageCreateOrConnectWithoutProductVariantInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductVariantInput, ImageUncheckedCreateWithoutProductVariantInput>
  }

  export type ImageCreateManyProductVariantInputEnvelope = {
    data: ImageCreateManyProductVariantInput | ImageCreateManyProductVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantOptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantOptionWhereUniqueInput
    update: XOR<ProductVariantOptionUpdateWithoutProductInput, ProductVariantOptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantOptionCreateWithoutProductInput, ProductVariantOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantOptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantOptionWhereUniqueInput
    data: XOR<ProductVariantOptionUpdateWithoutProductInput, ProductVariantOptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantOptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantOptionScalarWhereInput
    data: XOR<ProductVariantOptionUpdateManyMutationInput, ProductVariantOptionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantOptionScalarWhereInput = {
    AND?: ProductVariantOptionScalarWhereInput | ProductVariantOptionScalarWhereInput[]
    OR?: ProductVariantOptionScalarWhereInput[]
    NOT?: ProductVariantOptionScalarWhereInput | ProductVariantOptionScalarWhereInput[]
    id?: StringFilter<"ProductVariantOption"> | string
    name?: StringFilter<"ProductVariantOption"> | string
    value?: StringFilter<"ProductVariantOption"> | string
    productVariantId?: StringFilter<"ProductVariantOption"> | string
  }

  export type ImageUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductVariantInput, ImageUncheckedUpdateWithoutProductVariantInput>
    create: XOR<ImageCreateWithoutProductVariantInput, ImageUncheckedCreateWithoutProductVariantInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductVariantInput, ImageUncheckedUpdateWithoutProductVariantInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductVariantInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type CategoryCreateWithoutSubcategoriesInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    images?: ImageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    title: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    images?: ImageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    images?: ImageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    images?: ImageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutCategoryInput = {
    id?: string
    url: string
    altText?: string | null
    product?: ProductCreateNestedOneWithoutProductImagesInput
    banner?: BannerCreateNestedOneWithoutImagesInput
    productVariant?: ProductVariantCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutCategoryInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    bannerId?: string | null
    productVariantId?: string | null
  }

  export type ImageCreateOrConnectWithoutCategoryInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput>
  }

  export type ImageCreateManyCategoryInputEnvelope = {
    data: ImageCreateManyCategoryInput | ImageCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    images?: ImageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    images?: ImageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    title?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    productInformation?: StringFilter<"Product"> | string
    isNew?: BoolFilter<"Product"> | boolean
    isTrending?: BoolFilter<"Product"> | boolean
    salesCount?: IntFilter<"Product"> | number
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutCategoryInput, ImageUncheckedUpdateWithoutCategoryInput>
    create: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutCategoryInput, ImageUncheckedUpdateWithoutCategoryInput>
  }

  export type ImageUpdateManyWithWhereWithoutCategoryInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductsInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ImageUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductCreateWithoutProductImagesInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductImagesInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
  }

  export type CategoryCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutImagesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutImagesInput, CategoryUncheckedCreateWithoutImagesInput>
  }

  export type BannerCreateWithoutImagesInput = {
    id?: string
    title: string
    description: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    description: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerCreateOrConnectWithoutImagesInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutImagesInput, BannerUncheckedCreateWithoutImagesInput>
  }

  export type ProductVariantCreateWithoutImagesInput = {
    id?: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    options?: ProductVariantOptionCreateNestedManyWithoutProductInput
  }

  export type ProductVariantUncheckedCreateWithoutImagesInput = {
    id?: string
    productId: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: ProductVariantOptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductVariantCreateOrConnectWithoutImagesInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutProductImagesInput = {
    update: XOR<ProductUpdateWithoutProductImagesInput, ProductUncheckedUpdateWithoutProductImagesInput>
    create: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductImagesInput, ProductUncheckedUpdateWithoutProductImagesInput>
  }

  export type ProductUpdateWithoutProductImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryUpsertWithoutImagesInput = {
    update: XOR<CategoryUpdateWithoutImagesInput, CategoryUncheckedUpdateWithoutImagesInput>
    create: XOR<CategoryCreateWithoutImagesInput, CategoryUncheckedCreateWithoutImagesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutImagesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutImagesInput, CategoryUncheckedUpdateWithoutImagesInput>
  }

  export type CategoryUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BannerUpsertWithoutImagesInput = {
    update: XOR<BannerUpdateWithoutImagesInput, BannerUncheckedUpdateWithoutImagesInput>
    create: XOR<BannerCreateWithoutImagesInput, BannerUncheckedCreateWithoutImagesInput>
    where?: BannerWhereInput
  }

  export type BannerUpdateToOneWithWhereWithoutImagesInput = {
    where?: BannerWhereInput
    data: XOR<BannerUpdateWithoutImagesInput, BannerUncheckedUpdateWithoutImagesInput>
  }

  export type BannerUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUpsertWithoutImagesInput = {
    update: XOR<ProductVariantUpdateWithoutImagesInput, ProductVariantUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutImagesInput, ProductVariantUncheckedUpdateWithoutImagesInput>
  }

  export type ProductVariantUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    options?: ProductVariantOptionUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: ProductVariantOptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ImageCreateWithoutBannerInput = {
    id?: string
    url: string
    altText?: string | null
    product?: ProductCreateNestedOneWithoutProductImagesInput
    category?: CategoryCreateNestedOneWithoutImagesInput
    productVariant?: ProductVariantCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutBannerInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    categoryId?: string | null
    productVariantId?: string | null
  }

  export type ImageCreateOrConnectWithoutBannerInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutBannerInput, ImageUncheckedCreateWithoutBannerInput>
  }

  export type ImageCreateManyBannerInputEnvelope = {
    data: ImageCreateManyBannerInput | ImageCreateManyBannerInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutBannerInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutBannerInput, ImageUncheckedUpdateWithoutBannerInput>
    create: XOR<ImageCreateWithoutBannerInput, ImageUncheckedCreateWithoutBannerInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutBannerInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutBannerInput, ImageUncheckedUpdateWithoutBannerInput>
  }

  export type ImageUpdateManyWithWhereWithoutBannerInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutBannerInput>
  }

  export type WidgetItemCreateWithoutWidgetInput = {
    id?: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetItemUncheckedCreateWithoutWidgetInput = {
    id?: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetItemCreateOrConnectWithoutWidgetInput = {
    where: WidgetItemWhereUniqueInput
    create: XOR<WidgetItemCreateWithoutWidgetInput, WidgetItemUncheckedCreateWithoutWidgetInput>
  }

  export type WidgetItemCreateManyWidgetInputEnvelope = {
    data: WidgetItemCreateManyWidgetInput | WidgetItemCreateManyWidgetInput[]
    skipDuplicates?: boolean
  }

  export type WidgetItemUpsertWithWhereUniqueWithoutWidgetInput = {
    where: WidgetItemWhereUniqueInput
    update: XOR<WidgetItemUpdateWithoutWidgetInput, WidgetItemUncheckedUpdateWithoutWidgetInput>
    create: XOR<WidgetItemCreateWithoutWidgetInput, WidgetItemUncheckedCreateWithoutWidgetInput>
  }

  export type WidgetItemUpdateWithWhereUniqueWithoutWidgetInput = {
    where: WidgetItemWhereUniqueInput
    data: XOR<WidgetItemUpdateWithoutWidgetInput, WidgetItemUncheckedUpdateWithoutWidgetInput>
  }

  export type WidgetItemUpdateManyWithWhereWithoutWidgetInput = {
    where: WidgetItemScalarWhereInput
    data: XOR<WidgetItemUpdateManyMutationInput, WidgetItemUncheckedUpdateManyWithoutWidgetInput>
  }

  export type WidgetItemScalarWhereInput = {
    AND?: WidgetItemScalarWhereInput | WidgetItemScalarWhereInput[]
    OR?: WidgetItemScalarWhereInput[]
    NOT?: WidgetItemScalarWhereInput | WidgetItemScalarWhereInput[]
    id?: StringFilter<"WidgetItem"> | string
    widgetId?: StringFilter<"WidgetItem"> | string
    type?: EnumWidgetItemTypeFilter<"WidgetItem"> | $Enums.WidgetItemType
    itemId?: StringFilter<"WidgetItem"> | string
    order?: IntFilter<"WidgetItem"> | number
    createdAt?: DateTimeFilter<"WidgetItem"> | Date | string
    updatedAt?: DateTimeFilter<"WidgetItem"> | Date | string
  }

  export type HomepageWidgetCreateWithoutWidgetItemsInput = {
    id?: string
    type: $Enums.WidgetType
    title?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomepageWidgetUncheckedCreateWithoutWidgetItemsInput = {
    id?: string
    type: $Enums.WidgetType
    title?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomepageWidgetCreateOrConnectWithoutWidgetItemsInput = {
    where: HomepageWidgetWhereUniqueInput
    create: XOR<HomepageWidgetCreateWithoutWidgetItemsInput, HomepageWidgetUncheckedCreateWithoutWidgetItemsInput>
  }

  export type HomepageWidgetUpsertWithoutWidgetItemsInput = {
    update: XOR<HomepageWidgetUpdateWithoutWidgetItemsInput, HomepageWidgetUncheckedUpdateWithoutWidgetItemsInput>
    create: XOR<HomepageWidgetCreateWithoutWidgetItemsInput, HomepageWidgetUncheckedCreateWithoutWidgetItemsInput>
    where?: HomepageWidgetWhereInput
  }

  export type HomepageWidgetUpdateToOneWithWhereWithoutWidgetItemsInput = {
    where?: HomepageWidgetWhereInput
    data: XOR<HomepageWidgetUpdateWithoutWidgetItemsInput, HomepageWidgetUncheckedUpdateWithoutWidgetItemsInput>
  }

  export type HomepageWidgetUpdateWithoutWidgetItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetTypeFieldUpdateOperationsInput | $Enums.WidgetType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomepageWidgetUncheckedUpdateWithoutWidgetItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetTypeFieldUpdateOperationsInput | $Enums.WidgetType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyProductInput = {
    id?: string
    url: string
    altText?: string | null
    categoryId?: string | null
    bannerId?: string | null
    productVariantId?: string | null
  }

  export type ProductOptionCreateManyProductInput = {
    id?: string
    name: string
  }

  export type ProductVariantCreateManyProductInput = {
    id?: string
    sku: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyProductInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneWithoutImagesNestedInput
    banner?: BannerUpdateOneWithoutImagesNestedInput
    productVariant?: ProductVariantUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductOptionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    values?: ProductOptionValueUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    values?: ProductOptionValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: ProductVariantOptionUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: ProductVariantOptionUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOptionValueCreateManyOptionInput = {
    id?: string
    value: string
  }

  export type ProductOptionValueUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionValueUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionValueUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantOptionCreateManyProductInput = {
    id?: string
    name: string
    value: string
  }

  export type ImageCreateManyProductVariantInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    categoryId?: string | null
    bannerId?: string | null
  }

  export type ProductVariantOptionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantOptionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantOptionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductImagesNestedInput
    category?: CategoryUpdateOneWithoutImagesNestedInput
    banner?: BannerUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    brand: string
    title: string
    description: string
    price: number
    productInformation: string
    isNew?: boolean
    isTrending?: boolean
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateManyCategoryInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    bannerId?: string | null
    productVariantId?: string | null
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    images?: ImageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    images?: ImageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ImageUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productInformation?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductImagesNestedInput
    banner?: BannerUpdateOneWithoutImagesNestedInput
    productVariant?: ProductVariantUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyBannerInput = {
    id?: string
    url: string
    altText?: string | null
    productId?: string | null
    categoryId?: string | null
    productVariantId?: string | null
  }

  export type ImageUpdateWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductImagesNestedInput
    category?: CategoryUpdateOneWithoutImagesNestedInput
    productVariant?: ProductVariantUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WidgetItemCreateManyWidgetInput = {
    id?: string
    type: $Enums.WidgetItemType
    itemId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetItemUpdateWithoutWidgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetItemUncheckedUpdateWithoutWidgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetItemUncheckedUpdateManyWithoutWidgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWidgetItemTypeFieldUpdateOperationsInput | $Enums.WidgetItemType
    itemId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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