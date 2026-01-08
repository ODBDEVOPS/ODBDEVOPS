import requests

USERNAME = "ODBDEVOPS"
README_PATH = "README.md"

# Récupération des repos via l'API GitHub
url = f"https://api.github.com/users/ODBDEVOPS/repos?sort=updated"
response = requests.get(url)
repos = response.json()

# Génération du tableau Markdown
repo_section = "\n| Projet | Description | Lien | ⭐ |\n"
repo_section += "|--------|------------|------|---|\n"

for repo in repos:
    name = repo["name"]
    desc = repo["description"] or "Pas de description"
    html_url = repo["html_url"]
    stars = repo["stargazers_count"]
    repo_section += f"| [{name}]({html_url}) | {desc} | [GitHub]({html_url}) | {stars} |\n"

# Lecture du README existant
with open(README_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Remplacement de la section entre les marqueurs
start_marker = "<!-- START: REPO_LIST -->"
end_marker = "<!-- END: REPO_LIST -->"

start_index = content.find(start_marker) + len(start_marker)
end_index = content.find(end_marker)

new_content = content[:start_index] + "\n" + repo_section + content[end_index:]

# Écriture du README mis à jour
with open(README_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print("README.md mis à jour avec succès !")
