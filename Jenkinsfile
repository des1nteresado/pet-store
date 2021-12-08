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
                      pushToImage(USERNAME, PASSWORD)
                  }
          }
        }
    }
}

def pushToImage(dockerUser, dockerPassword){
    sh "sudo docker login -u $dockerUser -p $dockerPassword"
    sh "sudo docker compose build"
    sh "sudo docker-compose push"
    echo "Image push complete"
}
