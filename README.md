# Get tag Github Action

Simple Action that have only one responsibility - output tag name (parsed from `GITHUB_REF` environment variable).

## Usage

Should be used only when actual tag is pushed, otherwise the Action will exit with an error.

```yaml
on:
  push:
    tags:
      - '*'
```

```yaml
- name: Get tag
  id: tag
  uses: dawidd6/action-get-tag@v1
- name: Use tag
  run: echo ${{steps.tag.outputs.tag}}
```
