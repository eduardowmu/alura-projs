export class Empresa {
  /**
   * Tudo que é public, não necessita ser declarado
   * como public
   */
  //ou -> public readonly name = 'EWM Ltda';
  private readonly name: string;// = 'EWM Ltda'; //public não é necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaborators(): void {
    for(const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getName(): string {
    return this.name;
  }

  getCnpj(): string {
    return this.cnpj;
  }
}

export class Colaborador {
  constructor(public readonly name: string, 
              public readonly surname: string) {}
}

const empresa = new Empresa('EWM Ltda', '11.111.111/0001-11');
console.log(empresa);
console.log(empresa.getName());
console.log(empresa.getCnpj());

const colaborador1 = new Colaborador('Eduardo', 'Murakoshi');
const colaborador2 = new Colaborador('Camila', 'Murakoshi');
const colaborador3 = new Colaborador('Osamu', 'Murakoshi');
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);
empresa.addColaborador({
  name: 'Marie',
  surname: 'Murakoshi'
});

console.log(empresa);
empresa.showColaborators();