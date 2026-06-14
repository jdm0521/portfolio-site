module "resource_group" {
  source   = "../../modules/resource-group"
  name     = var.resource_group_name
  location = var.location
}

module "log_analytics" {
  source              = "../../modules/log-analytics"
  name                = var.log_analytics_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name
}

module "monitoring" {
  source              = "../../modules/monitoring"
  name                = var.app_insights_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name

  workspace_id = module.log_analytics.id
}
