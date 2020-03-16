import * as vscode from 'vscode';

export class HelloWorldMain {
    public run = () => {
        vscode.window.showInformationMessage('Hello World!!');
    }
}