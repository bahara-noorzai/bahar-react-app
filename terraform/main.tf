terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "quote_app" {
  name         = var.image_name
  keep_locally = true
}

resource "docker_container" "quote_app" {
  name  = "bahar-react-app-prod"
  image = docker_image.quote_app.image_id

  ports {
    internal = 80
    external = var.external_port
  }

  restart = "unless-stopped"
}