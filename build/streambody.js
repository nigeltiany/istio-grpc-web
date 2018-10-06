/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.google.rpc.StreamBody');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.rpc.Status');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.rpc.StreamBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.rpc.StreamBody.repeatedFields_, null);
};
goog.inherits(proto.google.rpc.StreamBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.rpc.StreamBody.displayName = 'proto.google.rpc.StreamBody';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.rpc.StreamBody.repeatedFields_ = [1,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.rpc.StreamBody.prototype.toObject = function(opt_includeInstance) {
  return proto.google.rpc.StreamBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.rpc.StreamBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.rpc.StreamBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageList: msg.getMessageList_asB64(),
    status: (f = msg.getStatus()) && proto.google.rpc.Status.toObject(includeInstance, f),
    noopList: msg.getNoopList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.rpc.StreamBody}
 */
proto.google.rpc.StreamBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.rpc.StreamBody;
  return proto.google.rpc.StreamBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.rpc.StreamBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.rpc.StreamBody}
 */
proto.google.rpc.StreamBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addMessage(value);
      break;
    case 2:
      var value = new proto.google.rpc.Status;
      reader.readMessage(value,proto.google.rpc.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addNoop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.rpc.StreamBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.rpc.StreamBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.rpc.StreamBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.rpc.StreamBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.rpc.Status.serializeBinaryToWriter
    );
  }
  f = message.getNoopList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      15,
      f
    );
  }
};


/**
 * repeated bytes message = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.google.rpc.StreamBody.prototype.getMessageList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes message = 1;
 * This is a type-conversion wrapper around `getMessageList()`
 * @return {!Array<string>}
 */
proto.google.rpc.StreamBody.prototype.getMessageList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getMessageList()));
};


/**
 * repeated bytes message = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessageList()`
 * @return {!Array<!Uint8Array>}
 */
proto.google.rpc.StreamBody.prototype.getMessageList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getMessageList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.google.rpc.StreamBody.prototype.setMessageList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.google.rpc.StreamBody.prototype.addMessage = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.google.rpc.StreamBody.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * optional Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.google.rpc.StreamBody.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, proto.google.rpc.Status, 2));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.rpc.StreamBody.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.rpc.StreamBody.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.rpc.StreamBody.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated bytes noop = 15;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.google.rpc.StreamBody.prototype.getNoopList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * repeated bytes noop = 15;
 * This is a type-conversion wrapper around `getNoopList()`
 * @return {!Array<string>}
 */
proto.google.rpc.StreamBody.prototype.getNoopList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getNoopList()));
};


/**
 * repeated bytes noop = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNoopList()`
 * @return {!Array<!Uint8Array>}
 */
proto.google.rpc.StreamBody.prototype.getNoopList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getNoopList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.google.rpc.StreamBody.prototype.setNoopList = function(value) {
  jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.google.rpc.StreamBody.prototype.addNoop = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


proto.google.rpc.StreamBody.prototype.clearNoopList = function() {
  this.setNoopList([]);
};

