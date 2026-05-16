variable "image_name" {
  description = "Docker image to deploy"
  type        = string
  default     = "bahar-react-app:latest"
}

variable "external_port" {
  description = "Port to expose on the host"
  type        = number
  default     = 8080
}