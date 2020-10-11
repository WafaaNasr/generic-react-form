## TextField

Displaying TextField

### Props

| Name                       | Type    | Required | Default | Allowed values           |
| -------------------------- | ------- | -------- | ------- | ------------------------ |
| type                        | string  | yes    |        | string                      |
| label                       | string  | yes    |        | string                      |
| name                        | string  | yes    |        | string                      |
| placeholder                 | string  | no     |        | string                      |
| value                       | string  | no     |        | string                      |
| error                       | FieldError | no |         |  FieldError                   |
| onTextChange                | Function   | no||  ((e) => void) or null   |

### How to import

```jsx
import TextField from 'generic-react-form/components/molecules/TextField/TextField';
```

### How to use


```jsx
    const data={
        placeholder: 'user x',
        name: 'name',
        type: 'text',
        label: 'Username',
        onTextChange: null,
    }
    return  <TextField {
        placeholder: 'user x',
        name: 'name',
        type: 'text',
        label: 'Username',
        onTextChange: null,
    } />
```
