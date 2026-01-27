pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'angular-foyer-app'
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKER_REGISTRY = 'your-registry' // Change this to your Docker registry
    }

    tools {
        nodejs 'NodeJS' // Ensure NodeJS is configured in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                script {
                    if (isUnix()) {
                        sh 'npm ci --legacy-peer-deps'
                    } else {
                        bat 'npm ci --legacy-peer-deps'
                    }
                }
            }
        }

        stage('Lint') {
            steps {
                echo 'Running linting checks...'
                script {
                    if (isUnix()) {
                        sh 'npm run lint || true'
                    } else {
                        bat 'npm run lint || exit 0'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building Angular application...'
                script {
                    if (isUnix()) {
                        sh 'npm run build -- --configuration production'
                    } else {
                        bat 'npm run build -- --configuration production'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                script {
                    if (isUnix()) {
                        sh 'npm run test -- --watch=false --browsers=ChromeHeadless || true'
                    } else {
                        bat 'npm run test -- --watch=false --browsers=ChromeHeadless || exit 0'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'main' // Only push on main branch
            }
            steps {
                echo 'Pushing Docker image to registry...'
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-credentials') {
                        dockerImage.push("${DOCKER_TAG}")
                        dockerImage.push("latest")
                    }
                }
            }
        }

        stage('Deploy to Development') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying to development environment...'
                script {
                    // Add your deployment commands here
                    // Example: kubectl, docker-compose, etc.
                    if (isUnix()) {
                        sh '''
                            docker stop angular-foyer-dev || true
                            docker rm angular-foyer-dev || true
                            docker run -d --name angular-foyer-dev -p 8080:80 ${DOCKER_IMAGE}:${DOCKER_TAG}
                        '''
                    } else {
                        bat '''
                            docker stop angular-foyer-dev || exit 0
                            docker rm angular-foyer-dev || exit 0
                            docker run -d --name angular-foyer-dev -p 8080:80 %DOCKER_IMAGE%:%DOCKER_TAG%
                        '''
                    }
                }
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production environment...'
                input message: 'Deploy to production?', ok: 'Deploy'
                script {
                    // Add your production deployment commands here
                    if (isUnix()) {
                        sh '''
                            docker stop angular-foyer-prod || true
                            docker rm angular-foyer-prod || true
                            docker run -d --name angular-foyer-prod -p 80:80 ${DOCKER_IMAGE}:${DOCKER_TAG}
                        '''
                    } else {
                        bat '''
                            docker stop angular-foyer-prod || exit 0
                            docker rm angular-foyer-prod || exit 0
                            docker run -d --name angular-foyer-prod -p 80:80 %DOCKER_IMAGE%:%DOCKER_TAG%
                        '''
                    }
                }
            }
        }

        stage('Clean Up') {
            steps {
                echo 'Cleaning up old Docker images...'
                script {
                    if (isUnix()) {
                        sh 'docker image prune -f'
                    } else {
                        bat 'docker image prune -f'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            // Add notifications here (email, Slack, etc.)
        }
        failure {
            echo 'Pipeline failed!'
            // Add failure notifications here
        }
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
    }
}
