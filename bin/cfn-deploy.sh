#!/bin/sh
SCRIPT_DIR=$(
  cd $(dirname $0)
  pwd
)
ROOT_DIR=$(dirname $SCRIPT_DIR)

source $ROOT_DIR/env/.env.local

echo $GITHUB_CONNECTION_ARN

if [ $# -eq 1 ]; then
  echo "set env=$1" 1>&2
  ENV_VALUE=$1
else
  echo "set env=dev" 1>&2
  ENV_VALUE=dev
fi

aws cloudformation deploy \
  --template-file $ROOT_DIR/cfn/codepipeline.yml \
  --capabilities=CAPABILITY_NAMED_IAM \
  --stack-name ${SERVICE_NAME}-${ENV_VALUE} \
  --parameter-overrides \
  ServiceName=${SERVICE_NAME} \
  GithubRepositoryId=${GITHUB_REPOSITORY_ID} \
  GithubConnectionArn=${GITHUB_CONNECTION_ARN} \
  GithubRepositoryBranchName=${GITHUB_REPOSITORY_BRANCH_NAME} \
  Env=${ENV_VALUE}
