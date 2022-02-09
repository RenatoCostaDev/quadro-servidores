const timeInNumber = () => new Date().getMinutes()
const allEmpty = ({app}) => app.length === 0
const halfFull = ({app}) => app.length === 1
const notFull = ({app}) => app.length >= 0 && app.length < 2
module.exports = {
  timeInNumber,
  allEmpty,
  halfFull,
  notFull,
};