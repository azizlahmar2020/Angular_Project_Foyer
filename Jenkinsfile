pipeline {
    agent any

    environment {
        APP_NAME = "angular-foyer"
        IMAGE_NAME = "angular-foyer:latest"
    }

    stages {

        /* Jenkins fait déjà : Checkout SCM */

        stage('Check Node & Docker') {
            steps {
                sh '''
                    which node
                    node -v
                    npm -v
                    docker --version
                    kubectl version --client
                    kind version
                '''
            }
        }

        stage('Install Dependencies') {
    steps {
        sh 'npm install'
    }
}


        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t angular-foyer:latest .
                '''
            }
        }

        stage('Load Image into kind') {
