module "resource_group" {
  source   = "./modules/resource-group"
  name     = "rg-portfolio-prod"
  location = var.location
}

module "monitoring" {
  source              = "./modules/monitoring"
  name                = "appi-portfolio-prod"
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name

  workspace_id = module.log_analytics.id
}

module "log_analytics" {
  source              = "./modules/log-analytics"
  name                = "law-portfolio-prod"
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name
}