# Optionals
So something interesting that I just learned was when using a optional - which most of you are familiar with (or should be) from the perspective of TypeScript, or Java, etc.

```ts
interface Person {
    name: string;
    age?: number; // this is optional we don't have to use it
}
```

in Elm, all we need to write is:

```elm

type alias Person = { name : String, age : Maybe Int }
```

when calling you need to either use `Nothing` or `Just` to wrap the value.

```elm
person : Person
person = { name = "Andrew", age = Just 25 }

anotherPerson : Person
anotherPerson = { name = "Andrew", age = Nothing }
```
