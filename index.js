let tmpResolve = null
let tmpReject = null

module.exports = function resolveRejectPromise () {
  const promise = new Promise(setTmp)
  const result = { resolve: tmpResolve, reject: tmpReject, promise }
  tmpResolve = tmpReject = null
  return result
}

function setTmp (resolve, reject) {
  tmpResolve = resolve
  tmpReject = reject
}
