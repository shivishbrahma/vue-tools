import YAML from "yaml";

export const prettierConfig = {
    json: {
        sample: `{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "street": "123 Main Street",
      "city": {
        "name":"Anytown",
        "postalCode": "12345"
      },
      "state": "CA"
    },
    "hobbies": ["reading", "swimming", "hiking"],
    "isStudent": false
}`,
        functions: [
            {
                label: "Prettify",
                theme: "success",
                outline: false,
                execute: ({ code, tabWidth }) => {
                    return [JSON.stringify(JSON.parse(code), null, tabWidth), "json"];
                }
            },
            {
                label: "Compact",
                theme: "success",
                outline: true,
                execute: ({ code }) => {
                    return [JSON.stringify(JSON.parse(code)), "json"];
                }
            },
            {
                label: "Convert to YAML",
                theme: "secondary",
                outline: false,
                execute: ({ code, tabWidth }) => {
                    return [YAML.stringify(JSON.parse(code), { indent: tabWidth }), "yaml"];
                }
            }
        ]
    },
    yaml: {
        sample: `
name: John Doe
age: 30
isStudent: false

hobbies:
    - reading
    - swimming
    - hiking

address:
    street: 123 Main Street
    city: Anytown
    state: CA
    postalCode: "12345" 

description: |
    This is a multiline
    YAML string.
    It preserves line breaks and indentation.

nullableValue: null`,
        functions: [
            {
                label: "Convert to JSON",
                theme: "secondary",
                outline: false,
                execute: ({ code, tabWidth }) => {
                    return [JSON.stringify(YAML.parse(code), null, tabWidth), "json"];
                }
            }
        ]
    }
};
