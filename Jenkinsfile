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
            echo 'Some docker commands will be executed'
            sh 'sudo docker ps'
            sh 'sudo docker run hello-world'
          }
        }
    }
}
