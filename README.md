# DMS TextLint Action

GitHub Action that wraps [TextLint](https://textlint.github.io/) to proofread documentation.

This action is based on the great work of [Orthograph-err](https://github.com/place-labs/orthograph-err). This version adds support for defining extra ruleset packages dynamically so there is no need to fork the repository to add your own rules.

## Usage

Your repository should have a `.textlintrc` [file](https://textlint.github.io/docs/configuring.html) to configure your desired rules.

Add the following to your workflow:

```yaml
      - uses: rdohms/textlint-action@v1
        with:
          # List required ruleset packages
          # Use a space separated syntax with full package names (used in yarn add)
          rulesets: 'textlint-rule-alex textlint-rule-common-misspellings'

          # File path with the content to review.
          # Default: {,!(node_modules)/**/}*.md
          path: './test/integration/bad.md'

          # Enables or disables reporting via annotations
          # Default: true
          annotate: 'false'

          # Override token used to annotate
          # Default: ${{ github.token }}
          token: ''
```

The action will add errors to the PR as annotations and each ruleset will have its own Check.
