.PHONY: compile
compile:
	wat2wasm $(FILE_NAME).wat -o $(FILE_NAME).wasm

.PHONY: info
info:
	wasm-objdump $(FILE_NAME).wasm -x

.PHONY: roundtrip
roundtrip:
	wasm2wat $(FILE_NAME).wasm -o $(FILE_NAME)-roundtrip.wat