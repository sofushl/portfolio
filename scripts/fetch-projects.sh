#!/usr/bin/env bash
# scripts/fetch-projects.sh
set -euo pipefail

mkdir -p assets/generated

gh api --paginate "users/sofushl/repos?visibility=public&affiliation=owner&per_page=100" \
   --jq '.[] | select((.archived | not) and (.name | IN("sofushl", "dotfiles") | not))' \
  | jq -s '
    map({
      name: .name,
      description: (.description // ""),
      tags: (([.language] + .topics) | map(select(. != null) | ascii_downcase) | unique),
      buttons: [{text: "GitHub", href: .html_url}],
      rank: (.size // 0)
    })
  ' > assets/generated/projects.json
