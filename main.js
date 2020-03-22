const core = require("@actions/core")

async function main() {
  try {
    const ref = process.env.GITHUB_REF
    if(!ref)
      throw "GITHUB_REF is not defined"
    if(!ref.startsWith("refs/tags/"))
      throw `Not a tag ref (${ref})`
    const tag = ref.replace(/^refs\/tags\//, "")

    core.info(`ref=${ref}`)
    core.info(`tag=${tag}`)

    core.setOutput("tag", tag);
  }
  catch (error) {
    core.setFailed(error);
  }
}

main()
