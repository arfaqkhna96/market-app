pipeline {
    agent any

    environment {
        GITHUB_REPO = 'https://github.com/arfaqkhna96/market-app.git'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the GitHub repository
                git url: "${GITHUB_REPO}"
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
