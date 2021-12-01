# serverless multi-service example

## About

- backend: serverless framework + express + typescript
- frontend: typescript + deploy static files using serverless-s3-sync
- monorepo with yarn workspace
- shared eslint configuration
- shared tsconfig
- create codepipeline using cloudformation

## Setup

1. Fork this repository.
1. Clone this repository locally.
1. Add Github connection in [AWS Console > Code Suite > Connection](https://ap-northeast-1.console.aws.amazon.com/codesuite/settings/connections)
1. Copy `env/sample.env.local` to `env/.env.local` and update it.
1. Run `bin/cfn-deploy.sh`
