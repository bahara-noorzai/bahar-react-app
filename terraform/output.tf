output "app_url" {
  description = "URL where the quote generation app is running"
  value       = "http://localhost:${var.external_port}"
}

output "container_name" {
  description = "Name of the running container"
  value       = docker_container.quote_app.name
}