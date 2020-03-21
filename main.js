const core = require("@actions/core")

let cut = function(ref) {
  if(ref.startsWith("refs/tags/")) {
    return ref.replace(/^refs\/tags\//, "")
  }
  throw `Not a tag ref (${ref})`
}

async function main() {
  try {
    const ref = process.env.GITHUB_REF
    const tag = cut(ref)

    core.debug(`ref=${ref}`)
    core.debug(`tag=${tag}`)

    core.setOutput("tag", tag);
  }
  catch (error) {
    core.setFailed(error);
  }
}

main()
