OUT_DIR = ./build
LIB_PATH = $(GOPATH)/src/github.com/grpc/grpc-web
PROTOS_PATH = $(LIB_PATH)/net/grpc/gateway
JS_IMPORT_STYLE = import_style=closure,binary
PROTOBUF_PATH = third_party/grpc/third_party/protobuf

client: proto-js compiled-js

compiled-js:
	java \
  -jar ./compiler/closure.jar \
  --js $(LIB_PATH)/javascript \
  --js $(LIB_PATH)/third_party/closure-library \
  --js $(LIB_PATH)/$(PROTOBUF_PATH)/js \
  --js ./build \
  --entry_point=goog:proto.EchoService.EchoServiceClient \
  --dependency_mode=STRICT \
  --js_output_file ./dist/main.js

proto-js:
	mkdir -p $(OUT_DIR)
	protoc -I=$(LIB_PATH)/$(PROTOBUF_PATH)/src/google/protobuf --js_out=$(JS_IMPORT_STYLE):$(OUT_DIR) $(LIB_PATH)/$(PROTOBUF_PATH)/src/google/protobuf/any.proto
	protoc -I=$(PROTOS_PATH)/protos --js_out=$(JS_IMPORT_STYLE):$(OUT_DIR) $(PROTOS_PATH)/protos/stream_body.proto
	protoc -I=$(PROTOS_PATH)/protos --js_out=$(JS_IMPORT_STYLE):$(OUT_DIR) $(PROTOS_PATH)/protos/pair.proto
	protoc -I proto/ --js_out=$(JS_IMPORT_STYLE):$(OUT_DIR) proto/echo.proto
	protoc -I proto/ --grpc-web_out=import_style=closure,mode=grpcwebtext:$(OUT_DIR) proto/echo.proto
