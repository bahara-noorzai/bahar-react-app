terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "todo_app" {
  name         = var.image_name
  keep_locally = true
}

resource "docker_container" "todo_app" {
  name  = "todo-react-prod"
  image = docker_image.todo_app.image_id

  ports {
    internal = 80
    external = var.external_port
  }

  restart = "unless-stopped"
}