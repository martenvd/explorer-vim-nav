import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const toggleFocus = vscode.commands.registerCommand(
    "explorerVimNav.toggleFocus",
    () => vscode.commands.executeCommand("workbench.view.explorer")
  );

  const escape = vscode.commands.registerCommand("explorerVimNav.escape", () =>
    vscode.commands.executeCommand("workbench.action.focusActiveEditorGroup")
  );

  const moveDown = vscode.commands.registerCommand("explorerVimNav.moveDown", () =>
    vscode.commands.executeCommand("list.focusDown")
  );
  const moveUp = vscode.commands.registerCommand("explorerVimNav.moveUp", () =>
    vscode.commands.executeCommand("list.focusUp")
  );
  const collapse = vscode.commands.registerCommand("explorerVimNav.collapse", () =>
    vscode.commands.executeCommand("list.collapse")
  );
  const expand = vscode.commands.registerCommand("explorerVimNav.expand", () =>
    vscode.commands.executeCommand("list.select")
  );
  const goTop = vscode.commands.registerCommand("explorerVimNav.goTop", () =>
    vscode.commands.executeCommand("list.focusFirst")
  );
  const goBottom = vscode.commands.registerCommand("explorerVimNav.goBottom", () =>
    vscode.commands.executeCommand("list.focusLast")
  );
  const openItem = vscode.commands.registerCommand("explorerVimNav.openItem", () =>
    vscode.commands.executeCommand("list.select")
  );
  const noop = vscode.commands.registerCommand("explorerVimNav.noop", () => {});

  context.subscriptions.push(
    toggleFocus, escape,
    moveDown, moveUp, collapse, expand, goTop, goBottom, openItem, noop
  );
}

export function deactivate() {}
