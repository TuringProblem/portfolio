# TODO

- [ ] Clean up `./src/pages/about/` - instead of just having  
```
-----\
     |--- github/
                |--- index.tsx
     |--- resume/
                |--- index.tsx
     |--- profile/
                |--- index.tsx
     |--- education/
                |--- index.tsx
     |--- contact/
                |--- index.tsx
```
> Consider having the module handle the logic as well, so it's more of a ***package***.
```
-----\
     |--- github/
                | content\
                        |--- index.tsx
                | data\
                        |--- index.tsx
     |--- resume/
                | content\
                        |--- index.tsx
                | data\
                        |--- index.tsx
     |--- profile/
                | content\
                        |--- index.tsx
                | data\
                        |--- index.tsx
     |--- education/
                | content\
                        |--- index.tsx
                | data\
                        |--- index.tsx
     |--- contact/
                | content\
                        |--- index.tsx
                | data\
                        |-- index.tsx
```
