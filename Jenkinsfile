pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('NodeJS'){
                    sh 'npm --version'
                    sh 'npm install'
                    sh 'npm start'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                nodejs('NodeJS'){
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
