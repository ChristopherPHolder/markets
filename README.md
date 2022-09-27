# Mexico-Marino
The yellow pages for boats in Mexico

http://mexico-marino-deep-blue-eu-central-1.s3-website.eu-central-1.amazonaws.com

IAM ROLE <>
mexico-marino-dev-key
AKIAXG2JG6NJRQJCTEOE
cj8n28T8FrgK1EbjkQ3lXES4LIu8oSZ55MkZ8XE+

S3
mexico-marino-deep-blue-eu-central-1
eu-central-1

npx cross-env 
  NG_DEPLOY_AWS_ACCESS_KEY_ID=AKIAXG2JG6NJRQJCTEOE
  NG_DEPLOY_AWS_SECRET_ACCESS_KEY=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
  NG_DEPLOY_AWS_BUCKET=mexico-marino-deep-blue-eu-central-1
  NG_DEPLOY_AWS_REGION=eu-central-1
  ng deploy

npx cross-env NG_DEPLOY_AWS_ACCESS_KEY_ID=AKIAXG2JG6NJRQJCTEOE NG_DEPLOY_AWS_SECRET_ACCESS_KEY=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 NG_DEPLOY_AWS_BUCKET=mexico-marino-deep-blue-eu-central-1 NG_DEPLOY_AWS_REGION=eu-central-1 ng deploy