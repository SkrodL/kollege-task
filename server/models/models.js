const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Hero = sequelize.define('hero', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    rank: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false}
})
const Paragraph = sequelize.define('paragraph', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})
const Award = sequelize.define('award', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})
const Poem = sequelize.define('poem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})

Hero.hasMany(Paragraph)
Paragraph.belongsTo(Hero)

Hero.hasMany(Award)
Award.belongsTo(Hero)

Hero.hasMany(Poem)
Poem.belongsTo(Hero)

module.exports = {
    Hero,
    Paragraph,
    Award,
    Poem
}