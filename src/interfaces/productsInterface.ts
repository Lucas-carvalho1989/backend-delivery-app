import { Sequelize, Model, DataTypes } from 'sequelize';

interface CategoryAttributes {
  id: number;
  name: string;
  category: string;
  description: string;
}

interface CategoryInstance extends Model<CategoryAttributes>, CategoryAttributes {}

module.exports = (sequelize: Sequelize, DataType: typeof DataTypes) => {
  const Product = sequelize.define<CategoryInstance>('Products', {
    id: {
      primaryKey: true,
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataType.STRING,
    category: DataType.STRING,
    description: DataType.STRING,
  });

  return Product;
};
