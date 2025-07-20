import requests
import json

# GitHub API URL for user repositories
username = "amirhjrad"
api_url = f"https://api.github.com/users/{username}/repos"

# Fetch repositories
response = requests.get(api_url, headers={"Accept": "application/vnd.github.v3+json"})
repos = response.json()

# Check if the response is a list (successful fetch) or dict (error)
if not isinstance(repos, list):
    print(f"Error fetching repositories: {repos.get('message', 'Unknown error')}")
    exit(1)

# Read the existing projects.md file
with open("projects.md", "r", encoding="utf-8") as file:
    lines = file.readlines()

# Find the start and end of the details sections to replace
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "<details>" in line and start_idx == -1:
        start_idx = i
    if "</details>" in line:
        end_idx = i + 1

# Generate new details sections for each repository
new_sections = []
for repo in repos:
    name = repo["name"]
    description = repo["description"] or "No description provided."
    html_url = repo["html_url"]
    # Create a short explanation based on the description
    explanation = description if description != "No description provided." else "This project is a work in progress or lacks a detailed description, but it showcases the user's coding efforts."
    section = f"""<details>
  <summary>
    <strong>{name}</strong>
  </summary>
  <p>
    {explanation}
    <br>
    🔗 <a href="{html_url}" target="_blank">View on GitHub</a>
  </p>
</details>

"""
    new_sections.append(section)

# Combine the new content
new_content = lines[:start_idx] + new_sections + lines[end_idx:]

# Write the updated content back to projects.md with UTF-8 encoding
with open("projects.md", "w", encoding="utf-8") as file:
    file.writelines(new_content)

print("Updated projects.md with fetched repositories.")