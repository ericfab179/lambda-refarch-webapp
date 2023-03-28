// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4bbnjbpgi0nngsjesnkqg54cfl",     // CognitoClientID
  "api_base_url": "https://6yslojjtwa.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-mytodoapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12gqfssqmv578.amplifyapp.com"                                      // AmplifyURL
};

export default config;
