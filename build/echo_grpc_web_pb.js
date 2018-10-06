/**
 * @fileoverview gRPC-Web generated client stub for EchoService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.EchoService.EchoServiceClient');
goog.provide('proto.EchoService.EchoServicePromiseClient');

goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.Error');
goog.require('proto.EchoService.EchoRequest');
goog.require('proto.EchoService.EchoResponse');



goog.scope(function() {

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.EchoService.EchoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.EchoService.EchoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.EchoService.EchoServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.EchoService.EchoServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EchoService.EchoRequest,
 *   !proto.EchoService.EchoResponse>}
 */
const methodInfo_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EchoService.EchoResponse,
  /** @param {!proto.EchoService.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EchoService.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.EchoService.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EchoService.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EchoService.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EchoService.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EchoService.EchoService/Echo',
      request,
      metadata,
      methodInfo_Echo,
      callback);
};


/**
 * @param {!proto.EchoService.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EchoService.EchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.EchoService.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.echo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


}); // goog.scope

