import { Node } from './renderApi';

// Maybe we can convert "esModule" to "commonjs" in the future
export class JavaScriptManager {
  public async: boolean;
  public mimeType: string;
  public scriptCode: string;
  public url: string | null;

  // Need to remove duplication, so use "set"
  private depsStack = new Set();

  constructor(scriptCode: string, url?: string) {
    this.mimeType = '';
    this.async = false;
    this.url = url || null;
    this.scriptCode = scriptCode;
  }

  isModule() {
    return this.mimeType === 'module';
  }

  isInlineScript() {
    return Boolean(!this.url);
  }

  setMimeType(mimeType: string) {
    this.mimeType = mimeType || '';
  }

  setAsyncAttribute(val: boolean) {
    this.async = Boolean(val);
  }

  setDep(node: Node) {
    this.depsStack.add(node);
  }

  isSameOrigin(node: Node) {
    return this.depsStack.has(node);
  }
}