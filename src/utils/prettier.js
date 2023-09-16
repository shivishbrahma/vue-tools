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
                    return [jsonToYaml(JSON.parse(code), tabWidth), "yaml"];
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
                execute: ({ code }) => {
                    // return JSON.stringify(JSON.parse(code));
                    return [code, "json"];
                }
            }
        ]
    }
};

export function jsonToYaml(jsonObj, tabWidth = 0, currentTabWidth = 0) {
    const spaces = " ".repeat(currentTabWidth);
    let yamlString = "",
        lines;

    if (typeof jsonObj === "object") {
        if (Array.isArray(jsonObj)) {
            for (const item of jsonObj) {
                yamlString += `\n${spaces}- ${jsonToYaml(item, tabWidth, currentTabWidth + tabWidth)}`;
            }
        } else {
            lines = [];
            for (const key in jsonObj) {
                if (Object.hasOwn(jsonObj, key)) {
                    lines.push(
                        `${spaces}${key}:${
                            typeof jsonObj[key] === "object" && !Array.isArray(jsonObj[key]) ? "\n" : " "
                        }${jsonToYaml(jsonObj[key], tabWidth, currentTabWidth + tabWidth)}`
                    );
                }
            }
            yamlString += lines.join("\n");
        }
    } else {
        yamlString += `${jsonObj}`;
    }

    return yamlString;
}
