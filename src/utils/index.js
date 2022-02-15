const timeInNumber = () => new Date().getMinutes()
const emptyOne = ({appOne}) => Object.entries(appOne).length  === 0
const emptyTwo = ({appTwo}) => Object.entries(appTwo).length  === 0

const isEmpty = ({appOne, appTwo}) => {
  if (Object.entries(appOne).length  === 0 && Object.entries(appTwo).length  === 0) {
    return true
  }
  return false
}

const appOneReturn = (appOne) => {
  if (Object.entries(appOne).length  !== 0) {
    return appOne
  }
  return false
}

const appTwoReturn = (appTwo) => {
  if (Object.entries(appTwo).length  !== 0) {
    return appTwo
  }
  return false
}

module.exports = {
  timeInNumber,
  emptyOne,
  emptyTwo,
  isEmpty,
  appOneReturn,
  appTwoReturn,
};