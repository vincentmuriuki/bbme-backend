export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: { type: String, unique: true, required: true },
      firstName: { type: String, allowNull: true },
      lastName: { type: String, allowNull: true },
      email: { type: String, required: true, unique: true, lowercase: true },
      bio: { type: String },
      image: { type: String },
      socialId: { type: String },
      verified: { type: String },
      password: { type: String },
      createdAt: { type: Date, allowNull: true },
      updatedAt: { type: Date, allowNull: true },
      gender: { type: String },
      roles: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    },
    { timestamps: true, tableName: 'User' }
  );

  return User;
};
