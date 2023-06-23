---
sidebar_position: 2
---

# Branching and Check-In
## Before developing
- Create a main branch
- Create a dev or dev/{brief-description} branch → This is where you start your development.

## During development
- Start off with unit testing
- Followed by integration test

:::tip Reference to the following for guides on how to do a unit test with mockito
- [Given-When-The Test Pattern](https://www.j-labs.pl/blog-technologiczny/given-when-then-pattern-in-unit-tests/#:~:text=The%20main%20concept%20of%20Given,like%20for%20example%20acceptance%20test.)
- [Baeldung - Spring Boot Testing](https://www.baeldung.com/spring-boot-testing)
- [Baeldung - Mockito Series](https://www.baeldung.com/mockito-series)
:::

## Raising merge request to main branch for library release
- Ensure you've met the code coverage expectation of 90% before you raise the merge request. (Let us know if your module is urgent, we can temporarily decrease this expectation to 60%-80%).
- Create a merge request to main, assign jun rong/robin as the reviewer.
