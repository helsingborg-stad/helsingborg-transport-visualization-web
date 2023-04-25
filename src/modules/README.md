# Modules

Every module in this folder is loaded by the `Router.tsx`. Modules can contain more sub-modules.

Think of module as an isolated groups in your application.

The structure can look as such:
```markdown
- Auth
|-- Login
|-- Register
|-- ForgotPassword
- Dashboard
|-- Overview
|-- UserManagement
|---- InviteUser
```

Each module can also contain 2 different folders based on need: `components` and `hooks`.
They are used when you want to isolate custom `components`/`hooks` that are used only within that module.

For example:
```markdown
- Auth
|-- Login
|---- components
|------ LoginForm
|---- hooks
|------ useLoginForm
```
