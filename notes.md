for doing mobile view

```ts
/* --- Mobile First: Default Styles apply to all devices --- */
.container {
  width: 100%;
  padding: 10px;
  background-color: lightblue;
  color: black;
}

.item {
  font-size: 16px;
  float: none; /* Items stack vertically by default */
}
```


```ts

/* --- Desktop Styles: Styles only apply when the viewport is at least 768px wide --- */
@media only screen and (min-width: 768px) {
  .container {
    width: 80%; /* Container takes up less space on desktop */
    margin: 0 auto; /* Center the container */
    background-color: lightgreen; /* Visual change for demonstration */
  }

  .item {
    font-size: 20px;
    float: left; /* Items float side-by-side on desktop */
    width: 50%;
  }
}



```





need to cleanup the dynamics of the philosophy list  
