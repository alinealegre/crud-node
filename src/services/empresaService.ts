import Empresa from '../models/empresa';

class EmpresaService {
  // 1. Criar uma nova empresa
  async createEmpresa(data: {
    razaoSocial: string;
    cnpj: string;
    endereco: string;
    email: string;
    telefone: string;
    celular: string;
  }) {
    // Verifica se o CNPJ já existe
    const existingEmpresa = await Empresa.findOne({ where: { cnpj: data.cnpj } });
    if (existingEmpresa) {
      throw new Error('CNPJ já cadastrado.');
    }

    // Cria a nova empresa
    const empresa = await Empresa.create(data);
    return empresa;
  }

  // 2. Obter todas as empresas
  async getAllEmpresas() {
    return await Empresa.findAll();
  }

  // 3. Obter uma empresa por ID
  async getEmpresaByCNPJ(cnpj: string) {
    const empresa = await Empresa.findOne({ where: { cnpj } });
    if (!empresa) {
      throw new Error('Empresa não encontrada.');
    }
    return empresa;
  }

  // 4. Atualizar uma empresa
  async updateEmpresa(id: number, data: {
    razaoSocial?: string;
    cnpj?: string;
    endereco?: string;
    email?: string;
    telefone?: string;
    celular?: string;
  }) {
    
    const empresa =  await Empresa.findByPk(id);

    if (!empresa) {
      throw new Error('Empresa não encontrada.');
    }

    // Atualiza os dados da empresa
    await empresa.update(data);
    return empresa;
  }

  // 5. Excluir uma empresa
  async deleteEmpresa(id: number) {
    const empresa = await Empresa.findByPk(id);
    if (!empresa) {
      throw new Error('Empresa não encontrada.');
    }
    await empresa.destroy();
  }
}

export default new EmpresaService();
