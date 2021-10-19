const core = require("@actions/core")

async function main() {
  try {
    const ref = process.env.GITHUB_REF
    const strip_v = process.env.INPUT_STRIP_V
    if(!ref)
      throw "GITHUB_REF is not defined"
    if(!ref.startsWith("refs/tags/"))
      throw `Not a tag ref (${ref})`
    let tag = ref.replace(/^refs\/tags\//, "")
    
    if(strip_v === "true" && tag.startsWith("v"))
      tag = tag.replace(/v/, "")


    core.info(`ref=${ref}`)
    core.info(`tag=${tag}`)

    core.setOutput("tag", tag);
  }
  catch (error) {
    core.setFailed(error);
  }
}

main()
