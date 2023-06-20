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

:::tip Not all layers are required
You can create the library layer without the starter/autoconfiguration layer.
However, if you require a autoconfiguration layer, a starter layer will definitely be required to abstract the custom spring boot starter library.
:::

:::info Naming Convention for a pure utility library
Suggested to use eds-commons-{YOUR_LIBRARY_NAME} or eds-core-{YOUR_LIBRARY_NAME}. Depending on which word is more appropriate.
E.g. eds-commons-date
:::