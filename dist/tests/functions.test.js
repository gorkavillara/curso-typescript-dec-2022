'use strict'
/* eslint-disable */
// Archivos ts -> Donde escribimos casos de test
const add = (a, b) => a + b

const duplicateObject = (obj) => {
	// const newObject = {
	// 	...obj,
	// 	company: { 
    //         ...obj.company, 
    //         address: obj.company.address 
    //     },
	// }
    // const newObject = Object.assign(obj)
    const newObject = JSON.parse(JSON.stringify(obj))
	return newObject
}
// Desarrollar nuestros casos de test
describe('El grupo de test de prueba', () => {
	test('Testeamos que la función add devuelve una suma correcta', () => {
		const a = 1
		const b = 2
		const suma = add(a, b)
		expect(suma).toBe(3)
	})

	test('Testeamos los objetos', () => {
		const objetoInicial = {
			name: 'Joaquín',
			grade: 10,
			company: {
				id: 12,
				name: 'Joaquin LTD',
				address: {
					cp: 20010,
					location: 'Madrid',
				},
			},
		}
		const nuevoObjeto = duplicateObject(objetoInicial)

		console.log(nuevoObjeto)

		expect(nuevoObjeto).toEqual(objetoInicial)
		expect(nuevoObjeto).not.toBe(objetoInicial)

		expect(nuevoObjeto.company).toEqual(objetoInicial.company)
		expect(nuevoObjeto.company).not.toBe(objetoInicial.company)
		expect(nuevoObjeto.company.name).toEqual(objetoInicial.company.name)
		expect(nuevoObjeto.company.address.location).toEqual(
			objetoInicial.company.address.location,
		)

		nuevoObjeto.company.name = 'Antonio LTD'

		expect(objetoInicial.company.name).not.toBe('Antonio LTD')
		console.log(objetoInicial)
	})
})
