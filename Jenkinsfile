pipeline {
    agent any

    stages {
        stage('Hello') {
          steps {
              echo 'Hello World'
              sh 'ls -l'
          }
        }
        
        stage('Docker') {
          steps {
            withCredentials([usernamePassword(credentialsId: 'dockerHubAccount', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                      pushToImage(CONTAINER_NAME, CONTAINER_TAG, USERNAME, PASSWORD)
                  }
          }
        }
    }
}

def pushToImage(containerName, tag, dockerUser, dockerPassword){
    sh "sudo docker login -u $dockerUser --p $dockerPassword"
    sh "docker compose build"
    sh "docker-compose push"
    echo "Image push complete"
}
