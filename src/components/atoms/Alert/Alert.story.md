## Alert

Displaying Alert

### Props

| Name                       | Type    | Required | Default | Allowed values           |
| -------------------------- | ------- | -------- | ------- | ------------------------ |
| text                       | string  | yes       |        | string                      |
| messageType                | enum   | no         | info      | { Info , Warning, Error, Success} |

### How to import

```jsx
import Alert from 'generic-react-form/components/atoms/Alert/Alert';
```

### How to use

```jsx
    <Alert messageType={MessageType.Success} text={text} />
```
