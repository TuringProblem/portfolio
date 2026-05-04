#### Structure for custom tags
> Structure for example: `<@href={https://github.com/TuringProblem} color={#55252}>`  
```
<@<at-type>={<link>} <optional-parameters>>


<at-type> ::= href | math | codeblock
<optional-parameters> ::=  <href-parameters> | <math-parameters> | <codeblock-parameters>

<href-parameters> ::=  <color-param> | text={<text>}
<math-parameters> ::=  <color-param> 
<codeblock-parameters> ::= background={<hex>} | language={<language>}

<color-param> ::= color={<hex>}
<hex> ::= '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'

```
