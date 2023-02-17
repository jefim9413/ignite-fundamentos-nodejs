
import fs from 'node:fs/promises'
const databasepath = new URL('../db.json', import.meta.url)

export class Database {
    #database = {}
    constructor(){
        fs.readFile(databasepath, "utf8").then(data =>{
            this.#database = JSON.parse(data)
        })
        .catch(()=> {
            this.#parsist()
        })
    }
    #parsist(){
        fs.writeFile('db.json',JSON.stringify(this.#database))
    }

    select(table){
        const data = this.#database[table]??[]

        return data
    }

    insert(table,data){
        if (Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        }else {
            this.#database[table] = [data]
        }
        this.#parsist()

        return data
    }
}
