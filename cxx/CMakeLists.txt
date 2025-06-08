cmake_minimum_required(VERSION 3.15)
project(mypkg CXX)

set(CMAKE_CXX_STANDARD 17)

# paths
set(RUST_PROJECT_DIR "${CMAKE_CURRENT_SOURCE_DIR}/..")
set(RUST_LIB_DIR "${RUST_PROJECT_DIR}/target/release")
set(RUST_LIB_NAME sorting_algorithm) # From your Cargo.toml
set(RUST_LIB_PATH "${RUST_LIB_DIR}/lib${RUST_LIB_NAME}.so")

# json
#include(FetchContent)
#FetchContent_Declare(
#  json
#  URL https://github.com/nlohmann/json/releases/download/v3.11.3/json.tar.xz
#)
#FetchContent_MakeAvailable(json)

# command
add_custom_command(
    OUTPUT ${RUST_LIB_PATH}
    COMMAND cargo build --release
    WORKING_DIRECTORY ${RUST_PROJECT_DIR}
    COMMENT "Building Rust library..."
)

add_custom_target(rustlib ALL DEPENDS ${RUST_LIB_PATH})

# mypkg target
add_executable(mypkg src/mypkg.cpp)
target_include_directories(mypkg PUBLIC include)
add_dependencies(mypkg rustlib)

# link
target_link_directories(mypkg PUBLIC ${RUST_LIB_DIR})
target_link_libraries(mypkg PUBLIC ${RUST_LIB_NAME})
#target_link_libraries(mypkg PRIVATE nlohmann_json::nlohmann_json)

# set rpath so the lib is found at runtime
if (UNIX)
    set_target_properties(mypkg PROPERTIES
        BUILD_RPATH ${RUST_LIB_DIR}
        INSTALL_RPATH ${RUST_LIB_DIR}
    )
endif()
