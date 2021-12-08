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
            sh 'docker ps'
            sh 'docker run hello-world'
          }
        }
    }
}
