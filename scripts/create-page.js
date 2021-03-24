const path = require('path')

const [ pageName ] = process.argv.slice(2)
if (!pageName) {
  console.error('Cannot create a page without a name!')
  process.exit(1)
}

const pagesDir = path.join(__dirname, '../src/pages')

console.log(pagesDir)