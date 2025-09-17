import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify application
    const amplifyApp = new amplify.App(this, "PortfolioApplication", {
      appName: 'ProjectWebHanna',

      // Connect to Git
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'Hannaodu',
        repository: 'ProjectWebHanna',
        oauthToken: cdk.SecretValue.secretsManager('github-tokenh')
      }),

      // Build spec 
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting this build"',
                'cd portfolio',
                'npm install'
              ],  
            },

            build: {
              commands: [
                'echo "building our nextjs project...."',
                'npm run build-and-export',
                'echo "build completed"'
              ],
            },
          },

          artifacts: {
            baseDirectory: 'portfolio/out',
            files: ["**/*"],
          },
          cache: {
            paths: [
              'node_modules/**/*',
              '.next/cache/**/*'
            ]
          }
        }
      })
    })

    // Add branch
    const mainBranch = amplifyApp.addBranch('main',
      {
        autoBuild: true,
       
      })

    
      
  }
}
