pipeline {
    agent any

    environment {
        GITHUB_REPO = 'https://github.com/arfaqkhna96/market-app.git'
        BRANCH = 'main' // Ensure this matches your repository's branch
        GIT_CREDENTIALS_ID = '03468351-69ce-4c71-8f51-f7249a519c64' // Your Jenkins credentials ID
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the GitHub repository with credentials
                git branch: "${BRANCH}", url: "${GITHUB_REPO}", credentialsId: "${GIT_CREDENTIALS_ID}"
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the app to a specific server
                sh '''
                scp -r build/* ubuntu@65.0.199.91:/var/www/html/my-react-app/
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
