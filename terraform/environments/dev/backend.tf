terraform {
  backend "azurerm" {
    resource_group_name  = "rg-tfstate"
    storage_account_name = "tfstatejdm0521"
    container_name       = "tfstate"
    key                  = "portfolio-dev.tfstate"
  }
}