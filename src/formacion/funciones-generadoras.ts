function* generaId() {
    let id = 0
    while(true) {
        yield id // yield - return especial
        id++
        if (id > 3) return
    }
}

const generacionId = generaId()

let id1 = generacionId.next()
let id2 = generacionId.next()
let id3 = generacionId.next()
let id4 = generacionId.next()
let id5 = generacionId.next()

console.log(id1, id2, id3, id4, id5)