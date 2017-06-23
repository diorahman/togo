const test = require('tape')
const to = require('./')

test('ok', async t => {
  t.plan(2)
  let [err, val] = await to(Promise.resolve(true))
  t.ok(val)
  t.equal(err, null)
})

test('nok', async t => {
  t.plan(1)
  let [err] = await to(Promise.reject(new Error('w00t')))
  t.equal(err.message, 'w00t')
})
