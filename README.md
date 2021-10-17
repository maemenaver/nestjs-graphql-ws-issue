# Minimum Reproduction For NestJS GraphQL Subscription (graphql-ws)

## Current behavior

![error](https://github.com/maemenaver/nestjs-graphql-ws-issue/blob/main/image.PNG)

In NestJS GraphQL Subscription (graphql-ws),
The error is occurring for an unknown reason.

"RangeError: Invalid Websocket frame: invalid payload length 126"
We also do not know the conditions under which the error occurred.

When this error appears, it shuts down the server, which is very fatal.

## Steps to reproduce

0. Set redis (127.0.0.1:6379)
1. npm install
2. npm run start
3. Try different things...

## Expected behavior

I think, problem point is graphql-ws or nestjs8 (graphql)
But in downgrade nestjs 7, It works fine.

## In which operating systems have you tested?

- Windows
- Linux