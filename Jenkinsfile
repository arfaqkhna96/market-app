pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'git checkout ...'
                    } else {
                        bat 'git checkout ...'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    if (isUnix()) {
                        sh './jenkins/scripts/test.sh'
                    } else {
                        bat 'jenkins\\scripts\\test.bat'
                    }
                }
            }
        }
        stage('Deliver') {
            steps {
                script {
                    if (isUnix()) {
                        sh './jenkins/scripts/deliver.sh'
                        
                    } else {
                        bat 'jenkins\\scripts\\deliver.bat'
                        
                    }
                }
            }
        }
    }
}
