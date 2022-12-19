import chalk from "chalk"
import { CustomCoin } from "./models"

const miMoneda: CustomCoin = {
    network: "Bnb",
    contractUrl: "cualquiercosa"
}

console.log(chalk.blue(miMoneda.network))
