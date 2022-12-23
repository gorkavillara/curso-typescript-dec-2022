var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const endpointUrl = "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/clientes";
export class Client {
    constructor(n, d, e, num) {
        this.nombre = n;
        this.direccion = d;
        this.email = e;
        this.numero_telefono = num;
    }
    // método estático con axios => 
    static getAllClients() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios.get(endpointUrl);
            return data;
        });
    }
}