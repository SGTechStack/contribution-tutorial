---
sidebar_position: 1
---

# Create a Spring Boot Starter Library

There are 3 layers to take note of
- Starter Layer → Containing POM file to import all related dependecies of the specific library
- Autoconfiguration Layer → Containing spring related autoconfigurations of the specific library
- Library Layer → Containing functionalities of the specific library.

## Naming Convention:
- Starter Layer → eds-spring-boot-starter-{YOUR_LIBRARY_NAME}
- Autoconfiguration Layer → eds-spring-boot-starter-{YOUR_LIBRARY_NAME}-autoconfigure
- Library Layer → eds-spring-boot-starter-{YOUR_LIBRARY_NAME}-library
