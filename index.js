/* 
Orientação a Objetos:
Crie uma classe "Pessoa" com propriedades como nome, idade e país. Instancie alguns objetos dessa classe.
Implemente um método na classe "Pessoa" que calcule a idade em meses.
Crie uma classe "Livro" com atributos como título, autor e número de páginas. Adicione um método para verificar se o livro é longo (> 300 páginas) ou não.
*/

module.exports = class Person {
	constructor(name, age, country) {
		this.name = name;
		this.age = age;
		this.country = country;
	}

	get_age_months() {
		return 12 * this.age;
	}
};
