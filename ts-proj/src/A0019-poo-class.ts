export class Empresa {
  //ou -> public readonly name = 'EWM Ltda';
  public readonly name: string;// = 'EWM Ltda'; //public não é necessário
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
}

export class Colaborador {
  constructor(public readonly name: string, 
              public readonly surname: string) {}
}

const empresa = new Empresa('EWM Ltda', '11.111.111/0001-11');
console.log(empresa);

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