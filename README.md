# 🔐 generatePassword

Une application en ligne de commande simple et sécurisée pour générer des mots de passe personnalisés.



## 📝 Description

**generatePassword** est un générateur de mots de passe interactif qui vous permet de créer des mots de passe forts et aléatoires en fonction de vos préférences :

- Choix du nombre de caractères (entre 8 et 36)
- Inclusion ou non de :
  - caractères spéciaux (`!@#$%^&*()`)
  - chiffres (`0-9`)
  - lettres majuscules (`A-Z`)

Chaque mot de passe est généré de manière aléatoire et répond aux critères spécifiés.



## 🚀 Fonctionnalités

- Génération aléatoire de mots de passe
- Interface interactive dans le terminal
- Validation des entrées utilisateur
- Vérification de la présence des caractères demandés
- Gestion des erreurs avec `try/catch`
- Utilisation de fonctions récursives, boucles `while` et `for`

---

## 💻 Installation

Clonez le dépôt :

```bash
git clone https://github.com/votre-utilisateur/generatePassword.git
```

Accédez au dossier du projet :

```bash
cd generatePassword
```

Installez les dépendances (si nécessaire) :

```bash
npm install
```

> 💡 Assurez-vous d’avoir Node.js installé sur votre machine.

---

## 🎯 Comment utiliser

Lancez le générateur avec :

```bash
node index.js
```

Suivez ensuite les instructions dans le terminal :

```text
🔢 Combien de caractères ? (8-36)
🔣 Caractères spéciaux ? (y/n)
🔢 Chiffres ? (y/n)
⬆️  Majuscules ? (y/n)
Votre mot de passe est : Xx@9FdPzL
```

---

## 🛠️ Technologies utilisées

- JavaScript
- Node.js
- Terminal (interface CLI)
