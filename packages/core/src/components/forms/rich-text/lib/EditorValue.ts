import Urls from 'my-name-is-url';
import { EmojiMap } from './emoji-map';

export class EditorValue {
  private _operations: DeltaOperation[];
  private text: string;
  private _mentions: MentionObject[] = [];

  constructor(operations: DeltaOperation[], text: string) {
    this._operations = operations;
    this.text = text;
  }

  get message() {
    return this.text;
  }

  get links () {
    return Urls(this.message).get();
  }

  get operations (): any {
    return this._operations;
  }

  get mentions() {
    this._mentions = [];
    let startPosition = 0;
    let endPosition = 0;

    this._operations.forEach((op) => {
      if (typeof op.insert === "object" && op.insert.mention) {
        const object = op.insert.mention;
        startPosition = endPosition;
        endPosition = startPosition + object.value.length;

        this._mentions.push({
          id: object.id,
          value: object.value,
          startPosition,
          endPosition,
          length: object.value.length,
        })
      } else if (typeof op.insert === "string") {
        startPosition = endPosition;
        endPosition = startPosition + op.insert.length;
      }
    });

    return this._mentions;
  }

  static apply_mentions(text: string, mentions: MentionObject[]) {
    const opts: any[] = [];
    let idx = 0;

    if (mentions) {
      mentions.forEach((mention) => {
        const preText = text.slice(idx, mention.startPosition)
        opts.push({insert: preText});
        idx += mention.startPosition;

        opts.push({insert: {mention: {id: mention.id, value: mention.value, denotationChar: ""}}})
        idx += mention.value.length + 1;
      })
    }

    if (text.length > idx) {
      opts.push({insert: text.slice(idx)});
    }

    return new EditorValue(opts, text);
  }

  static return_unicode(value: string) {
    const parsed = value.split('-').map(str => parseInt(str, 16)); 
    return String.fromCodePoint(...parsed);
  }

  static delta_to_text(delta: any) {
    return delta.map((op: DeltaOperation) => {
      if (typeof op.insert === 'string') {
        return op.insert;
        // @ts-ignore
      } else if(op.insert.emoji) {
        // @ts-ignore
        return EditorValue.return_unicode(EmojiMap[op.insert.emoji].unicode);
      } else if(op.insert.mention) {
        return op.insert.mention.value;
      } else {
        return '';
      }
    }).join('');
  }

  static replace(editor: any, needle: string, becomes: string) {
    let operations = editor.getContents().ops;

    operations = operations.map((operation: DeltaOperation) => {
      if (typeof operation.insert === "string") {
        operation.insert = operation.insert.replace(needle, becomes);
      }

      return operation;
    });

    editor.setContents({ops: operations});
  }
}

