import { escape } from '../lib/escape'
import execGit from '../lib/execGit'
import utils from '../utils'

jest.mock('../lib/escape.js', () => ({ escape: jest.fn() }))
jest.mock('../lib/execGit.js', () => jest.fn())

test('escape', () => {
  expect.assertions(2)
  const mockEscape = jest.fn()
  escape.mockImplementation(mockEscape)
  utils.escape('test')
  expect(mockEscape).toHaveBeenCalledTimes(1)
  expect(mockEscape).toHaveBeenCalledWith('test')
})

test('gitAdd', () => {
  expect.assertions(2)
  const mockExecGit = jest.fn()
  execGit.mockImplementation(mockExecGit)
  utils.gitAdd('test.js', 'cwd')
  expect(mockExecGit).toHaveBeenCalledTimes(1)
  expect(mockExecGit).toHaveBeenCalledWith(['add', '--', 'test.js'], { cwd: 'cwd' })
})
