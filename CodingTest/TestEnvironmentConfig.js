// Test Environment Config
// In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

//IP envName = "staging"

// OP : Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror


let envName = "Staging";

let config = {} //dummy object

switch (envName) {
    case "Production":
        config.environment = "PRODUCTION"
        config.baseURL = "https://api.testingacademy.com"
        config.apiKey = "prod_key_xxxx - xxxx"
        config.timeOut = 1000;
        config.description = "Production for Real user"
        break;
    case "Staging":
        config = {
            environment: "Staging",
            baseURL: "https://staging-api.testingacademy.com",
            apiKey: "stg_key_xxxx - xxxx",
            timeOut: 1000,
            description: "Staging - Pre-production mirror"
        }
        break;
    case "Dev":
        config.environment = "Regression"
        config.baseURL = "https://reg-api.testingacademy.com"
        config.apiKey = "reg_key_xxxx - xxxx"
        config.timeOut = 1000;
        config.description = "Regression - Lower Environment"
        break;
    case "QA":
        config = {
            environment: "DEV",
            baseURL: "https://qa-api.testingacademy.com",
            apiKey: "qa_key_xxxx - xxxx",
            timeOut: 1000,
            description: "QA for"
        }
        break;
    default: console.log("NOT A VALID ENVIRONMENT");
        ;
}

if (Object.keys(config).length > 0) {
    console.log("Environment: ", config.environment);
    console.log("Base URL: ", config.baseURL);
    console.log("API Key Pattern: ", config.apiKey);
    console.log("Timeout: ", config.timeout + "ms");
    console.log("Description: ", config.description);

} 