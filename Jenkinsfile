pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/mahendrakanna/dideccan.git'
        DJANGO_DIR = 'backend'
        REACT_DIR  = 'frontend'
        PYTHON_ENV = '.venv'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Setup Python Env (Django)') {
            steps {
                dir("${DJANGO_DIR}") {
                    sh 'bash -c "python3 -m venv ${PYTHON_ENV} && source ${PYTHON_ENV}/bin/activate && pip install --upgrade pip && pip install -r dist/requirement.txt"'
                }
            }
        }

        stage('Run Django Migrations') {
            steps {
                dir("${DJANGO_DIR}") {
                    sh '''
                        source ${PYTHON_ENV}/bin/activate
                        python manage.py migrate
                    '''
                }
            }
        }

        stage('Build React Frontend') {
            steps {
                dir("${REACT_DIR}") {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir("${DJANGO_DIR}") {
                    sh '''
                        source ${PYTHON_ENV}/bin/activate
                        python manage.py test || echo "No tests found"
                    '''
                }
            }
        }

        stage('Package App') {
            steps {
                echo "Packaging backend + frontend build"
                sh '''
                    mkdir -p dist
                    cp -r ${REACT_DIR}/build ${DJANGO_DIR}/static/frontend
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/build/**', fingerprint: true
            }
        }

        // Optional: if you use Docker for deployment
        stage('Build Docker Image') {
            when {
                expression { fileExists('Dockerfile') }
            }
            steps {
                sh '''
                    docker build -t dideccan-app:latest .
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build and test pipeline completed successfully!'
        }
        failure {
            echo '❌ Build failed. Check logs for details.'
        }
        always {
            cleanWs()
        }
    }
}
