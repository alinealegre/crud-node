import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface EmpresaAttributes {
    id: number;
    razaoSocial: string;
    cnpj: string;
    endereco: string;
    email: string;
    telefone: string;
    celular: string;
  }

interface EmpresaCreationAttributes extends Optional<EmpresaAttributes, "id"> {}

class Empresa extends Model {
    public id!: number;
    public razaoSocial!: string;
    public cnpj!: string;
    public endereco!: string;
    public email!: string;
    public telefone!: string;
    public celular!: string;
  }
  

Empresa.init(
    {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  razaoSocial: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  cnpj: {
    type: new DataTypes.STRING(14),
    unique: true,
    allowNull: false,
    validate: {
      is: /^\d{14}$/,
    },
  },
  endereco: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    validate: {
      isEmail: true, 
    },
  },
  telefone: {
    type: new DataTypes.STRING(15),
    allowNull: false,
    validate: {
      is: /^\d{10,15}$/,
    },
  },
  celular: {
    type: new DataTypes.STRING(15),
    allowNull: false,
    validate: {
      is: /^\d{10,15}$/, 
    },
  },
},
{
  tableName: "empresas",
  sequelize,
  timestamps: true, 
}
);

export default Empresa;
