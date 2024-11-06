```mermaid

erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : orderId
    CUSTOMER }|..|{ Free-PDF : uses
```
