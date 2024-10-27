import { Request, Response } from 'express';
import EmpresaService from '../services/empresaService';

export default {
  // 1. Criar uma nova empresa
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const empresa = await EmpresaService.createEmpresa(req.body);
      return res.status(201).json(empresa);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  },

  // 2. Obter todas as empresas
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const empresas = await EmpresaService.getAllEmpresas();
      return res.json(empresas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar empresas.' });
    }
  },

  // 3. Obter empresa por ID
  async getByCNPJ(req: Request, res: Response): Promise<Response> {
    try {
      const empresa = await EmpresaService.getEmpresaByCNPJ(req.params.cnpj);
      return res.json(empresa);
    } catch (error) {
      return res.status(404).json({ error: (error as Error).message });
    }
  },

  // 4. Atualizar uma empresa
  async update(req: Request, res: Response): Promise<Response> {
    try {
      // Remove o CNPJ do corpo da requisição para evitar que seja alterado
      const { cnpj, ...data } = req.body;
      const empresa = await EmpresaService.updateEmpresa(Number(req.params.id), data);
      return res.json(empresa);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  },

  // 5. Excluir uma empresa
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await EmpresaService.deleteEmpresa(id);
      return res.status(200).json({ message: 'Empresa excluída com sucesso.' });
    } catch (error) {
      return res.status(404).json({ error: (error as Error).message });
    }
  }
};
