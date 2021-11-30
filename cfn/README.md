# IaC with CloudFormation

## Codepipeline CI/CD with CloudFormation

コードは codepipeline.yml

1. AWS コンソール(CodeSuite > 設定 > 接続)から github リポジトリへの接続を作成
2. CloudFormation に CodePipeline 用のスタックを作成(codepipeline.yml)
3. github に PUSH して CodePiline が走り、必要なスタックが作成されるか確認
