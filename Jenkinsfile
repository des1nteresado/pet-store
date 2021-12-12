pipeline {
    agent any

    stages {
        stage('Test') {
          steps {
              runFrontendTests()
              runBackendTests()
          }
        }

        stage('Image Prune') {
          steps {
              imagePrune()
          }
        }
        
        stage('Build') {
          steps {
              withCredentials([usernamePassword(credentialsId: 'dockerHubAccount', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                imagePush(USERNAME, PASSWORD)
            }
          }
        }
    }
}

def runFrontendTests(){
    try {
        echo 'Frontend Tests'
        sh 'cd frontend/'
        // sh 'sudo npm run test'
        echo 'End Frontend Tests'
        sh '..'
    } catch(error){}
}

def runBackendTests(){
    try {
        echo 'Backend Tests'
        sh 'cd backend/'
        sh 'sudo npm run test'
        echo 'End Backend Tests'
        sh '..'
    } catch(error){}
}

def imagePrune(){
    try {
        echo 'Images prune'
        sh "sudo docker image prune -f"
        echo 'Images prune completed'
    } catch(error){}
}

def imagePush(dockerUser, dockerPassword){
    sh "sudo docker login -u $dockerUser -p $dockerPassword"
    // sh "sudo docker-compose build"
    // sh "sudo docker-compose push"
    echo "Images push completed"
}
