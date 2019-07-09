# Generator
## `Cow` - Swagger2
```
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/swagger_cow.yaml -l javascript -t /local/es6_promise --additional-properties usePromises=true -o /local/nem2-js-sdk-cow && rm -R nem2-js-sdk-cow/test
```

## `Dragon` - Swagger2

** Waiting for OpenApi3 generator bug fixes so we can move to Swagger 3.0
```
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/swagger_dragon.yaml -l javascript -t /local/es6_promise --additional-properties usePromises=true -o /local/nem2-js-sdk-dragon && rm -R nem2-js-sdk-dragon/test
```

```
brew install openapi-generator
openapi-generator generate -i https://nemtech.github.io/_downloads/swagger2.yaml -g typescript-rxjs -t ts-rxjs-template/ -o ./nem2-js-sdk-dragon-rxjs/
```