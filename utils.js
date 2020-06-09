'use strict'

const { escape } = require('./lib/escape')
const execGit = require('./lib/execGit')

module.exports = {
  /**
   * Escape a command line argument based on the current platform
   * @param {string} arg the raw command line argument
   * @returns {string} the escaped command line argument
   */
  escape: escape,
  /**
   * Add file(s) to the git index. The file(s) should be either absolute or relative to the `cwd`.
   *
   * @param {string|string[]} filename the filename, or an array of filenames
   * @param {string} [cwd] the working directory. By default `process.cwd()`
   */
  gitAdd: (filename, cwd) => execGit(['add', '--'].concat(filename), { cwd }),
}
