pipeline {
    agent any

    environment {
        APP_NAME = "angular-foyer"
        IMAGE_NAME = "angular-foyer:latest"
        KUBE_NAMESPACE = "default"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'link',
                    url: 'https://github.com/azizlahmar2020/Angular_Project_Foyer.git'
            }
        }

        stage('Check Node & Docker') {
            steps {
                sh '''
                    node -v
                    npm -v
                    docker --version
                    kubectl version --client
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                sh 'npm run build -- --configuration=production'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Load Image into KIND') {
            steps {
                sh '''
                    kind load docker-image $IMAGE_NAME
                '''
            }
        }

        stage('Deploy to KIND') {
            steps {
                sh '''
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: angular-foyer
spec:
  replicas: 1
  selector:
    matchLabels:
      app: angular-foyer
  template:
    metadata:
      labels:
        app: angular-foyer
    spec:
      containers:
      - name: angular-foyer
        image: angular-foyer:latest
        imagePullPolicy: Never
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: angular-foyer
spec:
  type: NodePort
  selector:
    app: angular-foyer
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080
EOF
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Application deployed successfully to KIND"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}
